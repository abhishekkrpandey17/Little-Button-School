import mongoose from "mongoose";

const TimingSchema = new mongoose.Schema({
  day: String,
  open: String,
  close: String,
});

export default mongoose.model("Timing", TimingSchema);
