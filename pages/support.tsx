"use client";

import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";

const SupportPage: FC = () => {
    return (
        <div className="w-full flex flex-col">

            {/* HEADER IMAGE */}
            <section className="w-full h-[250px] md:h-[380px] lg:h-[450px] relative">
                <Image
                    src="/images/CleaningExercise3/photo3.jpg"
                    alt="Support Meridian Youth Network"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h1 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg">
                        Support Our Mission
                    </h1>
                </div>
            </section>

            {/* SUPPORT OPTIONS GRID */}
            <section className="px-6 md:px-14 lg:px-24 py-20 bg-white">
                <h2 className="text-center text-3xl md:text-4xl font-bold text-[#0B3D91] mb-12">
                    Ways You Can Support Us
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* CARD 1 */}
                    <Link href="../support/donate" className="block group">
                        <div className="
                            flex flex-col items-center text-center p-6 rounded-2xl 
                            bg-gray-50 shadow-md hover:shadow-2xl
                            transition-all duration-300 cursor-pointer
                            border border-gray-200 group-hover:border-[#FFCC00]
                        ">
                            <Image
                                src="/images/landingpage/donationlogo.png"
                                alt="Donate"
                                width={80}
                                height={80}
                                className="mb-4"
                            />
                            <h3 className="text-xl font-semibold text-[#0B3D91] group-hover:text-[#FFCC00]">
                                Donate
                            </h3>
                            <p className="text-gray-600 mt-2">
                                Support our programs and help us reach more youth.
                            </p>
                        </div>
                    </Link>

                    {/* CARD 2 */}
                    <Link href="../support/partner" className="block group">
                        <div className="
                            flex flex-col items-center text-center p-6 rounded-2xl
                            bg-gray-50 shadow-md hover:shadow-2xl
                            transition-all duration-300 cursor-pointer
                            border border-gray-200 group-hover:border-[#FFCC00]
                        ">
                            <Image
                                src="/images/landingpage/Partnericon.webp"
                                alt="Partner"
                                width={80}
                                height={80}
                                className="mb-4"
                            />
                            <h3 className="text-xl font-semibold text-[#0B3D91] group-hover:text-[#FFCC00]">
                                Partner With Us
                            </h3>
                            <p className="text-gray-600 mt-2">
                                Collaborate with us to create sustainable impact.
                            </p>
                        </div>
                    </Link>

                    {/* CARD 3 */}
                    <Link href="../support/volunteer" className="block group">
                        <div className="
                            flex flex-col items-center text-center p-6 rounded-2xl
                            bg-gray-50 shadow-md hover:shadow-2xl
                            transition-all duration-300 cursor-pointer
                            border border-gray-200 group-hover:border-[#FFCC00]
                        ">
                            <Image
                                src="/images/landingpage/VolunteericonII.png"
                                alt="Volunteer"
                                width={80}
                                height={80}
                                className="mb-4"
                            />
                            <h3 className="text-xl font-semibold text-[#0B3D91] group-hover:text-[#FFCC00]">
                                Volunteer
                            </h3>
                            <p className="text-gray-600 mt-2">
                                Donate your time and skills to our initiatives.
                            </p>
                        </div>
                    </Link>

                </div>
            </section>

            {/* IMPACT SECTION */}
            <section className="px-6 md:px-12 lg:px-24 py-20 bg-[#0B3D91] text-center text-white">
                <h1 className="text-2xl md:text-4xl font-bold leading-tight max-w-3xl mx-auto">
                    Over <span className="text-[#FFCC00] font-extrabold">1,000+</span> 
                    youth and children reached through our programs
                </h1>

                <p className="mt-6 text-white/90 max-w-xl mx-auto">
                    Your support helps us expand our reach and create lasting change across communities.
                </p>

                <Link
                    href="./support/donate"
                    className="
                        inline-block mt-10 bg-[#FFCC00] text-[#0B3D91] px-10 py-4 
                        rounded-full font-bold shadow-md
                        hover:bg-yellow-300 active:bg-yellow-400
                        transition duration-300
                    "
                >
                    Donate Today
                </Link>
            </section>

        </div>
    );
};

export default SupportPage;
