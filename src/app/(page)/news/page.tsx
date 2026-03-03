import type { Metadata } from 'next';
import NewsPageClient from './NewsPageClient';
import { JsonLd, breadcrumbJsonLd, organizationJsonLd } from '@/lib/seo/jsonld';

export const metadata: Metadata = {
    title: 'News — Sapang Times | Latest Updates & Stories',
    description:
        'Read the latest news and stories from ITS Team Sapuangin. Competition results, team updates, engineering breakthroughs, and behind-the-scenes coverage from Shell Eco-marathon and Formula Student Japan.',
    openGraph: {
        title: 'News — Sapang Times | ITS Team Sapuangin',
        description: 'Latest news, competition results, and stories from ITS Team Sapuangin.',
        url: '/news',
        images: [
            {
                url: '/page/news/news-qatar-day2.png',
                width: 1200,
                height: 630,
                alt: 'ITS Team Sapuangin News',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'News — Sapang Times | ITS Team Sapuangin',
        description: 'Latest news, competition results, and stories from ITS Team Sapuangin.',
        images: ['/page/news/news-qatar-day2.png'],
    },
    alternates: {
        canonical: '/news',
    },
};

export default function NewsPage() {
    return (
        <>
            <JsonLd data={organizationJsonLd()} />
            <JsonLd
                data={breadcrumbJsonLd([
                    { name: 'Home', href: '/' },
                    { name: 'News', href: '/news' },
                ])}
            />
            <NewsPageClient />
        </>
    );
}
