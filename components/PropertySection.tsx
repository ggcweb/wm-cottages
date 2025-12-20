'use client';

import Image from 'next/image';
import { useState } from 'react';

interface PropertySectionProps {
    id: string;
    title: string;
    subtitle: string;
    description: string[];
    images: Array<{ src: string; alt: string }>;
    amenities: string[];
    reverse?: boolean;
}

export default function PropertySection({
    id,
    title,
    subtitle,
    description,
    images,
    amenities,
    reverse = false,
}: PropertySectionProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <section id={id} className="section-padding bg-earth-cream">
            <div className="container mx-auto">
                <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''
                        }`}
                >
                    {/* Image Gallery */}
                    <div
                        className={`relative ${reverse ? 'lg:order-2' : ''} animate-slide-in-${reverse ? 'right' : 'left'
                            }`}
                    >
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src={images[currentImageIndex].src}
                                alt={images[currentImageIndex].alt}
                                fill
                                className="object-cover transition-opacity duration-500"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>

                        {/* Navigation Arrows */}
                        {images.length > 1 && (
                            <div className="absolute inset-0 flex items-center justify-between px-4">
                                <button
                                    onClick={prevImage}
                                    className="w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                                    aria-label="Previous image"
                                >
                                    <svg
                                        className="w-6 h-6 text-cottage-red"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 19l-7-7 7-7"
                                        />
                                    </svg>
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                                    aria-label="Next image"
                                >
                                    <svg
                                        className="w-6 h-6 text-cottage-red"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </button>
                            </div>
                        )}

                        {/* Image Indicators */}
                        {images.length > 1 && (
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                {images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImageIndex
                                                ? 'bg-white w-8'
                                                : 'bg-white/50 hover:bg-white/75'
                                            }`}
                                        aria-label={`Go to image ${index + 1}`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Content */}
                    <div
                        className={`${reverse ? 'lg:order-1' : ''} animate-slide-in-${reverse ? 'left' : 'right'
                            }`}
                    >
                        <p className="text-cottage-red font-semibold mb-2">{subtitle}</p>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                            {title}
                        </h2>

                        {description.map((paragraph, index) => (
                            <p key={index} className="text-gray-700 text-lg leading-relaxed mb-4">
                                {paragraph}
                            </p>
                        ))}

                        {/* Amenities */}
                        <div className="mt-8">
                            <h3 className="text-xl font-display font-bold text-gray-900 mb-4">
                                Amenities
                            </h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {amenities.map((amenity, index) => (
                                    <li key={index} className="flex items-center text-gray-700">
                                        <svg
                                            className="w-5 h-5 text-forest-green mr-2 flex-shrink-0"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        {amenity}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA Button */}
                        <div className="mt-8">
                            <a
                                href="https://reservation.asiwebres.com/SearchAvailability.aspx?id=92f48eca701144d9bcb5ec14f9a1629f"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary inline-block"
                            >
                                Book Your Stay
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
