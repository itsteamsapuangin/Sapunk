import type { Metadata } from 'next';
import Image from 'next/image';
import { JsonLd, breadcrumbJsonLd, organizationJsonLd } from '@/lib/seo/jsonld';

export const metadata: Metadata = {
    title: 'Team',
    description:
        'Meet ITS Team Sapuangin: faculty advisors, board of managers, and multidisciplinary technical and non-technical divisions driving world-class vehicle innovation.',
    openGraph: {
        title: 'Team | ITS Team Sapuangin',
        description:
            'Faculty advisors, board of managers, and multidisciplinary divisions behind ITS Team Sapuangin.',
        url: '/team',
        images: [
            {
                url: '/page/team/hero-team.jpg',
                width: 1200,
                height: 630,
                alt: 'ITS Team Sapuangin Team Page',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Team | ITS Team Sapuangin',
        description:
            'Faculty advisors, board of managers, and multidisciplinary divisions behind ITS Team Sapuangin.',
        images: ['/page/team/hero-team.jpg'],
    },
    alternates: {
        canonical: '/team',
    },
};

type Member = {
    name: string;
    title: string;
    image: string;
    role?: string;
    priority?: boolean;
};

const HISTORY_PARAGRAPHS = [
    'ITS Team Sapuangin is a student vehicle team from Institut Teknologi Sepuluh Nopember (ITS), Surabaya. The team was established in 2009 by a group of students from LBMM (Lembaga Bengkel Mahasiswa Mesin) under the Department of Mechanical Engineering, ITS. The team was formed to develop student capabilities in vehicle design and engineering through hands-on projects.',
    'In 2010, ITS Team Sapuangin participated for the first time in the Shell Eco-marathon, an international competition focused on energy-efficient vehicles. Since then, Shell Eco-marathon has remained the main competition and is still actively followed by the team today. In addition to Shell Eco-marathon, the team also participated in the Formula SAE (FSAE) competition in Japan, first in 2013 and last in 2019.',
    'Over time, ITS Team Sapuangin has grown into a multidisciplinary team. Membership is no longer limited to students from the Department of Mechanical Engineering but is open to students from various departments and faculties at ITS. Today, the team continues to focus on vehicle development and international competitions as part of student learning and research activities at ITS.',
];

const DIVISIONS = [
    {
        title: 'Engine and\nDrivetrain',
        description:
            'Responsible for the design, development, and maintenance of engine and drivetrain systems, focusing on performance, integration, and reliability.',
    },
    {
        title: 'Vehicle \nDynamics',
        description:
            'Designs and manufactures steering, suspension, and braking systems to improve handling, stability, and overall vehicle performance.',
    },
    {
        title: 'Electrical and Programming',
        description:
            'Handles electrical architecture and software, including circuit and PCB design, wiring, telemetry, and data acquisition.',
    },
    {
        title: 'Body and\nFrame',
        description:
            'Designs, simulates, and manufactures the body and frame with strong focus on aerodynamics and structural performance.',
    },
    {
        title: 'Creative\nBranding',
        description:
            'Builds visual identity and digital storytelling to communicate team achievements and strengthen public engagement.',
    },
    {
        title: 'External Relation and Sponsorship',
        description:
            'Develops strategic partnerships, sponsorship opportunities, and collaboration networks that support team growth.',
    },
    {
        title: 'Accommodation, Administration, and Finance',
        description:
            'Coordinates logistics, budgeting, documentation, and operational administration to keep activities efficient and sustainable.',
        smallTitle: true,
    },
];

const FACULTY_ADVISORS: Member[] = [
    {
        name: 'Witantyo, Dr., Ir., M.Eng.Sc.',
        title: 'Technical Advisor',
        image: '/page/team/members/witantyo.png',
    },
    {
        name: 'Moch. Solichin, S.T., M.T., Ph.D',
        title: 'Technical Advisor',
        image: '/page/team/members/moch-solichin.png',
    },
    {
        name: 'Atok Setiyawan, Dr., Ir., M.Eng.Sc.',
        title: 'Non-Technical Advisor',
        image: '/page/team/members/atok-setiyawan.png',
    },
    {
        name: 'Tri Vicca K, S.T., M.Sc.',
        title: 'Non-Technical Advisor',
        image: '/page/team/members/tri-vicca-k.png',
    },
];

const BOARD_OF_MANAGERS: Member[] = [
    {
        name: 'Abhirama Saka Biantomo',
        role: 'Technical Manager',
        title: "Mechanical Engineering '22",
        image: '/page/team/members/abhirama-saka-biantomo.png',
    },
    {
        name: 'Candra Iksan Suryana',
        role: 'General Manager',
        title: "Mechanical Engineering '22",
        image: '/page/team/members/candra-iksan-suryana.png',
    },
    {
        name: 'Ahmad Farid Mubarok',
        role: 'Non-Technical Manager',
        title: "Electrical Engineering '23",
        image: '/page/team/members/ahmad-farid-mubarok.png',
    },
];

const TECHNICAL_GROUPS_5: Array<{ heading: string; members: Member[] }> = [
    {
        heading: 'Vehicle Dynamics',
        members: [
            {
                name: 'Muhammad\nReza Ilmy',
                title: "Mechanical Engineering '22",
                image: '/page/team/members/muhammad-reza-ilmy.png',
            },
            {
                name: 'Muhammad\nMirza Nabil',
                title: "Mechanical Engineering '22",
                image: '/page/team/members/muhammad-mirza-nabil.png',
            },
            {
                name: 'Kyle Luvian\nJonathan Abineno',
                title: "Mechanical Engineering '23",
                image: '/page/team/members/kyle-luvian-jonathan-abineno.png',
            },
            {
                name: 'Naufan Ramadhanata P',
                title: "Mechanical Engineering '24",
                image: '/page/team/members/naufan-ramadhanata-p.png',
            },
            {
                name: 'Dhimas Vardhana Putra Setyawan',
                title: "Mechanical Engineering '24",
                image: '/page/team/members/dhimas-vardhana-putra-setyawan.png',
            },
        ],
    },
    {
        heading: 'Engine and Drivetrain',
        members: [
            {
                name: 'Praditya Irgi Fahrezi',
                title: "Mechanical Engineering '22",
                image: '/page/team/members/praditya-irgi-fahrezi.png',
            },
            {
                name: 'Rifky Khaerul',
                title: "Material Engineering '22",
                image: '/page/team/members/rifky-khaerul.png',
            },
            {
                name: 'Hanif Jaya Dimyati',
                title: "Mechanical Engineering '22",
                image: '/page/team/members/hanif-jaya-dimyati.png',
            },
            {
                name: 'Muhammad Satria Putra Ramadhan',
                title: "Physics Engineering '23",
                image: '/page/team/members/muhammad-satria-putra-ramadhan.png',
            },
            {
                name: 'Mochammad Zamid',
                title: "Industrial Mechanical Engineering '24",
                image: '/page/team/members/mochammad-zamid.png',
            },
        ],
    },
];

const TECHNICAL_GROUPS_4: Array<{ heading: string; members: Member[] }> = [
    {
        heading: 'Body and Frame',
        members: [
            {
                name: 'Muhammad\nFauzan Rizqi',
                title: "Mechanical Engineering '22",
                image: '/page/team/members/muhammad-fauzan-rizqi.png',
            },
            {
                name: 'Muhammad Banin\nAli Fadhilah',
                title: "Mechanical Engineering '23",
                image: '/page/team/members/muhammad-banin-ali-fadhilah.png',
            },
            {
                name: 'Mohammad Galang Suryadinata',
                title: "Mechanical Engineering '23",
                image: '/page/team/members/mohammad-galang-suryadinata.png',
            },
            {
                name: 'Mohammad Kayyis Dliya ul Haq',
                title: "Physics Engineering '24",
                image: '/page/team/members/mohammad-kayyis-dliya-ul-haq.png',
            },
        ],
    },
    {
        heading: 'Electrical and Programming',
        members: [
            {
                name: 'Mohammad\nIdris Muarif',
                title: "Physics\nEngineering '22",
                image: '/page/team/members/mohammad-idris-muarif.png',
            },
            {
                name: 'Mustofa\nAdi Widodo',
                title: "Electrical Automation Engineering '23",
                image: '/page/team/members/mustofa-adi-widodo.png',
            },
            {
                name: 'Bagus\nSubekti',
                title: "Information\nSystems '23",
                image: '/page/team/members/bagus-subekti.png',
            },
            {
                name: 'Muhammad\nNaufal Iqbal',
                title: "Electrical Automation Engineering '24",
                image: '/page/team/members/muhammad-naufal-iqbal.png',
            },
        ],
    },
];

const NON_TECHNICAL_GROUPS: Array<{ heading: string; members: Member[] }> = [
    {
        heading: 'Creative Branding',
        members: [
            {
                name: 'Nayaka Dzaky P',
                title: "Biomedical Engineering '22",
                image: '/page/team/members/nayaka-dzaky-p.png',
            },
            {
                name: 'Diaz Alamsya',
                title: "Industrial Design '22",
                image: '/page/team/members/diaz-alamsya.png',
            },
            {
                name: 'Peter Nathanael',
                title: "Industrial Design '23",
                image: '/page/team/members/peter-nathanael.png',
            },
            {
                name: 'Adifa Fajri\nSampurno',
                title: "Information Systems '23",
                image: '/page/team/members/adifa-fajri-sampurno.png',
            },
            {
                name: 'Bintang\nMaulana Tsaqif',
                title: "Industrial Design '24",
                image: '/page/team/members/bintang-maulana-tsaqif.png',
            },
        ],
    },
    {
        heading: 'External Relation and Sponsorship',
        members: [
            {
                name: 'Daffantara Notarizhenko S',
                title: "Industrial Engineering '23",
                image: '/page/team/members/daffantara-notarizhenko-s.png',
            },
            {
                name: 'Hanum Nur Rochmatin',
                title: "Urban Regional Planning '23",
                image: '/page/team/members/hanum-nur-rochmatin.png',
            },
            {
                name: 'Prana Ali\nBasyah',
                title: "Mechanical Engineering '23",
                image: '/page/team/members/prana-ali-basyah.png',
            },
            {
                name: 'Azzah',
                title: "Electrical Engineering '24",
                image: '/page/team/members/azzah.png',
            },
            {
                name: 'Aisha Malika Pranada',
                title: "Industrial Engineering '25",
                image: '/page/team/members/aisha-malika-pranada.png',
            },
        ],
    },
    {
        heading: 'Administration, Accommodation, and Finance',
        members: [
            {
                name: 'Kevin Octavioano Firmansyah',
                title: "Industrial Engineering '23",
                image: '/page/team/members/kevin-octavioano-firmansyah.png',
            },
            {
                name: 'Nathan Beit Ramoti Aritonang',
                title: "Mechanical Engineering '24",
                image: '/page/team/members/nathan-beit-ramoti-aritonang.png',
            },
        ],
    },
];

function SectionBadge({ text }: { text: string }) {
    return (
        <div className="bg-[#e50808] px-3 py-2 md:px-8 md:py-2">
            <h2 className="text-white font-bold text-xl md:text-3xl lg:text-[39px] tracking-tight text-center">
                {text}
            </h2>
        </div>
    );
}

function PersonCard({ person, priority = false }: { person: Member; priority?: boolean }) {
    return (
        <article className="w-full sm:w-[calc(50%-0.625rem)] lg:w-[280px] flex flex-col gap-4 group cursor-pointer">
            <div className="relative w-full aspect-[280/270] rounded-xl overflow-hidden bg-[#d9d9d9] border border-[#d9d9d9]">
                <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    priority={priority}
                    loading={priority ? 'eager' : 'lazy'}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                    className="object-cover object-top transition-all duration-500 ease-out group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
            <div className="flex flex-col gap-1 leading-tight transition-transform duration-300 ease-out group-hover:translate-x-1">
                <h3 className="text-black font-bold text-lg md:text-2xl tracking-tight max-w-[240px] whitespace-pre-line">
                    {person.name}
                </h3>
                {person.role ? (
                    <p className="text-[#e50808] font-semibold text-base md:text-lg tracking-tight">
                        {person.role}
                    </p>
                ) : null}
                <p className={`whitespace-pre-line font-medium text-base md:text-lg max-w-56 break-words tracking-tight ${person.role ? 'text-black' : 'text-[#e50808]'}`}>
                    {person.title}
                </p>
            </div>
        </article>
    );
}

function DivisionCard({
    division,
}: {
    division: {
        [x: string]: any;
        title: string;
        description: string;
    };
}) {
    return (
        <article className="group rounded-2xl border content-between border-[#d9d9d9] md:w-[320px] h-full bg-white p-8 flex flex-col items-center text-center gap-4 transition-colors duration-300 hover:bg-[#e51717] hover:border-[#e51717] h-fit">
            <div className="relative w-12 h-12 md:w-14 md:h-14 shrink-0">
                <Image
                    src="/page/team/icons/division-card-mark.svg"
                    alt="Division mark"
                    fill
                    className="transition duration-300 group-hover:brightness-0 group-hover:invert"
                />
            </div>
            <h3
                className={`
                whitespace-pre-line font-extrabold tracking-tight text-[#e51717] w-full 
                transition-colors duration-300 group-hover:text-white leading-snug 
                flex items-center justify-center min-h-[4rem] md:min-h-[4.5rem]
                ${division.smallTitle ? 'text-base md:text-xl' : 'text-xl md:text-2xl'}
            `}
            >
                {division.title}
            </h3>
            <div className="w-3/4 h-px bg-[#d9d9d9] shrink-0 transition-colors duration-300 group-hover:bg-white/70" />
            <p className="h-fit px-4 text-lg leading-relaxed tracking-tight text-[#5d5d5d] transition-colors duration-300 group-hover:text-white">
                {division.description}
            </p>
        </article>
    );
}

export default function TeamPage() {
    return (
        <div className="bg-white flex flex-col items-center w-full overflow-x-hidden">
            <JsonLd data={organizationJsonLd()} />
            <JsonLd
                data={breadcrumbJsonLd([
                    { name: 'Home', href: '/' },
                    { name: 'Team', href: '/team' },
                ])}
            />

            {/* Hero */}
            <section className="h-48 md:h-96 lg:h-137.5 overflow-hidden relative w-full">
                <div
                    className="relative w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/page/team/hero-team.jpg')" }}
                >
                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/30 to-black/85" />
                    <div className="container mx-auto px-4 md:px-6 lg:px-0">
                        <div className="absolute bottom-0 flex bg-[#e50808] w-fit h-fit px-3 py-1 md:px-4.5 md:py-1.5">
                            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-white tracking-[-1.44px] leading-tight">
                                Team
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* History */}
            <section className="w-full py-14 md:py-18 lg:pb-32 lg:py-16">
                <div className="container mx-auto px-6 md:px-10 lg:px-0 flex flex-col items-center gap-10 md:gap-20">
                    <h2 className="font-extrabold text-4xl md:text-5xl text-black tracking-tight text-center">
                        History
                    </h2>
                    <div className="w-full flex flex-col gap-8 md:gap-32">
                        {HISTORY_PARAGRAPHS.map((text, index) => (
                            <div
                                key={index}
                                className={`flex flex-col gap-6 lg:gap-32 items-center justify-between ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
                            >
                                <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 max-w-lg">
                                    <h3 className="font-bold line-clamp-2 text-2xl md:text-3xl lg:text-4xl text-black tracking-[-1px] leading-tight whitespace-pre-line">
                                        Lorem Ipsum
                                    </h3>
                                    <p className="text-[#5d5d5d] text-sm md:text-lg lg:text-xl max-w-xl leading-relaxed tracking-tight flex-1">
                                        {text}
                                    </p>
                                </div>
                                <div className="relative w-full flex-1 rounded-xl overflow-hidden aspect-[460/300] max-w-1/2 max-h-[350px]">
                                    <Image
                                        src="/page/team/history-team.jpg"
                                        alt="ITS Team Sapuangin history"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/60" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DOAIBU Banner */}
            <section className="w-full relative overflow-hidden">
                <div className="relative h-52 md:h-80 lg:h-[522px] w-full">
                    <Image
                        src="/page/team/doaibu-banner-bg.png"
                        alt="DOAIBU visual section"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-black/20 to-black/65" />
                    <div className="absolute inset-0 flex items-center justify-center px-8">
                        <Image
                            src="/page/team/doaibu.png"
                            alt="DOAIBU"
                            width={1138}
                            height={174}
                            className="w-full max-w-[1138px] h-auto"
                        />
                    </div>
                </div>
            </section>

            {/* Divisions */}
            <section className="w-full py-14 md:py-18 lg:py-20">
                <div className="container mx-auto px-6 md:px-10 lg:px-0 flex flex-col items-center gap-8 md:gap-10">
                    <p className="text-[#5d5d5d] text-sm md:text-lg lg:text-2xl text-center leading-relaxed tracking-tight max-w-6xl mb-12">
                        In 2018, ITS Team Sapuangin made history as the first and only team from
                        Indonesia to win the Drivers&apos; World Championship in London. This
                        achievement marked a milestone not only for our university but also for the
                        nation, proving that Indonesian innovation can compete and triumph on the
                        global stage.
                    </p>
                    <SectionBadge text="DIVISIONS" />

                    <div className="w-full flex flex-col items-center gap-4 md:gap-6">
                        {/* Row 1: 4 cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mx-auto">
                            {DIVISIONS.slice(0, 4).map((division) => (
                                <DivisionCard key={division.title} division={division} />
                            ))}
                        </div>
                        {/* Row 2: 3 cards centered */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mx-auto">
                            {DIVISIONS.slice(4).map((division) => (
                                <DivisionCard key={division.title} division={division} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Faculty Advisors */}
            <section className="w-full py-4 md:py-8 lg:py-12">
                <div className="container mx-auto px-6 md:px-10 lg:px-0 flex flex-col items-center gap-6 md:gap-12">
                    <SectionBadge text="FACULTY ADVISORS" />
                    <div className="w-full flex flex-wrap justify-center gap-5 md:gap-12">
                        {FACULTY_ADVISORS.map((person, index) => (
                            <PersonCard key={person.name} person={person} priority={index < 4} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Board of Managers */}
            <section className="w-full py-8 md:py-10 lg:py-12">
                <div className="container mx-auto px-6 md:px-10 lg:px-0 flex flex-col items-center gap-6 md:gap-8">
                    <SectionBadge text="BOARD OF MANAGERS" />
                    <h2 className="font-extrabold text-3xl md:text-4xl lg:text-[36px] text-black tracking-tight text-center">
                        Managers
                    </h2>
                    <div className="w-full flex flex-wrap justify-center gap-5 md:gap-16 md:max-w-2/3">
                        {BOARD_OF_MANAGERS.map((person) => (
                            <PersonCard key={person.name} person={person} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical Division */}
            <section className="w-full py-8 md:py-10 lg:py-12">
                <div className="container mx-auto px-6 md:px-10 lg:px-0 flex flex-col items-center gap-10 md:gap-12">
                    <SectionBadge text="TECHNICAL DIVISION" />
                    {TECHNICAL_GROUPS_5.map((group) => (
                        <div
                            key={group.heading}
                            className="w-full flex flex-col items-center gap-5 md:gap-6"
                        >
                            <h3 className="font-extrabold text-3xl md:text-4xl lg:text-[36px] text-black tracking-tight text-center">
                                {group.heading}
                            </h3>
                            <div className="w-full flex flex-wrap justify-center gap-5 md:gap-12 md:max-w-3/4">
                                {group.members.map((person) => (
                                    <PersonCard key={person.name} person={person} />
                                ))}
                            </div>
                        </div>
                    ))}
                    {TECHNICAL_GROUPS_4.map((group) => (
                        <div
                            key={group.heading}
                            className="w-full flex flex-col items-center gap-5 md:gap-6"
                        >
                            <h3 className="font-extrabold text-3xl md:text-4xl lg:text-[36px] text-black tracking-tight text-center">
                                {group.heading}
                            </h3>
                            <div className="w-full flex flex-wrap justify-center gap-5 md:gap-12">
                                {group.members.map((person) => (
                                    <PersonCard key={person.name} person={person} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Non-Technical Division */}
            <section className="w-full py-8 md:py-10 lg:py-16">
                <div className="container mx-auto px-6 md:px-10 lg:px-0 flex flex-col items-center gap-10 md:gap-12">
                    <SectionBadge text="NON-TECHNICAL DIVISION" />
                    {NON_TECHNICAL_GROUPS.map((group) => (
                        <div
                            key={group.heading}
                            className="w-full flex flex-col items-center gap-5 md:gap-6"
                        >
                            <h3 className="font-extrabold text-3xl md:text-4xl lg:text-[36px] text-black tracking-tight text-center">
                                {group.heading}
                            </h3>
                            <div className="w-full flex flex-wrap justify-center gap-5 md:gap-12 md:max-w-3/4">
                                {group.members.map((person) => (
                                    <PersonCard key={person.name} person={person} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
