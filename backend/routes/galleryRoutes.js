import express from "express";
import multer from "multer";
import {
  createGallery,
  getGallery,
  updateGallery,
  deleteGallery,
} from "../controllers/GalleryController.js";
import { uploadMultiple } from "../middleware/upload.js";

const router = express.Router();

router.post("/", uploadMultiple("images"), createGallery);
router.get("/", getGallery);
router.put("/", uploadMultiple("images"), updateGallery);
router.delete("/:id", deleteGallery);

export default router;
