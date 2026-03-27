'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type FaqAccordionItemProps = {
    question: string;
    answer: string;
    defaultOpen?: boolean;
};

export default function FaqAccordionItem({
    question,
    answer,
    defaultOpen = false,
}: FaqAccordionItemProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="border-b border-[#e51717] py-5">
            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className="w-full text-left cursor-pointer flex items-center justify-between gap-4"
                aria-expanded={isOpen}
            >
                <p className="text-black text-base md:text-2xl font-bold tracking-tight">
                    {question}
                </p>
                <ChevronDown
                    className={`h-5 w-5 md:h-6 md:w-6 text-black transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                />
            </button>

            <div
                className={`grid overflow-hidden transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
            >
                <div className="overflow-hidden">
                    <p
                        className={`pt-4 text-[#5d5d5d] text-sm md:text-xl tracking-tight leading-relaxed max-w-3xl transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'
                        }`}
                    >
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    );
}
