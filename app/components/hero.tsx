import { AvailabilityBadge } from "./availabilityBadge";

export function Hero() {
  return (
    <section className='pt-34 pb-30 w-10/12'>
      <div className='container mx-auto'>
        <div className='mb-10'>
          <AvailabilityBadge />
        </div>
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
