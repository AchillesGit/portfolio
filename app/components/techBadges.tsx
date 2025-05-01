import React from "react";

interface TechBadgesProps {
  badges: string[];
}

const TechBadges: React.FC<TechBadgesProps> = ({ badges }) => {
  return (
    <div className='flex flex-wrap gap-2 pt-4'>
      {badges.map((tech, idx) => (
        <div
          key={idx}
          className='relative inline-flex items-center justify-center p-0.5 overflow-hidden rounded-full group bg-gradient-to-br from-green-400 to-blue-600'
        >
          <span className='relative flex items-center gap-2 px-1.5 py-0.5 bg-white dark:bg-gray-900 rounded-full'>
            <span className='text-sm'>{tech}</span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default TechBadges;
