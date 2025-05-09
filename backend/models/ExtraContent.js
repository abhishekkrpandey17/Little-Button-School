import mongoose from "mongoose";

const ExtraContentSchema = new mongoose.Schema({
  title: String,
  slogan: String,
  name: String,
  description: String,
});

export default mongoose.model("ExtraContent", ExtraContentSchema);
