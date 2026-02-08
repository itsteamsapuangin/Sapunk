import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Achievements',
};

// Data structures
const STATS = [
    { number: '8', label: 'Country' },
    { number: '50+', label: 'Championship Title' },
    { number: '16', label: 'Years of Experience' },
];

const COUNTRIES = [
    { name: 'Indonesia', image: 'indonesia.png' },
    { name: 'Malaysia', image: 'malaysia.png' },
    { name: 'Philippines', image: 'philippines.png' },
    { name: 'Singapore', image: 'singapore.png' },
    { name: 'United Kingdom', image: 'uk.png' },
    { name: 'Japan', image: 'japan.png' },
    { name: 'India', image: 'india.png' },
    { name: 'Qatar', image: 'qatar.png' },
];

const HALL_OF_FAME_BADGES = [
    {
        filename: '2018-world-champs',
        date: '5-9 Sep 2018',
        location: 'London, UNITED KINGDOM',
        glowColor: 'gold',
    },
    {
        filename: '2025-urban',
        date: '18-22 Jun 2025',
        location: 'Surabaya, INDONESIA',
        glowColor: 'gold',
    },
    {
        filename: '2025-vehicle',
        date: '18-22 Jun 2025',
        location: 'Surabaya, INDONESIA',
        glowColor: 'gold',
    },
    {
        filename: '2025-autonomus',
        date: '18-22 Jun 2025',
        location: 'Surabaya, INDONESIA',
        glowColor: 'gold',
    },
    {
        filename: '2024-regional',
        date: '15-19 May 2024',
        location: 'Jakarta, INDONESIA',
        glowColor: 'gold',
    },
    {
        filename: '2024-urban',
        date: '15-19 May 2024',
        location: 'Jakarta, INDONESIA',
        glowColor: 'gold',
    },
    {
        filename: '2023-urban',
        date: '10-14 Jul 2023',
        location: 'Surabaya, INDONESIA',
        glowColor: 'gold',
    },
    {
        filename: '2023-data-elementary',
        date: '10-14 Jul 2023',
        location: 'Surabaya, INDONESIA',
        glowColor: 'blue',
    },
    {
        filename: '2022-data-elementary',
        date: '8-12 Aug 2022',
        location: 'Manila, PHILIPPINES',
        glowColor: 'blue',
    },
    {
        filename: '2021-data-elementary',
        date: '20-24 Sep 2021',
        location: 'Singapore, SINGAPORE',
        glowColor: 'blue',
    },
    {
        filename: '2020-urban',
        date: '5-9 Oct 2020',
        location: 'Kuala Lumpur, MALAYSIA',
        glowColor: 'gold',
    },
    {
        filename: '2020-urban-aero',
        date: '5-9 Oct 2020',
        location: 'Kuala Lumpur, MALAYSIA',
        glowColor: 'silver',
    },
    {
        filename: '2020-urban-vehicle',
        date: '5-9 Oct 2020',
        location: 'Kuala Lumpur, MALAYSIA',
        glowColor: 'silver',
    },
    { filename: '2019-urban', date: '12-16 Nov 2019', location: 'Tokyo, JAPAN', glowColor: 'gold' },
    {
        filename: '2019-urban-diesel',
        date: '12-16 Nov 2019',
        location: 'Tokyo, JAPAN',
        glowColor: 'silver',
    },
    {
        filename: '2018-urban',
        date: '8-12 Dec 2018',
        location: 'Bangkok, THAILAND',
        glowColor: 'gold',
    },
    {
        filename: '2017-cost-man',
        date: '7-11 Jul 2017',
        location: 'Doha, QATAR',
        glowColor: 'silver',
    },
    { filename: '2017-urban', date: '7-11 Jul 2017', location: 'Doha, QATAR', glowColor: 'gold' },
    {
        filename: '2016-fuel',
        date: '15-19 Aug 2016',
        location: 'Mumbai, INDIA',
        glowColor: 'bronze',
    },
    {
        filename: '2015-urban',
        date: '20-24 Jun 2015',
        location: 'Surabaya, INDONESIA',
        glowColor: 'gold',
    },
    {
        filename: 'liputan6-award',
        date: '10 Dec 2016',
        location: 'Jakarta, INDONESIA',
        glowColor: 'purple',
    },
    {
        filename: '2014-urban',
        date: '5-9 Sep 2014',
        location: 'Singapore, SINGAPORE',
        glowColor: 'gold',
    },
    {
        filename: '2014-tribology',
        date: '5-9 Sep 2014',
        location: 'Singapore, SINGAPORE',
        glowColor: 'silver',
    },
    {
        filename: '2014-grand-champs',
        date: '5-9 Sep 2014',
        location: 'Singapore, SINGAPORE',
        glowColor: 'gold',
    },
    {
        filename: '2013-grand-champs',
        date: '18-22 Jun 2013',
        location: 'Surabaya, INDONESIA',
        glowColor: 'gold',
    },
    {
        filename: '2012-grand-champs',
        date: '12-16 Jul 2012',
        location: 'Manila, PHILIPPINES',
        glowColor: 'gold',
    },
    {
        filename: '2021-urban',
        date: '20-24 Sep 2021',
        location: 'Singapore, SINGAPORE',
        glowColor: 'gold',
    },
    {
        filename: '2012-combustion',
        date: '12-16 Jul 2012',
        location: 'Manila, PHILIPPINES',
        glowColor: 'silver',
    },
    {
        filename: '2011-urban',
        date: '8-12 Aug 2011',
        location: 'Kuala Lumpur, MALAYSIA',
        glowColor: 'gold',
    },
    {
        filename: '2011-combustion',
        date: '8-12 Aug 2011',
        location: 'Kuala Lumpur, MALAYSIA',
        glowColor: 'silver',
    },
    { filename: '2010-urban', date: '15-19 Sep 2010', location: 'Tokyo, JAPAN', glowColor: 'gold' },
    {
        filename: '2010-combustion',
        date: '15-19 Sep 2010',
        location: 'Tokyo, JAPAN',
        glowColor: 'silver',
    },
    {
        filename: '2024-safety',
        date: '15-19 May 2024',
        location: 'Jakarta, INDONESIA',
        glowColor: 'green',
    },
    {
        filename: '2024-data',
        date: '15-19 May 2024',
        location: 'Jakarta, INDONESIA',
        glowColor: 'blue',
    },
    {
        filename: '2021-autonomous',
        date: '20-24 Sep 2021',
        location: 'Singapore, SINGAPORE',
        glowColor: 'red',
    },
    {
        filename: '2017-urban-1',
        date: '7-11 Jul 2017',
        location: 'Doha, QATAR',
        glowColor: 'silver',
    },
    {
        filename: '2018-regional',
        date: '8-12 Dec 2018',
        location: 'Bangkok, THAILAND',
        glowColor: 'silver',
    },
    {
        filename: '2025-regional',
        date: '18-22 Jun 2025',
        location: 'Surabaya, INDONESIA',
        glowColor: 'gold',
    },
    {
        filename: '2021-technical',
        date: '20-24 Sep 2021',
        location: 'Singapore, SINGAPORE',
        glowColor: 'blue',
    },
    {
        filename: '2023-world-champs',
        date: '10-14 Jul 2023',
        location: 'Surabaya, INDONESIA',
        glowColor: 'gold',
    },
    {
        filename: '2017-world-champs',
        date: '7-11 Jul 2017',
        location: 'Doha, QATAR',
        glowColor: 'gold',
    },
    {
        filename: '2022-urban',
        date: '8-12 Aug 2022',
        location: 'Manila, PHILIPPINES',
        glowColor: 'gold',
    },
    {
        filename: '2022-autonomous',
        date: '8-12 Aug 2022',
        location: 'Manila, PHILIPPINES',
        glowColor: 'red',
    },
    {
        filename: '2021-league',
        date: '20-24 Sep 2021',
        location: 'Singapore, SINGAPORE',
        glowColor: 'bronze',
    },
];

