import Hero from '@/components/Hero';
import PropertySection from '@/components/PropertySection';
import AttractionsSection from '@/components/AttractionsSection';
import ImageGallery from '@/components/ImageGallery';

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
                    'Nestled in the White Mountains and closest to North Conway Village, our spacious family home is perfect for families and groups of all sizes. With 9 bedrooms and 5 bathrooms spread across three floors, everyone will have plenty of space to relax.',
                    'The ground floor features a full kitchen and two bedrooms with one bathroom. The second floor offers five bedrooms with three bathrooms, while the third floor has two bedrooms with one bathroom. Perfect for your White Mountains getaway!',
                ]}
                images={[
                    { src: '/booking-images/cottage-01.jpg', alt: 'Family House Exterior' },
                    { src: '/booking-images/cottage-10.jpg', alt: 'Family House Interior' },
                    { src: '/booking-images/cottage-18.jpg', alt: 'Family House Kitchen' },
                ]}
                amenities={[
                    'Ground Floor: 2 Bedrooms, 1 Bathroom',
                    'Second Floor: 5 Bedrooms, 3 Bathrooms',
                    'Third Floor: 2 Bedrooms, 1 Bathroom',
                    'Full Kitchen',
                    'Multiple Living Areas',
                    'Mountain Views',
                    'Free WiFi',
                    'Cable TV',
                    'Heating',
                    'Ample Parking',
                ]}
                reverse={false}
            />

            {/* The Cottages Section */}
            <PropertySection
                id="cottages"
                title="The Cottages"
                subtitle="Cozy & Comfortable"
                description={[
                    'We offer six charming cottages, each with two bedrooms, a kitchenette, and a private bathroom. These cozy retreats are perfect for couples or small families seeking comfort and privacy.',
                    'Choose from one queen cottage or five king cottages, each thoughtfully designed with modern amenities while maintaining rustic mountain charm. Perfect for your White Mountains escape!',
                ]}
                images={[
                    { src: '/booking-images/cottage-02.jpg', alt: 'Cottage Exterior' },
                    { src: '/booking-images/cottage-07.jpg', alt: 'Cottage Kitchen' },
                    { src: '/booking-images/cottage-05.jpg', alt: 'Cottage Bedroom' },
                ]}
                amenities={[
                    '4 Two Bedroom Cottages',
                    'Private Bathroom',
                    '1 Queen Cottage',
                    'Cable TV',
                    '5 King Cottages',
                    'Free WiFi',
                    'Heating',
                    'Private Entrance',
                ]}
                reverse={true}
            />

            {/* Photo Gallery */}
            <ImageGallery
                title="Photo Gallery"
                subtitle="Explore Our Property"
                images={[
                    { src: '/booking-images/cottage-01.jpg', alt: 'Cottage Exterior View' },
                    { src: '/booking-images/cottage-02.jpg', alt: 'Cottage Exterior with Porch' },
                    { src: '/booking-images/cottage-03.jpg', alt: 'Cottage Front View' },
                    { src: '/booking-images/cottage-04.jpg', alt: 'Cottage Exterior Detail' },
                    { src: '/booking-images/cottage-05.jpg', alt: 'Cottage Screened Porch' },
                    { src: '/booking-images/cottage-06.jpg', alt: 'Cottage Outdoor Seating' },
                    { src: '/booking-images/cottage-07.jpg', alt: 'Cottage Kitchen' },
                    // { src: '/booking-images/cottage-08.jpg', alt: 'Cottage Kitchenette' },
                    { src: '/booking-images/cottage-09.jpg', alt: 'Cottage Dining Area' },
                    { src: '/booking-images/cottage-10.jpg', alt: 'King Bedroom' },
                    // { src: '/booking-images/cottage-11.jpg', alt: 'Queen Bedroom' },
                    // { src: '/booking-images/cottage-12.jpg', alt: 'Twin Bedroom' },
                    { src: '/booking-images/cottage-13.jpg', alt: 'Bedroom with Wood Paneling' },
                    { src: '/booking-images/cottage-14.jpg', alt: 'Cozy Bedroom' },
                    // { src: '/booking-images/cottage-15.jpg', alt: 'Bedroom Interior' },
                    { src: '/booking-images/cottage-16.jpg', alt: 'Bedroom with TV' },
                    // { src: '/booking-images/cottage-17.jpg', alt: 'Bedroom Detail' },
                    { src: '/booking-images/cottage-18.jpg', alt: 'Living Area with Wood Stove' },
                    { src: '/booking-images/cottage-19.jpg', alt: 'Living Room' },
                    { src: '/booking-images/cottage-20.jpg', alt: 'Cottage Interior' },
                    { src: '/booking-images/cottage-21.jpg', alt: 'Bathroom' },
                    { src: '/booking-images/cottage-22.jpg', alt: 'Bathroom with Green Walls' },
                    { src: '/booking-images/cottage-23.jpg', alt: 'Bathroom Detail' },
                    { src: '/booking-images/cottage-24.jpg', alt: 'Bathroom Fixtures' },
                ]}
            />

            {/* Area Attractions */}
            <AttractionsSection />
        </main>
    );
}
