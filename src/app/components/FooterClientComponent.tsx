"use client"

import { useState } from "react"
import Link from "../../../node_modules/next/link";

export default function FooterClientComponent() {

    const footerNavs = [
        {
            href: "javascript:void()",
            name: "About"
        },
        {
            href: "javascript:void()",
            name: "Services"
        },
        {
            href: "javascript:void()",
            name: "Event"
        },
        {
            href: "javascript:void()",
            name: "Team"
        },
        {
            href: "javascript:void()",
            name: "Contact"
        },
    ];

    const navigation = [
        { title: "Hero", reference: "#hero", path: "javascript:void(0)" },
        { title: "Services", reference: "#services", path: "javascript:void(0)" },
        { title: "Team", reference: "#team", path: "javascript:void(0)" },
        { title: "Contact", reference: "#contact", path: "javascript:void(0)" },
    ]

    return (
    <footer id="footer" className="text-gray-500 dark:text-gray-300 bg-gradient-to-br from-indigo-100 via-white to-indigo-200 dark:from-black dark:via-gray-900 dark:to-gray-800 px-4 py-10 max-w-screen-xl mx-auto md:px-8 rounded-t-3xl shadow-2xl animate-fade-in">
            <div className="max-w-lg sm:mx-auto sm:text-center">
                <h1 className="font-extrabold text-indigo-700 dark:text-white text-xl">Fellowship Mission of All Nations</h1>
                <p className="leading-relaxed mt-2 text-[15px] text-gray-700 dark:text-gray-200">
                    A Place of Worship, Fellowship, and Service.
                </p>
            </div>
            <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
                {navigation.map((item, idx) => (
                    <li key={idx} className="hover:text-indigo-700 dark:hover:text-indigo-400 transition-colors duration-200">
                        <Link href={item.reference} className="dark:text-gray-200">{item.title}</Link>
                    </li>
                ))}
            </ul>
            <div className="mt-8 items-center justify-between sm:flex">
                <div className="mt-4 sm:mt-0 text-gray-600 dark:text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} Fellowship Mission of All Nations. All rights reserved.
                </div>
                <div className="mt-6 sm:mt-0">
                    <ul className="flex items-center space-x-4">
                        <li>
                            <a href="https://twitter.com" target="_blank" rel="noopener" className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:bg-indigo-100 transition-all">
                                <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37c-.83.5-1.75.87-2.72 1.07A4.28 4.28 0 0 0 12 8.09c0 .34.04.67.1.99C8.09 8.9 4.8 7.13 2.67 4.15c-.37.64-.58 1.38-.58 2.17 0 1.5.77 2.83 1.94 3.61-.72-.02-1.4-.22-1.99-.55v.06c0 2.1 1.49 3.85 3.47 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.11 2.94 3.97 2.97A8.6 8.6 0 0 1 2 19.54c-.29 0-.57-.02-.85-.05A12.13 12.13 0 0 0 8.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 24 4.59c-.77.34-1.6.58-2.47.7z"/></svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://facebook.com" target="_blank" rel="noopener" className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:bg-indigo-100 transition-all">
                                <svg className="w-6 h-6 text-blue-700" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 17 22 12z"/></svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com" target="_blank" rel="noopener" className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:bg-indigo-100 transition-all">
                                <svg className="w-6 h-6 text-pink-500" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11zm0 1.5a4 4 0 1 0 0 8a4 4 0 0 0 0-8zm5.25.75a1 1 0 1 1-2 0a1 1 0 0 1 2 0z"/></svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
