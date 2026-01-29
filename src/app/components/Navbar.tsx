'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { href: '/team', label: 'Team' },
        { href: '/cars', label: 'Cars' },
        { href: '/achievements', label: 'Achievements' },
        { href: '/gallery', label: 'Gallery' },
        { href: '/news', label: 'News' },
        { href: '/sponsors', label: 'Sponsors' },
        { href: '/contact', label: 'Contact Us' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] bg-transparent">
            <div className="hidden md:block h-fit">
                <div className="container mx-auto h-full py-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center hover:opacity-80 transition-opacity"
                    >
                        <div className="relative h-16 w-auto">
                            <Image
                                src="/logo/sapuangin-white.png"
                                alt="ITS Team Sapuangin"
                                width={200}
                                height={64}
                                className="h-12 w-auto object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div className="flex items-center gap-12">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="relative text-white text-sm font-medium group"
                            >
                                <span className="transition-colors duration-200 group-hover:text-[#E50808]">
                                    {link.label}
                                </span>
                                {/* Simple underline from center */}
                                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#E50808] transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Navbar - 60px height */}
            <div className="md:hidden h-[80px]">
                <div className="container mx-auto h-full px-8 flex items-center justify-between">
                    {/* Mobile Logo */}
                    <Link
                        href="/"
                        className="flex items-center hover:opacity-80 transition-opacity"
                    >
                        <div className="relative h-fill w-auto">
                            <Image
                                src="/logo/sapuangin-white.png"
                                alt="ITS Team Sapuangin"
                                width={150}
                                height={40}
                                className="h-8 w-auto object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            // Close Icon
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            // Hamburger Icon
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                <div
                    className={`absolute top-[60px] left-0 right-0 bg-black/95 backdrop-blur-md transition-all duration-300 ease-in-out ${
                        isMobileMenuOpen
                            ? 'max-h-screen opacity-100'
                            : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
                >
                    <div className="container mx-auto px-4 py-4">
                        <div className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="relative text-white px-4 py-3 rounded-lg text-sm font-medium group transition-all duration-200 hover:bg-[#E50808]/10"
                                >
                                    <span className="transition-colors duration-200 group-hover:text-[#E50808]">
                                        {link.label}
                                    </span>
                                    {/* Simple left accent */}
                                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-1/2 bg-[#E50808] transition-all duration-200 ease-out group-hover:w-1"></span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
