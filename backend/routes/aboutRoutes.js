import express from "express";
import {
  createAbout,
  updateAbout,
  deleteAbout,
  getAbout,
} from "../controllers/AboutController.js";
import { uploadSingle } from "../middleware/upload.js";

const router = express.Router();

router.post("/", uploadSingle("image"), createAbout);
router.put("/", uploadSingle("image"), updateAbout);
router.delete("/:id", deleteAbout);
router.get("/", getAbout);

export default router;
