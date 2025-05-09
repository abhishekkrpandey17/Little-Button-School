import Timing from "../models/Timing.js";

export const createTiming = async (req, res) => {
  try {
    const timing = await Timing.create(req.body);
    res.status(201).json(timing);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateTiming = async (req, res) => {
  try {
    const updated = await Timing.findOneAndUpdate(
      { day: req.body.day },
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteTiming = async (req, res) => {
  try {
    await Timing.findOneAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getTimings = async (req, res) => {
  try {
    const data = await Timing.find();
    res.json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
