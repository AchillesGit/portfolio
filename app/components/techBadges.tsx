import React from "react";

interface TechBadgesProps {
  badges: string[];
}

export default function TechBadges({ badges }: TechBadgesProps) {
  return (
    <div className='flex flex-wrap gap-2 pt-4'>
      {badges.map((tech: string, idx: number) => (
        <div
          key={idx}
          className='inline-flex items-center justify-center px-2 py-0.5 text-sm border-2 rounded-full border-teal-700'
        >
          {tech}
        </div>
      ))}
    </div>
  );
}
