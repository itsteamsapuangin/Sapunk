'use client';

import Image from 'next/image';
import { useState } from 'react';

// --- Types ---
type CategoryId = 'all' | 'shell-eco-marathon' | 'formula-student' | 'activities' | 'sponsorship';

interface FilterCategory {
    id: CategoryId;
    label: string;
    activeColor: string;
    borderColor: string;
    textColor: string;
}

interface NewsArticle {
    id: number;
    categoryId: CategoryId;
    categoryLabel: string;
    categoryColor: string;
    title: string;
    excerpt: string;
    date: string;
    image: string;
}

// --- Data ---
const FILTER_CATEGORIES: FilterCategory[] = [
    {
        id: 'all',
        label: 'All',
        activeColor: 'bg-black',
        borderColor: 'border-black',
        textColor: 'text-black',
    },
    {
        id: 'shell-eco-marathon',
        label: 'Shell Eco-marathon',
        activeColor: 'bg-[#e51717]',
        borderColor: 'border-[#e51717]',
        textColor: 'text-[#e51717]',
    },
    {
        id: 'formula-student',
        label: 'Formula Student',
        activeColor: 'bg-[#0d82d1]',
        borderColor: 'border-[#0d82d1]',
        textColor: 'text-[#0d82d1]',
    },
    {
        id: 'activities',
        label: 'Activities',
        activeColor: 'bg-[#ebaa01]',
        borderColor: 'border-[#ebaa01]',
        textColor: 'text-[#ebaa01]',
    },
    {
        id: 'sponsorship',
        label: 'Sponsorship',
        activeColor: 'bg-[#872ebe]',
        borderColor: 'border-[#872ebe]',
        textColor: 'text-[#872ebe]',
    },
];

const NEWS_ARTICLES: NewsArticle[] = [
    {
        id: 1,
        categoryId: 'sponsorship',
        categoryLabel: 'Ini Lho ITS! 2026',
        categoryColor: '#872ebe',
        title: 'World Champions in London 2018',
        excerpt:
            'Behind every victory stands a team of dedicated students from Institut Teknologi Sepuluh Nopember. We combine skills in engineering, design, and strategy to deliver world-class results.',
        date: '17 January 2024',
        image: '/page/news/news-fsae.png',
    },
    {
        id: 2,
        categoryId: 'shell-eco-marathon',
        categoryLabel: 'Shell Eco-marathon',
        categoryColor: '#e51717',
        title: 'World Champions in London 2018',
        excerpt:
            "In 2018, ITS Team Sapuangin made history as the first and only team from Indonesia to win the Drivers' World Championship in London. This achievement marked a ...",
        date: '17 January 2024',
        image: '/page/news/news-team-photo.png',
    },
    {
        id: 3,
        categoryId: 'formula-student',
        categoryLabel: 'Formula Student',
        categoryColor: '#0d82d1',
        title: 'World Champions in London 2018',
        excerpt:
            'Behind every victory stands a team of dedicated students from Institut Teknologi Sepuluh Nopember. We combine skills in engineering, design, and strategy to deliver world-class results.',
        date: '17 January 2024',
        image: '/page/news/news-qatar-day4.png',
    },
    {
        id: 4,
        categoryId: 'sponsorship',
        categoryLabel: 'Ini Lho ITS! 2026',
        categoryColor: '#872ebe',
        title: 'World Champions in London 2018',
        excerpt:
            'Behind every victory stands a team of dedicated students from Institut Teknologi Sepuluh Nopember. We combine skills in engineering, design, and strategy to deliver world-class results.',
        date: '17 January 2024',
        image: '/page/news/news-qatar-day4.png',
    },
    {
        id: 5,
        categoryId: 'shell-eco-marathon',
        categoryLabel: 'Shell Eco-marathon',
        categoryColor: '#e51717',
        title: 'World Champions in London 2018',
        excerpt:
            "In 2018, ITS Team Sapuangin made history as the first and only team from Indonesia to win the Drivers' World Championship in London. This achievement marked a ...",
        date: '17 January 2024',
        image: '/page/news/news-qatar-day3.png',
    },
    {
        id: 6,
        categoryId: 'shell-eco-marathon',
        categoryLabel: 'Shell Eco-marathon',
        categoryColor: '#e51717',
        title: 'World Champions in London 2018',
        excerpt:
            "In 2018, ITS Team Sapuangin made history as the first and only team from Indonesia to win the Drivers' World Championship in London. This achievement marked a ...",
        date: '17 January 2024',
        image: '/page/news/news-qatar-day3.png',
    },
    {
        id: 7,
        categoryId: 'shell-eco-marathon',
        categoryLabel: 'Shell Eco-marathon',
        categoryColor: '#e51717',
        title: 'World Champions in London 2018',
        excerpt:
            "In 2018, ITS Team Sapuangin made history as the first and only team from Indonesia to win the Drivers' World Championship in London. This achievement marked a ...",
        date: '17 January 2024',
        image: '/page/news/news-qatar-day2.png',
    },
    {
        id: 8,
        categoryId: 'shell-eco-marathon',
        categoryLabel: 'Shell Eco-marathon',
        categoryColor: '#e51717',
        title: 'World Champions in London 2018',
        excerpt:
            "In 2018, ITS Team Sapuangin made history as the first and only team from Indonesia to win the Drivers' World Championship in London. This achievement marked a ...",
        date: '17 January 2024',
        image: '/page/news/hero-news.png',
    },
];

