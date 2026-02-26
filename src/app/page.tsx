import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Home',
};

// ─── Data ────────────────────────────────────────────────────────────────────

const STATS = [
    { number: '16', label: 'Years of Experience' },
    { number: '513', unit: 'km/l', label: 'Fuel Efficiency Record' },
    { number: '50+', label: 'Championship Title' },
];

const HIGHLIGHTS = [
    {
        title: 'World Champions\nin London 2018',
        description:
            "In 2018, ITS Team Sapuangin made history as the first and only team from Indonesia to win the Drivers' World Championship in London. This achievement marked a milestone not only for our university but also for the nation, proving that Indonesian innovation can compete and triumph on the global stage.",
        image: '/page/home/world-champions-celebration.png',
        cta: { label: 'READ MORE', href: '/achievements' },
        layout: 'text-left' as const,
    },
    {
        title: 'Innovating Across\nVehicle Classes',
        description:
            'Our engineering journey covers a wide spectrum of challenges, from building energy-efficient Urban Concept and Prototype vehicles to competing in Formula Student Japan with a full-scale racing car. Each project reflects our drive to push boundaries, integrate new technologies, and prepare for the future of sustainable mobility.',
        image: '/page/home/innovating-vehicle-classes.png',
        cta: { label: 'TO THE GARAGE', href: '/cars' },
        layout: 'text-right' as const,
    },
    {
        title: 'The People\nBehind the Machines',
        description:
            "Behind every victory stands a team of dedicated students from Institut Teknologi Sepuluh Nopember. We combine skills in engineering, design, and strategy to deliver world-class results. Get to know the passionate individuals who transform bold ideas into real achievements and carry Indonesia's pride to international arenas.",
        image: '/page/home/team-behind-machines.png',
        cta: { label: 'MEET OUR TEAM', href: '/team' },
        layout: 'text-left' as const,
    },
];

const NEWS_ITEMS = [
    {
        badge: 'NEW',
        title: 'Hattrick Urban ICE Shell Eco-marathon',
        excerpt:
            'Behind every victory stands a team of dedicated students from Institut Teknologi Sepuluh Nopember. We combine skills in engineering, design, and strategy to deliver world-class results.',
        image: '/page/news/news-qatar-day2.png',
        href: '/news',
    },
    {
        badge: 'NEW',
        title: 'Discover Inside The Technical Inspection',
        excerpt:
            'Behind every victory stands a team of dedicated students from Institut Teknologi Sepuluh Nopember. We combine skills in engineering, design, and strategy to deliver world-class results.',
        image: '/page/news/news-qatar-day3.png',
        href: '/news',
    },
    {
        badge: 'NEW',
        title: 'Behind The Glory: Our Sponsors and Partner',
        excerpt:
            'Behind every victory stands a team of dedicated students from Institut Teknologi Sepuluh Nopember. We combine skills in engineering, design, and strategy to deliver world-class results.',
        image: '/page/news/news-qatar-day4.png',
        href: '/news',
    },
];

const TESTIMONIALS = [
    {
        quote: 'Semoga apa yang diperjuangkan ITS Team Sapuangin bisa memberikan hasil yang terbaik dan dapat melanjutkan apa yang telah dicapai sebelumnya, yaitu menjadi tim riset mobil hemat energi yang terbaik di Asia',
        name: 'Prof. Bambang Pramujati, S.T., M.Sc.Eng., Ph.D.',
        role: 'Rektor Institut Teknologi Sepuluh Nopember',
        image: '/page/home/testimonial-rektor.png',
        hasQuote: true,
    },
    {
        quote: 'Semoga apa yang diperjuangkan ITS Team Sapuangin bisa memberikan hasil yang terbaik dan dapat melanjutkan apa yang telah dicapai sebelumnya, yaitu menjadi tim riset mobil hemat energi yang terbaik di Asia',
        name: 'Dr. (H.C.) H. Erick Thohir, B.A., M.B.A.',
        role: 'Menteri Pemuda dan Olahraga Indonesia',
        image: '/page/home/testimonial-erick-thohir.png',
        hasQuote: true,
    },
    {
        quote: 'Semoga apa yang diperjuangkan ITS Team Sapuangin bisa memberikan hasil yang terbaik dan dapat melanjutkan apa yang telah dicapai sebelumnya, yaitu menjadi tim riset mobil hemat energi yang terbaik di Asia',
        name: 'Dr. (H.C.) Ir. Hj. Tri Rismaharini, M.T.',
        role: 'Menteri Sosial 2020 - 2024',
        image: '/page/home/testimonial-risma.png',
        hasQuote: true,
    },
    {
        quote: 'Semoga apa yang diperjuangkan ITS Team Sapuangin bisa memberikan hasil yang terbaik dan dapat melanjutkan apa yang telah dicapai sebelumnya, yaitu menjadi tim riset mobil hemat energi yang terbaik di Asia',
        name: 'Dr. Eri Cahyadi, S.T., M.T.',
        role: 'Walikota Surabaya',
        image: '/page/home/testimonial-governor.png',
        hasQuote: true,
    },
];

