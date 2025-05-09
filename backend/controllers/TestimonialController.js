import Testimonial from "../models/Testimonial.js";

export const createTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.create({
      avatar: req.file?.filename,
      name: req.body.name,
      message: req.body.message,
      rating: req.body.rating,
    });
    res.status(201).json(testimonial);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
export const updateTestimonial = async (req, res) => {
  try {
    const updated = await Testimonial.findOneAndUpdate(
      { name: req.body.name }, // ✅ Use name from URL
      {
        ...req.body,
        ...(req.file && { avatar: req.file.filename }),
      },
      { new: true }
    );

    if (!updated) {
      return res
        .status(404)
        .json({ error: "No testimonial found with this name" });
    }

    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteTestimonial = async (req, res) => {
  try {
    await Testimonial.findOneAndDelete({
      name: req.params.id,
    });
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getTestimonials = async (req, res) => {
  try {
    const data = await Testimonial.find();
    res.json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
