import { AvailabilityBadge } from "./availabilityBadge";

export function Hero() {
  return (
    <section className='py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white text-center'>
      <div className='container mx-auto px-4'>
        <h1 className='text-4xl md:text-6xl font-bold mb-6'>
          Maßgeschneiderte Fullstack-Lösungen mit Next.js
        </h1>
        <p className='text-xl md:text-2xl mb-8'>
          Interaktive Dashboards und skalierbare Webanwendungen mit Next.js –
          für klare Einblicke und smarte Entscheidungen.
        </p>
        <AvailabilityBadge />
      </div>
    </section>
  );
}