const SPONSOR_ROWS = [
    // Row 1 - Main sponsors
    {
        size: 'lg' as const,
        sponsors: [
            { logo: 'its.png', name: 'ITS' },
            { logo: 'ditmawa.png', name: 'Ditmawa' },
            { logo: 'ikoma.png', name: 'IKOMA' },
            { logo: 'mesin.png', name: 'Mesin ITS' },
        ],
    },
    // Row 2
    {
        size: 'md' as const,
        sponsors: [
            { logo: 'ikaits-qatar.png', name: 'IKAITS Qatar' },
            { logo: 'cretivox.png', name: 'Cretivox' },
        ],
    },
    // Row 3
    {
        size: 'md' as const,
        sponsors: [
            { logo: 'triputra-argo-persada.png', name: 'Triputra Argo Persada' },
            { logo: 'tdr.png', name: 'TDR' },
            { logo: 'haston.png', name: 'Haston' },
        ],
    },
    // Row 4
    {
        size: 'md' as const,
        sponsors: [
            { logo: 'pln-indonesia-power.png', name: 'PLN Indonesia Power' },
            { logo: 'ahm.png', name: 'AHM' },
            { logo: 'pelindo-indonesia-matitime-gateway.png', name: 'Pelindo' },
        ],
    },
    // Row 5
    {
        size: 'sm' as const,
        sponsors: [
            { logo: 'kupprum.png', name: 'Kupprum' },
            { logo: 'star-entertaiment.png', name: 'Star Entertainment' },
            { logo: 'wilson-cables.png', name: 'Wilson Cables' },
            { logo: 'pelindo.png', name: 'Pelindo' },
        ],
    },
    // Row 6
    {
        size: 'sm' as const,
        sponsors: [
            { logo: 'alhijaz.png', name: 'Alhijaz' },
            { logo: 'indowire.png', name: 'Indowire' },
            { logo: 'lintech.png', name: 'Lintech' },
            { logo: 'kiny-tours.png', name: 'Kiny Tours' },
        ],
    },
    // Row 7
    {
        size: 'xs' as const,
        sponsors: [
            { logo: 'akebono.png', name: 'Akebono' },
            { logo: 'zerotrip-racing.png', name: 'Zerotrip Racing' },
            { logo: 'betterluck.png', name: 'Better Luck' },
            { logo: 'badak-lng.png', name: 'Badak LNG' },
            { logo: 'level-garment.png', name: 'Level Garment' },
        ],
    },
    // Row 8
    {
        size: 'xs' as const,
        sponsors: [
            { logo: 'spectrum.png', name: 'Spectrum' },
            { logo: 'sua.png', name: 'SUA' },
            { logo: 'skyrape.png', name: 'Skyrape' },
        ],
    },
];

// ─── Helper Components ───────────────────────────────────────────────────────

function StatCard({ number, unit, label }: { number: string; unit?: string; label: string }) {
    return (
        <div className="flex flex-col items-center text-center">
            <p className="font-extrabold text-5xl md:text-7xl lg:text-[128px] tracking-[-2px] md:tracking-[-3.84px] leading-none text-black">
                {number}
                {unit && (
                    <span className="text-2xl md:text-4xl lg:text-[64px] tracking-[-1px] md:tracking-[-1.92px]">
                        {unit}
                    </span>
                )}
            </p>
            <p className="font-semibold text-sm md:text-xl lg:text-[32px] tracking-[-0.5px] md:tracking-[-0.96px] leading-normal text-black mt-1 md:mt-2">
                {label}
            </p>
        </div>
    );
}

