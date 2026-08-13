import { BOOKING_URL, about, contact, nav, policies } from '@/lib/site';
import {
    IconArrowUpRight,
    IconKey,
    IconMail,
    IconMountain,
    IconPhone,
    IconPin,
} from '@/components/Icons';

export default function Footer() {
    return (
        <footer className="grain relative overflow-hidden bg-spruce-dark text-birch-100">
            <div className="container relative py-16 md:py-20">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
                    {/* Brand */}
                    <div className="lg:col-span-4">
                        <div className="flex items-center gap-3">
                            <span className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/5 text-brass-light">
                                <IconMountain className="h-5 w-5" />
                            </span>
                            <span className="leading-none">
                                <span className="block font-display text-xl font-semibold text-white">
                                    White Mountain
                                </span>
                                <span className="eyebrow mt-1 block text-birch-100/60">
                                    Cottages · North Conway
                                </span>
                            </span>
                        </div>
                        <p className="mt-6 max-w-sm text-sm leading-relaxed text-birch-100/70">
                            {about}
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="lg:col-span-4">
                        <h2 className="eyebrow text-brass-light">Contact</h2>
                        <ul className="mt-5 space-y-3.5 text-sm">
                            <li>
                                <a
                                    href={contact.mapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-start gap-3 text-birch-100/80 transition-colors hover:text-white"
                                >
                                    <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-brass-light" />
                                    <span>
                                        {contact.street}
                                        <br />
                                        {contact.city}, {contact.state} {contact.zip}
                                        <span className="mt-1 flex items-center gap-1 text-2xs uppercase tracking-eyebrow text-birch-100/50 transition-colors group-hover:text-brass-light">
                                            Get directions
                                            <IconArrowUpRight className="h-3 w-3" />
                                        </span>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={contact.phoneHref}
                                    className="flex items-center gap-3 text-birch-100/80 transition-colors hover:text-white"
                                >
                                    <IconPhone className="h-4 w-4 shrink-0 text-brass-light" />
                                    {contact.phone}
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`mailto:${contact.email}`}
                                    className="flex items-center gap-3 text-birch-100/80 transition-colors hover:text-white"
                                >
                                    <IconMail className="h-4 w-4 shrink-0 text-brass-light" />
                                    {contact.email}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Explore + booking */}
                    <div className="lg:col-span-4">
                        <h2 className="eyebrow text-brass-light">Explore</h2>
                        <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
                            {nav.map((item) => (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        className="text-birch-100/80 transition-colors hover:text-white"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                            <p className="flex items-center gap-2 font-display text-base font-semibold text-white">
                                <IconKey className="h-4 w-4 text-brass-light" />
                                Self check-in property
                            </p>
                            <p className="mt-2 text-sm text-birch-100/70">
                                Check in from {policies.times[0].value}, check out by{' '}
                                {policies.times[1].value}. No front desk to wait on.
                            </p>
                            <a
                                href={BOOKING_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary mt-5 w-full"
                            >
                                Book Your Stay
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-7 text-2xs uppercase tracking-eyebrow text-birch-100/50 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        &copy; {new Date().getFullYear()} {contact.name}. All rights reserved.
                    </p>
                    <p>
                        {contact.city}, New Hampshire · White Mountains
                    </p>
                </div>
            </div>
        </footer>
    );
}
