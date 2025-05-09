import express from "express";
import multer from "multer";
import {
  createProgram,
  getPrograms,
  updateProgram,
  deleteProgram,
} from "../controllers/ProgramController.js";

const router = express.Router();
import { uploadSingle } from "../middleware/upload.js";

router.post("/", uploadSingle("image"), createProgram);
router.get("/", getPrograms);
router.put("/", uploadSingle("image"), updateProgram);
router.delete("/:id", deleteProgram);

export default router;
