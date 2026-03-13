'use client';
import { useEffect, useState } from 'react';

export default function ScrollToTopButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 300);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to top"
            className={`fixed cursor-pointer bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-[#e50808] text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-[#c40707] hover:scale-110 active:scale-95 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 cursor-pointer'
            }`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19V5" />
                <path d="M5 12l7-7 7 7" />
            </svg>
        </button>
    );
}