function OutlinedButton({
    children,
    href,
    variant = 'dark',
}: {
    children: React.ReactNode;
    href: string;
    variant?: 'dark' | 'light';
}) {
    const styles =
        variant === 'dark'
            ? 'border-[#e50808] text-[#e50808] hover:bg-[#e50808] hover:text-white'
            : 'border-white text-white hover:bg-white hover:text-black';
    return (
        <Link
            href={href}
            className={`inline-flex items-center justify-center rounded-md border ${styles} px-4 py-2 font-black text-sm md:text-base lg:text-lg tracking-tight transition-colors duration-300`}
        >
            {children}
        </Link>
    );
}

function NewsCard({
    badge,
    title,
    excerpt,
    image,
    href,
}: {
    badge: string;
    title: string;
    excerpt: string;
    image: string;
    href: string;
}) {
    return (
        <div className="flex flex-col w-full">
            {/* Image Card */}
            <div className="relative w-full aspect-395/420 rounded-xl overflow-hidden group">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                {/* Badge */}
                <div className="absolute left-4 md:left-5 bottom-18 md:bottom-24">
                    <span className="bg-[#e50808] text-white font-bold text-xs md:text-sm px-3 py-1">
                        {badge}
                    </span>
                </div>
                {/* Title */}
                <div className="absolute left-4 md:left-5 right-4 md:right-5 bottom-4 md:bottom-5">
                    <h3 className="font-bold text-lg md:text-xl lg:text-2xl text-white leading-tight">
                        {title}
                    </h3>
                </div>
            </div>
            {/* Content */}
            <div className="pt-6 md:pt-8 px-1 md:px-3">
                <p className="text-[#5d5d5d] text-sm md:text-base leading-relaxed mb-6 md:mb-8">
                    {excerpt}
                </p>
                <OutlinedButton href={href}>READ MORE</OutlinedButton>
            </div>
        </div>
    );
}

