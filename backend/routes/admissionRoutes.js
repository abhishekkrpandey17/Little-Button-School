import express from "express";
import {
  createAdmission,
  updateAdmission,
  deleteAdmission,
  getAdmissions,
} from "../controllers/AdmissionController.js";

const router = express.Router();

router.post("/", createAdmission);
router.put("/", updateAdmission);
router.delete("/:id", deleteAdmission);
router.get("/", getAdmissions);

export default router;
