import React from 'react';
import Link from 'next/link';

function NotFound() {
    return (
        <div className="w-full h-screen flex flex-col gap-6 justify-center items-center">
            <h1 className="text-bold text-5xl font-bold">404</h1>
            <p className="font-normal text-center">
                Hi the page u are looking for isnt available. <br /> I think u was typo mate.
            </p>

            <Link href="/" className="anim text-sm font-normal text-black/50 hover:text-foreground">
                Go back to home
            </Link>
        </div>
    );
}

export default NotFound;
