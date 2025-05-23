"use client";

import { useState, useTransition, useRef } from "react";
import { sendMail } from "./sendMail";

export default function KontaktPage() {
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [isPending, startTransition] = useTransition();
  const formRef = useRef<HTMLFormElement>(null);

  const handleAction = (formData: FormData) => {
    startTransition(async () => {
      const result = await sendMail(formData);
      setStatus(result.status);
      if (result.status === "success") {
        formRef.current?.reset();
      }
    });
  };

  return (
    <div className='flex justify-center fade-in md:grow md:items-center'>
      <div className='w-full max-w-lg rounded-2xl shadow-xl p-8'>
        <h1 className='text-4xl font-extrabold mb-6 text-gray-100'>Kontakt</h1>
        <p className='text-lg mb-6'>
          Bereit für dein nächstes Web-Projekt? Lass uns loslegen!
        </p>

        <form ref={formRef} action={handleAction} className='space-y-4'>
          <div>
            <label
              htmlFor='name'
              className='block text-sm font-medium mb-1 text-gray-200'
            >
              Name
            </label>
            <input
              id='name'
              name='name'
              type='text'
              required
              minLength={3}
              className='w-full border-2 border-gray-600 rounded-lg px-4 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition'
            />
          </div>

          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium mb-1 text-gray-200'
            >
              E-Mail
            </label>
            <input
              id='email'
              name='email'
              type='email'
              required
              className='w-full border-2 border-gray-600 rounded-lg px-4 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition'
            />
          </div>

          <div>
            <label
              htmlFor='message'
              className='block text-sm font-medium mb-1 text-gray-200'
            >
              Nachricht
            </label>
            <textarea
              id='message'
              name='message'
              rows={4}
              required
              className='w-full border-2 border-gray-600 rounded-lg px-4 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition'
            />
          </div>

          <button
            type='submit'
            disabled={isPending}
            className='w-full bg-gradient-to-br from-green-400 to-blue-600 text-white font-semibold py-3 rounded-lg shadow-md transition transform hover:scale-105 disabled:opacity-50 cursor-pointer'
          >
            {isPending ? "Senden…" : "Senden"}
          </button>
          <p className='text-sm text-gray-400'>
            Mit Absenden des Formulars erklärst Du Dich mit meiner{" "}
            <a
              href='/datenschutz'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-400 underline hover:text-blue-600'
            >
              Datenschutzerklärung
            </a>{" "}
            einverstanden.
          </p>
        </form>

        {status === "success" && (
          <p className='mt-4 text-green-400 font-medium'>
            Danke! Deine Nachricht wurde erfolgreich gesendet.
          </p>
        )}
        {status === "error" && (
          <p className='mt-4 text-red-400 font-medium'>
            Ups, da ist etwas schiefgelaufen. Bitte versuche es später erneut
            oder kontaktiere mich über LinkedIn.
          </p>
        )}
      </div>
    </div>
  );
}
