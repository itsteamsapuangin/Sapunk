'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDarkSection, setIsDarkSection] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Change navbar style after scrolling past hero section (typically 400-600px)
            setIsScrolled(window.scrollY > 100);

            // Detect if navbar is over a dark section
            const navbarHeight = 80; // navbar height
            const elementAtNavbar = document.elementFromPoint(
                window.innerWidth / 2,
                navbarHeight / 2
            );

            if (elementAtNavbar) {
                const bgColor = window.getComputedStyle(elementAtNavbar).backgroundColor;
                const parent = elementAtNavbar.closest(
                    'div[class*="bg-black"], div[class*="bg-gray"], section[class*="bg-black"], div[class*="bg-white"], section[class*="bg-white"]'
                );

                // Parse RGB values to determine if background is dark or light
                const rgbaMatch = bgColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
                let isDark = true; // Default to dark

                if (rgbaMatch) {
                    const r = parseInt(rgbaMatch[1]);
                    const g = parseInt(rgbaMatch[2]);
                    const b = parseInt(rgbaMatch[3]);
                    // Calculate luminance - if it's bright (> 128), it's a light background
                    const luminance = (r + g + b) / 3;
                    isDark = luminance < 128;
                }

                // Also check parent classes for explicit bg colors
                if (parent) {
                    if (parent.className.includes('bg-white')) {
                        isDark = false;
                    } else if (parent.className.includes('bg-black') || parent.className.includes('bg-gray')) {
                        isDark = true;
                    }
                }

                setIsDarkSection(isDark);
            }
        };

        handleScroll(); // Initial check
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
        <nav
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isDarkSection
                ? 'bg-white/10 backdrop-blur-md shadow-sm'
                : 'bg-black/20 backdrop-blur-md shadow-sm'
                }`}
        >
            <div className="hidden md:block h-fit">
                <div className="container mx-auto h-full py-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center hover:opacity-80 transition-opacity"
                    >
                        <div className="relative h-fit w-auto">
                            <Image
                                src={
                                    !isDarkSection
                                        ? '/logo/sapuangin-color.png'
                                        : '/logo/sapuangin-white.png'
                                }
                                alt="ITS Team Sapuangin"
                                width={200}
                                height={64}
                                className="h-10 w-auto object-contain transition-all duration-300"
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
                                className={`relative text-md font-medium group transition-colors duration-300 ${!isDarkSection ? 'text-black/80' : 'text-white'
                                    }`}
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
            <div className="md:hidden h-[60px]">
                <div className="container mx-auto h-full px-8 flex items-center justify-between">
                    {/* Mobile Logo */}
                    <Link
                        href="/"
                        className="flex items-center hover:opacity-80 transition-opacity"
                    >
                        <div className="relative h-fill w-auto">
                            <Image
                                src={
                                    !isDarkSection
                                        ? '/logo/sapuangin-color.png'
                                        : '/logo/sapuangin-white.png'
                                }
                                alt="ITS Team Sapuangin"
                                width={150}
                                height={40}
                                className="h-8 w-auto object-contain transition-all duration-300"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`p-2 hover:bg-opacity-10 rounded-lg transition-colors ${!isDarkSection
                            ? 'text-black hover:bg-black'
                            : 'text-white hover:bg-white'
                            }`}
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
                    className={`absolute top-[60px] left-0 right-0 backdrop-blur-md transition-all duration-300 ease-in-out ${!isDarkSection
                            ? 'bg-white/95 shadow-lg'
                            : 'bg-black/95 shadow-sm'
                        } ${isMobileMenuOpen
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
                                    className={`relative px-4 py-3 rounded-lg text-sm font-medium group transition-all duration-200 ${!isDarkSection
                                            ? 'text-black/80 hover:bg-[#E50808]/10'
                                            : 'text-white hover:bg-[#E50808]/10'
                                        }`}
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
