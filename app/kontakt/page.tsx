// app/kontakt/page.tsx
"use server";

import nodemailer from "nodemailer";
import { redirect } from "next/navigation";

export async function sendMail(formData: FormData) {
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
    redirect("/kontakt?status=success");
  } catch (error) {
    console.error("Mail-Versand fehlgeschlagen:", error);
    redirect("/kontakt?status=error");
  }
}

interface KontaktPageProps {
  searchParams: { status?: "success" | "error" };
}

export default async function KontaktPage({ searchParams }: KontaktPageProps) {
  const status = await searchParams.status;

  console.log(searchParams);

  return (
    <div className='min-h-screen p-8'>
      <h1 className='text-4xl font-bold mb-4'>Kontakt</h1>
      <form action={sendMail} className='space-y-4'>
        <p className='text-lg mb-4'>
          Hast du ein Projekt im Kopf? Schreib mir!
        </p>
        <div>
          <label htmlFor='name' className='block text-sm font-medium mb-1'>
            Name
          </label>
          <input
            id='name'
            name='name'
            type='text'
            required
            className='w-full border rounded p-2'
          />
        </div>
        <div>
          <label htmlFor='email' className='block text-sm font-medium mb-1'>
            E-Mail
          </label>
          <input
            id='email'
            name='email'
            type='email'
            required
            className='w-full border rounded p-2'
          />
        </div>
        <div>
          <label htmlFor='message' className='block text-sm font-medium mb-1'>
            Nachricht
          </label>
          <textarea
            id='message'
            name='message'
            rows={4}
            required
            className='w-full border rounded p-2'
          />
        </div>
        <button
          type='submit'
          className='bg-blue-500 px-6 py-3 rounded text-white hover:bg-blue-600'
        >
          Senden
        </button>
      </form>
      {/* Erfolg- und Fehlermeldungen basierend auf Query-Param */}
      {status === "success" && (
        <p className='mt-4 text-green-600'>
          Danke! Deine Nachricht wurde erfolgreich gesendet.
        </p>
      )}
      {status === "error" && (
        <p className='mt-4 text-red-600'>
          Ups, da ist etwas schiefgegangen. Bitte versuche es später erneut.
        </p>
      )}
    </div>
  );
}