// --- Sub-Components ---

/** Category badge pill */
function CategoryBadge({ label, color }: { label: string; color: string }) {
    return (
        <span
            className="inline-flex w-fit items-center rounded px-3 py-1 text-sm font-black tracking-tight text-white"
            style={{ backgroundColor: color }}
        >
            {label}
        </span>
    );
}

/** "READ MORE" button */
function ReadMoreButton() {
    return (
        <button className="shrink-0 rounded-md border border-[#e50808] px-4 py-2 text-lg font-black tracking-tight text-[#e50808] transition-colors hover:bg-[#e50808] hover:text-white">
            READ MORE
        </button>
    );
}

/** News card image container */
function NewsImage({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
    return (
        <div className={`relative overflow-hidden rounded-lg bg-neutral-200 ${className}`}>
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
            />
        </div>
    );
}

/** Featured / Latest full-width card */
function FeaturedCard({ article }: { article: NewsArticle }) {
    return (
        <div className="relative overflow-hidden rounded-xl border border-[#ccc] bg-white p-5 md:p-6 shadow-[0_0_12px_rgba(0,0,0,0.05)]">
            {/* LATEST badge */}
            <div className="absolute -left-px top-5 z-10 flex items-center bg-[#e93838] px-6 py-1">
                <span className="text-2xl font-black tracking-tight text-white">LATEST</span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-8">
                {/* Text content */}
                <div className="flex flex-col gap-5 lg:w-85 xl:w-100 shrink-0 order-2 lg:order-first lg:mt-10">
                    <CategoryBadge label={article.categoryLabel} color={article.categoryColor} />
                    <div className="flex flex-col gap-4">
                        <h2 className="text-[34px] font-extrabold leading-[0.9] tracking-tight text-black">
                            {article.title}
                        </h2>
                        <p className="text-base font-medium leading-normal tracking-tight text-[#5d5d5d]">
                            {article.excerpt}
                        </p>
                    </div>
                    <div className="flex items-end justify-between">
                        <ReadMoreButton />
                        <span className="text-sm font-medium tracking-tight text-[#ccc]">
                            {article.date}
                        </span>
                    </div>
                </div>

                {/* Image */}
                <NewsImage
                    src={article.image}
                    alt={article.title}
                    className="h-100 md:h-72 lg:h-103.75 w-full lg:flex-1 order-first lg:order-0"
                />
            </div>
        </div>
    );
}

/** Small vertical card */
function SmallVerticalCard({ article }: { article: NewsArticle }) {
    return (
        <div className="h-full overflow-hidden rounded-xl border border-[#ccc] bg-white p-5 shadow-[0_0_12px_rgba(0,0,0,0.05)]">
            <div className="flex h-full flex-col gap-6">
                <NewsImage
                    src={article.image}
                    alt={article.title}
                    className="h-46 w-full shrink-0"
                />
                <div className="flex flex-1 flex-col gap-3">
                    <CategoryBadge label={article.categoryLabel} color={article.categoryColor} />
                    <h3 className="text-2xl font-extrabold leading-[0.9] tracking-tight text-black">
                        {article.title}
                    </h3>
                    <p className="text-base font-medium leading-normal tracking-tight text-[#5d5d5d] line-clamp-3">
                        {article.excerpt}
                    </p>
                    <div className="mt-auto flex items-end justify-between">
                        <ReadMoreButton />
                        <span className="text-sm font-medium tracking-tight text-[#c8c8c8]">
                            {article.date}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

/** Wide horizontal card — text left, image right */
function WideCardTextLeft({ article }: { article: NewsArticle }) {
    return (
        <div className="h-full overflow-hidden rounded-xl border border-[#ccc] bg-white p-5 shadow-[0_0_12px_rgba(0,0,0,0.05)]">
            <div className="flex flex-col md:flex-row items-end gap-5 h-full">
                {/* Text */}
                <div className="flex flex-col gap-5 justify-end md:w-[45%] lg:w-87.75 shrink-0 order-last md:order-0">
                    <CategoryBadge label={article.categoryLabel} color={article.categoryColor} />
                    <h3 className="text-2xl lg:text-[34px] font-extrabold leading-[0.9] tracking-tight text-black">
                        {article.title}
                    </h3>
                    <p className="text-base font-medium leading-normal tracking-tight text-[#5d5d5d]">
                        {article.excerpt}
                    </p>
                    <div className="flex items-end justify-between">
                        <ReadMoreButton />
                        <span className="text-sm font-medium tracking-tight text-[#c8c8c8]">
                            {article.date}
                        </span>
                    </div>
                </div>
                {/* Image */}
                <NewsImage
                    src={article.image}
                    alt={article.title}
                    className="h-100 w-full md:h-auto md:self-stretch md:flex-1 min-h-56 order-first md:order-0"
                />
            </div>
        </div>
    );
}

/** Wide horizontal card — image left, text right */
function WideCardImageLeft({ article }: { article: NewsArticle }) {
    return (
        <div className="h-full overflow-hidden rounded-xl border border-[#ccc] bg-white p-5 shadow-[0_0_12px_rgba(0,0,0,0.05)]">
            <div className="flex flex-col md:flex-row items-stretch gap-5 h-full">
                {/* Image */}
                <NewsImage
                    src={article.image}
                    alt={article.title}
                    className="h-100 md:h-auto md:w-[45%] lg:w-102.5 shrink-0 min-h-56"
                />
                {/* Text */}
                <div className="flex flex-1 flex-col gap-5 justify-end md:items-end md:text-right">
                    <CategoryBadge label={article.categoryLabel} color={article.categoryColor} />
                    <h3 className="text-2xl lg:text-[34px] font-extrabold leading-[0.9] tracking-tight text-black w-full">
                        {article.title}
                    </h3>
                    <p className="text-base font-medium leading-normal tracking-tight text-[#5d5d5d] w-full">
                        {article.excerpt}
                    </p>
                    <div className="flex w-full items-end justify-between">
                        <span className="text-sm font-medium tracking-tight text-[#c8c8c8]">
                            {article.date}
                        </span>
                        <ReadMoreButton />
                    </div>
                </div>
            </div>
        </div>
    );
}

/** Standard vertical card for the 3-column grid */
function StandardVerticalCard({ article }: { article: NewsArticle }) {
    return (
        <div className="overflow-hidden rounded-xl border border-[#ccc] bg-white p-5 shadow-[0_0_12px_rgba(0,0,0,0.05)]">
            <div className="flex h-full flex-col gap-6">
                <NewsImage
                    src={article.image}
                    alt={article.title}
                    className="h-64 w-full shrink-0"
                />
                <div className="flex flex-1 flex-col gap-3">
                    <CategoryBadge label={article.categoryLabel} color={article.categoryColor} />
                    <h3 className="text-2xl font-extrabold leading-[0.9] tracking-tight text-black">
                        {article.title}
                    </h3>
                    <p className="text-base font-medium leading-normal tracking-tight text-[#5d5d5d] line-clamp-3">
                        {article.excerpt}
                    </p>
                    <div className="mt-auto flex items-end justify-between">
                        <ReadMoreButton />
                        <span className="text-sm font-medium tracking-tight text-[#c8c8c8]">
                            {article.date}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

// --- Page Component ---
export default function NewsPageClient() {
    const [activeFilter, setActiveFilter] = useState<CategoryId>('all');

    const filteredArticles =
        activeFilter === 'all'
            ? NEWS_ARTICLES
            : NEWS_ARTICLES.filter((a) => a.categoryId === activeFilter);

    // Assign articles to layout slots
    const featured = filteredArticles[0];
    const row1Small = filteredArticles[1];
    const row1Wide = filteredArticles[2];
    const row2Wide = filteredArticles[3];
    const row2Small = filteredArticles[4];
    const gridCards = filteredArticles.slice(5, 8);

    return (
        <div className="flex flex-col items-start bg-white relative w-full">
            {/* ====== Hero Section — "Sapang Times" masthead ====== */}
            <div className="h-112.5 md:h-96 lg:h-137.5 overflow-hidden relative w-full">
                <div
                    className="relative w-full h-full bg-cover bg-center bg-no-repeat grayscale"
                    style={{ backgroundImage: "url('/page/news/hero-news.png')" }}
                >
                    <div className="absolute inset-0 flex items-center justify-center px-4">
                        <div className="flex items-end gap-2 md:gap-4 w-full max-w-70 md:max-w-150 lg:max-w-236">
                            {/* "Sapang" */}
                            <div className="relative w-[53%] aspect-476/276 hidden md:block">
                                <Image
                                    src="/page/news/sapang-text.svg"
                                    alt="Sapang"
                                    fill
                                    className="object-contain drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]"
                                    priority
                                />
                            </div>
                            {/* "Times" — mobile uses rasterized version */}
                            <div className="relative w-[47%] aspect-426/248 hidden md:block">
                                <Image
                                    src="/page/news/times-text.svg"
                                    alt="Times"
                                    fill
                                    className="object-contain drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]"
                                    priority
                                />
                            </div>
                            <div className="relative w-full aspect-279/211 md:hidden">
                                <Image
                                    src="/page/news/times-text-mobile.png"
                                    alt="Times"
                                    fill
                                    className="object-contain drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ====== Articles Section ====== */}
            <section className="w-full bg-white px-6 md:px-12 lg:px-24 py-8 md:py-16">
                <div className="mx-auto max-w-312 flex flex-col gap-16">
                    {/* --- Header & Filters --- */}
                    <div className="flex flex-col items-center gap-4">
                        <p className="text-base md:text-2xl font-bold text-center tracking-tight text-[#5d5d5d]">
                            ARTICLES &amp; NEWS
                        </p>
                        <h2 className="text-[32px] md:text-5xl font-extrabold text-center tracking-tight text-black">
                            Stay Updated With Our Latest News
                        </h2>

                        {/* Filter pills */}
                        <div className="flex flex-col items-center gap-4 mt-2">
                            <span className="text-base font-medium tracking-tight text-[#5d5d5d]">
                                Filter by
                            </span>
                            <div className="flex flex-wrap gap-3 items-center justify-center">
                                {FILTER_CATEGORIES.map((cat) => {
                                    const isActive = activeFilter === cat.id;
                                    return (
                                        <button
                                            key={cat.id}
                                            onClick={() => setActiveFilter(cat.id)}
                                            className={`cursor-pointer rounded px-3 py-1 text-base font-black tracking-tight border transition-colors ${
                                                isActive
                                                    ? `${cat.activeColor} border-transparent text-white`
                                                    : `bg-white ${cat.borderColor} ${cat.textColor}`
                                            }`}
                                        >
                                            {cat.label}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* --- News Cards --- */}
                    {filteredArticles.length === 0 && (
                        <p className="text-center text-lg text-[#5d5d5d] py-12">
                            No articles found for this category.
                        </p>
                    )}

                    {filteredArticles.length > 0 && (
                        <div className="flex flex-col gap-8">
                            {/* Row 0: Featured / Latest */}
                            {featured && <FeaturedCard article={featured} />}

                            {/* Row 1: Small card + Wide card (text left, image right) */}
                            {(row1Small || row1Wide) && (
                                <div className="flex flex-col lg:flex-row lg:items-stretch gap-8">
                                    {row1Small && (
                                        <div className="w-full lg:w-98.5 shrink-0">
                                            <SmallVerticalCard article={row1Small} />
                                        </div>
                                    )}
                                    {row1Wide && (
                                        <div className="flex-1 min-w-0">
                                            <WideCardTextLeft article={row1Wide} />
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Row 2: Wide card (image left, text right) + Small card */}
                            {(row2Wide || row2Small) && (
                                <div className="flex flex-col lg:flex-row lg:items-stretch gap-8">
                                    {row2Wide && (
                                        <div className="flex-1 min-w-0">
                                            <WideCardImageLeft article={row2Wide} />
                                        </div>
                                    )}
                                    {row2Small && (
                                        <div className="w-full lg:w-98.5 shrink-0">
                                            <SmallVerticalCard article={row2Small} />
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Row 3: Three equal cards */}
                            {gridCards.length > 0 && (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {gridCards.map((article) => (
                                        <StandardVerticalCard key={article.id} article={article} />
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
