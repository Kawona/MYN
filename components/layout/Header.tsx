"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, FC } from "react";
import { usePathname } from "next/navigation";

const Header: FC = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Support", href: "/support" },
        { name: "Contact", href: "/contact" },
        { name: "Events", href: "/events" },
    ];

    return (
        <header
            className="
                sticky top-0 z-50 w-full 
                bg-[#0B3D91] 
                shadow-lg 
                flex items-center justify-between
                px-4 md:px-8
                h-20
            "
        >
            {/* Logo */}
            <div className="flex items-center gap-3">
                <Link href="/">
                    <Image
                        src="/images/logo/mynLogo.jpg"
                        alt="MYN Logo"
                        width={80}
                        height={80}
                        className="cursor-pointer"
                        priority
                    />
                </Link>

                
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex justify-center flex-1">
                <ul className="flex gap-10">
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`
                                    text-white text-lg font-semibold transition-all duration-200
                                    hover:text-[#FFCC00]
                                    ${pathname === link.href ? "text-[#FFCC00]" : ""}
                                `}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Desktop Donate Button */}
            <div className="hidden md:block">
                <Link
                    href="/support"
                    className="
                        bg-[#FFCC00] text-[#0B3D91] 
                        px-8 py-3 rounded-full 
                        font-bold shadow-md
                        hover:bg-yellow-300 
                        active:bg-yellow-400
                        transition-all duration-300
                    "
                >
                    Donate
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                className="md:hidden focus:outline-none text-[#FFCC00]"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-9 w-9"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

            {/* Mobile Menu */}
            {isOpen && (
                <div
                    className="
                        absolute top-20 left-0 w-full 
                        bg-[#0B3D91]
                        shadow-xl 
                        md:hidden z-50
                        animate-slide-down
                    "
                >
                    <ul className="flex flex-col items-center gap-6 py-6">
                        {links.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`
                                        text-white text-lg font-medium transition-all duration-200
                                        hover:text-[#FFCC00]
                                        ${pathname === link.href ? "text-[#FFCC00]" : ""}
                                    `}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}

                        {/* Mobile Donate Button */}
                        <li>
                            <Link
                                href="/support"
                                className="
                                    bg-[#FFCC00] text-[#0B3D91]
                                    px-6 py-2 rounded-full
                                    shadow-md
                                    hover:bg-yellow-300 
                                    active:bg-yellow-400
                                    transition-all duration-300
                                "
                                onClick={() => setIsOpen(false)}
                            >
                                Donate
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
