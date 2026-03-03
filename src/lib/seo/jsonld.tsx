const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://sapuangin.its.ac.id';

// ─── Organization Schema ─────────────────────────────────────────────────────

export function organizationJsonLd() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'ITS Team Sapuangin',
        url: baseUrl,
        logo: `${baseUrl}/logo/sapuangin-color.png`,
        description:
            'World-champion energy-efficient vehicle team from Institut Teknologi Sepuluh Nopember (ITS), Surabaya, Indonesia.',
        foundingDate: '2010',
        address: {
            '@type': 'PostalAddress',
            streetAddress:
                'Department of Mechanical Engineering, Head Office Building A, 2nd Floor',
            addressLocality: 'Surabaya',
            addressRegion: 'East Java',
            postalCode: '60111',
            addressCountry: 'ID',
        },
        parentOrganization: {
            '@type': 'CollegeOrUniversity',
            name: 'Institut Teknologi Sepuluh Nopember',
            url: 'https://www.its.ac.id',
        },
        sameAs: [
            'https://www.linkedin.com/company/its-team-sapuangin',
            'https://www.instagram.com/itsteamsapuangin',
            'https://www.tiktok.com/@itsteamsapuangin',
        ],
    };
}

// ─── WebSite Schema (for homepage) ──────────────────────────────────────────

export function websiteJsonLd() {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'ITS Team Sapuangin',
        url: baseUrl,
        description:
            'Official website of ITS Team Sapuangin — World Champion energy-efficient vehicle team from ITS Surabaya.',
        publisher: {
            '@type': 'Organization',
            name: 'ITS Team Sapuangin',
            logo: {
                '@type': 'ImageObject',
                url: `${baseUrl}/logo/sapuangin-color.png`,
            },
        },
    };
}

// ─── BreadcrumbList Schema ──────────────────────────────────────────────────

export interface BreadcrumbItem {
    name: string;
    href: string;
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: `${baseUrl}${item.href}`,
        })),
    };
}

// ─── Article Schema (for news/blog posts) ───────────────────────────────────

export interface ArticleJsonLdProps {
    title: string;
    description: string;
    url: string;
    image: string;
    datePublished: string;
    dateModified?: string;
    authorName?: string;
}

export function articleJsonLd({
    title,
    description,
    url,
    image,
    datePublished,
    dateModified,
    authorName = 'ITS Team Sapuangin',
}: ArticleJsonLdProps) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        url: `${baseUrl}${url}`,
        image: `${baseUrl}${image}`,
        datePublished,
        dateModified: dateModified ?? datePublished,
        author: {
            '@type': 'Organization',
            name: authorName,
        },
        publisher: {
            '@type': 'Organization',
            name: 'ITS Team Sapuangin',
            logo: {
                '@type': 'ImageObject',
                url: `${baseUrl}/logo/sapuangin-color.png`,
            },
        },
    };
}

// ─── Helper to render JSON-LD script tag ────────────────────────────────────

export function JsonLd({ data }: { data: Record<string, unknown> }) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}