const SAE_AWARDS = ['2016-sae', '2015-sae', '2014-sae', '2013-sae'];

// Helper Components
const StatCard = ({ number, label }: { number: string; label: string }) => (
    <div className="flex flex-col items-center w-fit justify-center h-fit">
        <p className="font-extrabold text-7xl md:text-7xl lg:text-[128px] tracking-[-3.84px] leading-normal">
            {number}
        </p>
        <p className="font-semibold text-lg md:text-2xl lg:text-[36px] tracking-[-1.08px] leading-normal">
            {label}
        </p>
    </div>
);

const CountryCard = ({ name, image }: { name: string; image: string }) => (
    <div className="flex flex-col gap-2 items-center w-full max-w-[211.104px]">
        <div className="h-auto md:h-33.75 relative w-full md:w-55">
            <Image
                src={`/page/achievements/${image}`}
                alt={name}
                width={220}
                height={135}
                className="object-cover w-full h-auto"
            />
        </div>
        <p className="font-bold text-sm md:text-lg lg:text-[24px] text-black text-center tracking-[-0.72px] leading-normal">
            {name}
        </p>
    </div>
);

const AchievementBadge = ({
    filename,
    date,
    location,
}: {
    filename: string;
    date: string;
    location: string;
}) => {
    const altText = filename
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    return (
        <div className="flex items-center justify-center group relative max-w-sm w-full">
            <Image
                src={`/page/achievements/hall-of-fame/${filename}.svg`}
                alt={altText}
                width={150}
                height={150}
                className="object-contain w-full h-auto transition-all duration-300 group-hover:brightness-75"
            />
            {/* Hover Tooltip */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-black/90 backdrop-blur-sm text-white rounded-lg px-4 py-3 shadow-xl border border-white/10">
                    <p className="text-md font-semibold text-center whitespace-nowrap">{date}</p>
                    <p className="text-sm text-gray-300 text-center mt-1 whitespace-nowrap">
                        {location}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default function AchievementsPage() {
    return (
        <div className="bg-white flex flex-col items-start relative w-full">
            {/* Hero Section */}
            <div className="h-48 md:h-96 lg:h-137.5 overflow-hidden relative w-full">
                <div
                    className="relative w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/page/achievements/hero-achievements.png')" }}
                >
                    <div className="container mx-auto px-4 md:px-6 lg:px-0">
                        <div className="absolute bottom-0 flex bg-[#e50808] w-fit h-fit px-3 py-1 md:px-4.5 md:py-1.5">
                            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-white tracking-[-1.44px] leading-tight">
                                Achievements
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* World Champions Section */}
            <div className="flex flex-col items-center overflow-hidden px-4 md:px-12 lg:px-24 py-8 md:py-12 lg:py-16 relative w-full">
                <div className="flex flex-col gap-6 md:gap-8 lg:gap-12 items-center relative w-full max-w-7xl">
                    {/* World Champions Outline Image */}
                    <div className="w-full max-w-280.5pect-[1122/434] relative group cursor-pointer">
                        <Image
                            src="/page/achievements/world-champs-outline.png"
                            alt="World Champions"
                            fill
                            className="object-contain transition-opacity duration-300 group-hover:opacity-0"
                        />
                        <Image
                            src="/page/achievements/world-champs-gold.png"
                            alt="World Champions Gold"
                            fill
                            className="object-contain absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        />
                    </div>

                    {/* Stats */}
                    <div className="flex flex-col md:flex justify-evenly md:justify-evenly md:items-start md:flex-row gap-8 md:gap-16 lg:gap-lg items-center justify-items-center text-black text-center w-full">
                        {STATS.map((stat, index) => (
                            <StatCard key={index} {...stat} />
                        ))}
                    </div>

                    {/* Description */}
                    <p className="font-medium text-[#5d5d5d] text-sm md:text-lg lg:text-[24px] text-center tracking-[-0.96px] max-w-258.5ading-normal px-4">
                        Celebrating a legacy of victory across global circuits. From Asia-Pacific to
                        Europe, we consistently push the boundaries of automotive engineering to
                        claim the top of the podium.
                    </p>
                </div>
            </div>

            {/* Champions Around The World Section */}
            <div className="container mx-auto flex flex-col gap-8 md:gap-12 lg:gap-14.5 items-center overflow-hidden pb-24 md:pb-32 lg:pb-45 pt-4 md:pt-6 lg:pt-6.5 px-4 md:px-12 lg:px-24 relative w-full">
                <div className="flex flex-col gap-6 md:gap-8 lg:gap-12 items-center relative w-full">
                    <p className="font-extrabold text-2xl md:text-4xl lg:text-[48px] text-black text-center tracking-[-1.44px] leading-normal">
                        Champions All Around The World
                    </p>

                    <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 items-center relative w-full">
                        {/* First Row */}
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10 lg:gap-12 relative w-full justify-items-center">
                            {COUNTRIES.slice(0, 4).map((country, index) => (
                                <CountryCard key={index} {...country} />
                            ))}
                        </div>

                        {/* Second Row */}
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10 lg:gap-12 relative w-full justify-items-center">
                            {COUNTRIES.slice(4, 8).map((country, index) => (
                                <CountryCard key={index} {...country} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Hall of Champions Badge */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 transform bg-[#e50808] text-center px-4 py-1 md:px-6 md:py-1.5 lg:px-8 lg:py-2">
                    <p className="font-bold text-xl md:text-3xl lg:text-[48px] text-white tracking-[-1px] leading-tight">
                        HALL OF CHAMPIONS
                    </p>
                </div>
            </div>

            {/* Hall of Champions Section */}
            <div className="bg-black flex flex-col items-center overflow-hidden px-6 md:px-12 lg:px-24 py-12 md:py-16 lg:py-20 relative w-full">
                <div className="mx-auto flex flex-col gap-8 md:gap-12 items-center relative w-full ">
                    {/* Achievement Badges Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8 lg:gap-12 w-full justify-items-center">
                        {HALL_OF_FAME_BADGES.map((badge, index) => (
                            <AchievementBadge key={index} {...badge} />
                        ))}
                    </div>

                    {/* SAE Awards Section */}
                    <div className="flex flex-col gap-8 items-center w-full">
                        <p className="text-white text-lg md:text-xl text-center">
                            Formula Student Japan Rank
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-200 justify-items-center">
                            {SAE_AWARDS.map((award, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-center w-full max-w-30 lg:max-w-45 justify-self-center"
                                >
                                    <Image
                                        src={`/page/achievements/hall-of-fame/${award}.svg`}
                                        alt={`${award.split('-')[0]} SAE Champion`}
                                        width={130}
                                        height={130}
                                        className="object-contain w-full h-auto"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
