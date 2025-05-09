import express from "express";
import {
  createTiming,
  updateTiming,
  deleteTiming,
  getTimings,
} from "../controllers/TimingController.js";

const router = express.Router();

router.post("/", createTiming);
router.put("/:id", updateTiming);
router.delete("/:id", deleteTiming);
router.get("/", getTimings);

export default router;
