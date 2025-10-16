'use client'

import { useState } from "react"

export default function ContactClientComponent() {

    const team = [
        {
            avatar: "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
            name: "Martiana dialan",
            title: "Product designer"
        },
        {
            avatar: "https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80",
            name: "Micheal colorand",
            title: "Software engineer"
        },
        {
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            name: "Brown Luis",
            title: "Full stack engineer"
        },
        {
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            name: "Lysa sandiago",
            title: "Head of designers"
        },
        {
            avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            name: "Daniel martin",
            title: "Product designer"
        },
        {
            avatar: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
            name: "Vicky tanson",
            title: "Product manager"
        },
    ]

    return (
    <main className="relative py-24 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-100 dark:from-gray-950 dark:via-indigo-950 dark:to-purple-950 overflow-hidden" id="contact">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-25 animate-float"></div>
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-300 dark:bg-pink-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-25 animate-float" style={{animationDelay: '2.5s'}}></div>
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 text-gray-600 dark:text-gray-300 md:px-8">
            <div className="max-w-lg mx-auto space-y-4 text-center">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-pink-500 to-indigo-500 text-white text-sm font-semibold rounded-full shadow-lg mb-2">✉️ Get In Touch</div>
                <h3 className="text-5xl font-extrabold bg-gradient-to-r from-pink-900 via-purple-800 to-indigo-800 dark:from-pink-200 dark:via-purple-300 dark:to-indigo-300 bg-clip-text text-transparent mb-3">Contact Us</h3>
                <p className="text-gray-700 dark:text-gray-300 text-lg font-normal">We'd love to hear from you! Please fill out the form below.</p>
            </div>
            <div className="mt-16 max-w-2xl mx-auto">
                <form onSubmit={(e) => e.preventDefault()} className="space-y-8 bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl rounded-3xl shadow-2xl border-2 border-white/50 dark:border-gray-800/50 p-10 hover:shadow-3xl transition-all duration-500">
                    <div className="flex flex-col items-center gap-y-7 gap-x-6 [&>*]:w-full sm:flex-row">
                        <div className="flex flex-col gap-6 w-full">
                            <div className="flex-1">
                                <label htmlFor="firstName" className="font-bold text-gray-800 dark:text-gray-200 text-sm mb-2 block">First name</label>
                                <input id="firstName" name="firstName" type="text" required className="w-full mt-2 px-5 py-4 text-gray-700 dark:text-gray-200 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg outline-none border-2 border-gray-300 dark:border-gray-700 focus:border-indigo-500 dark:focus:border-indigo-400 shadow-lg rounded-xl transition-all duration-300 focus:ring-4 focus:ring-indigo-400/30 hover:shadow-xl" />
                            </div>
                            <div className="flex-1">
                                <label htmlFor="lastName" className="font-bold text-gray-800 dark:text-gray-200 text-sm mb-2 block">Last name</label>
                                <input id="lastName" name="lastName" type="text" required className="w-full mt-2 px-5 py-4 text-gray-700 dark:text-gray-200 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg outline-none border-2 border-gray-300 dark:border-gray-700 focus:border-indigo-500 dark:focus:border-indigo-400 shadow-lg rounded-xl transition-all duration-300 focus:ring-4 focus:ring-indigo-400/30 hover:shadow-xl" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="font-bold text-gray-800 dark:text-gray-200 text-sm mb-2 block">Email</label>
                        <input id="email" name="email" type="email" required className="w-full mt-2 px-5 py-4 text-gray-700 dark:text-gray-200 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg outline-none border-2 border-gray-300 dark:border-gray-700 focus:border-indigo-500 dark:focus:border-indigo-400 shadow-lg rounded-xl transition-all duration-300 focus:ring-4 focus:ring-indigo-400/30 hover:shadow-xl" />
                    </div>
                    <div>
                        <label htmlFor="phone" className="font-bold text-gray-800 dark:text-gray-200 text-sm mb-2 block">Phone number</label>
                        <div className="flex gap-3 mt-2">
                            <select className="px-4 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 focus:ring-4 focus:ring-indigo-400/30 focus:border-indigo-500">
                                <option>SA</option>
                                <option>US</option>
                                <option>UK</option>
                            </select>
                            <input id="phone" name="phone" type="tel" required placeholder="+27 (786) 593-260" className="flex-1 px-5 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg text-gray-700 dark:text-gray-200 outline-none focus:border-indigo-500 dark:focus:border-indigo-400 shadow-lg transition-all duration-300 focus:ring-4 focus:ring-indigo-400/30 hover:shadow-xl" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="message" className="font-bold text-gray-800 dark:text-gray-200 text-sm mb-2 block">Message</label>
                        <textarea id="message" name="message" required className="w-full mt-2 px-5 py-4 text-gray-700 dark:text-gray-200 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg outline-none border-2 border-gray-300 dark:border-gray-700 focus:border-indigo-500 dark:focus:border-indigo-400 shadow-lg rounded-xl transition-all duration-300 focus:ring-4 focus:ring-indigo-400/30 hover:shadow-xl" rows={6}></textarea>
                    </div>
                    <button type="submit" className="w-full px-10 py-5 mt-6 font-bold text-white text-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-3xl">Send Message</button>
                </form>
            </div>
        </div>
    </main>
    )
}
