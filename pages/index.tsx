

import Image from "next/image";
import { FC } from "react";

const HomePage: FC = () => {
    return (
        <div className="flex flex-col w-full min-h-screen">

       

            {/* HERO SECTION */}
            <section className="relative w-full h-[100vh]">
                <Image
                    src="/images/cleaningFigma/CleaningFigma7.jpg"
                    alt="MYN Hero"
                    fill
                    priority
                    className="object-cover"
                />

                <div className="absolute inset-0  flex flex-col items-center justify-center text-center px-6">
                    <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg">
                        Meridian Youth Network
                    </h1>

                    <p className="text-white/90 text-lg md:text-2xl mt-5 max-w-2xl leading-relaxed">
                        Empowering young people through innovation, leadership, and sustainable community impact.
                    </p>
                </div>
            </section>

            {/* WHO WE ARE */}
            <section id="about" className="py-20 px-6 md:px-16 bg-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

                    {/* IMAGE */}
                    <div className="flex justify-center">
                        <div className="w-full md:w-4/5 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
                            <Image
                                src="/images/CleaningExercise2/Cleanup7.jpg"
                                alt="Cleanup Exercise"
                                width={700}
                                height={500}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* TEXT */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0B3D91] mb-4">
                            Who We Are
                        </h2>

                        <p className="text-gray-700 text-lg leading-relaxed">
                            Meridian Youth Network (MYN) is dedicated to empowering young people through mentorship,
                            education, leadership, and community development initiatives.
                            <br /><br />
                            We believe in creating a space where youth can connect, collaborate, and lead positive
                            change across Africa and beyond.
                        </p>
                    </div>
                </div>
            </section>

            {/* FOCUS AREAS */}
            <section id="focus" className="py-20 px-6 md:px-16 bg-white">
                <h2 className="text-3xl md:text-4xl text-center font-bold text-[#0B3D91] mb-12">
                    Our Focus Areas
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {[
                        { img: "/images/LandingPage/jobseeking.webp", text: "Youth Employment" },
                        { img: "/images/girlchild/girlchild.png", text: "Girl Child Empowerment" },
                        { img: "/images/cleaningFigma/cleaningimpact.png", text: "Environmental Impact" },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
                        >
                            <Image
                                src={item.img}
                                alt={item.text}
                                width={700}
                                height={200}
                                className="w-full h-[300px] object-contain group-hover:scale-110 transition-transform duration-700"
                            />

                            <p className="absolute bottom-0 left-0 right-0 bg-black/40 text-white text-center py-3 text-lg font-semibold">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* VALUES SECTION */}
            <section id="values" className="py-20 px-6 md:px-16 bg-[#0B3D91] text-white">
                <h2 className="text-3xl md:text-4xl text-center font-bold text-[#FFCC00] mb-12">
                    What We Stand For
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
                    {[
                        {
                            title: "Empowerment",
                            desc: "We equip young people with the skills, confidence, and opportunities they need to thrive.",
                        },
                        {
                            title: "Collaboration",
                            desc: "Building strong partnerships that create meaningful opportunities for community growth.",
                        },
                        {
                            title: "Sustainability",
                            desc: "Driving long-term impact through responsible initiatives and global awareness.",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white/10 p-8 rounded-2xl hover:bg-white/20 transition-all duration-300"
                        >
                            <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                            <p className="text-white/85 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>


        </div>
    );
};

export default HomePage;
