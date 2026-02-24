import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Cars',
};

// ─── Data ────────────────────────────────────────────────────────────────────

const URBAN_SPECS = [
    { icon: '/page/cars/icon-engine.png', label: 'ENGINE', value: '4 Stroke Honda 110cc' },
    { icon: '/page/cars/icon-steering.png', label: 'STEERING', value: 'Ackerman Steering' },
    { icon: '/page/cars/icon-chassis.png', label: 'CHASSIS', value: 'Hollow Aluminium' },
    { icon: '/page/cars/icon-body.png', label: 'BODY', value: 'Dual Layer Carbon' },
    { icon: '/page/cars/icon-steering.png', label: 'DRIVETRAIN', value: 'Chain with Sprocket' },
    { icon: '/page/cars/icon-steering.png', label: 'BRAKING', value: 'Hydraulic System' },
    { icon: '/page/cars/icon-width.svg', label: 'WIDTH', value: '1290 mm' },
    { icon: '/page/cars/icon-steering.png', label: 'HEIGHT', value: '800 mm' },
    { icon: '/page/cars/icon-steering.png', label: 'LENGTH', value: '2600 mm' },
];

const FORMULA_SPECS = [
    { icon: '/page/cars/icon-engine.png', label: 'ENGINE', value: 'Kawasaki ZX-6R' },
    { icon: '/page/cars/icon-steering.png', label: 'MAX TORQUE', value: '48 Nm' },
    { icon: '/page/cars/icon-steering.png', label: 'MAX POWER', value: '70 HP' },
    { icon: '/page/cars/icon-steering.png', label: 'ECU', value: 'Motec M130' },
    { icon: '/page/cars/icon-steering.png', label: 'FRONT TYPE', value: 'LCO Hoosier 10 in' },
    { icon: '/page/cars/icon-steering.png', label: 'REAR TYPE', value: 'R25B Hoosier 10 in' },
    { icon: '/page/cars/icon-steering.png', label: 'COWL', value: 'Fiberglass Carbon Fiber' },
    { icon: '/page/cars/icon-steering.png', label: 'WEIGHT DISTRIBUTION', value: '47:53' },
    { icon: '/page/cars/icon-steering.png', label: 'WIDTH', value: '1400 mm' },
    { icon: '/page/cars/icon-steering.png', label: 'LENGTH', value: '2900 mm' },
    { icon: '/page/cars/icon-steering.png', label: 'FRAME', value: 'Steel Space AISI 1020' },
    { icon: '/page/cars/icon-steering.png', label: 'HEIGHT', value: '1212 mm' },
];

const URBAN_ACHIEVEMENTS = [
    '2025-urban',
    '2025-vehicle',
    '2025-autonomus',
    '2024-regional',
    '2024-urban',
    '2023-urban',
    '2023-world-champs',
    '2022-urban',
];

const FORMULA_ACHIEVEMENTS = ['2016-sae', '2015-sae', '2014-sae', '2013-sae'];

// ─── Helper Components ───────────────────────────────────────────────────────

function SpecCard({ icon, label, value }: { icon: string; label: string; value: string }) {
    return (
        <div className="flex flex-col items-start justify-between border border-[#ccc] rounded-xl p-4 md:p-5 lg:p-6 h-40 md:h-45 lg:h-50">
            <div className="relative h-8 w-12 md:h-10 md:w-14 lg:h-12 lg:w-16">
                <Image src={icon} alt={label} fill className="object-contain object-left" />
            </div>
            <div className="flex flex-col">
                <p className="font-extrabold text-lg md:text-xl lg:text-[26px] text-black tracking-tight">
                    {label}
                </p>
                <p className="font-normal text-base md:text-lg lg:text-2xl text-black tracking-tight">
                    {value}
                </p>
            </div>
        </div>
    );
}

