'use client';

import Image from 'next/image';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Reveal from '@/components/Reveal';
import {
    gallery,
    galleryCategories,
    type GalleryCategory,
} from '@/lib/site';
import {
    IconChevronLeft,
    IconChevronRight,
    IconClose,
    IconExpand,
} from '@/components/Icons';

export default function Gallery() {
    const [filter, setFilter] = useState<GalleryCategory>('All');
    const [lightbox, setLightbox] = useState<number | null>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);
    const triggerRef = useRef<HTMLElement | null>(null);

    const images = useMemo(
        () => (filter === 'All' ? gallery : gallery.filter((image) => image.category === filter)),
        [filter],
    );

    const close = useCallback(() => {
        setLightbox(null);
        // Send focus back to the thumbnail the visitor opened.
        triggerRef.current?.focus();
    }, []);

    const step = useCallback(
        (delta: number) =>
            setLightbox((index) =>
                index === null ? index : (index + delta + images.length) % images.length,
            ),
        [images.length],
    );

    useEffect(() => {
        if (lightbox === null) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        closeButtonRef.current?.focus();

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') close();
            if (e.key === 'ArrowRight') step(1);
            if (e.key === 'ArrowLeft') step(-1);
        };
        window.addEventListener('keydown', onKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [lightbox, close, step]);

    const active = lightbox === null ? null : images[lightbox];

    return (
        <section id="gallery" className="grain relative bg-ink px-5 py-20 sm:px-6 md:py-28">
            <div className="container relative">
                <Reveal className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="eyebrow flex items-center gap-2.5 text-brass-light">
                            <span className="h-px w-8 bg-brass/50" />
                            The gallery
                        </p>
                        <h2 className="mt-6 text-[clamp(2.25rem,4.5vw,3.5rem)] font-semibold text-white">
                            Have a look around
                        </h2>
                    </div>
                    <p className="max-w-sm text-sm leading-relaxed text-white/60">
                        Every photograph here is of the actual property — the cottages, the rooms,
                        the porches and the grounds in North Conway.
                    </p>
                </Reveal>

                {/* Filters */}
                <Reveal delay={80}>
                    <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter photos">
                        {galleryCategories.map((category) => {
                            const selected = filter === category;
                            const count =
                                category === 'All'
                                    ? gallery.length
                                    : gallery.filter((image) => image.category === category).length;

                            return (
                                <button
                                    key={category}
                                    onClick={() => setFilter(category)}
                                    aria-pressed={selected}
                                    className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ease-smooth ${
                                        selected
                                            ? 'border-white bg-white text-ink'
                                            : 'border-white/20 text-white/70 hover:border-white/45 hover:text-white'
                                    }`}
                                >
                                    {category}
                                    <span
                                        className={`ml-1.5 text-xs ${selected ? 'text-ink/45' : 'text-white/35'}`}
                                    >
                                        {count}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </Reveal>

                {/* Mosaic */}
                <div
                    className="mt-8 grid auto-rows-[150px] grid-flow-row-dense grid-cols-2 gap-3
                               sm:auto-rows-[180px] md:grid-cols-3 md:gap-4 lg:auto-rows-[210px] lg:grid-cols-4"
                >
                    {images.map((image, i) => (
                        <button
                            key={image.src}
                            onClick={(e) => {
                                triggerRef.current = e.currentTarget;
                                setLightbox(i);
                            }}
                            className={`group relative overflow-hidden rounded-xl bg-white/[0.06] md:rounded-2xl ${
                                image.tall ? 'row-span-2' : ''
                            }`}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.06]"
                                sizes="(max-width: 640px) 50vw, (max-width: 768px) 45vw, (max-width: 1024px) 33vw, 25vw"
                                loading="lazy"
                                quality={72}
                            />
                            <span className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/35" />
                            <span
                                className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full
                                           bg-white/15 text-white opacity-0 backdrop-blur-sm transition-all
                                           duration-500 group-hover:opacity-100"
                            >
                                <IconExpand className="h-4 w-4" />
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {active && (
                <div
                    className="fixed inset-0 z-[70] flex flex-col bg-ink/95 backdrop-blur-xl"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Photo viewer"
                >
                    <div className="flex items-center justify-between px-4 py-4 sm:px-6">
                        <p className="text-sm tabular-nums text-white/60">
                            {(lightbox ?? 0) + 1} / {images.length}
                        </p>
                        <button
                            ref={closeButtonRef}
                            onClick={close}
                            className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
                            aria-label="Close photo viewer"
                        >
                            <IconClose className="h-5 w-5" />
                        </button>
                    </div>

                    <div className="relative min-h-0 flex-1">
                        <Image
                            key={active.src}
                            src={active.src}
                            alt={active.alt}
                            fill
                            className="animate-fade-in object-contain px-4 sm:px-20"
                            sizes="100vw"
                            quality={90}
                        />
                    </div>

                    <div className="flex items-center justify-between gap-4 px-4 py-5 sm:px-6">
                        <button
                            onClick={() => step(-1)}
                            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
                            aria-label="Previous photo"
                        >
                            <IconChevronLeft className="h-5 w-5" />
                        </button>
                        <p className="text-center text-sm text-white/70">{active.alt}</p>
                        <button
                            onClick={() => step(1)}
                            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
                            aria-label="Next photo"
                        >
                            <IconChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
