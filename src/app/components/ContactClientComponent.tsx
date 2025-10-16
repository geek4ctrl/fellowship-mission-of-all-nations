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
    <main className="py-20 bg-gradient-to-br from-indigo-50 via-white to-indigo-100 dark:from-black dark:via-gray-900 dark:to-gray-800" id="contact">
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 text-gray-600 dark:text-gray-300 md:px-8">
            <div className="max-w-lg mx-auto space-y-3 sm:text-center">
                <h3 className="text-indigo-600 dark:text-indigo-400 font-bold text-2xl mb-2 tracking-tight">Contact</h3>
                <p className="text-gray-800 dark:text-white text-4xl font-semibold sm:text-5xl mb-2">Get in touch</p>
                <p className="dark:text-gray-200 text-lg font-normal">We’d love to hear from you! Please fill out the form below.</p>
            </div>
            <div className="mt-16 max-w-lg mx-auto">
                <form onSubmit={(e) => e.preventDefault()} className="space-y-7 bg-white/80 dark:bg-black/60 backdrop-blur-lg rounded-2xl shadow-xl border border-indigo-100 dark:border-gray-800 p-8">
                    <div className="flex flex-col items-center gap-y-7 gap-x-6 [&>*]:w-full sm:flex-row">
                        <div className="flex flex-col gap-4 w-full">
                            <div className="flex-1">
                                <label htmlFor="firstName" className="font-semibold text-gray-700 dark:text-gray-200">First name</label>
                                    <input id="firstName" name="firstName" type="text" required className="w-full mt-2 px-4 py-3 text-gray-700 dark:text-gray-200 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg outline-none border border-gray-300 dark:border-gray-700 focus:border-indigo-500 dark:focus:border-indigo-400 shadow rounded-xl transition-all duration-300 focus:ring-2 focus:ring-indigo-400" />
                            </div>
                            <div className="flex-1">
                                <label htmlFor="lastName" className="font-semibold text-gray-700 dark:text-gray-200">Last name</label>
                                    <input id="lastName" name="lastName" type="text" required className="w-full mt-2 px-4 py-3 text-gray-700 dark:text-gray-200 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg outline-none border border-gray-300 dark:border-gray-700 focus:border-indigo-500 dark:focus:border-indigo-400 shadow rounded-xl transition-all duration-300 focus:ring-2 focus:ring-indigo-400" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="font-semibold text-gray-700 dark:text-gray-200">Email</label>
                        <input id="email" name="email" type="email" required className="w-full mt-2 px-4 py-3 text-gray-700 dark:text-gray-200 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg outline-none border border-gray-300 dark:border-gray-700 focus:border-indigo-500 dark:focus:border-indigo-400 shadow rounded-xl transition-all duration-300 focus:ring-2 focus:ring-indigo-400" />
                    </div>
                    <div>
                        <label htmlFor="phone" className="font-semibold text-gray-700 dark:text-gray-200">Phone number</label>
                        <div className="flex gap-2 mt-2">
                            <select className="px-3 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 font-semibold">
                                <option>SA</option>
                                <option>US</option>
                                <option>UK</option>
                            </select>
                            <input id="phone" name="phone" type="tel" required placeholder="+27 (786) 593-260" className="flex-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg text-gray-700 dark:text-gray-200 outline-none focus:border-indigo-500 dark:focus:border-indigo-400 shadow transition-all duration-300 focus:ring-2 focus:ring-indigo-400" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="message" className="font-semibold text-gray-700 dark:text-gray-200">Message</label>
                        <textarea id="message" name="message" required className="w-full mt-2 px-4 py-4 text-gray-700 dark:text-gray-200 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg outline-none border border-gray-300 dark:border-gray-700 focus:border-indigo-500 dark:focus:border-indigo-400 shadow rounded-xl transition-all duration-300 focus:ring-2 focus:ring-indigo-400" rows={5}></textarea>
                    </div>
                    <button type="submit" className="w-full px-10 py-5 mt-6 font-bold text-white bg-indigo-600 rounded-xl shadow-lg hover:bg-indigo-700 transition-all duration-300 text-lg">Submit</button>
                </form>
            </div>
        </div>
    </main>
    )
}