function SectionDivider() {
    return <hr className="w-full border-t border-[#ccc]" />;
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function CarsPage() {
    return (
        <div className="bg-white flex flex-col items-center w-full overflow-x-hidden">
            {/* ── Hero Section ─────────────────────────────────────────── */}
            <div className="h-48 md:h-96 lg:h-137.5 overflow-hidden relative w-full">
                <div
                    className="relative w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/page/cars/hero-cars.png')" }}
                >
                    <div className="absolute inset-0 bg-linear-to-r from-black/80 to-transparent" />
                    <div className="container mx-auto px-4 md:px-6 lg:px-0">
                        <div className="absolute bottom-0 flex bg-[#e50808] w-fit h-fit px-3 py-1 md:px-4.5 md:py-1.5">
                            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-white tracking-[-1.44px] leading-tight">
                                Our Cars
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Description + Class Cards ────────────────────────────── */}
            <section className="w-full py-10 md:py-14 lg:py-16">
                <div className="container mx-auto px-6 md:px-12 lg:px-0 flex flex-col items-center gap-8 md:gap-10 lg:gap-12">
                    <p className="text-[#5d5d5d] text-sm md:text-lg lg:text-2xl text-center tracking-tight leading-relaxed max-w-6xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full">
                        {/* Urban Class Card */}
                        <a
                            href="#urban"
                            className="flex-1 border border-[#ccc] rounded-xl shadow-[0_0_12px_rgba(0,0,0,0.05)] p-5 md:p-6 flex flex-col gap-4 md:gap-6 transition-transform hover:scale-[1.01]"
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="font-extrabold text-xl md:text-2xl lg:text-[29px] text-black tracking-tight leading-tight">
                                    Urban Class
                                </h3>
                                <div className="w-1.5 h-7 bg-[#e93838]" />
                            </div>
                            <p className="text-[#5d5d5d] text-sm md:text-base tracking-tight leading-normal">
                                In 2018, ITS Team Sapuangin made history as the first and only team
                                from Indonesia to win the Drivers&apos; World Championship in
                                London. This achievement marked a ...
                            </p>
                        </a>

                        {/* Formula Class Card */}
                        <a
                            href="#formula"
                            className="flex-1 border border-[#ccc] rounded-xl shadow-[0_0_12px_rgba(0,0,0,0.05)] p-5 md:p-6 flex flex-col gap-4 md:gap-6 transition-transform hover:scale-[1.01]"
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="font-extrabold text-xl md:text-2xl lg:text-[29px] text-black tracking-tight leading-tight">
                                    Formula Class
                                </h3>
                                <div className="w-1.5 h-7 bg-[#2e5fbd]" />
                            </div>
                            <p className="text-[#5d5d5d] text-sm md:text-base tracking-tight leading-normal">
                                In 2018, ITS Team Sapuangin made history as the first and only team
                                from Indonesia to win the Drivers&apos; World Championship in
                                London. This achievement marked a ...
                            </p>
                        </a>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════════
                 URBAN CAR SECTION
                 ══════════════════════════════════════════════════════════ */}
            <section
                id="urban"
                className="w-full bg-white flex flex-col items-center gap-8 md:gap-10 lg:gap-12 pt-10 md:pt-12 lg:pt-16 pb-12 md:pb-16 lg:pb-20"
            >
                {/* Title Badge */}
                <div className="bg-[#e50808] px-6 md:px-8 lg:px-10 py-2">
                    <h2 className="font-bold text-2xl md:text-3xl lg:text-5xl text-white tracking-[-1.44px] text-center">
                        SAPUANGIN XI EVO 5
                    </h2>
                </div>

                {/* Car Image + About */}
                <div className="w-full">
                    <div className="container mx-auto px-6 md:px-12 lg:px-0 flex flex-col lg:flex-row lg:items-center lg:justify-end gap-6 lg:gap-0">
                        {/* Car Image - overflows left on desktop */}
                        <div className="relative w-full lg:w-[130%] lg:translate-x-[8%] shrink-0 aspect-1000/421">
                            <Image
                                src="/page/cars/urban-car.png"
                                alt="Sapuangin XI Evo 5 Urban Car"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>

                        {/* About + Logo */}
                        <div className="flex flex-col items-center lg:items-end gap-6 lg:gap-8 w-full lg:w-[38%] lg:shrink-0 text-center lg:text-right">
                            <div className="relative w-48 md:w-56 lg:w-67 h-12 md:h-14 lg:h-16">
                                <Image
                                    src="/page/cars/shell-logo.svg"
                                    alt="Shell Eco-marathon"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex flex-col gap-3">
                                <p className="font-extrabold italic text-xl md:text-2xl lg:text-[32px] text-[#ccc] tracking-tight uppercase">
                                    About The Car
                                </p>
                                <p className="text-[#5d5d5d] text-sm md:text-lg lg:text-2xl tracking-tight leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Fuel Efficiency + Divider + Specs */}
                <div className="container mx-auto px-6 md:px-12 lg:px-0 flex flex-col gap-8 md:gap-10 lg:gap-12">
                    {/* Fuel Efficiency */}
                    <div className="flex flex-col-reverse md:flex-row items-center justify-between">
                        <p className="text-black text-base md:text-lg lg:text-2xl tracking-tight text-center md:text-left">
                            Fuel Efficiency Record
                        </p>
                        <p className="text-black text-center md:text-right">
                            <span className="font-extrabold text-6xl md:text-7xl lg:text-[96px] tracking-[-4.32px]">
                                513{' '}
                            </span>
                            <span className="font-normal text-4xl md:text-5xl lg:text-[64px]">
                                km/l
                            </span>
                        </p>
                    </div>

                    <SectionDivider />

                    {/* Specifications */}
                    <div>
                        <h3 className="font-extrabold italic text-xl md:text-2xl lg:text-[32px] text-[#e50808] tracking-tight uppercase mb-6 md:mb-8 lg:mb-9">
                            Specification
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-9">
                            {URBAN_SPECS.map((spec) => (
                                <SpecCard key={spec.label} {...spec} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Urban Achievements ───────────────────────────────────── */}
            <section className="w-full bg-black py-10 md:py-14 lg:py-16">
                <div className="container mx-auto px-6 md:px-12 lg:px-0">
                    <h3 className="font-extrabold italic text-2xl md:text-3xl lg:text-[32px] text-white tracking-tight uppercase text-center mb-8 md:mb-10 lg:mb-12">
                        Achievements
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 justify-items-center">
                        {URBAN_ACHIEVEMENTS.map((badge) => (
                            <div key={badge} className="w-full max-w-65">
                                <Image
                                    src={`/page/achievements/hall-of-fame/${badge}.svg`}
                                    alt={badge
                                        .split('-')
                                        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                                        .join(' ')}
                                    width={260}
                                    height={143}
                                    className="object-contain w-full h-auto"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Transition Image ─────────────────────────────────────── */}
            <div className="relative w-full h-64 md:h-96 lg:h-125 overflow-hidden">
                <Image
                    src="/page/cars/hero-cars.png"
                    alt="Sapuangin car in action"
                    fill
                    className="object-cover"
                />
            </div>

            {/* ══════════════════════════════════════════════════════════════
                 FORMULA CAR SECTION
                 ══════════════════════════════════════════════════════════ */}
            <section
                id="formula"
                className="w-full bg-white flex flex-col items-center gap-8 md:gap-10 lg:gap-12 pt-10 md:pt-12 lg:pt-16 pb-12 md:pb-16 lg:pb-20"
            >
                {/* Title Badge */}
                <div className="bg-[#2e5fbd] px-6 md:px-8 lg:px-10 py-2">
                    <h2 className="font-bold text-2xl md:text-3xl lg:text-5xl text-white tracking-[-1.44px] text-center">
                        SAPUANGIN SPEED 8
                    </h2>
                </div>

                {/* Car Image + About */}
                <div className="w-full">
                    <div className="container mx-auto px-6 md:px-12 lg:px-0 flex flex-col-reverse lg:flex-row lg:items-center lg:justify-start gap-6 lg:gap-0">
                        {/* About + Logo (left side) */}
                        <div className="flex flex-col items-center lg:items-start gap-6 lg:gap-8 w-full lg:w-[38%] lg:shrink-0 text-center lg:text-left">
                            <div className="relative w-40 md:w-48 lg:w-48 h-14 md:h-16 lg:h-20">
                                <Image
                                    src="/page/cars/jsae-logo.svg"
                                    alt="JSAE"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                            <div className="flex flex-col gap-3">
                                <p className="font-extrabold italic text-xl md:text-2xl lg:text-[32px] text-[#ccc] tracking-tight uppercase">
                                    About The Car
                                </p>
                                <p className="text-[#5d5d5d] text-sm md:text-lg lg:text-2xl tracking-tight leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat. Duis aute
                                </p>
                            </div>
                        </div>

                        {/* Car Image - overflows right on desktop */}
                        <div className="relative w-full lg:w-[130%] shrink-0 lg:translate-x-[-10%] aspect-1165/521">
                            <Image
                                src="/page/cars/formula-car.png"
                                alt="Sapuangin Speed 8 Formula Car"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Fuel Efficiency + Divider + About + Specs */}
                <div className="container mx-auto px-6 md:px-12 lg:px-0 flex flex-col gap-8 md:gap-10 lg:gap-12">
                    {/* Fuel Efficiency */}
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <p className="text-black text-center md:text-left">
                            <span className="font-extrabold text-6xl md:text-7xl lg:text-[96px] tracking-[-4.32px]">
                                513{' '}
                            </span>
                            <span className="font-normal text-4xl md:text-5xl lg:text-[64px]">
                                km/l
                            </span>
                        </p>
                        <p className="text-black text-base md:text-lg lg:text-2xl tracking-tight text-center md:text-right">
                            Fuel Efficiency Record
                        </p>
                    </div>

                    <SectionDivider />

                    {/* About The Car (extended description) */}
                    <div>
                        <h3 className="font-extrabold italic text-xl md:text-2xl lg:text-[32px] text-[#2e5fbd] tracking-tight uppercase mb-4 md:mb-6">
                            About The Car
                        </h3>
                        <p className="text-[#5d5d5d] text-sm md:text-lg lg:text-2xl tracking-tight leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum.
                        </p>
                    </div>

                    <SectionDivider />

                    {/* Specifications */}
                    <div>
                        <h3 className="font-extrabold italic text-xl md:text-2xl lg:text-[32px] text-[#2e5fbd] tracking-tight uppercase mb-6 md:mb-8 lg:mb-9">
                            Specification
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-9">
                            {FORMULA_SPECS.map((spec) => (
                                <SpecCard key={spec.label} {...spec} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Formula Achievements ─────────────────────────────────── */}
            <section className="w-full bg-black py-10 md:py-14 lg:py-16">
                <div className="container mx-auto px-6 md:px-12 lg:px-0">
                    <h3 className="font-extrabold italic text-2xl md:text-3xl lg:text-[32px] text-white tracking-tight uppercase text-center mb-8 md:mb-10 lg:mb-12">
                        Achievements
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-12 justify-items-center max-w-4xl mx-auto">
                        {FORMULA_ACHIEVEMENTS.map((badge) => (
                            <div key={badge} className="w-full max-w-65">
                                <Image
                                    src={`/page/achievements/hall-of-fame/${badge}.svg`}
                                    alt={badge
                                        .split('-')
                                        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                                        .join(' ')}
                                    width={260}
                                    height={229}
                                    className="object-contain w-full h-auto"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Bottom Image ─────────────────────────────────────────── */}
            <div className="relative w-full h-64 md:h-96 lg:h-125 overflow-hidden">
                <Image
                    src="/page/cars/hero-cars.png"
                    alt="Sapuangin car on the track"
                    fill
                    className="object-cover"
                />
            </div>
        </div>
    );
}
