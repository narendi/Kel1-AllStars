import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import { JWT_SECRET } from "../config/Database.js";
import { Op } from "sequelize";

const authController = {
  register: async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        username,
        email,
        password: hashedPassword,
      });
      res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
      res
        .status(500)
        .json({ message: "An error occurred", error: error.message });
    }
  },

  login: async (req, res) => {
    try {
      const { identifier, password } = req.body;
      const user = await User.findOne({
        where: {
          [Op.or]: [{ email: identifier }, { username: identifier }],
        },
      });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res
          .status(401)
          .json({ message: "Invalid email/username or password" });
      }

      const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "7h" });
      res.status(200).json({ message: "Login successful", token });
    } catch (error) {
      res
        .status(500)
        .json({ message: "An error occurred", error: error.message });
    }
  },
  logout: (req, res) => {
    // You might perform any necessary logout actions here
    // For example, invalidating tokens or session handling
    res.status(200).json({ message: "Logout successful" });
  },

  getUser: async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await User.findByPk(userId);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      res.status(200).json(user);
    } catch (error) {
      res
        .status(500)
        .json({ message: "An error occurred", error: error.message });
    }
  },
};

export default authController;
