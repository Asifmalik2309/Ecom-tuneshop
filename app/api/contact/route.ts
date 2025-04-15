import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Configure the mail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail ID
        pass: process.env.EMAIL_PASS, // Your Gmail App Password
      },
    });

    // Mail options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "agraharishivam6388@gmail.com", // Replace with your actual email
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
