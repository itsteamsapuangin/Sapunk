import Image from 'next/image';

export default function NewsPage() {
    return (
        <div className="bg-white flex flex-col items-start relative w-full">
            {/* Hero Section */}
            <div className="h-137.5 overflow-hidden relative w-full">
                <div 
                    className="relative w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/page/news/hero-news.png')" }}
                >
                    <div className="absolute inset-0 bg-linear-to-l from-transparent to-black/80 px-12" /> 
                    <div/>
                    <div className='container mx-auto'>
                        <div className="absolute bottom-0 flex bg-[#e50808] w-fit h-fit px-4.5 py-1.5">
                            <h1 className="font-bold text-4xl text-white tracking-[-1.44px] leading-tight">
                                News
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* News List */}
            <div className="flex flex-col items-center justify-center overflow-hidden px-6 md:px-24 py-16 relative w-full">
                
            </div>
        </div>
    );
}
