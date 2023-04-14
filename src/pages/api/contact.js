import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD
      }
    })

    const mailOptions = {
      from: email,
      to: process.env.NODEMAILER_EMAIL,
      subject: `New message from ${name}`,
      text: message
    }

    try {
      await transporter.sendMail(mailOptions)
      res.status(200).json({ message: 'Message sent successfully' })
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Error sending message' })
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
