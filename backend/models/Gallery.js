import mongoose from "mongoose";

const GallerySchema = new mongoose.Schema({
  images: [String],
  description: String,
});

export default mongoose.model("Gallery", GallerySchema);