function SponsorRow({
    sponsors,
    size,
}: {
    sponsors: { logo: string; name: string }[];
    size: 'lg' | 'md' | 'sm' | 'xs';
}) {
    const sizeClasses = {
        lg: 'w-36 md:w-48 lg:w-72 h-20 md:h-28 lg:h-[203px]',
        md: 'w-28 md:w-40 lg:w-60 h-16 md:h-24 lg:h-[166px]',
        sm: 'w-24 md:w-32 lg:w-[247px] h-14 md:h-20 lg:h-[159px]',
        xs: 'w-20 md:w-28 lg:w-[180px] h-10 md:h-16 lg:h-[89px]',
    };
    const gapClasses = {
        lg: 'gap-6 md:gap-10 lg:gap-16',
        md: 'gap-4 md:gap-8 lg:gap-12',
        sm: 'gap-3 md:gap-6 lg:gap-10',
        xs: 'gap-3 md:gap-5 lg:gap-8',
    };

    return (
        <div className={`flex flex-wrap justify-center items-center ${gapClasses[size]}`}>
            {sponsors.map((sponsor, index) => (
                <div key={index} className={`relative ${sizeClasses[size]}`}>
                    <Image
                        src={`/page/sponsorship/${sponsor.logo}`}
                        alt={sponsor.name}
                        fill
                        className="object-contain p-2 md:p-3 lg:p-4"
                    />
                </div>
            ))}
        </div>
    );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
    return (
        <div className="bg-white flex flex-col items-center w-full overflow-x-hidden">
            {/* ── Hero Section ─────────────────────────────────────────── */}
            <div className="overflow-hidden relative w-full">
                <div
                    className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex flex-col gap-8 justify-end items-center px-6 md:px-12 lg:px-24 pb-12 md:pb-16 lg:pb-24"
                    style={{ backgroundImage: "url('/page/home/hero-home.png')" }}
                >
                    <div
                        className="absolute inset-0 w-full z-0"
                        style={{
                            backgroundImage:
                                'linear-gradient(to top, rgba(0,0,0,0.74) 0%, rgba(0,0,0,0) 62.5%)',
                        }}
                    ></div>

                    <div className="left-0 right-0 flex justify-center z-20">
                        <div className="bg-[#e50808] px-4 py-1.5 md:px-6 md:py-2">
                            <h1 className="font-bold text-xl md:text-3xl lg:text-[48px] text-white tracking-[-1.20px] leading-tight uppercase text-center">
                                Fuel-Efficient Car Research Team
                            </h1>
                        </div>
                    </div>
                    <p className="text-white text-sm md:text-lg lg:text-xl z-20 text-center tracking-tight leading-relaxed max-w-5xl mx-auto">
                        ITS Team Sapuangin is the research and development team from Institut
                        Teknologi Sepuluh Nopember, competing in Shell Eco-marathon and FSAE Japan.
                        For 15 consecutive years, we have achieved international recognition and
                        proudly represented Indonesia on the global stage.
                    </p>
                </div>
            </div>

            {/* ── About Us Section ─────────────────────────────────────── */}
            <section className="w-full">
                <div className="container mx-auto flex flex-col lg:flex-row w-full">
                    {/* Left - Image */}
                    <div className="relative w-full lg:w-[60%] h-64 md:h-96 lg:h-133.5">
                        <Image
                            src="/page/home/about-urban-car.png"
                            alt="Urban Concept Car"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    {/* Right - Content */}
                    <div className="w-full lg:w-[40%] bg-white flex flex-col justify-center px-6 md:px-12 lg:px-10 py-8 md:py-12 lg:py-0">
                        <p className="font-bold text-sm md:text-base lg:text-lg text-black tracking-widest uppercase mb-2 md:mb-3 text-center md:text-left">
                            About Us
                        </p>
                        <h2 className="font-bold text-2xl md:text-3xl lg:text-[42px] text-black tracking-[-1px] text-center md:text-left leading-tight mb-4 md:mb-6">
                            World Champions in Energy Efficiency
                        </h2>
                        <p className="text-[#5d5d5d] text-sm md:text-base lg:text-lg leading-relaxed mb-6 md:mb-8 text-center md:text-left">
                            Since 2009, ITS Team Sapuangin has advanced energy-efficient vehicle
                            innovation. Competing in Shell Eco-marathon and Student Formula Japan,
                            we became world champions in London 2018 and continue to represent
                            Indonesia proudly on the global stage.
                        </p>
                        <div className="w-full flex justify-center md:justify-start">
                            <OutlinedButton href="/achievements">GET STARTED</OutlinedButton>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Stats Section ────────────────────────────────────────── */}
            <section className="w-full py-10 md:py-16 lg:py-24">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <div className="flex flex-col md:flex-row items-center justify-evenly gap-8 md:gap-12 lg:gap-16">
                        {STATS.map((stat, index) => (
                            <StatCard key={index} {...stat} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── World Champions Banner ───────────────────────────────── */}
            <section className="w-full relative">
                <div className="relative w-full h-75 md:h-105 lg:h-140 overflow-hidden">
                    <Image
                        src="/page/home/world-champions-banner.png"
                        alt="World Champions Banner"
                        fill
                        className="object-cover grayscale"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    {/* Content overlay */}
                    <div className="absolute inset-0 flex flex-col gap-8 items-center justify-center px-4">
                        <Image
                            src="/page/home/world-champs.png"
                            alt="World Champions - ITS Team Sapuangin"
                            width={941}
                            height={362}
                            className="w-60 md:w-120 lg:w-235.25 h-auto object-contain mb-3 md:mb-5 lg:mb-8"
                        />
                        <OutlinedButton href="/achievements" variant="light">
                            HALL OF CHAMPIONS
                        </OutlinedButton>
                    </div>
                </div>
            </section>

            {/* ── Highlights / Bento Cards Section ─────────────────────── */}
            <section className="w-full py-12 md:py-16 lg:py-20">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-24">
                        <div className="lg:col-span-5 flex flex-col gap-4 md:gap-6 justify-between order-2 lg:order-0">
                            <h3 className="font-bold line-clamp-2 text-2xl md:text-3xl lg:text-4xl text-black tracking-[-1px] leading-tight whitespace-pre-line">
                                {HIGHLIGHTS[0].title}
                            </h3>
                            <p className="text-[#5d5d5d] line-clamp-6 text-sm md:text-base leading-relaxed">
                                {HIGHLIGHTS[0].description}
                            </p>
                            <div className="flex justify-start">
                                <OutlinedButton href={HIGHLIGHTS[0].cta.href}>
                                    {HIGHLIGHTS[0].cta.label}
                                </OutlinedButton>
                            </div>
                        </div>
                        <div className="lg:col-span-7 relative h-64 md:h-80 lg:h-90 rounded-xl overflow-hidden order-1 lg:order-0">
                            <Image
                                src={HIGHLIGHTS[0].image}
                                alt="World Champions in London 2018"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Card 2: Innovating Across Vehicle Classes — image left, text right */}
                        <div className="lg:col-span-7 relative h-64 md:h-80 lg:h-90 rounded-xl overflow-hidden order-2 lg:order-0">
                            <Image
                                src={HIGHLIGHTS[1].image}
                                alt="Innovating Across Vehicle Classes"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="lg:col-span-5 flex flex-col gap-4 md:gap-6 justify-between order-1 lg:order-0">
                            <h3 className="font-bold line-clamp-2 text-2xl md:text-3xl lg:text-4xl  text-black tracking-[-1px] leading-tight whitespace-pre-line">
                                {HIGHLIGHTS[1].title}
                            </h3>
                            <p className="text-[#5d5d5d] line-clamp-6 text-sm md:text-base leading-relaxed">
                                {HIGHLIGHTS[1].description}
                            </p>
                            <div>
                                <OutlinedButton href={HIGHLIGHTS[1].cta.href}>
                                    {HIGHLIGHTS[1].cta.label}
                                </OutlinedButton>
                            </div>
                        </div>

                        {/* Card 3: The People Behind the Machines — text left, image right */}
                        <div className="lg:col-span-5 flex flex-col gap-4 md:gap-6 justify-between order-2 lg:order-0">
                            <h3 className="font-bold line-clamp-2 text-2xl md:text-3xl lg:text-4xl text-black tracking-[-1px] leading-tight whitespace-pre-line">
                                {HIGHLIGHTS[2].title}
                            </h3>
                            <p className="text-[#5d5d5d] line-clamp-6 text-sm md:text-base leading-relaxed">
                                {HIGHLIGHTS[2].description}
                            </p>
                            <div>
                                <OutlinedButton href={HIGHLIGHTS[2].cta.href}>
                                    {HIGHLIGHTS[2].cta.label}
                                </OutlinedButton>
                            </div>
                        </div>
                        <div className="lg:col-span-7 relative h-64 md:h-80 lg:h-90 rounded-xl overflow-hidden order-1 lg:order-0">
                            <Image
                                src={HIGHLIGHTS[2].image}
                                alt="The People Behind the Machines"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── News Section ─────────────────────────────────────────── */}
            <section className="w-full bg-[#f5f5f5] py-10 md:py-14 lg:py-20">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    {/* Section Header */}
                    <div className="mb-8 md:mb-10 lg:mb-14">
                        <p className="font-bold text-sm md:text-base text-black tracking-widest uppercase mb-1 md:mb-2">
                            Articles & News
                        </p>
                        <h2 className="font-bold text-2xl md:text-4xl lg:text-[56px] text-black tracking-[-1.5px] leading-tight">
                            Stay Updated With Our Latest News
                        </h2>
                    </div>

                    {/* News Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                        {NEWS_ITEMS.map((item, index) => (
                            <NewsCard key={index} {...item} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Formula Student Japan Banner ─────────────────────────── */}
            <section className="w-full relative">
                <div className="relative w-full h-75 md:h-120 lg:h-196.25 overflow-hidden">
                    <Image
                        src="/page/home/formula-student-japan.png"
                        alt="Formula Student Japan"
                        fill
                        className="object-cover grayscale"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-14">
                        <div className="container mx-auto">
                            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-4 lg:gap-8">
                                <div className="max-w-2xl">
                                    <h2 className="font-bold text-3xl md:text-4xl lg:text-[56px] text-white tracking-[-1.5px] leading-tight mb-3 md:mb-4">
                                        Formula Student Japan
                                    </h2>
                                    <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed max-w-xl">
                                        Behind every victory stands a team of dedicated students
                                        from Institut Teknologi Sepuluh Nopember. We combine skills
                                        in engineering, design, and strategy to deliver world-class
                                        results.
                                    </p>
                                </div>
                                {/* JSAE + Formula SAE Japan Logos */}
                                <div className="flex items-center gap-3 md:gap-4 shrink-0">
                                    <Image
                                        src="/logo/jsae.png"
                                        alt="JSAE Logo"
                                        width={106.74}
                                        height={43.37}
                                        className="w-16 md:w-20 lg:w-26.5 h-auto brightness-0 invert"
                                    />

                                    <Image
                                        src="/logo/formula-sae.png"
                                        alt="Formula SAE Japan Logo"
                                        width={98.63}
                                        height={54.2}
                                        className="w-16 md:w-20 lg:w-26.5 h-auto brightness-0 invert"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Testimonials Section ─────────────────────────────────── */}
            <section className="w-full py-10 md:py-14 lg:py-20">
                <div className="container mx-auto px-6 md:px-12 lg:px-0">
                    {/* Section Title */}
                    <h2 className="font-bold text-2xl md:text-4xl lg:text-[56px] text-black tracking-[-1.5px] leading-tight text-center mb-8 md:mb-10 lg:mb-14">
                        What They Said About Us ?
                    </h2>

                    {/* Testimonial Cards */}
                    <div className="flex flex-wrap -m-1.5 md:-m-2 lg:-m-3 w-full">
                        {TESTIMONIALS.map((testimonial, index) => (
                            <div
                                key={index}
                                className="w-full md:w-1/2 lg:w-1/4 p-1.5 md:p-2 lg:p-3"
                            >
                                <div className="relative rounded-2xl overflow-hidden h-55 md:h-80 lg:h-118.25 group cursor-pointer">
                                    {/* Photo (default state) */}
                                    <Image
                                        src={testimonial.image!}
                                        alt={testimonial.name || 'Testimonial'}
                                        fill
                                        className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-110"
                                    />

                                    {/* Hover overlay */}
                                    {testimonial.hasQuote ? (
                                        <div className="absolute inset-0 bg-linear-to-br from-[#c41e1e]/95 to-[#8b0000]/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
                                            <div className="absolute inset-0 p-4 md:p-6 lg:p-8 flex flex-col justify-between text-white">
                                                <p className="text-[10px] md:text-sm lg:text-base italic leading-relaxed translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 ease-out">
                                                    {'\u201C'}
                                                    {testimonial.quote}
                                                    {'\u201D'}
                                                </p>
                                                <div className="flex flex-col gap-2 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 ease-out">
                                                    <p className="font-bold text-sm md:text-md lg:text-lg leading-tight">
                                                        {testimonial.name}
                                                    </p>
                                                    <p className="text-[8px] md:text-xs lg:text-sm text-white/80 leading-tight mt-0.5">
                                                        {testimonial.role}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
                                            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8">
                                                <p className="font-bold text-sm md:text-base lg:text-lg text-white translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 ease-out">
                                                    {testimonial.name}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA / Join Us Section ────────────────────────────────── */}
            <section className="w-full relative">
                <div className="relative w-full h-87.5 md:h-125 lg:h-190.75 overflow-hidden">
                    <Image
                        src="/page/home/cta-pitlane.png"
                        alt="Join Us"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    {/* Content */}
                    <div className="absolute inset-0 flex items-center justify-end px-6 md:px-12 lg:px-24">
                        <div className="container mx-auto flex justify-end">
                            <div className="max-w-md lg:max-w-lg text-right">
                                <h2 className="font-bold text-2xl md:text-3xl lg:text-[42px] text-white tracking-[-1px] leading-tight mb-4 md:mb-6">
                                    Innovating Across Vehicle Classes
                                </h2>
                                <p className="text-white/80 text-sm md:text-base lg:text-lg leading-relaxed mb-6 md:mb-8">
                                    Our engineering journey covers a wide spectrum of challenges,
                                    from building energy-efficient Urban Concept and Prototype
                                    vehicles to competing in Formula Student Japan with a full-scale
                                    racing car. Each project reflects our drive to push boundaries,
                                    integrate new technologies, and prepare for the future of
                                    sustainable mobility.
                                </p>
                                <OutlinedButton href="/career" variant="light">
                                    JOIN US NOW
                                </OutlinedButton>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Sponsors Section ─────────────────────────────────────── */}
            <section className="w-full py-10 md:py-14 lg:py-20">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    {/* Section Header */}
                    <div className="text-center mb-8 md:mb-10 lg:mb-14">
                        <p className="font-bold text-sm md:text-base text-black tracking-widest uppercase mb-1 md:mb-2">
                            Sponsors & Partners
                        </p>
                        <h2 className="font-bold text-2xl md:text-4xl lg:text-[56px] text-black tracking-[-1.5px] leading-tight">
                            Thank You for Supporting Us
                        </h2>
                    </div>

                    {/* Sponsor Logos Rows */}
                    <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 items-center">
                        {SPONSOR_ROWS.map((row, index) => (
                            <SponsorRow key={index} {...row} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
