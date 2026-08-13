import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BOOKING_URL, about, contact } from '@/lib/site';

const display = Fraunces({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-display',
    axes: ['SOFT', 'WONK', 'opsz'],
});

const sans = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-sans',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://www.wmcottage.com'),
    title: 'White Mountain Cottages | North Conway, NH Vacation Rentals',
    description:
        'Self check-in cabins in the heart of North Conway, NH. Experience the beauty of the White Mountains — perfect for skiing, hiking, and family getaways.',
    keywords:
        'White Mountain Cottages, North Conway rentals, NH vacation rentals, self check-in North Conway, skiing accommodations, mountain cabins, North Conway cabin rentals, New Hampshire lodging',
    openGraph: {
        title: 'White Mountain Cottages | North Conway, NH',
        description:
            'Cozy self check-in cabins in the heart of North Conway. Your perfect White Mountains getaway.',
        type: 'website',
        locale: 'en_US',
        siteName: 'White Mountain Cottages',
        images: [
            {
                url: '/booking-images/cottage-06.jpg',
                width: 1149,
                height: 900,
                alt: 'Two of the red cabins at White Mountain Cottages, each with its own covered porch',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'White Mountain Cottages | North Conway, NH',
        description:
            'Cozy self check-in cabins in the heart of North Conway.',
        images: ['/booking-images/cottage-06.jpg'],
    },
    icons: {
        icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    },
};

export const viewport: Viewport = {
    themeColor: '#1f3a2e',
    width: 'device-width',
    initialScale: 1,
};

/** Helps search engines show the address, phone and check-in times directly. */
const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: contact.name,
    description: about,
    url: 'https://www.wmcottage.com',
    telephone: contact.phone,
    email: contact.email,
    image: ['/booking-images/cottage-06.jpg', '/booking-images/cottage-23.jpg'],
    address: {
        '@type': 'PostalAddress',
        streetAddress: contact.street,
        addressLocality: contact.city,
        addressRegion: contact.state,
        postalCode: contact.zip,
        addressCountry: 'US',
    },
    checkinTime: '16:00',
    checkoutTime: '11:00',
    petsAllowed: false,
    smokingAllowed: false,
    amenityFeature: [
        { '@type': 'LocationFeatureSpecification', name: 'Self check-in', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Free WiFi', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Cable TV', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Heating', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Private entrance', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Ample parking', value: true },
    ],
    potentialAction: {
        '@type': 'ReserveAction',
        target: {
            '@type': 'EntryPoint',
            urlTemplate: BOOKING_URL,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${display.variable} ${sans.variable}`}>
            <body>
                <a
                    href="#main"
                    className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]
                               focus:rounded-full focus:bg-spruce focus:px-5 focus:py-3 focus:text-sm
                               focus:font-semibold focus:text-white"
                >
                    Skip to content
                </a>
                <Header />
                <div id="main">{children}</div>
                <Footer />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </body>
        </html>
    );
}
