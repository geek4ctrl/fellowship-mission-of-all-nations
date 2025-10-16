"use client"

import { useState, useEffect } from "react"
import Link from "../../../node_modules/next/link"
import { HomeIcon, Cog6ToothIcon, UsersIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import ThemeToggle from "./ThemeToggle"
import Image from "next/image"

export default function HeroClientComponent() {

    const [state, setState] = useState(false)

    // Close mobile menu when clicking outside or on a link
    const closeMobileMenu = () => {
        setState(false)
    }

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (state) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [state])

    // Replace javascript:void(0) path with your path
    const navigation = [
        { title: "Hero", reference: "#hero", path: "javascript:void(0)", icon: HomeIcon },
        { title: "Services", reference: "#services", path: "javascript:void(0)", icon: Cog6ToothIcon },
        { title: "Team", reference: "#team", path: "javascript:void(0)", icon: UsersIcon },
        { title: "Contact", reference: "#contact", path: "javascript:void(0)", icon: EnvelopeIcon },
    ]

    return (
        <>
            {/* Skip Navigation Link for Accessibility */}
            <a
                href="#main-content"
                className="skip-nav-link absolute left-2 top-2 z-[100] px-4 py-2 bg-indigo-700 text-white rounded focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-indigo-500 transform -translate-y-20 transition-all duration-200"
                tabIndex={0}
                style={{ position: 'absolute', left: 0, top: 0, transform: 'translateY(-200%)' }}
                onFocus={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
                onBlur={e => { e.currentTarget.style.transform = 'translateY(-200%)'; }}
            >
                Skip to main content
            </a>
            <nav className="sticky top-0 z-50 w-full bg-white/90 dark:bg-black/90 backdrop-blur-2xl shadow-2xl border-b-2 border-indigo-200 dark:border-indigo-900" aria-label="Main Navigation" role="navigation">
                <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 py-4 sm:px-8 gap-2">
                    <div className="flex w-full items-center justify-between">
                        <a href="#hero" className="font-extrabold text-xl sm:text-2xl bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-800 dark:from-indigo-200 dark:via-purple-300 dark:to-pink-300 bg-clip-text text-transparent tracking-wide whitespace-pre-line leading-tight transition-transform duration-300" aria-label="Go to Hero section">Fellowship Mission of All Nations</a>
                        <div className="flex items-center gap-2 sm:gap-4 relative z-[60]" aria-label="Theme and menu controls">
                            <div className="flex items-center">
                                <ThemeToggle />
                            </div>
                            <button className="text-gray-600 dark:text-gray-300 outline-none sm:hidden ml-2 h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-gray-800 dark:to-indigo-900 shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95" onClick={() => setState(!state)} aria-expanded={state} aria-label="Toggle navigation menu">
                                {state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                    <div className="hidden sm:flex space-x-2 mt-2 sm:mt-0" role="menubar" aria-label="Main site sections">
                        {navigation.map((item) => (
                            <Link key={item.reference} href={item.reference} className="flex items-center gap-2 px-4 py-2.5 text-gray-800 dark:text-gray-100 hover:text-white dark:hover:text-white font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-xl hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:shadow-lg" role="menuitem" aria-label={`Go to ${item.title} section`}>
                                <item.icon className="w-5 h-5" aria-hidden="true" />
                                <span>{item.title}</span>
                            </Link>
                        ))}
                    </div>
                </div>
                {state && (
                    <div className="sm:hidden">
                        {/* Overlay backdrop */}
                        <div 
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] animate-fade-in" 
                            onClick={closeMobileMenu}
                            aria-hidden="true"
                        ></div>
                        
                        {/* Mobile menu */}
                        <div className="fixed inset-0 z-[56] bg-white dark:bg-gray-900 flex flex-col animate-fade-in" role="menu" aria-label="Mobile site sections" style={{minHeight: '100vh', overflow: 'auto'}}>
                            {/* Close button area - replicate navbar */}
                            <div className="sticky top-0 bg-white dark:bg-gray-900 backdrop-blur-2xl shadow-lg border-b-2 border-indigo-200 dark:border-indigo-900 z-10">
                                <div className="flex items-center justify-between px-4 py-4">
                                    <span className="font-extrabold text-xl bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-800 dark:from-indigo-200 dark:via-purple-300 dark:to-pink-300 bg-clip-text text-transparent">Menu</span>
                                    <button 
                                        onClick={closeMobileMenu}
                                        className="h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-gray-800 dark:to-indigo-900 shadow-lg"
                                        aria-label="Close menu"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            
                            {/* Navigation items */}
                            <nav className="flex-1 px-4 py-6 space-y-2" style={{backgroundColor: '#f8f9ff'}}>
                                {navigation && navigation.length > 0 ? navigation.map((item, index) => (
                                    <Link 
                                        key={item.reference} 
                                        href={item.reference} 
                                        onClick={closeMobileMenu}
                                        className="flex items-center gap-3 text-gray-900 dark:text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 bg-white dark:bg-gray-800 shadow-md border border-indigo-100 dark:border-gray-700 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white hover:border-indigo-600 animate-fade-in" 
                                        style={{animationDelay: `${index * 0.1}s`}}
                                        role="menuitem" 
                                        aria-label={`Go to ${item.title} section`}
                                    >
                                        <div className="w-10 h-10 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/80 dark:to-purple-900/80 rounded-lg flex items-center justify-center">
                                            <item.icon className="w-5 h-5 text-indigo-600 dark:text-indigo-300" aria-hidden="true" />
                                        </div>
                                        <span className="text-base flex-1">{item.title}</span>
                                        <svg className="w-5 h-5 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                )) : (
                                    <div className="text-center py-10 text-gray-500">No navigation items</div>
                                )}
                            </nav>
                            
                            {/* Footer info */}
                            <div className="px-6 py-6 border-t border-gray-200 dark:border-gray-800 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/50 dark:to-purple-950/50">
                                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">Fellowship Mission of All Nations</p>
                                <p className="text-xs text-gray-500 dark:text-gray-500 text-center mt-1">© {new Date().getFullYear()} All rights reserved</p>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
            <section id="main-content" className="relative py-32 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 dark:from-gray-900 dark:via-indigo-950 dark:to-purple-950 overflow-hidden" aria-label="Hero section" role="region" tabIndex={-1}>
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-300 dark:bg-indigo-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-float"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
                    <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-300 dark:bg-pink-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-float" style={{animationDelay: '4s'}}></div>
                </div>
                <div className="relative z-10 max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-8 gap-y-8 md:gap-y-12 gap-x-6 md:gap-x-16 animate-fade-in-slow">
                    {/* Left Side: Headline, Description, Buttons, Stats */}
                    <div className="flex-1 flex flex-col justify-center items-start max-w-lg md:max-w-xl space-y-6">
                        <div className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-semibold rounded-full shadow-lg mb-2 animate-fade-in">✨ Welcome Home</div>
                        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-800 dark:from-indigo-200 dark:via-purple-300 dark:to-pink-300 bg-clip-text text-transparent leading-tight mb-4 animate-fade-in">Welcome to Our Church</h1>
                        <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 dark:text-gray-100 mb-2 animate-fade-in delay-200" id="hero-subtitle">A Place of Worship, Fellowship, and Service</h2>
                        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 font-normal leading-relaxed animate-fade-in delay-400">Greetings and welcome to the virtual space of our church! We're thrilled to have you join us. Embracing a spirit of warmth and inclusivity, Fellowship Mission of All Nations is a community devoted to worship, fellowship, and the embodiment of God's boundless love. Navigate through our online abode to unveil a plethora of services, upcoming events, and invaluable resources. Together, let's embark on this journey of faith, supporting and uplifting one another. Your presence enriches our digital congregation, and we invite you to explore the profound connections and shared devotion that define our collective spiritual voyage.</p>
                        <div className="flex gap-4 mb-6 animate-fade-in delay-600">
                            <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-xl shadow-2xl transition-all duration-300">Join Us Today</button>
                            <button className="px-8 py-4 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 font-bold rounded-xl shadow-xl border-2 border-indigo-600 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 transition-all duration-300">Learn More</button>
                        </div>
                    </div>
                    {/* Right Side: Modern Card Image */}
                    <div className="flex-1 flex justify-center items-center w-full md:w-auto animate-fade-in delay-800">
                        <div className="relative w-full max-w-md md:max-w-lg h-[340px] md:h-[450px] group">
                            {/* Decorative background */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                            {/* Main image card */}
                            <div className="relative w-full h-full bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border-2 border-white/50 dark:border-gray-700/50 flex items-center justify-center overflow-hidden backdrop-blur-xl">
                                <Image
                                    src="https://res.cloudinary.com/dhqvb8wbn/image/upload/v1699170099/z26ls5vhnz8sf0x6d5jp.jpg"
                                    width={500}
                                    height={450}
                                    className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-110 animate-card-in"
                                    alt="Church community worshipping together in the sanctuary"
                                    priority
                                    loading="eager"
                                    placeholder="blur"
                                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjQ1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNTAwIiBoZWlnaHQ9IjQ1MCIgZmlsbD0iI2VlZSIvPjwvc3ZnPg=="
                                    unoptimized
                                />
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
