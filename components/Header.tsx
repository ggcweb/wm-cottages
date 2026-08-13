'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BOOKING_URL, contact, nav } from '@/lib/site';
import { IconClose, IconKey, IconMenu, IconMountain, IconPhone } from '@/components/Icons';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Lock the page behind the mobile menu and let Escape close it.
    useEffect(() => {
        if (!menuOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setMenuOpen(false);
        };
        window.addEventListener('keydown', onKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [menuOpen]);

    const solid = scrolled || menuOpen;

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-smooth ${
                solid
                    ? 'border-b border-ink/10 bg-birch-50/90 backdrop-blur-xl'
                    : 'border-b border-transparent bg-gradient-to-b from-black/45 to-transparent'
            }`}
        >
            <div className="container flex items-center justify-between gap-3 py-3.5 sm:gap-6">
                {/* Wordmark */}
                <Link
                    href="/"
                    className="group flex min-w-0 items-center gap-2.5 sm:gap-3"
                    aria-label={`${contact.name} — home`}
                >
                    <span
                        className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-colors duration-500 sm:h-10 sm:w-10 ${
                            solid
                                ? 'border-barn/25 bg-barn/10 text-barn'
                                : 'border-white/35 bg-white/10 text-white'
                        }`}
                    >
                        <IconMountain className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 leading-none">
                        <span
                            className={`block truncate font-display text-base font-semibold tracking-tight transition-colors duration-500 sm:text-lg md:text-xl ${
                                solid ? 'text-ink' : 'text-white'
                            }`}
                        >
                            White Mountain
                        </span>
                        <span
                            className={`eyebrow mt-1 block truncate transition-colors duration-500 ${
                                solid ? 'text-ink-muted' : 'text-white/70'
                            }`}
                        >
                            Cottages<span className="hidden sm:inline"> · North Conway</span>
                        </span>
                    </span>
                </Link>

                {/* Desktop navigation */}
                <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
                    {nav.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className={`relative py-1 text-sm font-medium transition-colors duration-300 after:absolute
                                        after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0
                                        after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                                            solid
                                                ? 'text-ink-soft hover:text-barn'
                                                : 'text-white/85 hover:text-white'
                                        }`}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                    <a
                        href={contact.phoneHref}
                        className={`hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-medium
                                    transition-colors duration-300 xl:inline-flex ${
                                        solid
                                            ? 'text-ink-soft hover:bg-ink/5 hover:text-ink'
                                            : 'text-white/85 hover:bg-white/10 hover:text-white'
                                    }`}
                    >
                        <IconPhone className="h-4 w-4" />
                        {contact.phone}
                    </a>

                    <a
                        href={BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary whitespace-nowrap px-4 py-2.5 text-xs sm:px-6 sm:text-sm"
                    >
                        Book Now
                    </a>

                    <button
                        onClick={() => setMenuOpen((open) => !open)}
                        className={`grid h-10 w-10 place-items-center rounded-full border transition-colors duration-300 lg:hidden ${
                            solid
                                ? 'border-ink/15 text-ink hover:bg-ink/5'
                                : 'border-white/30 text-white hover:bg-white/10'
                        }`}
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-menu"
                    >
                        {menuOpen ? (
                            <IconClose className="h-5 w-5" />
                        ) : (
                            <IconMenu className="h-5 w-5" />
                        )}
                    </button>
                </div>
            </div>

            {/* Self check-in ribbon — the one thing every arriving guest needs to know. */}
            <div
                className={`overflow-hidden transition-all duration-500 ease-smooth ${
                    solid ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'
                }`}
            >
                <div className="container hidden items-center justify-center gap-2 pb-2.5 md:flex">
                    <IconKey className="h-3.5 w-3.5 text-brass-light" />
                    <p className="eyebrow text-white/80">
                        Self check-in · No front desk · {contact.street}, {contact.city}
                    </p>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                id="mobile-menu"
                className={`overflow-hidden border-t border-ink/10 bg-birch-50 transition-[max-height] duration-500 ease-smooth lg:hidden ${
                    menuOpen ? 'max-h-[40rem]' : 'max-h-0 border-t-0'
                }`}
            >
                <nav className="container flex flex-col py-3" aria-label="Mobile">
                    {nav.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setMenuOpen(false)}
                            className="border-b border-ink/5 py-3.5 font-display text-lg text-ink transition-colors hover:text-barn"
                        >
                            {item.label}
                        </a>
                    ))}

                    <div className="flex flex-col gap-1 py-5 text-sm">
                        <span className="eyebrow mb-2 text-barn">Self check-in property</span>
                        <a
                            href={contact.phoneHref}
                            className="flex items-center gap-2 py-1.5 text-ink-soft"
                        >
                            <IconPhone className="h-4 w-4 text-barn" />
                            {contact.phone}
                        </a>
                        <a
                            href={contact.mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start gap-2 py-1.5 text-ink-soft"
                        >
                            <IconMountain className="mt-0.5 h-4 w-4 shrink-0 text-barn" />
                            {contact.address}
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
}
