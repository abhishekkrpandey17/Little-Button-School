import ExtraContent from "../models/ExtraContent.js";

export const createExtraContent = async (req, res) => {
  try {
    const content = await ExtraContent.create(req.body);
    res.status(201).json(content);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getExtraContent = async (req, res) => {
  try {
    const content = await ExtraContent.find();
    res.json(content);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateExtraContent = async (req, res) => {
  try {
    const updated = await ExtraContent.findOneAndUpdate(
      { title: req.body.title },
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteExtraContent = async (req, res) => {
  try {
    await ExtraContent.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
