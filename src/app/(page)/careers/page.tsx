import type { Metadata } from 'next';
import Image from 'next/image';
import FaqAccordionItem from '@/app/components/FaqAccordionItem';
import { JsonLd, breadcrumbJsonLd, organizationJsonLd } from '@/lib/seo/jsonld';
import Link from 'next/dist/client/link';

type Division = {
    icon: string;
    name: string;
    description: string[];
    skills: string[];
};

const GENERAL_REQUIREMENTS = [
    'Active ITS student batch 2023, 2024, or 2025',
    'Have good attitude, discipline, and strong commitment',
    'Able to work in team and communicate well',
    'Willing to follow all team rules and activities',
    'Interested in automotive, engineering, or team organization',
];

const TIMELINE = [
    { title: 'Document\nSubmission', subtitle: 'Coming Soon' },
    { title: 'Administration\nAnnouncement', subtitle: 'Coming Soon' },
    { title: 'Interview\nPhase', subtitle: 'Coming Soon' },
    { title: 'Internship\nStarts', subtitle: 'Coming Soon' },
];

const TECHNICAL_DIVISIONS: Division[] = [
    {
        icon: '/page/careers/division-icon-engine-drivetrain.png',
        name: 'Engine and\nDrivetrain',
        description: [
            'Responsible for designing and optimizing engine and drivetrain systems to achieve maximum efficiency and reliable vehicle performance.',
            'Analyze combustion process, fuel consumption, and power transmission to ensure the vehicle meets competition targets.',
            'Assemble, test, and troubleshoot engine and drivetrain components during development, testing, and competition preparation.',
        ],
        skills: ['SolidWorks', 'CAD Modelling', 'Engine Tuning', 'MATLAB'],
    },
    {
        icon: '/page/careers/division-icon-vehicle-dynamics.png',
        name: 'Vehicle\nDynamics',
        description: [
            'Responsible for designing suspension, steering, and braking systems to ensure stability, safety, and consistent vehicle handling.',
            'Analyze vehicle behavior during acceleration, cornering, and braking using simulation tools and real testing sessions.',
            'Tune and optimize vehicle setup to achieve the best balance of performance, control, and reliability.',
        ],
        skills: ['MATLAB', 'Simulation', 'Suspension', 'Steering'],
    },
    {
        icon: '/page/careers/division-icon-electrical-programming.png',
        name: 'Electrical\nProgramming',
        description: [
            'Responsible for designing and developing all electrical systems, including wiring, sensors, and embedded control used in the vehicle.',
            'Develop telemetry and data acquisition systems to monitor vehicle performance during testing and competition.',
            'Program microcontroller and software for control system, automation, and real-time data processing.',
        ],
        skills: ['Python', 'C++', 'Arduino IDE', 'ROS', 'Wiring & Troubleshoot'],
    },
    {
        icon: '/page/careers/division-icon-body-frame.png',
        name: 'Body\nand Frame',
        description: [
            'Responsible for designing aerodynamic body and lightweight chassis to achieve optimal efficiency and structural strength.',
            'Perform airflow and structural simulations to ensure safety, durability, and minimal drag during competition runs.',
            'Manufacture, assemble, and refine body and frame components for testing, evaluation, and final competition use.',
        ],
        skills: ['SolidWorks', 'CAD Modelling', 'CFD Simulation', 'Composite'],
    },
];

