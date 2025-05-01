import React from "react";

export default function Impressum() {
  return (
    <section className='p-8 max-w-3xl mx-auto'>
      <h1 className='text-4xl font-bold mb-6'>Impressum</h1>
      <p className='mb-4'>Angaben gemäß § 5 TMG</p>
      <p className='mb-4'>
        Dennis Sadiki
        <br />
        Musterstraße 123
        <br />
        12345 Musterstadt
        <br />
      </p>
      <p className='mb-4'>
        <strong>Kontakt:</strong>
        <br />
        Telefon: +49 123 456789
        <br />
        E-Mail: info@dennis-sadiki.de
        <br />
      </p>
      <p className='mb-4'>
        <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong>
        <br />
        Dennis Sadiki
        <br />
        Musterstraße 123
        <br />
        12345 Musterstadt
        <br />
      </p>
    </section>
  );
}
