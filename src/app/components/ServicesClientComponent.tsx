"use client"
import Image from "next/image";

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
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-indigo-100 dark:from-black dark:via-gray-900 dark:to-gray-800" id="services">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="max-w-xl mx-auto sm:text-center">
                <h3 className="text-gray-800 dark:text-white text-4xl font-extrabold mb-2 tracking-tight">Service Schedule</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-3 text-lg">
                    Our dynamic service schedule epitomizes a rich tapestry of spiritual engagement and community connection. Every Sunday unfolds with a soul-stirring worship, ushering in a day dedicated to reflection, learning, and communal bonds. Mornings witness age-specific activities, nurturing growth in children, youth, and adults. Midday congregational services foster unity, followed by fellowship lunches that nurture camaraderie. Afternoons are diverse, ranging from choir rehearsals to outreach initiatives. Evenings offer serene contemplation with inspirational messages, while midweek gatherings provide moments of renewal. Special services mark significant occasions, blending tradition and innovation. Our evolving schedule ensures a vibrant and inclusive spiritual journey year-round.
                </p>
            </div>
            <div className="mt-16">
                <ul className="flex flex-col items-center justify-center w-full gap-10 sm:grid sm:grid-cols-2 md:grid-cols-3">
                    {team.map((item) => (
                        <li key={item.topic} className="bg-white dark:bg-gray-900 rounded-[2rem] shadow-lg border border-gray-200 dark:border-gray-800 p-4 sm:p-6 flex flex-col items-center w-full max-w-xs mb-6 transition-all duration-300 hover:shadow-xl">
                            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden mb-3 sm:mb-4">
                                <Image
                                    src={item.avatar}
                                    width={160}
                                    height={160}
                                    className="w-full h-full object-cover rounded-2xl"
                                    alt={item.name}
                                />
                            </div>
                            <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 mb-1">
                                <span className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">{item.name}</span>
                                <span className="inline-block align-middle"><svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" /></svg></span>
                            </div>
                            <div className="text-gray-500 dark:text-gray-300 text-xs sm:text-sm mb-1 sm:mb-2">{item.title}</div>
                            <div className="text-gray-700 dark:text-gray-200 text-sm sm:text-base font-medium mb-1 sm:mb-2 text-center">{item.topic}</div>
                            <div className="text-gray-400 dark:text-gray-400 text-xs mb-1 sm:mb-2">{item.day} &bull; {item.time}</div>
                            <div className="text-gray-500 dark:text-gray-400 text-xs italic mb-2 sm:mb-4 text-center">{item.message}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
    )
}