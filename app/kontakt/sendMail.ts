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
    host: "smtp.ionos.de",
    port: 587,
    secure: false,
    auth: {
      user: process.env.IONOS_USER,
      pass: process.env.IONOS_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `Dennis Sadiki <${process.env.IONOS_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `Neue Nachricht von ${name} <${email}>`,
      text: `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`,
      replyTo: email,
    });

    await transporter.sendMail({
      from: `"Dennis Sadiki" <${process.env.IONOS_USER}>`,
      to: email,
      subject: "Danke für deine Nachricht!",
      text: `Hi ${name},\n\nvielen Dank für deine Nachricht. Ich melde mich so bald wie möglich bei dir zurück!\n\nViele Grüße\nDennis`,
    });

    return { status: "success" };
  } catch (error) {
    console.error("Mail-Versand fehlgeschlagen:", error);
    return { status: "error" };
  }
}
