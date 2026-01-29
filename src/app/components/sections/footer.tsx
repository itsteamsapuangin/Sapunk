'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="px-12 md:px-0 relative w-full bg-black text-white overflow-hidden border-t border-foreground/10">
            <div className="absolute inset-0 lg:bottom-20 lg:left-20 opacity-50">
                <Image
                    src="/asset/race-outline.png"
                    alt="Race Outline"
                    width={438}
                    height={1099.53}
                    className="h-auto max-w-full"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col container gap-4 md:gap-8 mx-auto py-12 lg:py-16">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-8">
                    {/* Left Side: Logo and Address */}
                    <div className="w-full lg:w-3/4 text-center lg:text-left">
                        <div className="flex flex-col items-center lg:items-start mb-6">
                            <Image
                                src="/logo/its.png"
                                alt="ITS Logo"
                                width={352}
                                height={74}
                                className="px-4 md:px-0 h-auto max-w-full"
                            />
                        </div>

                        <div className="space-y-4">
                            <div>
                                <h4 className="text-lg font-semibold">ITS Team Sapuangin</h4>
                                <p className="text-lg font-semibold">
                                    Head Office Building A, 2nd Floor
                                </p>
                            </div>
                            <p className="text-sm text-gray-300 leading-relaxed max-w-md mx-auto lg:mx-0">
                                Department of Mechanical Engineering
                                <br />
                                Sepuluh Nopember Institute of Technology · ITS
                                <br />
                                Sukolilo Campus Area, Surabaya, 60111
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Navigation Grid */}
                    <div className="w-full lg:w-1/4 flex flex-col justify-center gap-8 lg:gap-12 text-center lg:text-left">
                        {/* Row 1: About Us and Navigations */}
                        <div className="flex flex-col md:flex-row w-full items-center md:items-start justify-center w-fit gap-12">
                            {/* About Us Links */}
                            <div className="lg:w-full md:w-1/2 w-fit">
                                <h4 className="text-lg font-bold mb-4">About Us</h4>
                                <ul className="space-y-4">
                                    <li>
                                        <Link
                                            href="/team"
                                            className="text-base text-white hover:text-gray-300 transition-colors"
                                        >
                                            Team
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/cars"
                                            className="text-base text-white hover:text-gray-300 transition-colors"
                                        >
                                            Cars
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/achievements"
                                            className="text-base text-white hover:text-gray-300 transition-colors"
                                        >
                                            Achievements
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/competition"
                                            className="text-base text-white hover:text-gray-300 transition-colors"
                                        >
                                            Competition
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/gallery"
                                            className="text-base text-white hover:text-gray-300 transition-colors"
                                        >
                                            Gallery
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Navigations Links */}
                            <div className="lg:w-fit md:w-1/2 w-fit">
                                <h4 className="text-lg font-bold mb-4">Navigations</h4>
                                <ul className="space-y-4">
                                    <li>
                                        <Link
                                            href="/news"
                                            className="text-base text-white hover:text-gray-300 transition-colors"
                                        >
                                            News
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/sponsors"
                                            className="text-base text-white hover:text-gray-300 transition-colors"
                                        >
                                            Sponsors
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/recruitment"
                                            className="text-base text-white hover:text-gray-300 transition-colors"
                                        >
                                            Recruitment
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/contact"
                                            className="text-base text-white hover:text-gray-300 transition-colors"
                                        >
                                            Contact Us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Row 2: Social Media */}
                        <div className="flex flex-col md:flex-row items-center lg:justify-between justify-center md:gap-12 gap-4">
                            <h4 className="text-lg font-bold">Social Media</h4>
                            <div className="flex gap-8 justify-center lg:justify-start">
                                <a
                                    href="https://www.linkedin.com/company/its-team-sapuangin"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-70 transition-opacity"
                                    aria-label="LinkedIn"
                                >
                                    <Image
                                        src="/icons/linkedin.svg"
                                        alt="LinkedIn"
                                        width={28}
                                        height={28}
                                        className="w-7 h-7"
                                    />
                                </a>
                                <a
                                    href="https://www.instagram.com/itsteamsapuangin"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-70 transition-opacity"
                                    aria-label="Instagram"
                                >
                                    <Image
                                        src="/icons/instagram.svg"
                                        alt="Instagram"
                                        width={28}
                                        height={28}
                                        className="w-7 h-7"
                                    />
                                </a>
                                <a
                                    href="https://www.tiktok.com/@itsteamsapuangin"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-70 transition-opacity"
                                    aria-label="TikTok"
                                >
                                    <Image
                                        src="/icons/tiktok.svg"
                                        alt="TikTok"
                                        width={28}
                                        height={28}
                                        className="w-7 h-7"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-6 pt-4 lg:pt-0">
                    {/* DOAIBU Logo - Mobile Only */}
                    <div>
                        <Image
                            src="/asset/doaibu.png"
                            alt="DOAIBU Logo"
                            width={375}
                            height={57}
                            className="h-auto w-full max-w-[375px]"
                        />
                    </div>

                    {/* Copyright - Left on Desktop, Center on Mobile */}
                    <p className="text-sm text-gray-400 text-center lg:text-left">
                        Institut Teknologi Sepuluh Nopember © 2026 ITS Team Sapuangin. All Rights
                        Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}
