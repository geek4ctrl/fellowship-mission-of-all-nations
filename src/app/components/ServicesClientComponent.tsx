"use client"
import PersonCard from "./PersonCard";

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
    <section className="relative py-24 bg-gradient-to-br from-purple-50 via-white to-indigo-100 dark:from-gray-950 dark:via-indigo-950 dark:to-purple-950 overflow-hidden" id="services">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-float"></div>
            <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-indigo-300 dark:bg-indigo-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-float" style={{animationDelay: '3s'}}></div>
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm font-semibold rounded-full shadow-lg mb-4">📚 Our Services</div>
                <h3 className="text-5xl font-extrabold bg-gradient-to-r from-purple-900 via-indigo-800 to-blue-800 dark:from-purple-200 dark:via-indigo-300 dark:to-blue-300 bg-clip-text text-transparent mb-4 tracking-tight">Service Schedule</h3>
                <p className="text-gray-700 dark:text-gray-300 mt-4 text-lg font-normal leading-relaxed">
                    Our dynamic service schedule epitomizes a rich tapestry of spiritual engagement and community connection. Every Sunday unfolds with a soul-stirring worship, ushering in a day dedicated to reflection, learning, and communal bonds. Mornings witness age-specific activities, nurturing growth in children, youth, and adults. Midday congregational services foster unity, followed by fellowship lunches that nurture camaraderie. Afternoons are diverse, ranging from choir rehearsals to outreach initiatives. Evenings offer serene contemplation with inspirational messages, while midweek gatherings provide moments of renewal. Special services mark significant occasions, blending tradition and innovation. Our evolving schedule ensures a vibrant and inclusive spiritual journey year-round.
                </p>
            </div>
            <div className="mt-16">
                <ul className="flex flex-col items-center justify-center w-full gap-12 sm:grid sm:grid-cols-2 md:grid-cols-3 sm:items-start sm:justify-items-center">
                    {team.map((item, index) => (
                        <li key={item.topic} className="animate-fade-in w-full flex flex-col" style={{animationDelay: `${index * 0.1}s`}}>
                            <div className="group transform hover:scale-105 transition-all duration-300">
                                <PersonCard avatar={item.avatar} name={item.name} title={item.title} />
                            </div>
                            <div className="mt-6 p-6 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-2xl shadow-xl border border-indigo-200 dark:border-indigo-800 hover:border-indigo-400 dark:hover:border-indigo-500 transition-all duration-300 flex-1 min-h-[200px] flex flex-col justify-between">
                                <div className="text-gray-900 dark:text-white text-base sm:text-lg font-bold mb-3 text-center">{item.topic}</div>
                                <div className="flex items-center justify-center gap-2 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-3">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span>{item.day}</span>
                                    <span className="text-gray-400">&bull;</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>{item.time}</span>
                                </div>
                                <div className="text-gray-600 dark:text-gray-400 text-sm italic text-center px-2 py-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg">
                                    “{item.message}”
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
    )
}