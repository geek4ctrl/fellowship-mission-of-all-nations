import Image from "next/image";
import React from "react";

export interface PersonCardProps {
  avatar: string;
  name: string;
  title: string;
  className?: string;
}

const PersonCard: React.FC<PersonCardProps> = ({ avatar, name, title, className }) => (
  <div
    className={`bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800 p-4 sm:p-6 flex flex-col items-center w-full max-w-xs sm:max-w-xs xs:max-w-full mb-6 transition-all duration-300 hover:scale-105 hover:shadow-3xl hover:border-indigo-400 dark:hover:border-indigo-600 group ${className || ''}`}
    tabIndex={0}
    aria-label={`${name}, ${title}`}
  >
    <div className="absolute inset-0 rounded-3xl border-4 border-transparent group-hover:border-indigo-400 dark:group-hover:border-indigo-600 transition-all duration-300 pointer-events-none"></div>
    <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden mb-3 sm:mb-4">
      <Image
        src={avatar}
        width={160}
        height={160}
        className="object-cover w-full h-full"
        alt={name}
        unoptimized
      />
    </div>
    <div className="flex flex-col items-center">
      <span className="font-bold text-lg text-gray-900 dark:text-white mb-1">{name}</span>
      <span className="text-sm text-gray-700 dark:text-gray-300 mb-1">{title}</span>
    </div>
  </div>
);

export default PersonCard;
