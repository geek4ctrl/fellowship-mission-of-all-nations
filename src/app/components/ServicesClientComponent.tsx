"use client"

import { useState } from "react"

export default function ServiceClientComponent() {

    const team = [
        {
            avatar: "https://res.cloudinary.com/dhqvb8wbn/image/upload/v1701686181/eqjiuxzliuhezuibbp8v.avif",
            name: "Pastor Ezekiel Kiti",
            title: "Senior Pastor",
            topic: "HOUR OF POWER AND INTERCESSION",
            day: "Tuesday",
            time: "6 PM - 8 PM",
            message: "Countinous and heartfelt prayer can accomplish much. James 5:16"
        },
        {
            avatar: "https://res.cloudinary.com/dhqvb8wbn/image/upload/v1701686069/lkujh4asy6vrjhylifgk.avif",
            name: "Pastor Maghalie Kiti",
            title: "Senior Pastor",
            topic: "HEALING, DELIVERANCE, RESTORATION, PROPHECY",
            day: "Friday",
            time: "6 PM - 8:30 PM",
            message: "Freely received. Freely given. Matthew 10:8"
        },
        {
            avatar: "https://res.cloudinary.com/dhqvb8wbn/image/upload/v1701686069/qrj6u6qna6jryuhsnv18.avif",
            name: "Prophet Nathan",
            title: "Intermediate Pastor",
            topic: "LEARNING THY WORD",
            day: "Friday",
            time: "9:30 - 12:30 PM",
            message: "Faith comes by hearing. Romans 10:17"
        },
    ]

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl mx-auto sm:text-center">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Service schedule
                    </h3>
                    <p className="text-gray-600 mt-3">

                        Our dynamic service schedule epitomizes a rich tapestry of spiritual engagement and community connection. Every Sunday unfolds with a soul-stirring worship, ushering in a day dedicated to reflection, learning, and communal bonds. Mornings witness age-specific activities, nurturing growth in children, youth, and adults. Midday congregational services foster unity, followed by fellowship lunches that nurture camaraderie. Afternoons are diverse, ranging from choir rehearsals to outreach initiatives. Evenings offer serene contemplation with inspirational messages, while midweek gatherings provide moments of renewal. Special services mark significant occasions, blending tradition and innovation. Our evolving schedule ensures a vibrant and inclusive spiritual journey year-round.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                        {
                            team.map((item, idx) => (
                                <li key={idx} className="text-center">
                                    <div className="w-full h-60 sm:h-52 md:h-56 flex flex-row justify-center text-center">
                                        <img
                                            src={item.avatar}
                                            className="w-6/12 h-full object-cover object-cover shadow-md rounded-xl"
                                            alt=""
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <h4 className="text-lg text-gray-700 font-semibold">{item.topic}</h4>
                                        <h2>{item.day}</h2>
                                        <h2>{item.time}</h2>
                                        <h2>{item.message}</h2>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}