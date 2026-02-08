import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function NotFound() {
    return (
        <div className="w-full h-screen bg-black flex flex-col gap-6 justify-center items-center">
            <Image
                src="/not-found.png"
                alt="ITS Team Sapuangin"
                width={600}
                height={600}
                className="h-80 w-auto object-contain transition-all duration-300"
                priority
            />
        </div>
    );
}

export default NotFound;
