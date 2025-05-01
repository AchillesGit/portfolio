import Image from "next/image";
import { AvailabilityBadge } from "../components/availabilityBadge";
import { FaEarthAmericas } from "react-icons/fa6";
import Link from "next/link";

export default function About() {
  return (
    <section className='py-6 md:py-12 px-6  fade-in'>
      <div className='max-w-4xl mx-auto grid md:grid-cols-3 gap-8'>
        <div className='flex flex-col items-center space-y-4'>
          {/* Avatar */}
          <div className='rounded-full overflow-hidden border-2 border-gray-500'>
            <Image
              src='/Dennis-Sadiki.png'
              alt='Avatar'
              className='object-cover'
              width={160}
              height={160}
            />
          </div>
          {/* Timezone */}
          <div className='flex items-center text-gray-400 space-x-2'>
            <FaEarthAmericas size={20} />

            <span>Berlin / Deutschland</span>
          </div>
          {/* Languages */}
          <div className='flex space-x-2'>
            <span className='px-3 py-1 bg-gray-800 rounded-full text-sm'>
              Deutsch
            </span>
            <span className='px-3 py-1 bg-gray-800 rounded-full text-sm'>
              Englisch
            </span>
          </div>
        </div>

        <div className='md:col-span-2 flex flex-col space-y-6'>
          <div className='flex md:justify-start justify-center'>
            <AvailabilityBadge />
          </div>

          {/* Name & Role */}
          <div>
            <h1 className='text-6xl md:text-7xl font-bold leading-tight'>
              Dennis Sadiki
            </h1>
            <p className='text-3xl text-gray-400 mt-1'>
              Fullstack Webdeveloper
            </p>
          </div>

          {/* Bio */}
          <p className='text-lg'>
            Hi, ich bin Dennis Sadiki, 28 Jahre alt, Webentwickler mit B.Sc in
            Wirtschaftsinformatik. Seit fünf Jahren baue ich Webanwendungen –
            heute vor allem mit React, Next.js und dem T3-Stack.
          </p>

          <p className='text-lg'>
            Mein Fokus: saubere Code-Strukturen, durchdachtes State-Management
            und ein gutes Gespür für UX und UI. Besonders gerne arbeite ich an
            komplexen Dashboards, interaktiven Tabellen und dynamischen
            Visualisierungen.
          </p>

          <p className='text-lg'>
            Mich motiviert das kreative Erschaffen – Produkte mit echtem
            Mehrwert. Dabei halte ich meinen Tech-Stack aktuell und Best
            Practices stets im Blick.
          </p>

          <p className='text-lg'>
            Wenn du wissen möchtest, woran ich zuletzt gearbeitet habe, wirf
            gerne einen Blick auf meine{" "}
            <Link href={"/projekte"} className='font-semibold text-blue-500'>
              Projekte
            </Link>
            .
          </p>

          <p className='text-lg'>
            Und wenn der Laptop mal zu bleibt, findest du mich meistens beim
            Sport – ob im Gym oder auf dem Fahrrad. Bewegung ist für mich der
            beste Ausgleich zum Coden.
          </p>
        </div>
      </div>
    </section>
  );
}