const NON_TECHNICAL_DIVISIONS: Division[] = [
    {
        icon: '/page/careers/division-icon-creative-branding.png',
        name: 'Creative\nBranding',
        description: [
            'Responsible for planning and executing branding strategy to improve team awareness through media and publications.',
            'Create graphic design, video, and social media content for competitions, events, and promotional activities.',
            'Develop creative campaigns and visual concepts to represent the team professionally in every public appearance.',
        ],
        skills: ['Adobe', 'Figma', 'Photoshop', 'Premiere Pro', 'Social Media Analysis'],
    },
    {
        icon: '/page/careers/division-icon-external-relations.png',
        name: 'External Relations\nand Sponsorship',
        description: [
            'Responsible for finding potential sponsors and maintaining strong relationships with partners, companies, and stakeholders.',
            'Build external relations with media, institutions, and organizations to increase exposure and support for the team.',
            'Organize events, campaigns, and fundraising programs to help funding, promotion, and long-term team sustainability.',
        ],
        skills: ['Public Speaking', 'Networking', 'Pitch Decking', 'Negotiation'],
    },
    {
        icon: '/page/careers/division-icon-admin-finance.png',
        name: 'Administration,\nAccommodation, and Finance',
        description: [
            'Responsible for managing administrative documents, team data, and official requirements needed for events and competitions.',
            'Arrange logistics, accommodation, and operational needs to support all team activities during preparation and competition.',
            'Prepare budgeting plans, financial reports, and expense tracking to maintain team sustainability and accountability.',
        ],
        skills: ['Microsoft Excel', 'Communication', 'Document Control', 'Management'],
    },
];

const REQUIRED_DOCUMENTS = [
    'Curriculum Vitae (ATS-Friendly)',
    'GPA Transcript / Academic Transcript',
    'ITS TEFL Result',
    'Recruitment Form',
    'MBTI Test Result (16Personalities)',
    'Essay: Why you want to join ITS Team Sapuangin & innovation for your division',
    'Portfolio (Required for Creative Branding / Recommended for others)',
];

const FAQS = [
    {
        question: 'Can I register more than one division?',
        answer: 'No, applicants are only allowed to choose one division during registration to keep the selection process focused.',
    },
    {
        question: 'Do I need prior experience to join Sapuangin?',
        answer: 'Not mandatory, but basic knowledge related to the division and strong willingness to learn are highly recommended.',
    },
    {
        question: 'Will internship members join the competition directly?',
        answer: 'Internship members will go through training first. Selected members may join testing and competition preparation.',
    },
    {
        question: 'How busy is the internship activity?',
        answer: 'Activities are scheduled regularly, especially near competition. Good time management between lecture and team is required.',
    },
    {
        question: 'What will I get after joining Sapuangin?',
        answer: 'You will gain technical experience, teamwork skills, competition exposure, and opportunity to work on real race car projects.',
    },
];

