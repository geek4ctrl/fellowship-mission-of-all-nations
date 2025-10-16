"use client"
import PersonCard from "./PersonCard";

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
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="max-w-xl mx-auto sm:text-center">
                    <h3 className="text-gray-800 dark:text-white text-3xl font-semibold sm:text-4xl">
                        Our team
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-3 font-normal">
                        Within our church team, a close-knit assembly of passionate individuals stands united by a profound connection of faith and love. Our shared commitment extends beyond the confines of our congregation, reaching into the heart of the community we serve. Fueled by a collective desire to create positive change, we engage in worship, outreach, and unwavering support. In this harmonious collaboration, we cultivate an environment that reflects the essence of togetherness, compassion, and a common purpose. Together, as a dedicated force, we strive to make a lasting impact, guided by the principles of faith that bind us and the love that propels us forward.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                        {team.map((item) => (
                            <li key={item.name}>
                                <PersonCard avatar={item.avatar} name={item.name} title={item.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}