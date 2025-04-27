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
    <section className='py-20'>
      <div className='container mx-auto px-4 text-center'>
        <h2 className='text-3xl md:text-4xl font-bold mb-10'>
          So kann ich dein Projekt unterstützen
        </h2>
        <div className='grid gap-8 md:grid-cols-3'>
          {services.map((service, index) => (
            <div
              key={index}
              className='bg-gray-800 text-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow'
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
