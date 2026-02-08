import type { Metadata } from 'next';
import NewsPageClient from './NewsPageClient';

export const metadata: Metadata = {
    title: 'News',
};

export default function NewsPage() {
    return <NewsPageClient />;
}
