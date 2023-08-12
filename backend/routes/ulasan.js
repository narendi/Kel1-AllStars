import express from "express";
import { getUlasan, createUlasan } from "../controllers/ulasan.js";

const router = express.Router();

router.get("/ulasan/all", getUlasan);
router.post("/ulasan", createUlasan);

export default router;
