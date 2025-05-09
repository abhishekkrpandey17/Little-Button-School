import mongoose from "mongoose";

const AdmissionSchema = new mongoose.Schema({
  process: String,
  feeStructure: String,
});

export default mongoose.model("Admission", AdmissionSchema);
