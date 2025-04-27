export default function Projects() {
  return (
    <div className='min-h-screen p-8'>
      <h1 className='text-4xl font-bold mb-4'>Projekte</h1>
      <div className='space-y-8'>
        <div>
          <h2 className='text-2xl font-bold'>Steuerkanzlei-App</h2>
          <p className='text-lg'>
            Mandantenportal mit Formularlogik und Tabellen
          </p>
          <p className='text-sm text-gray-600'>Stack: Next.js, Tailwind</p>
        </div>
        <div>
          <h2 className='text-2xl font-bold'>Admin-Dashboard</h2>
          <p className='text-lg'>Interaktives Dashboard für interne Prozesse</p>
          <p className='text-sm text-gray-600'>Stack: React, Node.js</p>
        </div>
      </div>
    </div>
  );
}
