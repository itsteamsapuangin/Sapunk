import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Sponsors',
};

// Sponsorship data configuration organized by tiers matching the Figma design
const SPONSORSHIP_DATA = {
    hero: {
        title: 'Sponsorship',
    },
    mainSponsors: [
        { name: 'ITS', logo: 'its.png', url: 'https://www.its.ac.id' },
        { name: 'Ditmawa', logo: 'ditmawa.png', url: 'https://www.its.ac.id/ditmawa' },
        { name: 'IKOMA', logo: 'ikoma.png', url: 'https://www.instagram.com/ikoma_its' },
    ],
    secondRowMainSponsors: [
        { name: 'Mesin', logo: 'mesin.png', url: 'https://www.its.ac.id/me' },
        {
            name: 'IKAITS Qatar',
            logo: 'ikaits-qatar.png',
            url: 'https://www.instagram.com/ikaits_qatar',
        },
    ],
    mediaPartner: {
        name: 'Cretivox',
        logo: 'cretivox.png',
        url: 'https://www.instagram.com/cretivox',
    },
    goldSponsors: [
        {
            name: 'Triputra Argo Persada',
            logo: 'triputra-argo-persada.png',
            url: 'https://www.triputraagropersada.com',
        },
    ],
    silverSponsors: [
        { name: 'TDR', logo: 'tdr.png', url: 'https://www.tdr-racing.com' },
        { name: 'Haston', logo: 'haston.png', url: 'https://www.instagram.com/hastonid' },
        { name: 'AHM', logo: 'ahm.png', url: 'https://www.astra-honda.com' },
        {
            name: 'PLN Indonesia Power',
            logo: 'pln-indonesia-power.png',
            url: 'https://www.indonesiapower.co.id',
        },
        {
            name: 'Pelindo Indonesia Maritime Gateway',
            logo: 'pelindo-indonesia-matitime-gateway.png',
            url: 'https://www.pelindo.co.id',
        },
    ],
    bronzeSponsors: [
        { name: 'Kupprum', logo: 'kupprum.png', url: 'https://www.instagram.com/kupprum' },
        {
            name: 'Star Entertainment',
            logo: 'star-entertaiment.png',
            url: 'https://www.instagram.com/starentertainment',
        },
        { name: 'Wilson Cables', logo: 'wilson-cables.png', url: 'https://www.wilsoncables.com' },
        { name: 'Pelindo', logo: 'pelindo.png', url: 'https://www.pelindo.co.id' },
        { name: 'Alhijaz', logo: 'alhijaz.png', url: 'https://www.alhijazindo.co.id' },
        { name: 'Indowire', logo: 'indowire.png', url: 'https://www.indowire.com' },
        { name: 'Lintech', logo: 'lintech.png', url: 'https://www.lintech.co.id' },
        { name: 'Kiny Tours', logo: 'kiny-tours.png', url: 'https://www.instagram.com/kinytours' },
    ],
    supportSponsors: [
        { name: 'Akebono', logo: 'akebono.png', url: 'https://www.akebono-brake.com' },
        {
            name: 'Zerotrip Racing',
            logo: 'zerotrip-racing.png',
            url: 'https://www.instagram.com/zerotripracing',
        },
        {
            name: 'Better Luck',
            logo: 'betterluck.png',
            url: 'https://www.instagram.com/betterluckproject',
        },
        { name: 'Badak LNG', logo: 'badak-lng.png', url: 'https://www.badaklng.co.id' },
        {
            name: 'Level Garment',
            logo: 'level-garment.png',
            url: 'https://www.instagram.com/levelgarment',
        },
        { name: 'Spectrum', logo: 'spectrum.png', url: 'https://www.instagram.com/spectrum' },
        { name: 'SUA', logo: 'sua.png', url: 'https://www.instagram.com/sua' },
        { name: 'Skyrape', logo: 'skyrape.png', url: 'https://www.instagram.com/skyrape' },
    ],
    benefits: [
        {
            icon: 'badge.png',
            title: 'Grand\nChampion\nLegacy',
        },
        {
            icon: 'world.png',
            title: 'Unmatched\nInternational\nExposure',
        },
        {
            icon: 'csr.png',
            title: 'Drive\nCSR\nExcellence',
        },
        {
            icon: 'collab.png',
            title: 'Innovation\nand\nCollaboration',
        },
    ],
    contacts: [
        {
            name: 'Farid Mubarok',
            role: 'Non-Technical Manager',
            phone: '+62 896-3343-3256',
            whatsapp: '6289633433256',
        },
        {
            name: 'Hanum Nur',
            role: 'Sponsorship',
            phone: '+62 812-3010-6763',
            whatsapp: '6281230106763',
        },
    ],
};

