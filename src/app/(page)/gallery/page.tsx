import type { Metadata } from 'next';
import Image from 'next/image';
import { JsonLd, breadcrumbJsonLd, organizationJsonLd } from '@/lib/seo/jsonld';

export const metadata: Metadata = {
    title: 'Gallery — Competition & Team Photos',
    description:
        "Browse ITS Team Sapuangin's photo gallery from Shell Eco-marathon, Formula Student Japan (JSAE), and team activities. Official competition photos and behind-the-scenes moments.",
    openGraph: {
        title: 'Gallery | ITS Team Sapuangin',
        description:
            'Official photos from Shell Eco-marathon, Formula Student Japan, and team activities.',
        url: '/gallery',
        images: [
            {
                url: '/page/gallery/hero-gallery.png',
                width: 1200,
                height: 630,
                alt: 'ITS Team Sapuangin Gallery',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Gallery | ITS Team Sapuangin',
        description:
            'Official photos from Shell Eco-marathon, Formula Student Japan, and team activities.',
        images: ['/page/gallery/hero-gallery.png'],
    },
    alternates: {
        canonical: '/gallery',
    },
};

// Gallery data configuration
const GALLERY_DATA = {
    hero: {
        image: '/page/gallery/hero-gallery.png',
        title: 'Gallery',
    },
    sections: [
        {
            id: 'shell',
            logo: {
                src: '/page/gallery/shell-logo.svg',
                alt: 'Shell Logo',
                width: 'w-62.75',
                height: 'h-[59.735px]',
            },
            logoPosition: 'left',
            copyright:
                'All photos are the official property of ITS Team Sapuangin during competitions',
            images: {
                column1: ['/page/gallery/team-photo.png', '/page/gallery/team-photo.png'],
                column2: ['/page/gallery/team-photo.png', '/page/gallery/team-photo.png'],
                column3: ['/page/gallery/team-photo.png', '/page/gallery/team-photo.png'],
                bottomRow: ['/page/gallery/team-photo.png', '/page/gallery/team-photo.png'],
            },
        },
        {
            id: 'jsae',
            logo: {
                src: '/page/gallery/jsae-logo.svg',
                alt: 'JSAE Logo',
                width: 'w-[208.481px]',
                height: 'h-20',
            },
            logoPosition: 'right',
            copyright:
                'All photos are the official property of ITS Team Sapuangin during competitions',
            images: {
                column1: ['/page/gallery/team-photo.png', '/page/gallery/team-photo.png'],
                column2: ['/page/gallery/team-photo.png', '/page/gallery/team-photo.png'],
                column3: ['/page/gallery/team-photo.png', '/page/gallery/team-photo.png'],
                bottomRow: ['/page/gallery/team-photo.png', '/page/gallery/team-photo.png'],
            },
        },
    ],
    activities: {
        title: 'Activites',
        images: {
            column1: ['/page/gallery/team-photo.png', '/page/gallery/team-photo.png'],
            column2: ['/page/gallery/team-photo.png', '/page/gallery/team-photo.png'],
            column3: ['/page/gallery/team-photo.png', '/page/gallery/team-photo.png'],
            bottomRow: ['/page/gallery/team-photo.png', '/page/gallery/team-photo.png'],
        },
        copyright:
            'All photos displayed in this gallery are the official property of ITS Team Sapuangin and are part of its official documentation during competitions. Any use, reproduction, or distribution of these images without prior written permission from ITS Team Sapuangin is not permitted. © ITS Team Sapuangin. All rights reserved.',
    },
};

export default function GalleryPage() {
    return (
        <div className="bg-white flex flex-col items-start relative w-full">
            <JsonLd data={organizationJsonLd()} />
            <JsonLd
                data={breadcrumbJsonLd([
                    { name: 'Home', href: '/' },
                    { name: 'Gallery', href: '/gallery' },
                ])}
            />
            {/* Hero Section */}
            <div className="h-48 md:h-96 lg:h-137.5 overflow-hidden relative w-full">
                <div
                    className="relative w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url('${GALLERY_DATA.hero.image}')` }}
                >
                    <div className="container mx-auto px-4 md:px-6 lg:px-0">
                        <div className="absolute bottom-0 flex bg-[#e50808] w-fit h-fit px-3 py-1 md:px-4.5 md:py-1.5">
                            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-white tracking-[-1.44px] leading-tight">
                                {GALLERY_DATA.hero.title}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gallery Sections with Logos */}
            {GALLERY_DATA.sections.map((section) => (
                <div
                    key={section.id}
                    className="flex flex-col items-center justify-center overflow-hidden px-6 md:px-24 py-16 relative w-full"
                >
                    <div className="container mx-auto">
                        <div
                            className={`flex flex-col ${section.logoPosition === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} ${section.logoPosition === 'right' ? '' : 'gap-8'} items-start ${section.logoPosition === 'right' ? 'justify-between' : ''} ${section.logoPosition === 'right' ? 'gap-8' : ''} w-full`}
                        >
                            {/* Logo and Copyright */}
                            <div
                                className={`flex flex-col lg:h-233.75 items-center ${section.logoPosition === 'right' ? 'lg:items-end' : 'lg:items-start'} justify-between relative lg:shrink-0 w-full lg:w-auto mb-8 lg:mb-0`}
                            >
                                <div
                                    className={`${section.logo.height} relative ${section.logo.width} mb-4 lg:mb-0`}
                                >
                                    <Image
                                        src={section.logo.src}
                                        alt={section.logo.alt}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <p
                                        className={`font-normal text-[#5d5d5d] text-lg tracking-[-0.8px] leading-normal w-full lg:w-62.75 text-center ${section.logoPosition === 'right' ? 'lg:text-right' : 'lg:text-left'}`}
                                    >
                                        {section.copyright}
                                    </p>
                                </div>
                            </div>

                            {/* Gallery Grid */}
                            <div className="flex flex-1 flex-col gap-6 items-start min-h-px min-w-px w-full">
                                <div className="bg-white flex flex-col md:flex-row gap-6 items-start overflow-hidden w-full">
                                    {/* Column 1 */}
                                    <div className="flex flex-1 flex-col gap-6 items-start justify-center min-h-px min-w-px self-stretch w-full">
                                        <div className="bg-[#d6d6d6] h-80 md:h-102 w-full relative overflow-hidden">
                                            <Image
                                                src={section.images.column1[0]}
                                                alt={`ITS Team Sapuangin at ${section.id === 'shell' ? 'Shell Eco-marathon' : 'Formula Student Japan'} competition`}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="bg-[#d6d6d6] h-80 md:flex-1 md:min-h-px md:min-w-px w-full relative overflow-hidden">
                                            <Image
                                                src={section.images.column1[1]}
                                                alt={`ITS Team Sapuangin ${section.id === 'shell' ? 'Shell Eco-marathon' : 'JSAE Formula Student'} team photo`}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                    {/* Column 2 */}
                                    <div className="hidden md:flex flex-1 flex-col gap-6 items-start justify-center min-h-px min-w-px self-stretch w-full">
                                        <div className="bg-[#d6d6d6] h-80 lg:h-63.25 w-full relative overflow-hidden">
                                            <Image
                                                src={section.images.column2[0]}
                                                alt={`${section.id === 'shell' ? 'Shell Eco-marathon' : 'Formula Student Japan'} vehicle preparation`}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="bg-[#d6d6d6] h-80 lg:flex-1 lg:min-h-px lg:min-w-px w-full relative overflow-hidden">
                                            <Image
                                                src={section.images.column2[1]}
                                                alt={`ITS Team Sapuangin ${section.id === 'shell' ? 'Shell Eco-marathon' : 'JSAE'} competition moment`}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                    {/* Column 3 */}
                                    <div className="hidden lg:flex flex-1 flex-col gap-6 items-start justify-center min-h-px min-w-px self-stretch">
                                        <div className="bg-[#d6d6d6] h-105.25 w-full relative overflow-hidden">
                                            <Image
                                                src={section.images.column3[0]}
                                                alt={`${section.id === 'shell' ? 'Shell Eco-marathon' : 'Formula Student Japan'} event highlights`}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="bg-[#d6d6d6] h-62.75 w-full relative overflow-hidden">
                                            <Image
                                                src={section.images.column3[1]}
                                                alt={`ITS Team Sapuangin at ${section.id === 'shell' ? 'Shell Eco-marathon' : 'Formula Student Japan'}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* Bottom Wide Row */}
                                <div className="bg-white flex flex-col md:flex-row gap-6 h-auto md:h-53.75 items-start overflow-hidden w-full">
                                    <div className="bg-[#d6d6d6] h-80 md:h-full overflow-hidden relative w-full">
                                        <Image
                                            src={section.images.bottomRow[0]}
                                            alt={`ITS Team Sapuangin ${section.id === 'shell' ? 'Shell Eco-marathon' : 'JSAE'} gallery panoramic view`}
                                            fill
                                            className="object-cover md:object-center"
                                        />
                                    </div>
                                    <div className="bg-[#d6d6d6] h-80 md:h-full overflow-hidden relative w-full">
                                        <Image
                                            src={section.images.bottomRow[1]}
                                            alt={`ITS Team Sapuangin ${section.id === 'shell' ? 'Shell Eco-marathon' : 'Formula Student Japan'} group photo`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Activities Section */}
            <div className="container mx-auto flex flex-col items-center gap-8 mb-12 px-6 md:px-12 lg:px-0 h-fit relative w-full">
                <div className="flex flex-col items-start w-full">
                    <h2 className="font-black text-[40px] text-black text-center tracking-[-1.2px] leading-normal w-full">
                        {GALLERY_DATA.activities.title}
                    </h2>
                </div>

                <div className="flex flex-col gap-6 items-start w-full">
                    <div className="bg-white flex flex-col md:flex-row gap-6 items-start overflow-hidden w-full">
                        {/* Column 1 */}
                        <div className="flex flex-1 flex-col gap-6 items-start justify-center min-h-px min-w-px self-stretch w-full">
                            <div className="bg-[#d6d6d6] h-80 md:h-102 w-full relative overflow-hidden">
                                <Image
                                    src={GALLERY_DATA.activities.images.column1[0]}
                                    alt="ITS Team Sapuangin team activity and engineering workshop"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="bg-[#d6d6d6] h-80 md:flex-1 md:min-h-px md:min-w-px w-full relative overflow-hidden">
                                <Image
                                    src={GALLERY_DATA.activities.images.column1[1]}
                                    alt="ITS Team Sapuangin members during team building"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        {/* Column 2 */}
                        <div className="hidden md:flex flex-1 flex-col gap-6 items-start justify-center min-h-px min-w-px self-stretch w-full">
                            <div className="bg-[#d6d6d6] h-80 lg:h-63.25 w-full relative overflow-hidden">
                                <Image
                                    src={GALLERY_DATA.activities.images.column2[0]}
                                    alt="Sapuangin team engineering and vehicle assembly"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="bg-[#d6d6d6] h-80 lg:flex-1 lg:min-h-px lg:min-w-px w-full relative overflow-hidden">
                                <Image
                                    src={GALLERY_DATA.activities.images.column2[1]}
                                    alt="ITS Team Sapuangin behind-the-scenes preparation"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        {/* Column 3 */}
                        <div className="hidden lg:flex flex-1 flex-col gap-6 items-start justify-center min-h-px min-w-px self-stretch">
                            <div className="bg-[#d6d6d6] h-105.25 w-full relative overflow-hidden">
                                <Image
                                    src={GALLERY_DATA.activities.images.column3[0]}
                                    alt="ITS Team Sapuangin community and outreach activities"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="bg-[#d6d6d6] h-62.75 w-full relative overflow-hidden">
                                <Image
                                    src={GALLERY_DATA.activities.images.column3[1]}
                                    alt="Sapuangin team daily activities and collaboration"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                    {/* Bottom Wide Row */}
                    <div className="bg-white flex flex-col md:flex-row gap-6 h-auto md:h-53.75 items-start overflow-hidden w-full">
                        <div className="bg-[#d6d6d6] h-80 md:h-full overflow-hidden relative w-full">
                            <Image
                                src={GALLERY_DATA.activities.images.bottomRow[0]}
                                alt="ITS Team Sapuangin group activity panoramic view"
                                fill
                                className="object-cover md:object-center"
                            />
                        </div>
                        <div className="bg-[#d6d6d6] h-80 md:h-full overflow-hidden relative w-full">
                            <Image
                                src={GALLERY_DATA.activities.images.bottomRow[1]}
                                alt="ITS Team Sapuangin team activities group photo"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col font-normal justify-center text-[#5d5d5d] text-base md:text-lg lg:text-[20px] text-center tracking-[-0.8px] w-full max-w-256.5 px-4">
                    <p className="leading-normal">{GALLERY_DATA.activities.copyright}</p>
                </div>
            </div>
        </div>
    );
}
