import Admission from "../models/Admission.js";

export const createAdmission = async (req, res) => {
  try {
    const admission = await Admission.create(req.body);
    res.status(201).json(admission);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateAdmission = async (req, res) => {
  try {
    const updated = await Admission.findOneAndUpdate(
      { level: req.body.level },
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteAdmission = async (req, res) => {
  try {
    await Admission.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getAdmissions = async (req, res) => {
  try {
    const data = await Admission.find();
    res.json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
