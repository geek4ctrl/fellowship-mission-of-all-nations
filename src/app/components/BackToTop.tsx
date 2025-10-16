"use client"

import { useState, useEffect } from "react"

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener("scroll", toggleVisibility)

        return () => window.removeEventListener("scroll", toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 group"
                    aria-label="Back to top"
                >
                    {/* Outer glow effect */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full opacity-75 group-hover:opacity-100 blur-lg transition-all duration-300 animate-pulse"></div>
                    
                    {/* Button */}
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-full shadow-2xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 border-2 border-white/30">
                        {/* Inner shine effect */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-transparent"></div>
                        
                        {/* Arrow icon */}
                        <svg 
                            className="w-6 h-6 sm:w-7 sm:h-7 text-white relative z-10 transform group-hover:-translate-y-1 transition-transform duration-300" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={3} 
                                d="M5 10l7-7m0 0l7 7m-7-7v18" 
                            />
                        </svg>
                    </div>
                </button>
            )}
        </>
    )
}
