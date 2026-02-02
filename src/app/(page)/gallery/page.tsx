import Image from 'next/image';

export default function GalleryPage() {
    return (
        <div className="bg-white flex flex-col items-start relative w-full">
            {/* Hero Section */}
            <div className="h-137.5 overflow-hidden relative w-full">
                <div
                    className="relative w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/page/gallery/hero-gallery.png')" }}
                >
                    <div className="absolute inset-0 bg-linear-to-l from-transparent to-black/80 px-12" />
                    <div />
                    <div className="container mx-auto">
                        <div className="absolute bottom-0 flex bg-[#e50808] w-fit h-fit px-4.5 py-1.5">
                            <h1 className="font-bold text-4xl text-white tracking-[-1.44px] leading-tight">
                                Gallery
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* First Gallery Section with Shell Logo */}
            <div className="flex flex-col items-center justify-center overflow-hidden px-6 md:px-24 py-16 relative w-full">
                <div className="container mx-auto">
                    <div className="flex gap-8 items-start w-full">
                        {/* Left Side - Shell Logo and Copyright */}
                        <div className="flex flex-col h-233.75 items-start justify-between relative shrink-0">
                            <div className="h-[59.735px] relative w-62.75">
                                <Image
                                    src="/page/gallery/shell-logo.svg"
                                    alt="Shell Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex flex-col justify-center">
                                <p className="font-normal text-[#5d5d5d] text-lg tracking-[-0.8px] leading-normal w-62.75">
                                    All photos are the official property of ITS Team Sapuangin
                                    during competitions
                                </p>
                            </div>
                        </div>

                        {/* Right Side - Gallery Grid */}
                        <div className="flex flex-1 flex-col gap-6 items-start min-h-px min-w-px">
                            <div className="bg-white flex gap-6 items-start overflow-hidden w-full">
                                {/* Column 1 */}
                                <div className="flex flex-1 flex-col gap-6 items-start justify-center min-h-px min-w-px self-stretch">
                                    <div className="bg-[#d6d6d6] h-102 w-full" />
                                    <div className="bg-[#d6d6d6] flex-1 min-h-px min-w-px w-full" />
                                </div>
                                {/* Column 2 */}
                                <div className="flex flex-1 flex-col gap-6 items-start justify-center min-h-px min-w-px self-stretch">
                                    <div className="bg-[#d6d6d6] h-63.25 w-full" />
                                    <div className="bg-[#d6d6d6] flex-1 min-h-px min-w-px w-full" />
                                </div>
                                {/* Column 3 */}
                                <div className="flex flex-1 flex-col gap-6 items-start justify-center min-h-px min-w-px self-stretch">
                                    <div className="bg-[#d6d6d6] h-105.25 w-full" />
                                    <div className="bg-[#d6d6d6] h-62.75 w-full" />
                                </div>
                            </div>
                            {/* Bottom Wide Row */}
                            <div className="bg-white flex gap-6 h-53.75 items-start overflow-hidden w-full">
                                <div className="bg-[#d6d6d6] h-full overflow-hidden relative w-167.5">
                                    <div className="absolute -translate-x-1/2 -translate-y-1/2 h-235 left-[calc(50%-42px)] top-[calc(50%-127.5px)] w-188">
                                        <Image
                                            src="/page/gallery/team-photo.png"
                                            alt="Team Photo"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="bg-[#d6d6d6] flex-1 h-full min-h-px min-w-px" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Second Gallery Section with JSO Logo */}
            <div className="flex flex-col items-center justify-centeroverflow-hidden px-6 md:px-24 py-16 relative w-full">
                <div className="container mx-auto">
                    <div className="flex items-start justify-between gap-8 w-full">
                        {/* Left Side - Gallery Grid */}
                        <div className="flex flex-1 flex-col gap-6 items-start min-h-px min-w-px">
                            <div className="bg-white flex gap-6 items-start overflow-hidden w-full">
                                {/* Column 1 */}
                                <div className="flex flex-1 flex-col gap-6 items-start justify-center min-h-px min-w-px self-stretch">
                                    <div className="bg-[#d6d6d6] h-102 w-full" />
                                    <div className="bg-[#d6d6d6] flex-1 min-h-px min-w-px w-full" />
                                </div>
                                {/* Column 2 */}
                                <div className="flex flex-1 flex-col gap-6 items-start justify-center min-h-px min-w-px self-stretch">
                                    <div className="bg-[#d6d6d6] h-63.25 w-full" />
                                    <div className="bg-[#d6d6d6] flex-1 min-h-px min-w-px w-full" />
                                </div>
                                {/* Column 3 */}
                                <div className="flex flex-1 flex-col gap-6 items-start justify-center min-h-px min-w-px self-stretch">
                                    <div className="bg-[#d6d6d6] h-105.25 w-full" />
                                    <div className="bg-[#d6d6d6] h-62.75 w-full" />
                                </div>
                            </div>
                            {/* Bottom Wide Row */}
                            <div className="bg-white flex gap-6 h-53.75 items-start overflow-hidden w-full">
                                <div className="bg-[#d6d6d6] h-full overflow-hidden relative w-167.5">
                                    <div className="absolute -translate-x-1/2 -translate-y-1/2 h-235 left-[calc(50%-42px)] top-[calc(50%-127.5px)] w-188">
                                        <Image
                                            src="/page/gallery/team-photo.png"
                                            alt="Team Photo"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="bg-[#d6d6d6] flex-1 h-full min-h-px min-w-px" />
                            </div>
                        </div>

                        {/* Right Side - JSO Logo and Copyright */}
                        <div className="flex flex-col h-233.75 items-end justify-between">
                            <div className="h-20 relative w-[208.481px]">
                                <Image
                                    src="/page/gallery/jsae-logo.svg"
                                    alt="JSO Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex flex-col justify-center">
                                <p className="font-normal text-[#5d5d5d] text-lg text-right tracking-[-0.8px] leading-normal w-62.75">
                                    All photos are the official property of ITS Team Sapuangin
                                    during competitions
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Activities Section */}
            <div className="flex flex-col items-center gap-8 h-299 relative w-full">
                <div className="flex flex-col items-start">
                    <h2 className="font-black text-[40px] text-black text-center tracking-[-1.2px] leading-normal">
                        Activites
                    </h2>
                </div>

                <div className="flex flex-col gap-6 items-start w-312.5">
                    <div className="bg-white flex gap-6 items-start overflow-hidden w-full">
                        {/* Column 1 */}
                        <div className="flex flex-1 flex-col gap-6 items-start justify-center min-h-px min-w-px self-stretch">
                            <div className="bg-[#d6d6d6] h-102 w-full" />
                            <div className="bg-[#d6d6d6] flex-1 min-h-px min-w-px w-full" />
                        </div>
                        {/* Column 2 */}
                        <div className="flex flex-1 flex-col gap-6 items-start justify-center min-h-px min-w-px self-stretch">
                            <div className="bg-[#d6d6d6] h-63.25-full" />
                            <div className="bg-[#d6d6d6] flex-1 min-h-px min-w-px w-full" />
                        </div>
                        {/* Column 3 */}
                        <div className="flex flex-1 flex-col gap-6 items-start justify-center min-h-px min-w-px self-stretch">
                            <div className="bg-[#d6d6d6] h-105.25w-full" />
                            <div className="bg-[#d6d6d6] h-62.75 w-full" />
                        </div>
                    </div>
                    {/* Bottom Wide Row */}
                    <div className="bg-white flex gap-6 h-53.75 items-start overflow-hidden w-full">
                        <div className="bg-[#d6d6d6] h-full overflow-hidden relative w-167.5">
                            <div className="absolute -translate-x-1/2 -translate-y-1/2 h-235 left-[calc(50%-42px)] top-[calc(50%-127.5px)] w-188">
                                <Image
                                    src="/page/gallery/team-photo.png"
                                    alt="Activities Photo"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="bg-[#d6d6d6] flex-1 h-full min-h-px min-w-px" />
                    </div>
                </div>

                <div className="flex flex-col font-normal h-29.5 justify-center text-[#5d5d5d] text-[20px] text-center tracking-[-0.8px] w-256.5">
                    <p className="leading-normal">
                        All photos displayed in this gallery are the official property of ITS Team
                        Sapuangin and are part of its official documentation during competitions.
                        Any use, reproduction, or distribution of these images without prior written
                        permission from ITS Team Sapuangin is not permitted. © ITS Team Sapuangin.
                        All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}
