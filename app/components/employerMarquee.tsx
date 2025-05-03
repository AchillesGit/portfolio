import Marquee from "react-fast-marquee";

const employers = [
  "KPMG AG",
  "AdvoService GmbH",
  "Hochschule für Wirtschaft und Recht Berlin",
];

export const EmployerMarquee = () => {
  return (
    <section className='py-4 md:py-12 relative w-full'>
      <h2 className='text-center text-2xl font-bold mb-6 px-8'>
        Diese Unternehmen habe ich bereits bei Projekten unterstützt
      </h2>
      <Marquee gradient={false} speed={50} pauseOnHover={true} autoFill>
        {employers.map((name, index) => (
          <div
            key={index}
            className='mx-8 text-lg font-medium text-gray-300 hover:text-gray-50 transition-colors'
          >
            {name}
          </div>
        ))}
      </Marquee>
    </section>
  );
};