// Helper Components
const SponsorCard = ({
    name,
    logo,
    url,
    className = '',
}: {
    name: string;
    logo: string;
    url?: string;
    className?: string;
}) => {
    // Custom styling for specific logos that need different padding/scaling
    const getLogoStyle = (logoName: string) => {
        switch (logoName) {
            case 'badak-lng.png':
                return 'p-2 scale-150';
            case 'betterluck.png':
                return 'p-2';
            case 'spectrum.png':
                return 'p-3 scale-110';
            case 'star-entertaiment.png':
                return 'p-3 scale-150';
            case 'indowire.png':
                return 'p-3 scale-125';
            case 'alhijaz.png':
                return 'p-3 scale-125';
            case 'kiny-tours.png':
                return 'p-3 scale-125';
            case 'skyrape.png':
                return 'p-3 scale-110';
            case 'cretivox.png':
                return 'p-8';
            default:
                return 'p-4';
        }
    };

    const cardContent = (
        <div
            className={`flex items-center justify-center bg-white border border-[#d9d9d9] rounded-xl lg:rounded-2xl p-3 md:p-5 lg:p-8 transition-all duration-300 hover:scale-[1.02] ${url ? 'h-full w-full' : className}`}
        >
            <div className="relative w-full h-full flex items-center justify-center">
                <Image
                    src={`/page/sponsorship/${logo}`}
                    alt={name}
                    fill
                    className={`object-contain ${getLogoStyle(logo)}`}
                />
            </div>
        </div>
    );

    if (url) {
        return (
            <Link
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`block ${className}`}
            >
                {cardContent}
            </Link>
        );
    }

    return cardContent;
};

const SectionTitle = ({
    children,
    bgColor = 'bg-[#e50808]',
}: {
    children: React.ReactNode;
    bgColor?: string;
}) => (
    <div className={`${bgColor} px-4 md:px-5 lg:px-6 py-1 inline-block`}>
        <h2 className="font-bold text-xl md:text-3xl lg:text-[46px] text-white tracking-[-1.49px] leading-normal">
            {children}
        </h2>
    </div>
);

