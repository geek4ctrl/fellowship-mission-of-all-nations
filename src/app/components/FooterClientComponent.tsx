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
        <footer id="footer" className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 px-6 py-10 w-full">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 justify-between items-start px-4 sm:px-6">
                {/* Left: Logo, tagline, social, status */}
                <div className="flex-1 min-w-[220px] flex flex-col gap-4">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="font-extrabold text-xl text-indigo-700 dark:text-indigo-400">Fellowship Mission</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2 font-normal">A Place of Worship, Fellowship, and Service.</p>
                    <div className="flex gap-3 mb-2">
                        <a href="#" className="hover:scale-110 transition-transform"><svg className="w-7 h-7 text-gray-500" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg></a>
                        <a href="#" className="hover:scale-110 transition-transform"><svg className="w-7 h-7 text-gray-500" fill="currentColor" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" /></svg></a>
                        <a href="#" className="hover:scale-110 transition-transform"><svg className="w-7 h-7 text-gray-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2v20M2 12h20" /></svg></a>
                        <a href="#" className="hover:scale-110 transition-transform"><svg className="w-7 h-7 text-gray-500" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg></a>
                    </div>
                    <span className="inline-block px-3 py-1 text-xs rounded bg-green-100 text-green-700 font-semibold">All systems operational</span>
                </div>
                {/* Right: Multi-column navigation */}
                <div className="flex-[2] grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
                    <div>
                        <h4 className="font-bold text-gray-700 dark:text-gray-200 mb-4 text-base xs:text-lg">Product</h4>
                        <ul className="space-y-2 text-base xs:text-lg">
                            <li><a href="#" className="hover:text-indigo-600">Service Schedule</a></li>
                            <li><a href="#" className="hover:text-indigo-600">Events</a></li>
                            <li><a href="#" className="hover:text-indigo-600">Gallery</a></li>
                            <li><a href="#" className="hover:text-indigo-600">Resources</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-700 dark:text-gray-200 mb-2">Explore</h4>
                        <ul className="space-y-1 text-sm">
                            <li><a href="#" className="hover:text-indigo-600">About</a></li>
                            <li><a href="#" className="hover:text-indigo-600">Team</a></li>
                            <li><a href="#" className="hover:text-indigo-600">Contact</a></li>
                            <li><a href="#" className="hover:text-indigo-600">Outreach</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-700 dark:text-gray-200 mb-2">Company</h4>
                        <ul className="space-y-1 text-sm">
                            <li><a href="#" className="hover:text-indigo-600">About Us</a></li>
                            <li><a href="#" className="hover:text-indigo-600">Careers</a></li>
                            <li><a href="#" className="hover:text-indigo-600">Media</a></li>
                            <li><a href="#" className="hover:text-indigo-600">Blog</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-700 dark:text-gray-200 mb-2">Support</h4>
                        <ul className="space-y-1 text-sm">
                            <li><a href="#" className="hover:text-indigo-600">Help Center</a></li>
                            <li><a href="#" className="hover:text-indigo-600">Contact</a></li>
                            <li><a href="#" className="hover:text-indigo-600">Terms</a></li>
                            <li><a href="#" className="hover:text-indigo-600">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>&copy; {new Date().getFullYear()} Fellowship Mission of All Nations. All rights reserved.</span>
                <div className="flex gap-4 mt-2 md:mt-0">
                    <a href="#" className="hover:text-indigo-600">Privacy Policy</a>
                    <a href="#" className="hover:text-indigo-600">Terms</a>
                    <a href="#" className="hover:text-indigo-600">Code of Conduct</a>
                </div>
            </div>
        </footer>
    )
}
