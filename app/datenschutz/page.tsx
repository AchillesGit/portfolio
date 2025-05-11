import React from "react";

export default function Datenschutz() {
  return (
    <div className='p-8 max-w-3xl mx-auto'>
      <h1 className='text-3xl font-bold mb-4'>Datenschutzerklärung</h1>
      <section>
        <h2 className='text-2xl font-semibold mt-4'>Verantwortlicher</h2>
        <p>
          Dennis Sadiki
          <br />
          Seelenbinder Straße 134
          <br />
          12555 Berlin
          <br />
          E-Mail: kontakt@dennissadiki.de
        </p>
      </section>
      <section>
        <h2 className='text-2xl font-semibold mt-4'>
          Erhebung und Verarbeitung personenbezogener Daten
        </h2>
        <p>
          Wenn Du unser Kontaktformular nutzt, verarbeiten wir folgende Daten,
          die Du freiwillig eingibst:
        </p>
        <ul className='list-disc list-inside'>
          <li>Dein Name</li>
          <li>Deine E-Mail-Adresse</li>
          <li>Deine Nachricht</li>
        </ul>
      </section>
      <section>
        <h2 className='text-2xl font-semibold mt-4'>
          Zweck und Rechtsgrundlage
        </h2>
        <p>
          Die Verarbeitung erfolgt zum Zweck der Bearbeitung Deiner Anfrage und
          der Übersendung einer Bestätigungsmail. Rechtsgrundlage ist Art. 6
          Abs. 1 lit. b DSGVO (Durchführung vorvertraglicher Maßnahmen).
        </p>
      </section>
      <section>
        <h2 className='text-2xl font-semibold mt-4'>Datenweitergabe</h2>
        <p>
          Zur Versendung der E-Mails nutzen wir den Dienst{" "}
          <strong>IONOS E-Mail</strong> (1&1 Ionos SE, Elgendorfer Straße 57,
          56410 Montabaur). Eine darüber hinausgehende Weitergabe an Dritte
          findet nicht statt.
        </p>
      </section>
      <section>
        <h2 className='text-2xl font-semibold mt-4'>Speicherdauer</h2>
        <p>
          Wir speichern Deine Nachricht und Kontaktdaten so lange, wie es für
          den jeweiligen Zweck erforderlich ist bzw. gesetzliche
          Aufbewahrungsfristen dies vorsehen.
        </p>
      </section>
      <section>
        <h2 className='text-2xl font-semibold mt-4'>Betroffenenrechte</h2>
        <p>
          Du hast jederzeit das Recht auf Auskunft, Berichtigung, Löschung oder
          Einschränkung der Verarbeitung sowie auf Datenübertragbarkeit und
          Widerruf Deiner Einwilligung. Zur Ausübung Deiner Rechte kontaktiere
          uns bitte unter den oben genannten Kontaktdaten.
        </p>
      </section>
      <section>
        <h2 className='text-2xl font-semibold mt-4'>Weitere Informationen</h2>
        <ul className='list-disc list-inside'>
          <li>Rechtsgrundlagen: Art. 6 DSGVO, §§ 13, 14 TMG</li>
          <li>
            Beschwerderecht bei Aufsichtsbehörde: z. B.
            Landesdatenschutzbeauftragter Deines Bundeslandes
          </li>
        </ul>
      </section>
    </div>
  );
}
