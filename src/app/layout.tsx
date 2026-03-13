import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/sections/footer';
import WelcomeScreen from '@/app/components/WelcomeScreen';
import { DM_Sans } from 'next/font/google';
import { ReactLenis } from '@/lib/lenis';
import ScrollToTopButton from '@/app/components/ScrollToTopButton';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://sapuangin.its.ac.id';

const dmsans = DM_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
});

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#E50808',
};

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: {
        default: 'ITS Team Sapuangin — World Champion Energy-Efficient Car Team',
        template: '%s | ITS Team Sapuangin',
    },
    description:
        'ITS Team Sapuangin is the world-champion energy-efficient vehicle team from Institut Teknologi Sepuluh Nopember (ITS), Surabaya, Indonesia. Competing in Shell Eco-marathon and Formula Student Japan.',
    keywords: [
        'ITS Team Sapuangin',
        'Shell Eco-marathon',
        'Formula Student Japan',
        'energy-efficient vehicle',
        'Institut Teknologi Sepuluh Nopember',
        'ITS Surabaya',
        'world champion',
        'fuel efficiency',
        'engineering competition',
        'sustainable mobility',
    ],
    authors: [{ name: 'ITS Team Sapuangin' }],
    creator: 'ITS Team Sapuangin',
    publisher: 'Institut Teknologi Sepuluh Nopember',
    formatDetection: {
        email: false,
        telephone: false,
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        siteName: 'ITS Team Sapuangin',
        title: 'ITS Team Sapuangin — World Champion Energy-Efficient Car Team',
        description:
            'ITS Team Sapuangin is the world-champion energy-efficient vehicle team from Institut Teknologi Sepuluh Nopember (ITS), Surabaya, Indonesia.',
        images: [
            {
                url: '/page/home/world-champions-celebration.png',
                width: 1200,
                height: 630,
                alt: 'ITS Team Sapuangin — World Champions',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'ITS Team Sapuangin — World Champion Energy-Efficient Car Team',
        description:
            'World-champion energy-efficient vehicle team from ITS Surabaya, Indonesia. Competing in Shell Eco-marathon & Formula Student Japan.',
        images: ['/page/home/world-champions-celebration.png'],
    },
    alternates: {
        canonical: '/',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            suppressContentEditableWarning
            className="overflow-y-auto [&::-webkit-scrollbar]:w-0"
        >
            <ReactLenis root>
                <body className={`${dmsans.className} antialiased`}>
                    <WelcomeScreen />
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                    <ScrollToTopButton />
                </body>
            </ReactLenis>
        </html>
    );
}
