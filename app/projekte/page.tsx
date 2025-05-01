import Image from "next/image";
import TechBadges from "../components/techBadges";

export default function Projekte() {
  return (
    <>
      <section className='p-8 rounded-2xl max-w-3xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center'>
          <div>
            <h2 className='text-3xl font-bold'>Advoservice Portal</h2>
            <p className='text-blue-400 mt-1'>Frontend-Experte & UX-Designer</p>
          </div>
          <p className='text-gray-400 mt-4 md:mt-0'>Jan 2025 – laufend</p>
        </div>

        <TechBadges
          badges={[
            "React",
            "TypeScript",
            "Vite",
            "Tailwind",
            "DevExtreme",
            "CSS",
            ".NET",
            "Entity Framework",
            "SQL",
            "IIS",
            "OpenAPI",
            "Swagger",
            "REST APIs",
            "Figma",
            "npm",
          ]}
        />

        <ul className='list-disc marker:text-teal-600 space-y-3 mt-6 ps-4'>
          <li>
            Entwicklung eines zentralen Portals zur Konsolidierung aller
            internen Anwendungen.
          </li>
          <li>
            Architektur und Umsetzung des Frontends mit React, Context API,
            Tailwind & DevExtreme.
          </li>
          <li>
            Migration zweier komplexer Legacy-Systeme als moderne SPAs mit
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

        <div className='mt-8'>
          <div className='overflow-hidden rounded-lg shadow-lg w-full md:w-1/2'>
            <Image
              src='/portal.png'
              alt='Hand steckt Pin in Board'
              className='w-full h-auto object-cover'
              width={640}
              height={427}
            />
          </div>
        </div>
      </section>

      <section className='p-8 rounded-2xl max-w-3xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center'>
          <div>
            <h2 className='text-3xl font-bold'>KPMG – Internes GPT-Portal</h2>
            <p className='text-blue-400 mt-1'>Frontend Experte (Angular)</p>
          </div>
          <p className='text-gray-400 mt-4 md:mt-0'>Feb – Dez 2024</p>
        </div>

        <TechBadges
          badges={[
            "Angular",
            "TypeScript",
            "SCSS",
            "DevExpress",
            "Bootstrap",
            "REST API",
            ".NET",
            "Azure DevOps",
            "Git",
            "CI/CD via Azure Pipelines",
            "Figma",
            "Mend Whitesource Scan",
          ]}
        />

        {/* Bullet Points */}
        <ul className='list-disc marker:text-teal-600 space-y-3 mt-6 ps-4'>
          <li>
            Entwicklung eines internen GPT-Portals für tausende tägliche Nutzer
            mit individuell konfigurierbaren Assistenten.
          </li>
          <li>
            Komplette Neuentwicklung der Frontend-Architektur inkl. sauberes
            State Management & modulare Komponentenstruktur.
          </li>
          <li>
            Umsetzung einer modernen, konsistenten UI gemäß Corporate Design in
            enger Zusammenarbeit mit UI/UX-Designern.
          </li>
          <li>
            Integration von Funktionen wie Dokumenten-Upload, konfigurierbare
            GPT-Logik & eingebettetem PDF-Viewer.
          </li>
          <li>
            Internationale Zusammenarbeit mit Entwicklerteam aus Bulgarien &
            tägliche Abstimmung im Scrum-Prozess (Englisch).
          </li>
        </ul>

        <div className='mt-8'>
          <div className='overflow-hidden rounded-lg shadow-lg w-full md:w-1/2'>
            <Image
              src='/Kai.jpg'
              alt='Kai Chat. Der AI Chat von KPMG in Deutschland.'
              className='w-full h-auto object-cover'
              width={800}
              height={418}
            />
          </div>
        </div>
      </section>

      <section className='p-8 rounded-2xl max-w-3xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center'>
          <div>
            <h2 className='text-3xl font-bold'>KPMG – Event-Dashboard</h2>
            <p className='text-blue-400 mt-1'>Frontend Entwickler (Angular)</p>
          </div>
          <p className='text-gray-400 mt-4 md:mt-0'>Sep 2023 – Jan 2024</p>
        </div>

        <TechBadges
          badges={[
            "Angular",
            "TypeScript",
            "SCSS",
            "PrimeNG",
            "Bootstrap",
            "Chart.js",
            "Excel.js",
            "SharePoint (via PnPjs)",
            "Azure DevOps",
            "Git",
            "CI/CD via Azure Pipelines",
            "Figma",
            "Mend Whitesource Scan",
          ]}
        />

        <ul className='list-disc marker:text-teal-600 space-y-3 mt-6 ps-4'>
          <li>
            Entwicklung eines interaktiven Dashboards zur Visualisierung und
            Analyse interner Events bei KPMG.
          </li>
          <li>
            Umsetzung einer filterbaren Haupttabelle mit Suchfunktion,
            Spaltensteuerung und Exportoptionen.
          </li>
          <li>
            Integration dynamischer Diagramme (Chart.js) zur Darstellung von
            KPIs und Event-Kennzahlen.
          </li>
          <li>
            Umsetzung einer rollenbasierten Rechteverwaltung über SharePoint
            (PnPjs).
          </li>
          <li>
            Enge Zusammenarbeit mit Stakeholdern im Rahmen eines initialen
            Anforderungsworkshops & wöchentlicher Abstimmungen (Scrum).
          </li>
        </ul>

        <div className='mt-8'>
          <div className='overflow-hidden rounded-lg shadow-lg w-full md:w-1/2'>
            <Image
              src='/dashboard.png'
              alt='Ein modernes Dashboard UI'
              className='w-full h-auto object-cover'
              width={1000}
              height={511}
            />
          </div>
        </div>
      </section>
      <section className='p-8 rounded-2xl max-w-3xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center'>
          <div>
            <h2 className='text-3xl font-bold'>
              KPMG – Thought Leadership Tool
            </h2>
            <p className='text-blue-400 mt-1'>Frontend Developer (Angular)</p>
          </div>
          <p className='text-gray-400 mt-4 md:mt-0'>Apr – Aug 2023</p>
        </div>

        <TechBadges
          badges={[
            "Angular",
            "TypeScript",
            "SCSS",
            "PrimeNG",
            "Bootstrap",
            "SharePoint (via PnPjs)",
            "Azure DevOps",
            "Git",
            "CI/CD via Azure Pipelines",
            "Figma",
            "Mend Whitesource Scan",
          ]}
        />

        <ul className='list-disc marker:text-teal-600 space-y-3 mt-6 ps-4'>
          <li>
            Migration auf neueste Angular- & PrimeNG-Version inkl. Behebung von
            Breaking Changes.
          </li>
          <li>
            Umsetzung eines rollenbasierten Formulars zur Erfassung von Thought
            Leadership-Inhalten.
          </li>
          <li>
            Berechtigungslogik via SharePoint (PnPjs) clientseitig eingebunden &
            dynamisch umgesetzt.
          </li>
          <li>
            Kontinuierliche UI-Optimierungen und Anpassungen an interne
            Marketingprozesse.
          </li>
          <li>
            Enge Zusammenarbeit mit Stakeholdern in Workshops & Weekly Reviews
            (Scrum).
          </li>
        </ul>

        <div className='mt-8'>
          <div className='overflow-hidden rounded-lg shadow-lg w-full md:w-1/2'>
            <Image
              src='/building.png'
              alt='Ein helles modernes KPMG Büro Gebäude'
              className='w-full h-auto object-cover'
              width={945}
              height={483}
            />
          </div>
        </div>
      </section>

      <section className='p-8 rounded-2xl max-w-3xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center'>
          <div>
            <h2 className='text-3xl font-bold'>
              Hobby Rezeptplattform – Tech-Migration & Auth
            </h2>
            <p className='text-blue-400 mt-1'>Fullstack Entwickler (Next.js)</p>
          </div>
          <p className='text-gray-400 mt-4 md:mt-0'>Jan – Feb 2025</p>
        </div>

        <TechBadges
          badges={[
            "Next.js",
            "React",
            "Tailwind CSS",
            "PostgreSQL (Neon)",
            "Prisma",
            "NextAuth",
            "Vercel",
            "MongoDB",
            "Express",
            "Node.js",
          ]}
        />

        <ul className='list-disc marker:text-teal-600 space-y-3 mt-6 ps-4'>
          <li>
            Migration vom klassischen MERN‑Stack zu Next.js & Prisma zur
            Verbesserung von Performance, Developer Experience und SEO.
          </li>
          <li>
            Implementierung von NextAuth mit rollenbasierter Zugriffslogik.
          </li>
          <li>
            Datenmodellierung und persistente Speicherung von über 50
            strukturierten Rezepten in PostgreSQL.
          </li>
          <li>
            Automatisiertes CI/CD‑Deployment mit Vercel für reibungslose
            Live-Updates.
          </li>
        </ul>

        <div className='mt-8'>
          <div className='overflow-hidden rounded-lg shadow-lg w-full md:w-1/2'>
            <Image
              src='/recipes.png'
              alt='UI der Rezeptplattform mit drei Screenshots auf IPhones'
              className='w-full h-auto object-cover'
              width={1634}
              height={952}
            />
          </div>
        </div>
      </section>
      <section className='p-8 rounded-2xl max-w-3xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center'>
          <div>
            <h2 className='text-3xl font-bold'>
              Hobby PWA – Foto- & Erlebnis-Journal
            </h2>
            <p className='text-blue-400 mt-1'>Fullstack Entwicklung (Solo)</p>
          </div>
          <p className='text-gray-400 mt-4 md:mt-0'>Okt – Nov 2023</p>
        </div>

        <TechBadges
          badges={[
            "Angular",
            "Firebase",
            "Firestore",
            "Firebase Hosting",
            "Firebase Storage",
            "Firebase Auth",
            "Bootstrap",
          ]}
        />

        {/* Bullet Points */}
        <ul className='list-disc marker:text-teal-600 space-y-3 mt-6 ps-4'>
          <li>
            Eigenständige Konzeption und Entwicklung einer PWA zum privaten
            Foto- und Erlebnis‑Journaling.
          </li>
          <li>
            Sicherer Bild- und Datenupload via Firebase Auth (Whitelist) & Blob
            Storage.
          </li>
          <li>
            Durchführung von zwei Testrunden mit über 100 Einträgen & 200+
            Bildern inkl. Nutzerfeedback.
          </li>
          <li>
            Iterative UX‑Optimierung in enger Abstimmung mit der Hauptnutzerin.
          </li>
        </ul>

        <div className='mt-8'>
          <div className='overflow-hidden rounded-lg shadow-lg w-full md:w-1/2'>
            <Image
              src='/Journal.png'
              alt='UI der Erlebnis PWA mit drei Screenshots auf IPhones'
              className='w-full h-auto object-cover'
              width={1634}
              height={952}
            />
          </div>
        </div>
      </section>
    </>
  );
}
