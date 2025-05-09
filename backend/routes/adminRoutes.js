import express from "express";
import {
  registerAdmin,
  loginAdmin,
  logoutAdmin,
  checkAuth,
} from "../controllers/AdminController.js";

const router = express.Router();

router.post("/register", registerAdmin);
router.post("/login", loginAdmin);
router.get("/logout", logoutAdmin);
router.get("/check", checkAuth); // 👈 Auth check route

export default router;
