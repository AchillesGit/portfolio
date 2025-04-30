import Image from "next/image";

const techBadges = [
  { name: "React" },
  { name: "TypeScript" },
  { name: "Vite" },
  { name: "Tailwind" },
  { name: "DevExtreme" },
  { name: "CSS" },
  { name: ".NET" },
  { name: "Entity Framework" },
  { name: "SQL" },
  { name: "IIS" },
  { name: "OpenAPI" },
  { name: "Swagger" },
  { name: "REST APIs" },
  { name: "Figma" },
  { name: "npm" },
];

export default function Projekte() {
  return (
    <section className='p-8 rounded-2xl max-w-3xl mx-auto'>
      {/* Header */}
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center'>
        <div>
          <h2 className='text-3xl font-bold'>Advoservice Portal</h2>
          <p className='text-blue-400 mt-1'>Frontend-Experte & UX-Designer</p>
        </div>
        <p className='text-gray-400 mt-4 md:mt-0'>Jan 2025 – laufend</p>
      </div>

      <div className='flex flex-wrap gap-2 pt-4'>
        {techBadges.map((tech, idx) => (
          <div
            key={idx}
            className='relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-full group bg-gradient-to-br from-green-400 to-blue-600'
          >
            <span className='relative flex items-center gap-2 px-1.5 py-0.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-transparent group-hover:dark:bg-transparent'>
              <span>{tech.name}</span>
            </span>
          </div>
        ))}
      </div>

      {/* Bullet Points */}
      <ul className='list-disc marker:text-blue-400 space-y-3 mt-6 ps-4'>
        <li>
          Entwicklung eines zentralen Portals zur Konsolidierung aller internen
          Anwendungen.
        </li>
        <li>
          Architektur und Umsetzung des Frontends mit React, Context API,
          Tailwind & DevExtreme.
        </li>
        <li>
          Migrierte zwei komplexe Legacy-Systeme als moderne SPAs mit
          Self-Service Features.
        </li>
        <li>
          Einführung von Rollen-/Rechtemanagement & Beitrag zur
          Backend-Optimierung.
        </li>
        <li>
          Produktives Deployment mit fortlaufender Ablösung alter Systeme.
        </li>
      </ul>

      {/* Screenshot */}
      <div className='mt-8'>
        <div className='overflow-hidden rounded-lg shadow-lg w-full md:w-1/2'>
          <Image
            src='/Kai.jpg'
            alt='Screenshot der FLY Plattform'
            className='w-full h-auto object-cover'
            width={1352}
            height={870}
          />
        </div>
      </div>
    </section>
  );
}
