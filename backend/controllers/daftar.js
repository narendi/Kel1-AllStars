import Daftar from "../models/daftar.js";

async function createUser(req, res) {
  try {
    const {
      fullName,
      email,
      phoneNumber,
      dateOfBirth,
      country,
      city,
      password,
    } = req.body;

    const user = await Daftar.create({
      fullName,
      email,
      phoneNumber,
      dateOfBirth,
      country,
      city,
      password,
    });

    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error creating user" });
  }
}

export default {
  createUser,
  // Tambahkan fungsi lain sesuai kebutuhan Anda
};
