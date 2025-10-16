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
    className={`relative bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-200 dark:border-gray-800 px-2 py-4 sm:p-6 flex flex-col items-center w-full max-w-xs sm:max-w-xs xs:max-w-full mx-auto mb-4 sm:mb-6 transition-all duration-300 hover:scale-105 hover:shadow-3xl hover:border-indigo-500 dark:hover:border-indigo-400 group ${className || ''}`}
    tabIndex={0}
    aria-label={`${name}, ${title}`}
    style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}
  >
    <div className="absolute inset-0 rounded-3xl border-4 border-transparent group-hover:border-indigo-500 dark:group-hover:border-indigo-400 transition-all duration-300 pointer-events-none animate-pulse group-hover:animate-none"></div>
    <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-2xl overflow-hidden mb-2 sm:mb-4 bg-gradient-to-br from-indigo-200/40 via-white/30 to-indigo-400/30 dark:from-indigo-900/40 dark:via-gray-900/30 dark:to-indigo-700/30 flex items-center justify-center">
      <Image
        src={avatar}
        width={180}
        height={180}
        className="object-cover w-full h-full rounded-2xl transition-transform duration-500 group-hover:scale-105"
        alt={name}
        unoptimized
      />
    </div>
    <div className="flex flex-col items-center">
      <span className="flex items-center gap-1 font-bold text-base sm:text-lg text-gray-900 dark:text-white mb-0.5 text-center break-words">
        {name}
        <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20" aria-label="Verified"><circle cx="10" cy="10" r="10" fill="currentColor" opacity=".15"/><path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" /></svg>
      </span>
      <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 mb-1 text-center break-words">{title}</span>
    </div>
  </div>
);

export default PersonCard;
