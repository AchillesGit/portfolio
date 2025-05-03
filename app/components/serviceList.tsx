import Link from "next/link";
import { FiBarChart2, FiDatabase, FiZap } from "react-icons/fi";

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: ServiceItem[] = [
  {
    title: "Individuelle Dashboards",
    description:
      "Interaktive Dashboards und Tabellen für effiziente Datenvisualisierung und schnelle Entscheidungen.",
    icon: <FiBarChart2 />,
  },
  {
    title: "Performante Web-Apps",
    description:
      "Moderne, skalierbare Webanwendungen – optimiert für Geschwindigkeit und Mobilgeräte.",
    icon: <FiZap />,
  },
  {
    title: "Alle Daten an einem Ort",
    description:
      "Daten aus Excel, APIs oder Datenbanken sinnvoll zusammenführen und einfach nutzbar machen.",
    icon: <FiDatabase />,
  },
];

export function ServiceList() {
  return (
    <section className='p-8 md:p-20'>
      <div className='container mx-auto text-center'>
        <h2 className='text-3xl md:text-4xl font-bold mb-10'>
          So bringe ich dein Projekt voran{" "}
        </h2>
        <div className='grid gap-8 md:grid-cols-3'>
          {services.map((service, index) => (
            <Link
              key={index}
              href='/leistungen'
              className='bg-gray-800 rounded-lg shadow-md p-8 
                transition-colors duration-300 hover:bg-gray-700 hover:text-gray-200 block'
            >
              <div className='text-4xl mb-4 flex justify-center'>
                {service.icon}
              </div>
              <h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
              <p className='text-gray-400'>{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
