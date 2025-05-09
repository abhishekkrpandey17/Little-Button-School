import mongoose from "mongoose";

const ProgramSchema = new mongoose.Schema({
  title: String,
  image: String,
  description: String,
  features: [String],
});

export default mongoose.model("Program", ProgramSchema);
