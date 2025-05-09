import express from "express";
import {
  createExtraContent,
  getExtraContent,
  updateExtraContent,
  deleteExtraContent,
} from "../controllers/ExtraContentController.js";

const router = express.Router();

router.post("/", createExtraContent);
router.get("/", getExtraContent);
router.put("/", updateExtraContent);
router.delete("/:id", deleteExtraContent);

export default router;
