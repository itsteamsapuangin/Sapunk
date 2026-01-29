import type { Metadata } from 'next';
import Head from 'next/head';
import './globals.css';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/sections/footer';
import WelcomeScreen from '@/app/components/WelcomeScreen';
import { DM_Sans } from 'next/font/google';
import { ReactLenis } from '@/lib/lenis';

const dmsans = DM_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
    title: 'ITS Team Sapuangin',
    description: 'Home of The World Champions',
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
            className=" overflow-y-auto [&::-webkit-scrollbar]:w-0"
        >
            <ReactLenis root>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Head>
                <body className={`${dmsans.className} antialiased`}>
                    <WelcomeScreen />
                    <Navbar />
                    <main className="pt-[60px] md:pt-[100px]">{children}</main>
                    <Footer />
                </body>
            </ReactLenis>
        </html>
    );
}
