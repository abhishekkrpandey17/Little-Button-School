import mongoose from "mongoose";

const AboutSchema = new mongoose.Schema({
  image: String,
  slogan: String,
  description: String,
});

export default mongoose.model("About", AboutSchema);
