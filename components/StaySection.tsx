'use client';

import Image from 'next/image';
import { useState } from 'react';
import Reveal from '@/components/Reveal';
import { BOOKING_URL, type Stay } from '@/lib/site';
import { IconArrowRight, IconCheck } from '@/components/Icons';

interface StaySectionProps {
    stay: Stay;
    /** Flips the image to the right so consecutive sections alternate. */
    reverse?: boolean;
    tone?: 'light' | 'warm';
}

export default function StaySection({ stay, reverse = false, tone = 'light' }: StaySectionProps) {
    const [active, setActive] = useState(0);
    const current = stay.images[active];

    return (
        <section
            id={stay.id}
            className={`px-5 py-20 sm:px-6 md:py-28 ${tone === 'warm' ? 'bg-birch-100' : 'bg-birch-50'}`}
        >
            <div className="container">
                <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
                    {/* Images */}
                    <Reveal className={`lg:col-span-7 ${reverse ? 'lg:order-2' : ''}`}>
                        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-birch-200 shadow-lift">
                            {stay.images.map((image, i) => (
                                <Image
                                    key={image.src}
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className={`object-cover transition-opacity duration-700 ease-smooth ${
                                        i === active ? 'opacity-100' : 'opacity-0'
                                    }`}
                                    sizes="(max-width: 1024px) 100vw, 58vw"
                                    quality={85}
                                    priority={i === 0 && !reverse}
                                />
                            ))}
                            <p className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/65 to-transparent px-5 pb-4 pt-12 text-sm text-white/90">
                                {current.alt}
                            </p>
                        </div>

                        <div className="mt-3 grid grid-cols-4 gap-3">
                            {stay.images.map((image, i) => (
                                <button
                                    key={image.src}
                                    onClick={() => setActive(i)}
                                    aria-label={`Show photo ${i + 1}: ${image.alt}`}
                                    aria-current={i === active}
                                    className={`relative aspect-[4/3] overflow-hidden rounded-xl bg-birch-200
                                                transition-all duration-300 ease-smooth ${
                                                    i === active
                                                        ? 'ring-2 ring-barn ring-offset-2 ring-offset-birch-50'
                                                        : 'opacity-65 hover:opacity-100'
                                                }`}
                                >
                                    <Image
                                        src={image.src}
                                        alt=""
                                        fill
                                        className="object-cover"
                                        sizes="18vw"
                                        quality={55}
                                    />
                                </button>
                            ))}
                        </div>
                    </Reveal>

                    {/* Copy */}
                    <div className={`lg:col-span-5 ${reverse ? 'lg:order-1' : ''}`}>
                        <Reveal delay={80}>
                            <p className="eyebrow flex items-center gap-2.5 text-barn">
                                <span className="h-px w-8 bg-barn/40" />
                                {stay.eyebrow}
                            </p>
                            <h2 className="mt-5 text-[clamp(2.25rem,4.5vw,3.25rem)] font-semibold text-ink">
                                {stay.title}
                            </h2>
                            <p className="mt-2 font-display text-lg italic text-ink-muted">
                                {stay.subtitle}
                            </p>
                        </Reveal>

                        <Reveal delay={140}>
                            <dl className="mt-7 flex divide-x divide-ink/10 rounded-2xl border border-ink/10 bg-white/50">
                                {stay.facts.map((fact) => (
                                    <div key={fact.label} className="flex-1 px-4 py-4 text-center">
                                        <dt className="sr-only">{fact.label}</dt>
                                        <dd>
                                            <span className="block font-display text-2xl font-semibold text-spruce">
                                                {fact.value}
                                            </span>
                                            <span className="mt-1 block text-2xs uppercase tracking-wide text-ink-muted">
                                                {fact.label}
                                            </span>
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </Reveal>

                        <Reveal delay={200}>
                            <div className="mt-7 space-y-4 text-base leading-relaxed text-ink-soft">
                                {stay.description.map((paragraph) => (
                                    <p key={paragraph}>{paragraph}</p>
                                ))}
                            </div>
                        </Reveal>

                        <Reveal delay={260}>
                            <h3 className="eyebrow mt-9 text-ink-muted">Amenities</h3>
                            <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
                                {stay.amenities.map((amenity) => (
                                    <li
                                        key={amenity}
                                        className="flex items-start gap-2.5 text-sm text-ink-soft"
                                    >
                                        <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-spruce-light" />
                                        {amenity}
                                    </li>
                                ))}
                            </ul>
                        </Reveal>

                        <Reveal delay={320}>
                            <a
                                href={BOOKING_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary group mt-9"
                            >
                                Book Your Stay
                                <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </a>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
