import Link from "next/link";

/**
 * Displays the current availability status of the freelancer.
 * Modern design with icon and soft background for better UX.
 */
export const AvailabilityBadge = () => {
  return (
    <Link
      href='/kontakt'
      className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white'
    >
      <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent'>
        Bald verfügbar
      </span>
    </Link>
  );
};
