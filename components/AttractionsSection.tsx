'use client';

import { useState } from 'react';

interface Attraction {
    name: string;
    description: string;
    url?: string;
}

interface AttractionCategory {
    title: string;
    icon: JSX.Element;
    attractions: Attraction[];
}

export default function AttractionsSection() {
    const [openCategory, setOpenCategory] = useState<number | null>(0);

    const categories: AttractionCategory[] = [
        {
            title: 'Outdoor Activities',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                </svg>
            ),
            attractions: [
                {
                    name: 'Echo Lake State Park',
                    description: 'Swimming, hiking, and stunning mountain views',
                    url: 'https://www.nhstateparks.org/visit/state-parks/echo-lake-state-park',
                },
                {
                    name: 'Diana\'s Baths',
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
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                </svg>
            ),
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
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                </svg>
            ),
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
                    name: 'May Kelly\'s Cottage',
                    description: 'Irish pub with live music and hearty fare',
                },
                {
                    name: 'Flatbread Company',
                    description: 'Wood-fired pizza and local ingredients',
                    url: 'https://www.flatbreadcompany.com',
                },

                {
                    name: "Zeb's General Store",
                    description: 'Zeb’s General Store embodies the nostalgia and quality offered by the general stores of yesteryear with a decidedly whimsical flair.',
                    url: 'https://www.zebs.com',
                },
            ],
        },
    ];

    const toggleCategory = (index: number) => {
        setOpenCategory(openCategory === index ? null : index);
    };

    return (
        <section className="section-padding bg-gradient-to-br from-cottage-red via-cottage-red-dark to-cottage-red-light text-white">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        Explore the Area
                    </h2>
                    <p className="text-xl text-earth-cream max-w-3xl mx-auto">
                        Discover the best attractions, skiing, dining, and shopping that North
                        Conway and the White Mountains have to offer
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-4">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:bg-white/15"
                        >
                            {/* Category Header */}
                            <button
                                onClick={() => toggleCategory(index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors duration-200"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="bg-white/20 p-3 rounded-lg">{category.icon}</div>
                                    <h3 className="text-2xl font-display font-bold">{category.title}</h3>
                                </div>
                                <svg
                                    className={`w-6 h-6 transition-transform duration-300 ${openCategory === index ? 'rotate-180' : ''
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>

                            {/* Category Content */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openCategory === index ? 'max-h-[1000px]' : 'max-h-0'
                                    }`}
                            >
                                <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {category.attractions.map((attraction, attractionIndex) => (
                                        <div
                                            key={attractionIndex}
                                            className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
                                        >
                                            {attraction.url ? (
                                                <a
                                                    href={attraction.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="block"
                                                >
                                                    <h4 className="font-bold text-lg mb-1 flex items-center">
                                                        {attraction.name}
                                                        <svg
                                                            className="w-4 h-4 ml-1"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                            />
                                                        </svg>
                                                    </h4>
                                                    <p className="text-earth-cream text-sm">
                                                        {attraction.description}
                                                    </p>
                                                </a>
                                            ) : (
                                                <>
                                                    <h4 className="font-bold text-lg mb-1">{attraction.name}</h4>
                                                    <p className="text-earth-cream text-sm">
                                                        {attraction.description}
                                                    </p>
                                                </>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
