import Ulasan from "../models/ulasan.js";

export const getUlasan = async (req, res) => {
  try {
    const ulasan = await Ulasan.findAll();
    res.json(ulasan);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createUlasan = async (req, res) => {
  const { name, content, imageUrl } = req.body;
  try {
    const ulasan = await Ulasan.create({ name, content, imageUrl });
    res.status(201).json(ulasan);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
