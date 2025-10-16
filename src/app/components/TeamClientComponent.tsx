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
    <section className="relative py-24 bg-gradient-to-br from-indigo-50 via-pink-50 to-purple-100 dark:from-black dark:via-purple-950 dark:to-gray-950 overflow-hidden" id="team">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-pink-300 dark:bg-pink-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-indigo-300 dark:bg-indigo-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-500 to-pink-500 text-white text-sm font-semibold rounded-full shadow-lg mb-4">👥 Meet Our Team</div>
                <h3 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-800 dark:from-indigo-200 dark:via-purple-300 dark:to-pink-300 bg-clip-text text-transparent mb-4">
                    Our team
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mt-4 text-lg font-normal leading-relaxed">
                    Within our church team, a close-knit assembly of passionate individuals stands united by a profound connection of faith and love. Our shared commitment extends beyond the confines of our congregation, reaching into the heart of the community we serve. Fueled by a collective desire to create positive change, we engage in worship, outreach, and unwavering support. In this harmonious collaboration, we cultivate an environment that reflects the essence of togetherness, compassion, and a common purpose. Together, as a dedicated force, we strive to make a lasting impact, guided by the principles of faith that bind us and the love that propels us forward.
                </p>
            </div>
            <div className="mt-20">
                <ul className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 items-start justify-items-center">
                    {team.map((item, index) => (
                        <li key={item.name} className="animate-fade-in w-full flex justify-center" style={{animationDelay: `${index * 0.15}s`}}>
                            <PersonCard avatar={item.avatar} name={item.name} title={item.title} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
    )
}