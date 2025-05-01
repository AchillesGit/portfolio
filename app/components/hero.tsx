import { AvailabilityBadge } from "./availabilityBadge";

export function Hero() {
  return (
    <section className='pt-10 px-8 md:pt-34 md:pb-30 w-10/12 md:px-20'>
      <div className='container mx-auto'>
        <div className='mb-4 md:mb-10'>
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
