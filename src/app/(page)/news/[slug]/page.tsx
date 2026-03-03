import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { JsonLd, articleJsonLd, breadcrumbJsonLd } from '@/lib/seo/jsonld';
import Breadcrumb from '@/app/components/Breadcrumb';

export const metadata: Metadata = {
    title: 'Behind the Glorious World Champions in London 2018',
    description:
        "Read about ITS Team Sapuangin's historic journey to becoming World Champions at the 2018 Shell Eco-marathon Drivers' World Championship in London.",
    openGraph: {
        title: 'Behind the Glorious World Champions in London 2018 | ITS Team Sapuangin',
        description:
            "The story behind ITS Team Sapuangin's historic World Championship victory in London 2018.",
        url: '/news/behind-the-glorious-world-champions-in-london-2018',
        type: 'article',
        images: [
            {
                url: '/page/news/detail/img-news.png',
                width: 1200,
                height: 630,
                alt: 'ITS Team Sapuangin World Champions London 2018',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Behind the Glorious World Champions in London 2018',
        description:
            "The story behind ITS Team Sapuangin's historic World Championship victory in London 2018.",
        images: ['/page/news/detail/img-news.png'],
    },
    alternates: {
        canonical: '/news/behind-the-glorious-world-champions-in-london-2018',
    },
};

export default function NewsDetailPage() {
    return (
        <div className="bg-white flex flex-col items-center w-full overflow-x-hidden">
            <JsonLd
                data={articleJsonLd({
                    title: 'Behind the Glorious World Champions in London 2018',
                    description:
                        "ITS Team Sapuangin's historic journey to becoming World Champions at the 2018 Shell Eco-marathon.",
                    url: '/news/behind-the-glorious-world-champions-in-london-2018',
                    image: '/page/news/detail/img-news.png',
                    datePublished: '2024-01-17',
                    authorName: 'Prana Ali Basyah',
                })}
            />
            <JsonLd
                data={breadcrumbJsonLd([
                    { name: 'Home', href: '/' },
                    { name: 'News', href: '/news' },
                    {
                        name: 'Behind the Glorious World Champions in London 2018',
                        href: '/news/behind-the-glorious-world-champions-in-london-2018',
                    },
                ])}
            />
            {/* Sapang Times Banner */}
            <div className="h-50 mt-16 md:h-70 lg:h-93.75 overflow-hidden relative w-full bg-white flex items-center justify-center">
                <div className="relative w-80 md:w-120 lg:w-162.5 h-25 md:h-35.5 lg:h-48.25">
                    <Image
                        src="/page/news/detail/sapang-times.png"
                        alt="Sapang Times"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </div>

            {/* Hero News Image */}
            <div className="relative w-full h-75 md:h-125 lg:h-204.25 overflow-hidden bg-[#e50808]">
                <Image
                    src="/page/news/detail/img-news.png"
                    alt="News Hero"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-linear-to-b from-transparent from-39% to-black to-111%" />
            </div>

            {/* Content Section */}
            <div className="bg-white w-full rounded-t-lg relative overflow-hidden">
                <div className="max-w-258.25 mx-auto px-5 md:px-10 lg:px-0 pt-8 md:pt-10 lg:pt-11.25 pb-12 md:pb-16 lg:pb-20">
                    {/* Breadcrumb Navigation */}
                    <div className="mb-6">
                        <Breadcrumb
                            items={[
                                { name: 'Home', href: '/' },
                                { name: 'News', href: '/news' },
                                {
                                    name: 'Behind the Glorious World Champions in London 2018',
                                    href: '/news/behind-the-glorious-world-champions-in-london-2018',
                                },
                            ]}
                            skipJsonLd
                        />
                    </div>

                    {/* Back Button */}
                    <div className="flex gap-4 md:gap-5 lg:gap-6 items-center mb-8 md:mb-10 lg:mb-13.5">
                        <Link
                            href="/news"
                            aria-label="Go back to news listing"
                            className="border border-[#a0a0a0] rounded-[6.356px] p-1.5 md:p-2 flex items-center justify-center hover:bg-gray-50 transition-colors"
                        >
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#5d5d5d"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </Link>
                        <span className="font-medium text-base md:text-xl text-[#5d5d5d] tracking-[-0.72px]">
                            Previous
                        </span>
                    </div>

                    {/* Title & Meta */}
                    <div className="flex flex-col gap-3 md:gap-4 mb-0">
                        <h1 className="font-extrabold text-2xl md:text-4xl lg:text-5xl text-black leading-snug">
                            Behind the Glorius World Champions in London 2018
                        </h1>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-3 sm:gap-0">
                            <p className="font-medium text-base md:text-lg text-[#c8c8c8]">
                                17 January 2024
                            </p>
                            <div className="bg-[#e51717] px-2 md:px-4 py-1 md:py-2 rounded-md">
                                <span className="font-bold text-sm md:text-md text-white">
                                    Shell Eco-marathon
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Divider + Article Body */}
                    <div className="pt-5 md:pt-6 lg:pt-5.75 flex flex-col gap-6 md:gap-7 lg:gap-8.25">
                        <div className="w-full h-px bg-[#bebebe]" />

                        {/* Article Text Block 1 */}
                        <div className="text-[#5d5d5d] text-base md:text-lg font-normal">
                            <p className="mb-0">
                                Behind every victory stands a team of dedicated students from
                                Institut Teknologi Sepuluh Nopember. We combine skills in
                                engineering, design, and strategy to deliver world-class results.
                            </p>
                            <p className="mt-5 md:mt-6 lg:mt-7 mb-0">
                                To understand how China&apos;s economy is now experiencing both the
                                best and the worst of times, consider the port city of Ningbo, a
                                two-hour drive south of Shanghai.
                            </p>
                            <p className="mt-5 md:mt-6 lg:mt-7 mb-0">
                                Ningbo&apos;s vast port handles 150,000 ships a year and is the
                                world&apos;s largest by cargo tonnage. A seemingly endless armada of
                                tankers and bulk carriers arrives to discharge imported oil and
                                grain, while other vessels pick up tens of thousands of containers
                                daily.
                            </p>
                            <p className="mt-0 mb-0">
                                Departing ships are packed with manufactured goods headed for global
                                markets. Enormous car carriers, essentially{' '}
                                <a
                                    href="https://www.nytimes.com/2023/09/06/business/china-car-exports.html"
                                    className="underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    floating parking lots
                                </a>{' '}
                                with a dozen floors, transport China&apos;s rapidly increasing car
                                exports.
                            </p>
                            <p className="mt-5 md:mt-6 lg:mt-7 mb-0">
                                Behind every victory stands a team of dedicated students from
                                Institut Teknologi Sepuluh Nopember. We combine skills in
                                engineering, design, and strategy to deliver world-class results.
                            </p>
                        </div>
                    </div>

                    {/* Inline Article Image */}
                    <div className="flex flex-col gap-3 md:gap-4 items-center my-8 md:my-10 lg:my-8.25">
                        <div className="relative w-full h-55 md:h-95 lg:h-141.25 rounded-lg overflow-hidden">
                            <Image
                                src="/page/news/detail/Img.png"
                                alt="Qatar 2025 Day 2"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-b from-transparent from-53% to-[rgba(0,0,0,0.79)] to-75%" />
                        </div>
                        <p className="font-medium text-xs md:text-sm lg:text-base text-[#989898] text-center tracking-[-0.32px]">
                            Institut Teknologi Sepuluh Nopember © 2026 ITS Team Sapuangin. All
                            Rights Reserved
                        </p>
                    </div>

                    {/* Article Text Block 2 */}
                    <div className="text-[#5d5d5d] text-base md:text-lg font-normal">
                        <p className="mb-0">
                            Behind every victory stands a team of dedicated students from Institut
                            Teknologi Sepuluh Nopember. We combine skills in engineering, design,
                            and strategy to deliver world-class results.
                        </p>
                        <p className="mt-5 md:mt-6 lg:mt-7 mb-0">
                            To understand how China&apos;s economy is now experiencing both the best
                            and the worst of times, consider the port city of Ningbo, a two-hour
                            drive south of Shanghai.
                        </p>
                        <p className="mt-5 md:mt-6 lg:mt-7 mb-0">
                            Ningbo&apos;s vast port handles 150,000 ships a year and is the
                            world&apos;s largest by cargo tonnage. A seemingly endless armada of
                            tankers and bulk carriers arrives to discharge imported oil and grain,
                            while other vessels pick up tens of thousands of containers daily.
                        </p>
                        <p className="mt-0 mb-0">
                            Departing ships are packed with manufactured goods headed for global
                            markets. Enormous car carriers, essentially{' '}
                            <a
                                href="https://www.nytimes.com/2023/09/06/business/china-car-exports.html"
                                className="underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                floating parking lots
                            </a>{' '}
                            with a dozen floors, transport China&apos;s rapidly increasing car
                            exports.
                        </p>
                        <p className="mt-5 md:mt-6 lg:mt-7 mb-0">
                            Behind every victory stands a team of dedicated students from Institut
                            Teknologi Sepuluh Nopember. We combine skills in engineering, design,
                            and strategy to deliver world-class results.
                        </p>
                    </div>

                    {/* Proposal Download Link */}
                    <div className="flex gap-3 md:gap-4 items-center mt-8 md:mt-10 lg:mt-8.25">
                        <svg
                            width="20"
                            height="26"
                            viewBox="0 0 25 31"
                            fill="none"
                            className="shrink-0"
                        >
                            <path
                                d="M15.625 0H3.125C1.40625 0 0.015625 1.39375 0.015625 3.1L0 27.9C0 29.6063 1.39063 31 3.10938 31H21.875C23.5938 31 25 29.6063 25 27.9V9.3L15.625 0ZM18.75 24.8H6.25V21.7H18.75V24.8ZM18.75 18.6H6.25V15.5H18.75V18.6ZM14.0625 10.85V2.325L22.6563 10.85H14.0625Z"
                                fill="#E50808"
                            />
                        </svg>
                        <a
                            href="#"
                            className="font-bold text-base md:text-lg text-[#e50808] hover:underline"
                        >
                            Proposal Sponsorship.pdf
                        </a>
                    </div>

                    {/* Credit */}
                    <div className="mt-8 md:mt-10 lg:mt-8.25">
                        <p className="font-normal text-sm md:text-base text-[#5d5d5d] leading-normal">
                            Credit: Prana Ali Basyah, ITS Team Sapuangin, 2025.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
