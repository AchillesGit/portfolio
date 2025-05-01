import React from "react";
import {
  FaReact,
  FaServer,
  FaTools,
  FaPaintBrush,
  FaProjectDiagram,
  FaDatabase,
} from "react-icons/fa";

const services = [
  {
    icon: <FaReact />,
    title: "Frontend-Entwicklung",
    description:
      "Modernes UI und interaktive SPAs mit React, Angular & Next.js",
  },
  {
    icon: <FaServer />,
    title: "Backend & Datenbanken",
    description:
      "Skalierbare APIs und Datenmodellierung mit Next.js, Node.js, Prisma, SQL, MongoDB, PostgreSQL",
  },
  {
    icon: <FaTools />,
    title: "DevOps & Tools",
    description:
      "CI/CD-Pipelines, Azure DevOps, Git, Vercel für reibungslose Deployments, Firebase",
  },
  {
    icon: <FaPaintBrush />,
    title: "UI/UX & Design",
    description:
      "Prototyping und User-Centered Design mit Figma, Chart.js & Tailwind CSS",
  },
  {
    icon: <FaProjectDiagram />,
    title: "Methoden & Arbeitsweise",
    description:
      "Agile Prozesse (Scrum, Kanban) und strukturierte Projektumsetzung",
  },
  {
    icon: <FaDatabase />,
    title: "Allgemeine Kenntnisse",
    description: "C#, .NET, Entity Framework, Java und SEO-Optimierung",
  },
];

export default function Services() {
  return (
    <section className='p-20 fade-in'>
      <div className='container mx-auto px-4 text-center'>
        <h2 className='text-3xl md:text-4xl font-bold mb-10'>
          Moderne Webentwicklung auf den Punkt{" "}
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
