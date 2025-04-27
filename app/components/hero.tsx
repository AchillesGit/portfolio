import { AvailabilityBadge } from "./availabilityBadge";

export function Hero() {
  return (
    <section className='pt-34 pb-30 text-white w-10/12'>
      <div className='container mx-auto'>
        <AvailabilityBadge />
        <h1 className='text-4xl md:text-6xl font-bold mb-8'>
          Moderne Fullstack-Lösungen für dein Business
        </h1>
        <p className='text-xl md:text-2xl mb-8 text-gray-400'>
          Ich bin Dennis, Webentwickler mit Leidenschaft für smarte Dashboards
          und nutzerzentrierte Business-Tools.
        </p>
      </div>
    </section>
  );
}
