import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'White Mountain Cottages | North Conway, NH Vacation Rentals',
    description:
        'Experience the beauty of the White Mountains in our charming cottages and spacious family house. Perfect for skiing, hiking, and family getaways in North Conway, New Hampshire.',
    keywords:
        'White Mountain Cottages, North Conway rentals, NH vacation rentals, skiing accommodations, family house rental, mountain cottages, New Hampshire lodging',
    openGraph: {
        title: 'White Mountain Cottages | North Conway, NH',
        description:
            'Cozy cottages and spacious family house in the heart of North Conway. Your perfect White Mountains getaway.',
        type: 'website',
        locale: 'en_US',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
