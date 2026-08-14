/**
 * Single source of truth for everything the site says.
 *
 * Contact details, the policies and the area guide are carried over unchanged
 * from the previous site. Two owner corrections since:
 *
 *   - Ten cabins, not six. Three are two-bedroom, the remaining seven single
 *     room, and every one has a kitchenette and a private bathroom. The old
 *     "1 queen / 5 king" split is deliberately gone — bed types are
 *     unconfirmed, so the site says nothing about them rather than guessing.
 *   - The House is not for rent at the moment and is no longer rendered. See
 *     the `house` export below for how to bring it back.
 *
 * Edit copy here rather than in the components.
 */

export const BOOKING_URL =
    'https://reservation.asiwebres.com/SearchAvailability.aspx?id=92f48eca701144d9bcb5ec14f9a1629f';

export const contact = {
    name: 'White Mountain Cottages',
    street: '2406 White Mountain Highway',
    city: 'North Conway',
    state: 'NH',
    zip: '03860',
    get address() {
        return `${this.street}, ${this.city}, ${this.state} ${this.zip}`;
    },
    phone: '(603) 356-6322',
    phoneHref: 'tel:603-356-6322',
    email: 'info@wmcottage.com',
    mapsUrl:
        'https://www.google.com/maps/search/?api=1&query=2406+White+Mountain+Highway+North+Conway+NH+03860',
};

export const nav = [
    { label: 'The Cabins', href: '#cabins' },
    { label: 'Self Check-In', href: '#check-in' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'The Area', href: '#area' },
    { label: 'Policies', href: '#policies' },
];

export const hero = {
    eyebrow: 'North Conway, New Hampshire',
    title: 'Stay in the heart of',
    titleAccent: 'North Conway',
    lede: 'Experience the beauty of the White Mountains in our charming cabins, right on the main street through the village.',
    image: {
        src: '/booking-images/cottage-06.jpg',
        alt: 'Two of the red cabins side by side, each with its own covered porch',
    },
    stats: [
        { value: 'Self', label: 'Check-In' },
        { value: '10', label: 'Cabins' },
        { value: '4PM', label: 'Arrival' },
    ],
};

export const highlights = [
    {
        title: 'Right in the village',
        body: "We're on White Mountain Highway, North Conway's main street — the shops, the outlets and the road to the mountains all start at the end of the driveway.",
        icon: 'pin' as const,
    },
    {
        title: 'Self check-in, always',
        body: 'No front desk, no lobby, no waiting on someone else’s schedule. Let yourself in when you get here and start your trip.',
        icon: 'key' as const,
    },
    {
        title: 'Your own front door',
        body: 'Every cabin has a private entrance and its own porch. Park a few steps away and carry your bags straight inside.',
        icon: 'door' as const,
    },
    {
        title: 'Room for everyone',
        body: 'Ten cabins in all — three with two bedrooms, the rest a single room. Enough for a couple, a family, or a group booking several at once.',
        icon: 'group' as const,
    },
];

export const checkIn = {
    eyebrow: 'How it works',
    title: 'Self check-in, every single stay',
    lede: 'There is no front desk and no lobby to wait in. Your arrival details come through before your stay, so you can let yourself in whenever you actually get here — after a long drive, after the lifts close, or after dinner in the village.',
    steps: [
        {
            n: '01',
            title: 'Book online',
            body: 'Pick your dates and your cabin through our reservation system and your confirmation comes back right away.',
        },
        {
            n: '02',
            title: 'Get your arrival details',
            body: 'Everything you need to let yourself in reaches you ahead of your stay. Nothing to pick up, nobody to meet.',
        },
        {
            n: '03',
            title: 'Let yourself in',
            body: 'Check-in opens at 4:00 PM. Pull up outside your door, walk onto your own porch, and settle in.',
        },
    ],
    times: [
        { label: 'Check-in from', value: '4:00 PM' },
        { label: 'Check-out by', value: '11:00 AM' },
    ],
    footnote: 'Something you need on the way in? Give us a call at',
    image: {
        src: '/booking-images/cottage-09.jpg',
        alt: 'Covered porch and private entrance of cabin nine',
    },
};

