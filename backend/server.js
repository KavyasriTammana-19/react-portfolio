import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(cors());

app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "kavyasritammananvs@gmail.com",    
      pass: "uyxu ugsv mhft ufrk",        
    },
  });

  const mailOptions = {
    from: email,
    to: "kavyasritammananvs@gmail.com",         
    subject: `New Message from Portfolio - ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
