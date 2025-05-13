import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const sendMail = async (req, res) => {
  const {
    childName,
    dob,
    gender,
    language,
    address,
    guardian,
    relation,
    phone,
    email,
  } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "info@e-bindle.com",
      subject: "Admission",
      html: `
      <h2>New Admission Form Submission</h2>
      <p><strong>Child:</strong> ${childName} (${gender})</p>
      <p><strong>DOB:</strong> ${dob}</p>
      <p><strong>Language:</strong> ${language}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Guardian:</strong> ${guardian} (${relation})</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
    `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent!" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
