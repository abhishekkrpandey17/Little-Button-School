import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
});

export default mongoose.model("Message", MessageSchema);
