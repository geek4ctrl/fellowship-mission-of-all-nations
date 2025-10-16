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
    className={`relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl rounded-3xl shadow-2xl border-2 border-white/60 dark:border-gray-800/60 px-2 py-6 sm:p-8 flex flex-col items-center w-full max-w-xs sm:max-w-xs xs:max-w-full mx-auto mb-4 sm:mb-6 transition-all duration-500 hover:scale-105 hover:shadow-3xl hover:border-indigo-400 dark:hover:border-indigo-500 group overflow-hidden ${className || ''}`}
    tabIndex={0}
    aria-label={`${name}, ${title}`}
  >
    {/* Animated gradient border effect */}
    <div className="absolute inset-0 rounded-3xl border-4 border-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none blur-sm"></div>
    
    {/* Shimmer effect on hover */}
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
    
    <div className="relative z-10 w-40 h-40 sm:w-44 sm:h-44 rounded-2xl overflow-hidden mb-3 sm:mb-5 bg-gradient-to-br from-indigo-200/50 via-purple-200/50 to-pink-200/50 dark:from-indigo-900/50 dark:via-purple-900/50 dark:to-pink-900/50 flex items-center justify-center ring-4 ring-white/50 dark:ring-gray-800/50 group-hover:ring-indigo-400/50 dark:group-hover:ring-indigo-500/50 transition-all duration-500">
      <Image
        src={avatar}
        width={180}
        height={180}
        className="object-cover w-full h-full rounded-2xl transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
        alt={name}
        unoptimized
      />
    </div>
    <div className="relative z-10 flex flex-col items-center">
      <span className="flex items-center gap-2 font-bold text-lg sm:text-xl text-gray-900 dark:text-white mb-1 text-center break-words">
        {name}
        <svg className="w-5 h-5 text-blue-500 group-hover:scale-125 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20" aria-label="Verified">
          <circle cx="10" cy="10" r="10" fill="currentColor" opacity=".15"/>
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
        </svg>
      </span>
      <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium mb-1 text-center break-words px-3 py-1 bg-indigo-100/50 dark:bg-indigo-900/30 rounded-full">{title}</span>
    </div>
  </div>
);

export default PersonCard;
