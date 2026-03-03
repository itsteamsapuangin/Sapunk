import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Page Not Found (404)',
    description:
        'The page you are looking for does not exist. Return to ITS Team Sapuangin homepage.',
    robots: {
        index: false,
        follow: true,
    },
};

function NotFound() {
    return (
        <div className="w-full h-screen bg-white flex flex-col gap-6 justify-center items-center">
            <Image
                src="/not-found.png"
                alt="Page not found — ITS Team Sapuangin"
                width={600}
                height={600}
                className="h-80 w-auto object-contain transition-all duration-300"
                priority
            />
            <Link
                href="/"
                className="shrink-0 rounded-md border border-[#e50808] px-4 py-2 text-lg font-black tracking-tight text-[#e50808] transition-colors hover:bg-[#e50808] hover:text-white"
                aria-label="Back to homepage"
            >
                Back to Homepage
            </Link>
        </div>
    );
}

export default NotFound;
