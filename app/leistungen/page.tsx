import React from "react";
import { FaPaintBrush, FaDatabase, FaCode } from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Entwicklung & Design",
    description:
      "Interaktive SPAs mit React, Angular & Next.js sowie modernes UI/UX-Prototyping mit Figma & Tailwind",
  },
  {
    icon: <FaDatabase />,
    title: "Backend & Infrastruktur",
    description:
      "Skalierbare APIs und Datenbanken (Node.js, Prisma, SQL, MongoDB, PostgreSQL) & Vercel, Firebase",
  },
  {
    icon: <FaPaintBrush />,
    title: "Beratung & Support",
    description:
      "UX-Optimierung, Performance-Tuning und fortlaufende Wartung für langfristigen Projekterfolg",
  },
];

export default function Services() {
  return (
    <section className='p-4 md:p-20 fade-in md:grow md:flex md:items-center'>
      <div className='container mx-auto px-4 text-center md:max-w-300'>
        <h2 className='text-3xl md:text-4xl font-bold mb-10 md:mb-14'>
          Moderne Webentwicklung auf den Punkt
        </h2>
        <div className='grid gap-8 md:grid-cols-3'>
          {services.map((service, index) => (
            <div
              key={index}
              className='
                bg-gray-800
                rounded-lg
                shadow-md
                p-8
                transition-colors
                duration-300
                hover:bg-gray-700
                hover:text-gray-200
                block
              '
            >
              <div className='text-4xl mb-4 flex justify-center'>
                {service.icon}
              </div>
              <h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
              <p className='text-gray-400'>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
