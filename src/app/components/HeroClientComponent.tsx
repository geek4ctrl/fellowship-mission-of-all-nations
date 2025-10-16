"use client"

import { useState } from "react"
import Link from "../../../node_modules/next/link"
import ThemeToggle from "./ThemeToggle"
import Image from "next/image"

export default function HeroClientComponent() {

    const [state, setState] = useState(false)

    // Replace javascript:void(0) path with your path
    const navigation = [
        { title: "Hero", reference: "#hero", path: "javascript:void(0)" },
        { title: "Services", reference: "#services", path: "javascript:void(0)" },
        { title: "Team", reference: "#team", path: "javascript:void(0)" },
        { title: "Contact", reference: "#contact", path: "javascript:void(0)" },
    ]

    return (
        <>
            <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-black/80 backdrop-blur-lg shadow-lg border-b border-gray-200 dark:border-gray-800" aria-label="Main Navigation">
                <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 py-3 sm:px-8 gap-2">
                    <div className="flex w-full items-center justify-between">
                        <a href="#hero" className="font-extrabold text-lg sm:text-xl text-indigo-700 dark:text-white tracking-wide whitespace-pre-line leading-tight">Fellowship Mission of All Nations</a>
                        <div className="flex items-center gap-2 sm:gap-4" aria-label="Theme and menu controls">
                            <div className="flex items-center">
                                <ThemeToggle />
                            </div>
                            <button className="text-gray-500 dark:text-gray-300 outline-none sm:hidden ml-2 h-10 w-10 flex items-center justify-center rounded-full bg-white/80 dark:bg-gray-800 shadow hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-all" onClick={() => setState(!state)}>
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
                    <div className="hidden sm:flex space-x-6 mt-2 sm:mt-0">
                        {navigation.map((item) => (
                            <Link key={item.reference} href={item.reference} className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors duration-200">
                                <span aria-label={item.title}>{item.title}</span>
                            </Link>
                        ))}
                    </div>
                </div>
                {state && (
                    <div className="absolute top-full left-0 w-full bg-white/95 dark:bg-black/95 backdrop-blur-lg shadow-lg border-b border-gray-200 dark:border-gray-800 flex flex-col items-center py-4 sm:hidden animate-fade-in">
                        {navigation.map((item) => (
                            <Link key={item.reference} href={item.reference} className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium py-3 w-full text-center transition-colors duration-200">
                                <span aria-label={item.title}>{item.title}</span>
                            </Link>
                        ))}
                    </div>
                )}
            </nav>
            <section id="hero" className="py-32 bg-gradient-to-br from-indigo-100 via-white to-indigo-200 dark:from-black dark:via-gray-900 dark:to-gray-800 animate-fade-in">
                <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-8 gap-y-8 md:gap-y-12 gap-x-6 md:gap-x-16 animate-fade-in-slow" role="region" aria-label="Hero Section">
                    {/* Left Side: Headline, Description, Buttons, Stats */}
                    <div className="flex-1 flex flex-col justify-center items-start max-w-lg md:max-w-xl space-y-6">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-indigo-700 dark:text-white leading-tight mb-4">Welcome to Our Church</h1>
                        <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-2" id="hero-subtitle">A Place of Worship, Fellowship, and Service</h2>
                        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-6 font-normal">Greetings and welcome to the virtual space of our church! We're thrilled to have you join us. Embracing a spirit of warmth and inclusivity, Fellowship Mission of All Nations is a community devoted to worship, fellowship, and the embodiment of God's boundless love. Navigate through our online abode to unveil a plethora of services, upcoming events, and invaluable resources. Together, let's embark on this journey of faith, supporting and uplifting one another. Your presence enriches our digital congregation, and we invite you to explore the profound connections and shared devotion that define our collective spiritual voyage.</p>
                        <div className="flex gap-4 mb-6">
                            {/* Buttons removed for cleaner look */}
                        </div>
                    </div>
                    {/* Right Side: Modern Card Image */}
                    <div className="flex-1 flex justify-center items-center w-full md:w-auto">
                        <div className="relative w-full max-w-md md:max-w-lg h-[340px] md:h-[400px] bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800 flex items-center justify-center overflow-hidden">
                            <Image
                                src="https://res.cloudinary.com/dhqvb8wbn/image/upload/v1699170099/z26ls5vhnz8sf0x6d5jp.jpg"
                                width={500}
                                height={400}
                                className="object-cover w-full h-full transition-transform duration-700 ease-in-out scale-95 hover:scale-100 animate-card-in"
                                alt="Church community worshipping together in the sanctuary"
                                priority
                                unoptimized
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
