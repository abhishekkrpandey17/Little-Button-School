import mongoose from "mongoose";

const TestimonialSchema = new mongoose.Schema({
  avatar: String,
  name: String,
  message: String,
  rating: Number,
});

export default mongoose.model("Testimonial", TestimonialSchema);
