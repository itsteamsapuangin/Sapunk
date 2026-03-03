import Link from 'next/link';
import { JsonLd, breadcrumbJsonLd, type BreadcrumbItem } from '@/lib/seo/jsonld';

interface BreadcrumbProps {
    items: BreadcrumbItem[];
    /** Optional: set to true to skip rendering JSON-LD (if already rendered elsewhere on the page) */
    skipJsonLd?: boolean;
}

/**
 * SEO-friendly breadcrumb navigation component.
 * Renders both visible breadcrumb links and a JSON-LD BreadcrumbList schema.
 */
export default function Breadcrumb({ items, skipJsonLd = false }: BreadcrumbProps) {
    return (
        <nav aria-label="Breadcrumb" className="w-full">
            {!skipJsonLd && <JsonLd data={breadcrumbJsonLd(items)} />}
            <ol className="flex items-center gap-2 text-sm text-[#5d5d5d]">
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;
                    return (
                        <li key={item.href} className="flex items-center gap-2">
                            {!isLast ? (
                                <>
                                    <Link
                                        href={item.href}
                                        className="hover:text-[#E50808] transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                    <span aria-hidden="true">/</span>
                                </>
                            ) : (
                                <span className="text-black font-medium" aria-current="page">
                                    {item.name}
                                </span>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
