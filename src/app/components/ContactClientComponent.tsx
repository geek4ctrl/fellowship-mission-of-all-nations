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
    <main className="py-14 bg-white dark:bg-black" id="contact">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 dark:text-gray-300 md:px-8">
                <div className="max-w-lg mx-auto space-y-3 sm:text-center">
                    <h3 className="text-indigo-600 dark:text-indigo-400 font-semibold">
                        Contact
                    </h3>
                    <p className="text-gray-800 dark:text-white text-3xl font-semibold sm:text-4xl">
                        Get in touch
                    </p>
                    <p className="dark:text-gray-200">
                        We’d love to hear from you! Please fill out the form bellow.
                    </p>
                </div>
                <div className="mt-12 max-w-lg mx-auto">
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="space-y-5"
                    >
                        <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
                            <div>
                                <label className="font-medium">
                                    First name
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 dark:text-gray-200 bg-transparent outline-none border border-gray-300 dark:border-gray-700 focus:border-indigo-600 dark:focus:border-indigo-400 shadow-sm rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="font-medium">
                                    Last name
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 dark:text-gray-200 bg-transparent outline-none border border-gray-300 dark:border-gray-700 focus:border-indigo-600 dark:focus:border-indigo-400 shadow-sm rounded-lg"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 dark:text-gray-200 bg-transparent outline-none border border-gray-300 dark:border-gray-700 focus:border-indigo-600 dark:focus:border-indigo-400 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Phone number
                            </label>
                            <div className="relative mt-2">
                                <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                                    <select className="text-sm bg-transparent outline-none rounded-lg h-full dark:text-gray-200 dark:bg-black">
                                        <option>SA</option>
                                        {/* <option>ES</option>
                                        <option>MR</option> */}
                                    </select>
                                </div>
                                <input
                                    type="number"
                                    placeholder="+27 (786) 593-260"
                                    required
                                    className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border border-gray-300 dark:border-gray-700 focus:border-indigo-600 dark:focus:border-indigo-400 shadow-sm rounded-lg dark:text-gray-200"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="font-medium">
                                Message
                            </label>
                            <textarea required className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border border-gray-300 dark:border-gray-700 focus:border-indigo-600 dark:focus:border-indigo-400 shadow-sm rounded-lg dark:text-gray-200"></textarea>
                        </div>
                        <button
                            className="w-full px-4 py-2 text-white font-medium bg-indigo-600 dark:bg-gray-800 hover:bg-indigo-500 dark:hover:bg-gray-700 active:bg-indigo-600 dark:active:bg-gray-900 rounded-lg duration-150"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </main>
    )
}
