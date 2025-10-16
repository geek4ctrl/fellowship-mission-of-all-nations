"use client"
import Image from "next/image";

export default function TeamClientComponent() {

    const team = [
        {
            avatar: "https://res.cloudinary.com/dhqvb8wbn/image/upload/v1699170099/z26ls5vhnz8sf0x6d5jp.jpg",
            name: "Pastor Ezekiel Kiti",
            title: "Senior Pastor"
        },
        {
            avatar: "https://res.cloudinary.com/dhqvb8wbn/image/upload/v1701681904/vqovpf1rqte6byixafrs.jpg",
            name: "Pastor Maghalie Kiti",
            title: "Senior Pastor"
        },
        {
            avatar: "https://res.cloudinary.com/dhqvb8wbn/image/upload/v1701681903/j7hjqhvjiyzwspkp1exw.jpg",
            name: "Prophet Nathan",
            title: "Intermediate Pastor"
        },
        {
            avatar: "https://res.cloudinary.com/dhqvb8wbn/image/upload/v1701682233/x5z1dhbnibduyfyv9tua.webp",
            name: "Pastor Marie",
            title: "Intermediate Pastor"
        },
        {
            avatar: "https://res.cloudinary.com/dhqvb8wbn/image/upload/v1701681903/g03b8vv93o1911tnwsai.jpg",
            name: "Pastor Felix",
            title: "Junior Pastor"
        },
        {
            avatar: "https://res.cloudinary.com/dhqvb8wbn/image/upload/v1701682235/wmpotsuiixv3z9x67cuy.jpg",
            name: "Pastor Pepe",
            title: "Junior Pastor"
        },
    ]

    return (
    <section className="py-14 bg-white dark:bg-black" id="team">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl mx-auto sm:text-center">
                    <h3 className="text-gray-800 dark:text-white text-3xl font-semibold sm:text-4xl">
                        Our team
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-3">
                        Within our church team, a close-knit assembly of passionate individuals stands united by a profound connection of faith and love. Our shared commitment extends beyond the confines of our congregation, reaching into the heart of the community we serve. Fueled by a collective desire to create positive change, we engage in worship, outreach, and unwavering support. In this harmonious collaboration, we cultivate an environment that reflects the essence of togetherness, compassion, and a common purpose. Together, as a dedicated force, we strive to make a lasting impact, guided by the principles of faith that bind us and the love that propels us forward.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                        {
                            team.map((item, idx) => (
                                <li key={item.name} className="bg-white dark:bg-gray-900 rounded-[2rem] shadow-lg border border-gray-200 dark:border-gray-800 p-4 sm:p-6 flex flex-col items-center w-full max-w-xs mx-auto transition-all duration-300 hover:shadow-xl">
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
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}