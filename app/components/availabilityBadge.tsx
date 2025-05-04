import Link from "next/link";

export const AvailabilityBadge = () => {
  return (
    <Link
      href='/kontakt'
      className='relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-full group bg-gradient-to-br from-green-400 to-blue-600 shine-border'
    >
      <span className='relative px-5 py-1 transition-all ease-in duration-75 bg-gray-900 rounded-full group-hover:bg-transparent'>
        Bald verfügbar
      </span>
    </Link>
  );
};
