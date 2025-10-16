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
            <nav className="sticky top-0 z-50 w-full bg-white/70 dark:bg-black/70 backdrop-blur-lg shadow-lg border-b border-gray-200 dark:border-gray-800">
                <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3 sm:px-8">
                    <a href="#hero" className="font-extrabold text-lg text-indigo-700 dark:text-white tracking-wide">Fellowship Mission of All Nations</a>
                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex space-x-6">
                            {navigation.map((item) => (
                                <Link key={item.reference} href={item.reference} className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors duration-200">
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                        <div className="flex items-center">
                            <ThemeToggle />
                        </div>
                        <button className="text-gray-500 dark:text-gray-300 outline-none md:hidden ml-2 h-10 flex items-center" onClick={() => setState(!state)}>
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
                {state && (
                    <div className="absolute top-full left-0 w-full bg-white/90 dark:bg-black/90 backdrop-blur-lg shadow-lg border-b border-gray-200 dark:border-gray-800 flex flex-col items-center py-4 md:hidden">
                        {navigation.map((item) => (
                            <Link key={item.reference} href={item.reference} className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium py-2 transition-colors duration-200">
                                {item.title}
                            </Link>
                        ))}
                    </div>
                )}
            </nav>
            <section id="hero" className="py-32 bg-gradient-to-br from-indigo-100 via-white to-indigo-200 dark:from-black dark:via-gray-900 dark:to-gray-800 animate-fade-in">
                <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
                    <div className="flex-none space-y-7 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
                        <h1 className="text-2xl md:text-4xl font-extrabold text-indigo-700 dark:text-white mb-2 animate-slide-down">Welcome to Our Church</h1>
                        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 animate-slide-up">A Place of Worship, Fellowship, and Service</h2>
                        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-8 animate-fade-in delay-200">
                            Greetings and welcome to the virtual space of our church! We're thrilled to have you join us. Embracing a spirit of warmth and inclusivity, Fellowship Mission of All Nations is a community devoted to worship, fellowship, and the embodiment of God's boundless love. Navigate through our online abode to unveil a plethora of services, upcoming events, and invaluable resources. Together, let's embark on this journey of faith, supporting and uplifting one another. Your presence enriches our digital congregation, and we invite you to explore the profound connections and shared devotion that define our collective spiritual voyage.
                        </p>
                        <a href="#contact" className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-gray-800 dark:to-gray-700 text-white font-bold shadow-lg hover:scale-105 hover:from-indigo-600 hover:to-purple-600 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 animate-bounce">Join Us</a>
                    </div>
                    <div className="flex-none mt-14 md:mt-0 md:max-w-xl animate-fade-in delay-400">
                        <div className="w-[400px] h-[300px] bg-gray-100 dark:bg-gray-900 rounded-3xl shadow-xl border-4 border-indigo-200 dark:border-gray-800 flex items-center justify-center overflow-hidden">
                            <Image
                                src="https://res.cloudinary.com/dhqvb8wbn/image/upload/v1699170099/z26ls5vhnz8sf0x6d5jp.jpg"
                                width={400}
                                height={300}
                                className="object-cover w-full h-full"
                                alt="Church community"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
