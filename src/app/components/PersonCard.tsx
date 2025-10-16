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
    className={`relative bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/30 dark:from-gray-900 dark:via-indigo-950/50 dark:to-purple-950/50 backdrop-blur-2xl rounded-3xl shadow-2xl border-2 border-indigo-200/60 dark:border-indigo-800/60 px-3 py-8 sm:p-10 flex flex-col items-center w-full max-w-sm mx-auto transition-all duration-700 hover:scale-110 hover:shadow-[0_20px_60px_-15px_rgba(99,102,241,0.5)] hover:border-indigo-400 dark:hover:border-indigo-500 group overflow-hidden min-h-[400px] ${className || ''}`}
    tabIndex={0}
    aria-label={`${name}, ${title}`}
  >
    {/* Animated gradient glow effect */}
    <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-75 blur-xl transition-all duration-700 pointer-events-none animate-gradient"></div>
    
    {/* Rotating gradient border */}
    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 via-pink-500 to-indigo-500 animate-gradient" style={{backgroundSize: '200% 200%'}}></div>
      <div className="absolute inset-[2px] rounded-3xl bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/30 dark:from-gray-900 dark:via-indigo-950/50 dark:to-purple-950/50"></div>
    </div>
    
    {/* Shimmer effect on hover */}
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
    
    {/* Sparkle effects */}
    <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
    <div className="absolute top-8 right-8 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" style={{animationDelay: '0.2s'}}></div>
    <div className="absolute bottom-8 left-6 w-1.5 h-1.5 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" style={{animationDelay: '0.4s'}}></div>
    
    <div className="relative z-10 w-44 h-44 sm:w-48 sm:h-48 mb-5 sm:mb-6 group/image">
      {/* Outer glow ring */}
      <div className="absolute -inset-2 bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-60 blur-md transition-all duration-700 group-hover:animate-pulse"></div>
      
      {/* Image container with multiple rings */}
      <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-white/80 dark:ring-gray-800/80 group-hover:ring-8 group-hover:ring-indigo-400/60 dark:group-hover:ring-indigo-500/60 transition-all duration-700 shadow-xl group-hover:shadow-2xl">
        {/* Inner gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 animate-gradient" style={{backgroundSize: '200% 200%'}}></div>
        
        <Image
          src={avatar}
          width={192}
          height={192}
          className="relative z-10 object-cover w-full h-full transition-all duration-700 group-hover:scale-110 group-hover/image:rotate-3"
          alt={name}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyIiBoZWlnaHQ9IjE5MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTkyIiBoZWlnaHQ9IjE5MiIgZmlsbD0iI2U1ZTdlYiIvPjwvc3ZnPg=="
          quality={75}
          unoptimized
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      </div>
    </div>
    
    <div className="relative z-10 flex flex-col items-center space-y-3 w-full">
      <span className="flex items-center gap-2 font-extrabold text-xl sm:text-2xl bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 dark:from-white dark:via-indigo-200 dark:to-purple-200 bg-clip-text text-transparent mb-1 text-center break-words transition-all duration-500 group-hover:scale-105">
        {name}
        <svg className="w-6 h-6 text-blue-500 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" fill="currentColor" viewBox="0 0 20 20" aria-label="Verified">
          <circle cx="10" cy="10" r="10" fill="currentColor" opacity=".2"/>
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
        </svg>
      </span>
      
      <div className="relative inline-block">
        {/* Badge glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
        
        <span className="relative text-sm sm:text-base text-indigo-900 dark:text-indigo-100 font-bold text-center break-words px-5 py-2.5 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 dark:from-indigo-900/60 dark:via-purple-900/60 dark:to-pink-900/60 rounded-full border-2 border-indigo-300/50 dark:border-indigo-700/50 group-hover:border-indigo-400 dark:group-hover:border-indigo-500 transition-all duration-500 group-hover:shadow-lg backdrop-blur-sm">
          {title}
        </span>
      </div>
      
      {/* Decorative line */}
      <div className="w-16 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:w-24"></div>
    </div>
  </div>
);

export default PersonCard;