export const location = {
    eyebrow: 'The location',
    title: 'As close to the village as it gets',
    body: [
        'Our address is 2406 White Mountain Highway — the main street through North Conway. Village shops and restaurants sit just up the road, the outlets are a straight shot down it, and the highway runs on north into the notches and the trailheads.',
        'Leave the car parked and walk into the evening, or be at a chairlift before the first ride of the day. Everything people come to the White Mountains for starts from here.',
    ],
    nearby: [
        { title: 'Village & outlets', body: 'Settlers Green, restaurants and shopping' },
        { title: 'Ski areas', body: 'Cranmore, Attitash, Wildcat and Black Mountain' },
        { title: 'Trails & water', body: "Diana's Baths, Echo Lake and Mount Washington" },
        { title: 'Scenic drives', body: 'The Kancamagus Highway and the notches' },
    ],
};

export interface Stay {
    id: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string[];
    images: Array<{ src: string; alt: string }>;
    amenities: string[];
    facts: Array<{ value: string; label: string }>;
}

export const cabins: Stay = {
    id: 'cabins',
    eyebrow: 'The cabins',
    title: 'The Cabins',
    subtitle: 'Cozy & Comfortable',
    description: [
        'We offer ten charming cabins, each with a kitchenette and a private bathroom. Three of them have two bedrooms, and the rest are comfortable single-room cabins. These cozy retreats are perfect for couples or small families seeking comfort and privacy.',
        'Every cabin is thoughtfully designed with modern amenities while maintaining rustic mountain charm. Perfect for your White Mountains escape!',
    ],
    images: [
        {
            src: '/booking-images/cottage-21.jpg',
            alt: 'Cabin two in red clapboard with a white porch and hostas in bloom',
        },
        {
            src: '/booking-images/cottage-07.jpg',
            alt: 'Bed beside a gas stove in a pine-panelled cabin',
        },
        {
            src: '/booking-images/cottage-14.jpg',
            alt: 'Cabin kitchenette with a microwave, sink and coffee maker',
        },
        {
            src: '/booking-images/cottage-16.jpg',
            alt: 'Screened porch with a dining table for four',
        },
    ],
    amenities: [
        '10 Cabins in All',
        'Kitchenette',
        '3 Two Bedroom Cabins',
        'Private Bathroom',
        '7 One Room Cabins',
        'Private Entrance',
        'Free WiFi',
        'Cable TV',
        'Heating',
    ],
    facts: [
        { value: '10', label: 'Cabins' },
        { value: '3', label: 'Two bedroom' },
        { value: '7', label: 'One room' },
    ],
};

/**
 * The House is not available to rent at the moment, so nothing on the site
 * renders it. Its content is kept here rather than deleted so it can be put
 * back in three steps:
 *
 *   1. render `<StaySection stay={house} reverse tone="light" />` in app/page.tsx
 *   2. add `{ label: 'The House', href: '#house' }` back to `nav` above
 *   3. put the house back into `hero.lede`, `hero.stats`, `about` and the
 *      "Room for everyone" highlight, and into the metadata in app/layout.tsx
 */
export const house: Stay = {
    id: 'house',
    eyebrow: 'The house',
    title: 'The House',
    subtitle: 'Perfect for Large Groups & Families',
    description: [
        'Nestled in the White Mountains and closest to North Conway Village, our spacious family home is perfect for families and groups of all sizes. With 9 bedrooms and 5 bathrooms spread across three floors, everyone will have plenty of space to relax.',
        'The ground floor features a full kitchen and two bedrooms with one bathroom. The second floor offers five bedrooms with three bathrooms, while the third floor has two bedrooms with one bathroom. Perfect for your White Mountains getaway!',
    ],
    images: [
        {
            src: '/booking-images/cottage-19.jpg',
            alt: 'King bed with a writing desk and framed mirror',
        },
        {
            src: '/booking-images/cottage-10.jpg',
            alt: 'Sitting area with hardwood floors, a TV and a gas stove',
        },
        {
            src: '/booking-images/cottage-18.jpg',
            alt: 'Bedroom with a coffee maker, flat-screen TV and gas stove',
        },
        {
            src: '/booking-images/cottage-13.jpg',
            alt: 'Screened porch dining table looking out across the cabins',
        },
    ],
    amenities: [
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
    ],
    facts: [
        { value: '9', label: 'Bedrooms' },
        { value: '5', label: 'Bathrooms' },
        { value: '3', label: 'Floors' },
    ],
};

