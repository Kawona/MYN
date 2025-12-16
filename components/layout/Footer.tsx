"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FC } from "react";

const Footer: FC = () => {
    return (
        <footer className="bg-[#0B3D91] text-white py-10 mt-16">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* LEFT — Logo & Description */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h2 className="text-xl font-extrabold tracking-wide text-[#FFCC00]">
                        Meridian Youth Network
                    </h2>

                    <p className="text-sm mt-2 opacity-90 max-w-xs">
                        Empowering Youth through Innovation and Leadership.
                    </p>

                    <p className="text-xs mt-4 opacity-80">
                        © {new Date().getFullYear()} Meridian Youth Network. All rights reserved.
                    </p>

                    {/* Sponsor Logo */}
                    <div className="mt-4">
                        <Image
                            src="/images/Sponsor/mimLife.png"
                            alt="Mim Life Logo"
                            width={90}
                            height={90}
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* CENTER — Quick Links */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-lg font-semibold text-[#FFCC00] mb-3">
                        Quick Links
                    </h3>

                    <ul className="flex flex-col gap-2 text-sm opacity-90">
                        {[
                            { name: "Home", href: "/" },
                            { name: "About", href: "/about" },
                            { name: "Support", href: "/support" },
                            { name: "Contact", href: "/contact" },
                            { name: "Events", href: "/events" },
                        ].map(link => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="hover:text-[#FFCC00] transition duration-300"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* RIGHT — Social Media */}
                <div className="flex flex-col items-center md:items-end">
                    <h3 className="text-lg font-semibold text-[#FFCC00] mb-3">
                        Follow Us
                    </h3>

                    <div className="flex gap-5 text-white">
                        <a
                            href="https://www.facebook.com/story.php?story_fbid=1139063421567434&id=100063913599154"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#FFCC00] hover:scale-110 transition-all duration-300"
                        >
                            <FaFacebook size={22} />
                        </a>

                        <a
                            href="https://www.instagram.com/p/DHLNKtngvFz/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#FFCC00] hover:scale-110 transition-all duration-300"
                        >
                            <FaInstagram size={22} />
                        </a>

                        <a
                            href="https://x.com/meridianyouthtm/status/1897242484784419286?s=46"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#FFCC00] hover:scale-110 transition-all duration-300"
                        >
                            <FaTwitter size={22} />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
