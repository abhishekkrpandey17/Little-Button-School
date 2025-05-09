import Program from "../models/Program.js";

export const createProgram = async (req, res) => {
  try {
    const program = await Program.create({
      title: req.body.title,
      image: req.file?.filename,
      description: req.body.description,
      features: req.body.features,
    });
    res.status(201).json(program);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getPrograms = async (req, res) => {
  try {
    const data = await Program.find();
    res.json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateProgram = async (req, res) => {
  try {
    const updated = await Program.findOneAndUpdate(
      { title: req.body.title },
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

export const deleteProgram = async (req, res) => {
  try {
    await Program.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
