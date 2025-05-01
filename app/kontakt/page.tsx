"use client";

import { sendMail } from "./sendMail";
import { useSearchParams } from "next/navigation";

export default function KontaktPage() {
  const searchParams = useSearchParams();
  const status = searchParams.get("status") || null; // Safely access search params
  console.log(status);

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
