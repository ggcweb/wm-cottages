import Hero from '@/components/Hero';
import PropertySection from '@/components/PropertySection';
import AttractionsSection from '@/components/AttractionsSection';

export default function Home() {
    return (
        <main>
            <Hero />

            {/* The Family House Section */}
            <PropertySection
                id="house"
                title="The House"
                subtitle="Perfect for Large Groups & Families"
                description={[
                    'Our spacious family house is ideal for large gatherings, family reunions, or group getaways. With 9 comfortable bedrooms and 5 bathrooms, everyone will have plenty of space to relax and unwind.',
                    'The house features a fully equipped kitchen perfect for preparing family meals, a cozy living area with a fireplace, and beautiful mountain views. Located in the heart of North Conway, you\'re minutes away from skiing, hiking, shopping, and dining.',
                ]}
                images={[
                    { src: '/images/house-exterior.jpg', alt: 'Family House Exterior' },
                    { src: '/images/hero-cottage.jpg', alt: 'Family House Interior' },
                    { src: '/images/cottage-kitchen.jpg', alt: 'Family House Kitchen' },
                ]}
                amenities={[
                    '9 Bedrooms',
                    '5 Bathrooms',
                    'Full Kitchen',
                    'Living Room with Fireplace',
                    'Mountain Views',
                    'Free WiFi',
                    'Cable TV',
                    'Washer & Dryer',
                    'Heating & Air Conditioning',
                    'Outdoor Parking',
                ]}
                reverse={false}
            />

            {/* The Cottages Section */}
            <PropertySection
                id="cottages"
                title="The Cottages"
                subtitle="Cozy & Comfortable"
                description={[
                    'Our charming 2-bedroom cottages offer a cozy retreat for couples or small families. Each cottage is thoughtfully designed with comfort in mind, featuring modern amenities while maintaining rustic mountain charm.',
                    'Perfect for romantic getaways or family vacations, our cottages provide a peaceful escape with easy access to all the attractions North Conway has to offer.',
                ]}
                images={[
                    { src: '/images/hero-cottage.jpg', alt: 'Cottage Exterior' },
                    { src: '/images/cottage-kitchen.jpg', alt: 'Cottage Kitchen' },
                    { src: '/images/house-exterior.jpg', alt: 'Cottage Bedroom' },
                ]}
                amenities={[
                    '2 Bedrooms',
                    '1 Bathroom',
                    'Kitchenette',
                    'Living Area',
                    'Cable TV',
                    'Free WiFi',
                    'Heating',
                    'Outdoor Seating',
                    'Mountain Views',
                    'Private Entrance',
                ]}
                reverse={true}
            />

            {/* Area Attractions */}
            <AttractionsSection />
        </main>
    );
}