export const galleryCategories = [
    'All',
    'Exteriors',
    'Rooms',
    'Kitchens & Porches',
    'Baths',
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export interface GalleryImage {
    src: string;
    alt: string;
    category: Exclude<GalleryCategory, 'All'>;
    /** Portrait shots get a taller cell in the mosaic. */
    tall?: boolean;
}

/**
 * Alt text describes what is actually in each photograph — the labels on the
 * previous site had drifted out of sync with the images.
 */
export const gallery: GalleryImage[] = [
    {
        src: '/booking-images/cottage-06.jpg',
        alt: 'Two red cabins side by side, each with its own covered porch',
        category: 'Exteriors',
    },
    {
        src: '/booking-images/cottage-23.jpg',
        alt: 'Cabin eight with window boxes and a white painted porch',
        category: 'Exteriors',
    },
    {
        src: '/booking-images/cottage-09.jpg',
        alt: 'Covered porch and private entrance of cabin nine',
        category: 'Exteriors',
        tall: true,
    },
    {
        src: '/booking-images/cottage-21.jpg',
        alt: 'Cabin two in red clapboard with hostas along the porch',
        category: 'Exteriors',
    },
    {
        src: '/booking-images/cottage-22.jpg',
        alt: 'Cabin seven with a screened porch and a chair out front',
        category: 'Exteriors',
        tall: true,
    },
    {
        src: '/booking-images/cottage-24.jpg',
        alt: 'Cabin eight framed by the pines',
        category: 'Exteriors',
    },
    {
        src: '/booking-images/cottage-01.jpg',
        alt: 'King bed against a brick accent wall with knotty pine panelling',
        category: 'Rooms',
    },
    {
        src: '/booking-images/cottage-07.jpg',
        alt: 'King bed beside a lit gas stove in a pine-panelled cabin',
        category: 'Rooms',
    },
    {
        src: '/booking-images/cottage-19.jpg',
        alt: 'King bed with a writing desk, lamp and framed mirror',
        category: 'Rooms',
    },
    {
        src: '/booking-images/cottage-05.jpg',
        alt: 'Bedroom with a gas stove, chaise longue and flat-screen TV',
        category: 'Rooms',
    },
    {
        src: '/booking-images/cottage-02.jpg',
        alt: 'Bedroom with a gas stove, writing desk and pine-panelled walls',
        category: 'Rooms',
    },
    {
        src: '/booking-images/cottage-18.jpg',
        alt: 'Bedroom with a coffee maker, flat-screen TV and gas stove',
        category: 'Rooms',
    },
    {
        src: '/booking-images/cottage-20.jpg',
        alt: 'Chaise longue by the windows on wide plank floors',
        category: 'Rooms',
    },
    {
        src: '/booking-images/cottage-10.jpg',
        alt: 'Sitting area with hardwood floors, a TV and a gas stove',
        category: 'Rooms',
    },
    {
        src: '/booking-images/cottage-04.jpg',
        alt: 'Gas stove and upholstered seating beside a curtained window',
        category: 'Rooms',
        tall: true,
    },
    {
        src: '/booking-images/cottage-14.jpg',
        alt: 'Kitchenette with a microwave, sink, coffee maker and TV',
        category: 'Kitchens & Porches',
        tall: true,
    },
    {
        src: '/booking-images/cottage-13.jpg',
        alt: 'Screened porch with a dining table looking out across the cabins',
        category: 'Kitchens & Porches',
    },
    {
        src: '/booking-images/cottage-16.jpg',
        alt: 'Screened porch dining table set for four',
        category: 'Kitchens & Porches',
    },
    {
        src: '/booking-images/cottage-03.jpg',
        alt: 'Cabin bathroom with green wainscoting and a tiled surround',
        category: 'Baths',
        tall: true,
    },
];

export interface Attraction {
    name: string;
    description: string;
    url?: string;
}

export interface AttractionCategory {
    title: string;
    blurb: string;
    icon: 'compass' | 'ski' | 'fork';
    attractions: Attraction[];
}

export const areaGuide: AttractionCategory[] = [
    {
        title: 'Outdoor Activities',
        blurb: 'Waterfalls, summits and the drives that get you to them.',
        icon: 'compass',
        attractions: [
            {
                name: 'Echo Lake State Park',
                description: 'Swimming, hiking, and stunning mountain views',
                url: 'https://www.nhstateparks.org/visit/state-parks/echo-lake-state-park',
            },
            {
                name: "Diana's Baths",
                description: 'Beautiful waterfall cascades and natural pools',
            },
            {
                name: 'Mount Washington',
                description: 'Highest peak in Northeast, scenic drives and hiking',
                url: 'https://www.mountwashington.org',
            },
            {
                name: 'Kancamagus Highway',
                description: 'Scenic byway with breathtaking fall foliage',
            },
            {
                name: 'Story Land',
                description: 'Family-friendly theme park with rides and attractions',
                url: 'https://www.storylandnh.com',
            },
        ],
    },
    {
        title: 'Ski Areas',
        blurb: 'Four mountains within easy reach of the front door.',
        icon: 'ski',
        attractions: [
            {
                name: 'Attitash Mountain Resort',
                description: 'World-class skiing and snowboarding',
                url: 'https://www.attitash.com',
            },
            {
                name: 'Cranmore Mountain Resort',
                description: 'Family-friendly skiing with night skiing',
                url: 'https://www.cranmore.com',
            },
            {
                name: 'Wildcat Mountain',
                description: 'Expert terrain and stunning summit views',
                url: 'https://www.skiwildcat.com',
            },
            {
                name: 'Black Mountain',
                description: 'Affordable family skiing experience',
                url: 'https://www.blackmt.com',
            },
        ],
    },
    {
        title: 'Dining & Shopping',
        blurb: 'Tax-free outlets and the places locals actually eat.',
        icon: 'fork',
        attractions: [
            {
                name: 'Settlers Green Outlets',
                description: 'Tax-free shopping with 60+ outlet stores',
                url: 'https://www.settlersgreen.com',
            },
            {
                name: 'Moat Mountain Smoke House',
                description: 'BBQ and craft beers in a rustic setting',
                url: 'https://www.moatmountain.com',
            },
            {
                name: 'The Red Parka Steakhouse',
                description: 'Classic steakhouse with salad bar',
                url: 'https://www.redparkapub.com',
            },
            {
                name: "May Kelly's Cottage",
                description: 'Irish pub with live music and hearty fare',
            },
            {
                name: 'Flatbread Company',
                description: 'Wood-fired pizza and local ingredients',
                url: 'https://www.flatbreadcompany.com',
            },
            {
                name: "Zeb's General Store",
                description:
                    'Zeb’s General Store embodies the nostalgia and quality offered by the general stores of yesteryear with a decidedly whimsical flair.',
                url: 'https://www.zebs.com',
            },
        ],
    },
];

export const policies = {
    times: [
        { label: 'Check-in', value: '4:00 PM', note: 'Self check-in — arrive whenever suits you' },
        { label: 'Check-out', value: '11:00 AM', note: 'Just pull the door shut behind you' },
    ],
    rules: [
        'Guests must be at least 21 years of age to make a reservation and to check in.',
        'No smoking is allowed inside the cabins.',
    ],
};

export const about =
    'Experience the charm of the White Mountains in our cozy cabins. Perfect for families, couples, and groups seeking a memorable mountain getaway.';
