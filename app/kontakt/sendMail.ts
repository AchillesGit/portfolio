"use server";

import nodemailer from "nodemailer";

export async function sendMail(
  formData: FormData
): Promise<{ status: "success" | "error" }> {
  const { name, email, message } = Object.fromEntries(formData) as {
    name: string;
    email: string;
    message: string;
  };

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `Neue Nachricht von ${name} <${email}>`,
      text: `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`,
      replyTo: email,
    });
    return { status: "success" };
  } catch (error) {
    console.error("Mail-Versand fehlgeschlagen:", error);
    return { status: "error" };
  }
}
