import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDB } from "./connection/connectDB.js";

import aboutRoutes from "./routes/aboutRoutes.js";
import timingRoutes from "./routes/timingRoutes.js";
import galleryRoutes from "./routes/galleryRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import admissionRoutes from "./routes/admissionRoutes.js";
import testimonialRoutes from "./routes/testimonialRoutes.js";
import extraContentRoutes from "./routes/extraContentRoutes.js";
import programRoutes from "./routes/programRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import { EmailRouter } from "./routes/emailRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.static("uploads"));
app.use(express.urlencoded({ extended: true }));

connectDB();

//Single Routes
app.get("/", (req, res) => {
  res.json({
    status: 200,
    mesage: "OK",
  });
});

app.get("/api/v1", (req, res) => {
  res.json({
    status: 200,
    mesage: "OK",
  });
});

// Routes
app.use("/api/v1/about", aboutRoutes);
app.use("/api/v1/timing", timingRoutes);
app.use("/api/v1/gallery", galleryRoutes);
app.use("/api/v1/message", messageRoutes);
app.use("/api/v1/admission", admissionRoutes);
app.use("/api/v1/testimonial", testimonialRoutes);
app.use("/api/v1/extra", extraContentRoutes);
app.use("/api/v1/program", programRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/email", EmailRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