export const metadata: Metadata = {
    title: 'Careers - Recruitment',
    description:
        'Join ITS Team Sapuangin through our recruitment program. Explore requirements, divisions, timeline, required documents, and frequently asked questions.',
    alternates: {
        canonical: '/careers',
    },
    openGraph: {
        title: 'Careers | ITS Team Sapuangin',
        description:
            'Recruitment information for ITS Team Sapuangin: requirements, timeline, divisions, and application documents.',
        url: '/careers',
        images: [
            {
                url: '/page/careers/careers-hero-bg.png',
                width: 1200,
                height: 630,
                alt: 'ITS Team Sapuangin Recruitment',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Careers | ITS Team Sapuangin',
        description:
            'Recruitment information for ITS Team Sapuangin: requirements, timeline, divisions, and application documents.',
        images: ['/page/careers/careers-hero-bg.png'],
    },
};

function SectionBadge({ title, isBlue = false }: { title: string; isBlue?: boolean }) {
    return (
        <div className={`px-4 py-1.5 md:px-5 md:py-2 ${isBlue ? 'bg-[#275dc3]' : 'bg-[#e50808]'}`}>
            <h2 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl tracking-tight text-center">
                {title}
            </h2>
        </div>
    );
}

function RequirementItem({ number, text }: { number: number; text: string }) {
    return (
        <li className="flex items-center gap-4 md:gap-6">
            <span className="inline-flex h-9 w-9 md:h-11 md:w-11 shrink-0 items-center justify-center rounded-full border-3 border-[#e51717] text-sm md:text-lg font-bold text-black">
                {number}
            </span>
            <p className="text-sm md:text-lg lg:text-2xl font-semibold tracking-tight text-black leading-snug">
                {text}
            </p>
        </li>
    );
}

function DivisionCard({ division, isBlue = false }: { division: Division; isBlue?: boolean }) {
    return (
        <article className="group rounded-xl border border-[#d5d5d5] bg-white p-5 md:p-6 flex flex-col gap-5 h-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_20px_45px_-24px_rgba(0,0,0,0.45)] motion-safe:hover:border-[#c7c7c7]">
            <div className="size-[68px] rounded-xl bg-[#f3f3f3] flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:scale-110 motion-safe:group-hover:-translate-y-0.5">
                <Image
                    src={division.icon}
                    alt={division.name}
                    width={40}
                    height={40}
                    className="object-contain transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:rotate-3"
                />
            </div>

            <div className="space-y-4 flex-1">
                <h3 className="text-[#2e2e2e] text-xl md:text-3xl font-extrabold tracking-tight leading-tight whitespace-pre-line transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:translate-x-0.5">
                    {division.name}
                </h3>
                <div className="h-px w-full bg-[#d0d0d0] overflow-hidden">
                    <div
                        className={`h-full w-0 transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:w-full ${isBlue ? 'bg-[#275dc3]' : 'bg-[#e51717]'}`}
                    />
                </div>
                <ul className="list-disc pl-5 space-y-2 text-[#5d5d5d] text-sm md:text-lg leading-relaxed tracking-tight">
                    {division.description.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>

            <div className="space-y-6">
                <div className="h-px w-full bg-[#d0d0d0]" />
                <div className="flex flex-wrap gap-2">
                    {division.skills.map((skill) => (
                        <span
                            key={skill}
                            className={`rounded-md px-4 py-1 text-xs md:text-base text-white transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:-translate-y-0.5 ${isBlue ? 'bg-[#275dc3]' : 'bg-[#e51717]'}`}
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
}

export default function CareersPage() {
    return (
        <div className="w-full bg-white overflow-x-hidden">
            <JsonLd data={organizationJsonLd()} />
            <JsonLd
                data={breadcrumbJsonLd([
                    { name: 'Home', href: '/' },
                    { name: 'Careers', href: '/careers' },
                ])}
            />

            {/* ── Hero Section ─────────────────────────────────────────── */}
            <div className="h-48 md:h-96 lg:h-137.5 overflow-hidden relative w-full">
                <div
                    className="relative w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/page/careers/hero-careers.png')" }}
                >
                    <div className="absolute inset-0 bg-linear-to-r from-black/80 to-transparent" />
                    <div className="container mx-auto px-4 md:px-6 lg:px-0">
                        <div className="absolute bottom-0 flex bg-[#e50808] w-fit h-fit px-3 py-1 md:px-4.5 md:py-1.5">
                            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-white tracking-[-1.44px] leading-tight">
                                Recruitments
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <section className="py-10 md:py-14 lg:py-16">
                <div className="container mx-auto px-6 md:px-10 lg:px-0 text-center space-y-6 md:space-y-8">
                    <h2 className="text-black font-black text-3xl md:text-5xl tracking-tight">
                        Come and Join Us!
                    </h2>
                    <div className="space-y-4 md:space-y-6 text-[#5d5d5d] text-sm md:text-lg lg:text-2xl tracking-tight leading-relaxed max-w-6xl mx-auto">
                        <p>
                            Join ITS Team Sapuangin and become part of a multidisciplinary team that
                            builds world-class energy-efficient race vehicles through innovation,
                            collaboration, and strong engineering culture.
                        </p>
                        <p>
                            Through this internship recruitment, you will gain hands-on experience,
                            practical knowledge, and exposure to real competition projects while
                            growing your technical and professional skills.
                        </p>
                    </div>
                    <nav className="mx-auto w-fit flex flex-wrap items-center justify-center gap-x-4 md:gap-x-6 gap-y-2 text-[11px] md:text-xs uppercase tracking-[0.12em]">
                        <a
                            href="#general-requirements"
                            className="pb-1 text-[#6f6f6f] transition-colors hover:text-[#e50808]"
                        >
                            General Requirements
                        </a>
                        <a
                            href="#timeline"
                            className="pb-1 text-[#6f6f6f] transition-colors hover:text-[#e50808]"
                        >
                            Timeline
                        </a>
                        <a
                            href="#divisions"
                            className="pb-1 text-[#6f6f6f] transition-colors hover:text-[#e50808]"
                        >
                            Divisions
                        </a>
                        <a
                            href="#required-documents"
                            className="pb-1 text-[#6f6f6f] transition-colors hover:text-[#e50808]"
                        >
                            Required Documents
                        </a>
                        <a
                            href="#apply-now"
                            className="pb-1 text-[#6f6f6f] transition-colors hover:text-[#e50808]"
                        >
                            Apply Now
                        </a>
                        <a
                            href="#faq"
                            className="pb-1 text-[#6f6f6f] transition-colors hover:text-[#e50808]"
                        >
                            FAQ
                        </a>
                    </nav>
                </div>
            </section>

            <section
                id="general-requirements"
                className="scroll-mt-24 md:scroll-mt-28 border-y border-[#d5d5d5] py-10 md:py-14 lg:py-16"
            >
                <div className="container mx-auto px-6 md:px-10 lg:px-0 space-y-8 md:space-y-10">
                    <h2 className="text-black text-center font-black text-3xl md:text-[42px] tracking-tight">
                        General Requirements
                    </h2>
                    <ol className="mx-auto max-w-5xl space-y-6 md:space-y-8">
                        {GENERAL_REQUIREMENTS.map((item, index) => (
                            <RequirementItem key={item} number={index + 1} text={item} />
                        ))}
                    </ol>
                </div>
            </section>

            <section id="timeline" className="scroll-mt-24 md:scroll-mt-28 py-10 md:py-14 lg:py-16">
                <div className="container mx-auto px-6 md:px-10 lg:px-0 space-y-10 md:space-y-24">
                    <div className="flex justify-center">
                        <SectionBadge title="Timeline" />
                    </div>

                    <div className="relative mx-auto w-fit px-10 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-10">
                        <span className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-6 hidden h-0.5 rounded-full bg-gradient-to-r from-[#e51717]/65 via-[#e51717]/30 to-[#e51717]/65 md:block" />

                        {TIMELINE.map((item, index) => (
                            <article
                                key={item.title}
                                className="relative flex items-start gap-4 md:flex-col md:items-center md:gap-5 md:text-center"
                            >
                                <div className="relative flex h-full w-12 shrink-0 items-start justify-center md:h-auto md:w-auto">
                                    {index < TIMELINE.length - 1 && (
                                        <span className="absolute left-1/2 top-8 -translate-x-1/2 h-[calc(100%+2.5rem)] w-0.5 rounded-full bg-gradient-to-b from-[#e51717]/65 via-[#e51717]/35 to-[#e51717]/20 md:hidden" />
                                    )}
                                    <div className="relative z-10 h-8 w-8 md:h-12 md:w-12 rounded-full border-4 md:border-6 border-[#e51717] bg-white" />
                                </div>

                                <div className="flex flex-col gap-2 pt-0.5 text-left md:pt-0 md:text-center">
                                    <h3 className="text-black text-lg md:text-xl lg:text-3xl font-bold tracking-tight leading-tight whitespace-pre-line">
                                        {item.title}
                                    </h3>
                                    <p className="text-[#5d5d5d] text-base md:text-lg font-medium tracking-tight">
                                        {item.subtitle}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section
                id="divisions"
                className="scroll-mt-24 md:scroll-mt-28 py-10 md:py-14 lg:py-16"
            >
                <div className="container mx-auto px-6 md:px-10 lg:px-0 space-y-10 md:space-y-12">
                    <div className="flex justify-center">
                        <SectionBadge title="Technical Divisions" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
                        {TECHNICAL_DIVISIONS.map((division) => (
                            <DivisionCard key={division.name} division={division} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-10 md:py-14 lg:py-16">
                <div className="container mx-auto px-6 md:px-10 lg:px-0 space-y-10 md:space-y-12">
                    <div className="flex justify-center">
                        <SectionBadge title="Non-Technical Divisions" isBlue />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
                        {NON_TECHNICAL_DIVISIONS.map((division) => (
                            <DivisionCard key={division.name} division={division} isBlue />
                        ))}
                    </div>
                </div>
            </section>

            <section
                id="required-documents"
                className="scroll-mt-24 md:scroll-mt-28 border-y border-[#d5d5d5] py-10 md:py-14 lg:py-16"
            >
                <div className="container mx-auto px-6 md:px-10 lg:px-0 space-y-8 md:space-y-10">
                    <h2 className="text-black font-black text-3xl md:text-[42px] tracking-tight">
                        Required Documents
                    </h2>

                    <div className="space-y-5 md:space-y-6">
                        {REQUIRED_DOCUMENTS.map((document) => (
                            <div key={document} className="space-y-6">
                                <p className="text-black text-base md:text-2xl font-medium tracking-tight leading-snug">
                                    {document}
                                </p>
                                <div className="h-px w-full bg-[#d0d0d0]" />
                            </div>
                        ))}

                        <div className="space-y-3">
                            <div className="flex flex-wrap items-center gap-4 justify-between">
                                <p className="text-black text-base md:text-2xl font-medium tracking-tight leading-snug">
                                    Additional task based on selected division
                                </p>
                                <button className="rounded-md border border-[#e50808] px-4 py-2 text-sm md:text-lg font-black text-[#e50808] hover:bg-[#e50808] hover:text-white transition-colors">
                                    Check Here
                                </button>
                            </div>
                            <div className="h-px w-full bg-[#d0d0d0]" />
                        </div>
                    </div>
                </div>

                <section className="py-10 md:py-14 lg:py-16" id="apply-now">
                    <div className="container mx-auto px-6 md:px-10 lg:px-0">
                        <div className="relative overflow-hidden rounded-2xl border border-[#dcdcdc] bg-gradient-to-br from-white to-[#f7f7f7] p-6 md:p-10 lg:p-12 shadow-[0_12px_35px_-28px_rgba(0,0,0,0.45)]">
                            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[#e50808]/10 blur-2xl" />
                            <div className="absolute -bottom-12 -left-12 h-44 w-44 rounded-full bg-[#275dc3]/8 blur-2xl" />

                            <div className="relative flex flex-col gap-8">
                                <div className="space-y-4 max-w-3xl">
                                    <h3 className="text-black text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                                        Ready to Build the Future? Join Us.
                                    </h3>
                                    <p className="text-[#5d5d5d] text-sm md:text-lg lg:text-xl leading-relaxed tracking-tight">
                                        Take your first step with ITS Team Sapuangin. Submit your
                                        documents, choose your division, and grow with a team that
                                        turns ideas into real competition machines.
                                    </p>
                                </div>

                                <div className="mt-2 flex flex-col sm:flex-row gap-2 justify-end">
                                    <Link
                                        href="#"
                                        className="rounded-md bg-[#e50808] px-12 py-2 text-sm md:text-lg text-center font-black text-white hover:bg-[#c90606] transition-colors"
                                    >
                                        Guidebook
                                    </Link>

                                    <Link
                                        href="https://wa.me/6289633433256"
                                        target="_blank"
                                        className="rounded-md border border-[#e50808] px-12 py-2 text-sm md:text-lg text-center font-black text-[#e50808] hover:bg-[#e50808] hover:text-white transition-colors"
                                    >
                                        Apply Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            <section className="bg-[#fafafa] py-10 md:py-14 lg:py-16" id="faq">
                <div className="container mx-auto px-6 md:px-10 lg:px-0 grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[640px_1fr] gap-10 md:gap-12 lg:gap-16">
                    <div className="order-1 flex flex-col gap-10 md:justify-between text-center md:text-left">
                        <div className="space-y-3">
                            <h2 className="text-black font-black text-5xl md:text-7xl tracking-tight leading-none">
                                FAQ
                            </h2>
                            <p className="text-[#5d5d5d] hidden md:block text-base md:text-xl font-medium tracking-tight max-w-[200px] mx-auto md:mx-0">
                                Frequently
                                <br />
                                Asked
                                <br />
                                Questions
                            </p>
                            <p className="text-[#5d5d5d] block md:hidden text-base md:text-xl font-medium tracking-tight w-full mx-auto md:mx-0">
                                Frequently Asked Questions
                            </p>
                        </div>

                        <div className="hidden md:block space-y-6">
                            <p className="text-[#5d5d5d] text-sm md:text-lg tracking-tight leading-relaxed">
                                For more information please contact us through:
                            </p>
                            <Link
                                href={`https://wa.me/6289633433256`}
                                target="_blank"
                                className="flex flex-col gap-1 items-center md:items-start group/contact"
                            >
                                <div className="flex flex-col items-center md:items-start">
                                    <p className="font-bold text-base md:text-lg lg:text-xl text-black transition-colors duration-300 group-hover/contact:text-[#e51717]">
                                        Farid Mubarok
                                    </p>
                                    <p className="font-bold text-base md:text-lg lg:text-xl text-[#e51717]">
                                        Non-technical Manager
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 md:gap-3 mt-1">
                                    <div className="w-4 h-4 md:w-5 md:h-5 relative transition-transform duration-300 ease-out group-hover/contact:translate-x-0.5">
                                        <Image
                                            src="/icons/call.svg"
                                            alt="Call"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <p className="relative font-normal text-sm md:text-base lg:text-lg text-[#e51717] pb-0.5">
                                        +62 896-3343-3256
                                        <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#e51717]/40 transition-all duration-300 ease-out group-hover/contact:w-full"></span>
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="order-2">
                        {FAQS.map((faq, index) => (
                            <FaqAccordionItem
                                key={faq.question}
                                question={faq.question}
                                answer={faq.answer}
                                defaultOpen={index === 0}
                            />
                        ))}
                    </div>

                    <div className="order-3 md:hidden space-y-6 text-center">
                        <p className="text-[#5d5d5d] text-sm md:text-lg tracking-tight leading-relaxed">
                            For more information please contact us through:
                        </p>
                        <Link
                            href={`https://wa.me/6289633433256`}
                            target="_blank"
                            className="flex flex-col gap-1 items-center md:items-start group/contact"
                        >
                            <div className="flex flex-col items-center md:items-start">
                                <p className="font-bold text-base md:text-lg lg:text-xl text-black transition-colors duration-300 group-hover/contact:text-[#e51717]">
                                    Farid Mubarok
                                </p>
                                <p className="font-bold text-base md:text-lg lg:text-xl text-[#e51717]">
                                    Non-technical Manager
                                </p>
                            </div>
                            <div className="flex items-center gap-2 md:gap-3 mt-1">
                                <div className="w-4 h-4 md:w-5 md:h-5 relative transition-transform duration-300 ease-out group-hover/contact:translate-x-0.5">
                                    <Image
                                        src="/icons/call.svg"
                                        alt="Call"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <p className="relative font-normal text-sm md:text-base lg:text-lg text-[#e51717] pb-0.5">
                                    +62 896-3343-3256
                                    <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#e51717]/40 transition-all duration-300 ease-out group-hover/contact:w-full"></span>
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
