import Gallery from "../models/Gallery.js";

export const createGallery = async (req, res) => {
  try {
    const images = req.files.map((file) => file.filename);
    const gallery = await Gallery.create({
      images,
      description: req.body.description,
    });
    res.status(201).json(gallery);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getGallery = async (req, res) => {
  try {
    const data = await Gallery.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateGallery = async (req, res) => {
  try {
    const updated = await Gallery.findOneAndUpdate(
      { title: req.body.title },
      {
        ...req.body,
        ...(req.files && { images: req.files.map((file) => file.filename) }),
      },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteGallery = async (req, res) => {
  try {
    await Gallery.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
