'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function WelcomeScreen() {
    const [stage, setStage] = useState<'dark' | 'flying' | 'formed' | 'fadeout' | 'complete'>(
        'dark'
    );
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Check if user has already seen the welcome screen in this session
        const hasSeenWelcome = sessionStorage.getItem('hasSeenWelcome');

        if (hasSeenWelcome) {
            setIsVisible(false);
            setStage('complete');
            return;
        }

        // Animation sequence
        const timers: NodeJS.Timeout[] = [];

        // Animation sequence timers

        // Stage 1: Dark screen (200ms)
        timers.push(
            setTimeout(() => {
                setStage('flying');
            }, 200)
        );

        // Stage 2: Logo fades in (600ms)
        timers.push(
            setTimeout(() => {
                setStage('formed');
            }, 800)
        );

        // Stage 3: Hold the formed logo (700ms)
        timers.push(
            setTimeout(() => {
                setStage('fadeout');
            }, 1500)
        );

        // Stage 4: Fade out (600ms)
        timers.push(
            setTimeout(() => {
                setStage('complete');
                setIsVisible(false);
                sessionStorage.setItem('hasSeenWelcome', 'true');
            }, 2100)
        );

        return () => {
            timers.forEach((timer) => clearTimeout(timer));
        };
    }, []);

    if (!isVisible) {
        return null;
    }

    // Get logo opacity based on animation stage
    const getLogoOpacity = () => {
        if (stage === 'dark') {
            return 0;
        } else if (stage === 'flying') {
            return 1;
        } else {
            return 1;
        }
    };

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity ${
                stage === 'fadeout' ? 'opacity-0' : 'opacity-100'
            }`}
            style={{
                transitionDuration: stage === 'fadeout' ? '800ms' : '500ms',
            }}
        >
            {/* Logo Container */}
            <div className="relative flex items-center justify-center w-full h-full overflow-hidden">
                {/* Sapuangin Logo */}
                <div
                    className="relative w-20 h-20 transition-opacity ease-out"
                    style={{
                        opacity: getLogoOpacity(),
                        transitionDuration: stage === 'flying' ? '800ms' : '0ms',
                    }}
                >
                    <Image
                        src="/asset/OG-square.png"
                        alt="Sapuangin Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </div>
        </div>
    );
}