export default function SponsorshipPage() {
    return (
        <div className="bg-white flex flex-col items-center w-full overflow-x-hidden">
            {/* Hero Section */}
            <div className="h-48 md:h-96 lg:h-137.5 overflow-hidden relative w-full">
                <div
                    className="relative w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/page/gallery/hero-gallery.png')" }}
                >
                    <div className="container mx-auto px-4 md:px-6 lg:px-0">
                        <div className="absolute bottom-0 flex bg-[#e50808] w-fit h-fit px-3 py-1 md:px-4.5 md:py-1.5">
                            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-white tracking-[-1.44px] leading-tight">
                                Sponsors
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="w-full container mx-auto px-4 md:px-8 lg:px-0 py-6 md:py-10 lg:py-16 flex flex-col items-center gap-6 md:gap-10 lg:gap-16">
                {/* Thank You Section */}
                <div className="flex flex-col items-center gap-3 md:gap-4 lg:gap-6 w-full">
                    <h2 className="font-bold text-2xl md:text-4xl lg:text-6xl text-black tracking-[-1.5px] leading-normal text-center">
                        Thank You for Supporting Us
                    </h2>
                    <p className="font-normal text-[#5d5d5d] text-sm md:text-lg lg:text-2xl leading-normal text-center max-w-4xl">
                        All photos displayed in this gallery are the official property of ITS Team
                        Sapuangin and are part of its official documentation during competitions.
                        Any use, reproduction, or distribution of these images without prior written
                        permission from ITS Team Sapuangin is not permitted.
                    </p>
                </div>

                {/* Main Sponsors */}
                <div className="w-full">
                    <div className="flex flex-wrap gap-3 md:gap-5 lg:gap-10 w-full mb-6 md:mb-8 lg:mb-14 justify-center">
                        {/* First row - 3 columns */}
                        {SPONSORSHIP_DATA.mainSponsors.map((sponsor, index) => (
                            <SponsorCard
                                key={index}
                                {...sponsor}
                                className="h-40 lg:h-[247.57px] flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-26.67px)]"
                            />
                        ))}
                        {/* Second row - 2 columns centered */}
                        {SPONSORSHIP_DATA.secondRowMainSponsors.map((sponsor, index) => (
                            <SponsorCard
                                key={index}
                                {...sponsor}
                                className="h-40 lg:h-[247.57px] flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-26.67px)]"
                            />
                        ))}
                    </div>

                    {/* Official Media Partner Section */}
                    <div className="flex flex-col items-center gap-4 md:gap-6 lg:gap-12 mb-6 md:mb-8 lg:mb-14">
                        <SectionTitle>Official Media Partner</SectionTitle>
                        <div className="w-full max-w-3xl h-40 md:h-45 lg:h-[240.58px]">
                            <SponsorCard {...SPONSORSHIP_DATA.mediaPartner} className="h-full" />
                        </div>
                    </div>

                    {/* Gold Sponsors Section */}
                    <div className="flex flex-col items-center gap-4 md:gap-6 lg:gap-12 mb-6 md:mb-8 lg:mb-14">
                        <SectionTitle bgColor="bg-[#E5B208]">Gold Sponsors</SectionTitle>
                        <div className="w-full max-w-3xl h-32 md:h-37.5 lg:h-[206.48px]">
                            <SponsorCard {...SPONSORSHIP_DATA.goldSponsors[0]} className="h-full" />
                        </div>
                    </div>

                    {/* Silver Sponsors Section */}
                    <div className="flex flex-col items-center gap-4 md:gap-6 lg:gap-11.5 mb-6 md:mb-8 lg:mb-14">
                        <SectionTitle bgColor="bg-[#ABABAB]">Silver Sponsors</SectionTitle>
                        <div className="flex flex-wrap gap-3 md:gap-4 lg:gap-[33.46px] w-full justify-center">
                            {SPONSORSHIP_DATA.silverSponsors.map((sponsor, index) => (
                                <SponsorCard
                                    key={index}
                                    {...sponsor}
                                    className="h-25 md:h-32.5 lg:h-[166.1px] flex-[0_0_100%] md:flex-[0_0_calc(50%-10px)] lg:flex-[0_0_calc(33.333%-22.31px)]"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Bronze Sponsors Section */}
                    <div className="flex flex-col items-center gap-4 md:gap-6 lg:gap-11.5 mb-6 md:mb-8 lg:mb-14">
                        <SectionTitle bgColor="bg-[#9F6C25]">Bronze Sponsors</SectionTitle>

                        <div className="flex flex-wrap gap-3 md:gap-4 lg:gap-[25.71px] w-full justify-center">
                            {SPONSORSHIP_DATA.bronzeSponsors.map((sponsor, index) => (
                                <SponsorCard
                                    key={index}
                                    {...sponsor}
                                    className="h-22 md:h-32.5 lg:h-[159.22px] flex-[0_0_100%] md:flex-[0_0_calc(50%-10px)] lg:flex-[0_0_calc(25%-19.28px)]"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Support Sponsors Section */}
                    <div className="flex flex-col items-center gap-4 md:gap-6 lg:gap-11.5 mb-6 md:mb-8 lg:mb-14">
                        <SectionTitle bgColor="bg-[#69B2C8]">Support Sponsors</SectionTitle>

                        <div className="flex flex-wrap gap-3 md:gap-4 w-full justify-center">
                            {SPONSORSHIP_DATA.supportSponsors.map((sponsor, index) => (
                                <SponsorCard
                                    key={index}
                                    {...sponsor}
                                    className="h-20 md:h-27.5 lg:h-35 flex-[0_0_100%] md:flex-[0_0_calc(50%-10px)] lg:flex-[0_0_calc(20%-16px)]"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Why You Should Support Us Section */}
            <div className="w-full bg-white py-8 md:py-10 lg:py-12 overflow-hidden">
                <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-[67.5px]">
                    <div className="flex flex-col items-center gap-8 md:gap-12 lg:gap-16">
                        {/* Section Title */}
                        <div className="bg-[#e50808] px-3 md:px-4 lg:px-5 py-1 md:py-1.5 lg:py-2">
                            <h2 className="font-bold text-lg md:text-2xl lg:text-[32px] text-white tracking-[-1.49px] leading-normal text-center">
                                Why You Should Support Us?
                            </h2>
                        </div>

                        {/* Benefits Grid */}
                        <div className="flex flex-col items-center md:grid md:grid-cols-2 gap-x-8 md:gap-x-12 lg:gap-x-20 gap-y-8 md:gap-y-10 lg:gap-y-16 w-full max-w-225 mx-auto md:place-items-center">
                            {SPONSORSHIP_DATA.benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="flex gap-4 md:gap-5 lg:gap-6 items-center w-fit mx-auto md:mx-0 md:w-full md:max-w-[320px]"
                                >
                                    <div className="relative shrink-0 w-14 h-14 md:w-16 md:h-16 lg:w-22.5g:h-[90px]">
                                        <Image
                                            src={`/page/sponsorship/${benefit.icon}`}
                                            alt={benefit.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <h3 className="font-semibold text-base md:text-xl lg:text-[28px] text-black tracking-[-0.9px] leading-[1.1] whitespace-pre-line flex-1">
                                        {benefit.title}
                                    </h3>
                                </div>
                            ))}
                        </div>

                        {/* Contact Section */}
                        <div className="flex flex-col items-center gap-6 md:gap-10 lg:gap-14.5 w-full max-w-full md:max-w-201.5">
                            <p className="font-normal text-[#5d5d5d] text-sm md:text-base lg:text-lg text-center tracking-[-1.02px] leading-normal">
                                For more information please contact us through:
                            </p>

                            <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between w-full gap-6 md:gap-0">
                                {/* First Contact */}
                                <Link
                                    href={`https://wa.me/${SPONSORSHIP_DATA.contacts[0].whatsapp}`}
                                    target="_blank"
                                    className="flex flex-col gap-1.25 items-center md:items-start group/contact"
                                >
                                    <div className="flex flex-col items-center md:items-start">
                                        <p className="font-bold text-base md:text-lg lg:text-xl text-black transition-colors duration-300 group-hover/contact:text-[#e51717]">
                                            {SPONSORSHIP_DATA.contacts[0].name}
                                        </p>
                                        <p className="font-bold text-base md:text-lg lg:text-xl text-[#e51717]">
                                            {SPONSORSHIP_DATA.contacts[0].role}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 md:gap-3 mt-1">
                                        <div className="w-4 h-4 md:w-5 md:h-5 relative transition-transform duration-300 ease-out group-hover/contact:translate-x-0.5">
                                            <Image
                                                src="/icons/call.png"
                                                alt="Call"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        <p className="relative font-normal text-sm md:text-base lg:text-lg text-[#e51717] pb-0.5">
                                            {SPONSORSHIP_DATA.contacts[0].phone}
                                            <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#e51717]/40 transition-all duration-300 ease-out group-hover/contact:w-full"></span>
                                        </p>
                                    </div>
                                </Link>

                                {/* Divider */}
                                <div className="hidden md:block w-[2.2px] h-27.25 bg-[#626262]"></div>
                                <div className="md:hidden w-32 h-px bg-[#626262]"></div>

                                {/* Second Contact */}
                                <Link
                                    href={`https://wa.me/${SPONSORSHIP_DATA.contacts[1].whatsapp}`}
                                    target="_blank"
                                    className="flex flex-col gap-1 items-center md:items-start group/contact"
                                >
                                    <div className="flex flex-col items-center md:items-start">
                                        <p className="font-bold text-base md:text-lg lg:text-xl text-black transition-colors duration-300 group-hover/contact:text-[#e51717]">
                                            {SPONSORSHIP_DATA.contacts[1].name}
                                        </p>
                                        <p className="font-bold text-base md:text-lg lg:text-xl text-[#e51717]">
                                            {SPONSORSHIP_DATA.contacts[1].role}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 md:gap-3 mt-1">
                                        <div className="w-4 h-4 md:w-5 md:h-5 relative transition-transform duration-300 ease-out group-hover/contact:translate-x-0.5">
                                            <Image
                                                src="/icons/call.png"
                                                alt="Call"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        <p className="relative font-normal text-sm md:text-base lg:text-lg text-[#e51717] pb-0.5">
                                            {SPONSORSHIP_DATA.contacts[1].phone}
                                            <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#e51717]/40 transition-all duration-300 ease-out group-hover/contact:w-full"></span>
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
