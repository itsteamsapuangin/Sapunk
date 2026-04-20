'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';

type BannerSlide = {
    title: string;
    description: string;
    backgroundImage: string;
    logos: Array<{
        src: string;
        alt: string;
        width: number;
        height: number;
        className: string;
    }>;
};

const SLIDE_INTERVAL_MS = 3500;
const TRANSITION_MS = 700;

export default function ShellFormulaBannerCarousel() {
    const slides = useMemo<BannerSlide[]>(
        () => [
            {
                title: 'Formula Student Japan',
                description:
                    'Formula Student Japan is an international student competition where teams design, build, and race formula-style cars. It evaluates performance, engineering design, cost, and business presentation.',
                backgroundImage: '/page/home/formula-student-japan.png',
                logos: [
                    {
                        src: '/logo/jsae.png',
                        alt: 'JSAE Logo',
                        width: 106.74,
                        height: 43.37,
                        className: 'w-16 md:w-20 lg:w-26.5 h-auto brightness-0 invert',
                    },
                    {
                        src: '/logo/formula-sae.png',
                        alt: 'Formula SAE Japan Logo',
                        width: 98.63,
                        height: 54.2,
                        className: 'w-16 md:w-20 lg:w-[99px] h-auto brightness-0 invert',
                    },
                ],
            },
            {
                title: 'Shell Eco-marathon',
                description:
                    'Shell Eco-marathon is a global competition focused on energy-efficient vehicles. Teams design and build cars to achieve maximum efficiency while promoting innovation and sustainability.',
                backgroundImage: '/page/home/shell-eco-marathon.png',
                logos: [
                    {
                        src: '/page/home/sem-logo.png',
                        alt: 'Shell Eco-marathon Logo',
                        width: 335,
                        height: 80,
                        className: 'w-24 md:w-32 lg:w-64 h-auto brightness-0 invert',
                    },
                ],
            },
        ],
        []
    );

    const [activeIndex, setActiveIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState<number | null>(null);

    useEffect(() => {
        const interval = window.setInterval(() => {
            setPrevIndex(activeIndex);
            setActiveIndex((activeIndex + 1) % slides.length);
        }, SLIDE_INTERVAL_MS);

        return () => {
            window.clearInterval(interval);
        };
    }, [activeIndex, slides.length]);

    useEffect(() => {
        if (prevIndex === null) {
            return;
        }

        const timeout = window.setTimeout(() => {
            setPrevIndex(null);
        }, TRANSITION_MS);

        return () => {
            window.clearTimeout(timeout);
        };
    }, [prevIndex]);

    return (
        <section className="w-full relative" aria-label="Competition banners">
            <div className="relative w-full h-75 md:h-120 lg:h-240 overflow-hidden">
                {slides.map((slide, index) => {
                    const isActive = index === activeIndex;
                    const isPrevious = index === prevIndex;

                    const positionClass = isActive
                        ? 'translate-x-0 opacity-100 z-20'
                        : isPrevious
                          ? 'translate-x-full opacity-100 z-10'
                          : '-translate-x-full opacity-0 z-0';

                    return (
                        <div
                            key={slide.title}
                            className={`absolute inset-0 transition-transform transition-opacity duration-700 ease-in-out ${positionClass}`}
                            aria-hidden={!isActive}
                        >
                            <Image
                                src={slide.backgroundImage}
                                alt={slide.title}
                                fill
                                sizes="(max-width: 1536px) 100vw, 1440px"
                                className="object-cover grayscale"
                                priority={index === 0}
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-14">
                                <div className="container mx-auto">
                                    <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-4 lg:gap-8">
                                        <div className="max-w-2xl">
                                            <h2 className="font-bold text-3xl md:text-4xl lg:text-[56px] text-white tracking-[-1.5px] leading-tight mb-3 md:mb-4">
                                                {slide.title}
                                            </h2>
                                            <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed max-w-xl">
                                                {slide.description}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-3 md:gap-4 shrink-0">
                                            {slide.logos.map((logo) => (
                                                <Image
                                                    key={logo.src}
                                                    src={logo.src}
                                                    alt={logo.alt}
                                                    width={logo.width}
                                                    height={logo.height}
                                                    className={logo.className}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
