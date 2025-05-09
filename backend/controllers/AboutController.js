import About from "../models/About.js";

export const createAbout = async (req, res) => {
  try {
    const about = await About.create({
      image: req.file?.filename,
      slogan: req.body.slogan,
      description: req.body.description,
    });
    res.status(201).json(about);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
export const updateAbout = async (req, res) => {
  try {
    const updated = await About.findOneAndUpdate(
      {}, // single entry assumed
      {
        ...req.body,
        ...(req.file && { image: req.file.filename }),
      },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteAbout = async (req, res) => {
  try {
    await About.findOneAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getAbout = async (req, res) => {
  try {
    const data = await About.find();
    res.json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
