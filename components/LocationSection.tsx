import Reveal from '@/components/Reveal';
import { contact, location } from '@/lib/site';
import { IconArrowUpRight, IconPin } from '@/components/Icons';

/** Decorative contour lines — a quiet nod to the topo maps of the notches. */
function Contours() {
    return (
        <svg
            className="pointer-events-none absolute -right-24 top-1/2 hidden h-[130%] w-[70%] -translate-y-1/2 text-brass lg:block"
            viewBox="0 0 600 600"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            aria-hidden="true"
        >
            <g opacity="0.16">
                <path d="M300 60c120 0 210 90 210 210s-90 240-210 240S90 420 90 270 180 60 300 60Z" />
                <path d="M300 110c96 0 168 74 168 166s-72 194-168 194-168-84-168-194 72-166 168-166Z" />
                <path d="M302 162c74 0 128 58 128 128s-56 148-128 148-128-64-128-148 54-128 128-128Z" />
                <path d="M304 214c50 0 86 40 86 88s-38 100-86 100-86-44-86-100 36-88 86-88Z" />
                <path d="M306 266c26 0 44 22 44 48s-20 54-44 54-44-24-44-54 18-48 44-48Z" />
            </g>
        </svg>
    );
}

export default function LocationSection() {
    return (
        <section
            id="location"
            className="grain relative overflow-hidden bg-spruce-dark px-5 py-20 text-birch-100 sm:px-6 md:py-28"
        >
            <Contours />

            <div className="container relative">
                <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
                    <div className="lg:col-span-6">
                        <Reveal>
                            <p className="eyebrow flex items-center gap-2.5 text-brass-light">
                                <span className="h-px w-8 bg-brass/50" />
                                {location.eyebrow}
                            </p>
                            <h2 className="mt-6 text-[clamp(2.25rem,5vw,3.75rem)] font-semibold text-white">
                                {location.title}
                            </h2>
                        </Reveal>

                        <Reveal delay={100}>
                            <div className="mt-7 max-w-prose space-y-5 text-base leading-relaxed text-birch-100/75 md:text-lg">
                                {location.body.map((paragraph) => (
                                    <p key={paragraph}>{paragraph}</p>
                                ))}
                            </div>
                        </Reveal>

                        <Reveal delay={180}>
                            <a
                                href={contact.mapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group mt-10 flex items-center gap-5 rounded-2xl border border-white/10
                                           bg-white/[0.04] p-5 transition-colors duration-300 hover:border-brass/40
                                           hover:bg-white/[0.07] sm:p-6"
                            >
                                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brass/15 text-brass-light">
                                    <IconPin className="h-5 w-5" />
                                </span>
                                <span className="min-w-0 flex-1">
                                    <span className="block font-display text-lg font-semibold text-white sm:text-xl">
                                        {contact.street}
                                    </span>
                                    <span className="mt-0.5 block text-sm text-birch-100/60">
                                        {contact.city}, {contact.state} {contact.zip}
                                    </span>
                                </span>
                                <span className="eyebrow hidden shrink-0 items-center gap-1.5 text-brass-light transition-transform duration-300 group-hover:translate-x-0.5 sm:flex">
                                    Directions
                                    <IconArrowUpRight className="h-3.5 w-3.5" />
                                </span>
                            </a>
                        </Reveal>
                    </div>

                    {/* What's up the road */}
                    <div className="lg:col-span-6 lg:pt-4">
                        <Reveal delay={120}>
                            <p className="eyebrow text-birch-100/45">All from the front door</p>
                        </Reveal>
                        <dl className="mt-6 border-t border-white/10">
                            {location.nearby.map((item, i) => (
                                <Reveal key={item.title} delay={160 + i * 80}>
                                    <div className="flex flex-col gap-1 border-b border-white/10 py-5 sm:flex-row sm:items-baseline sm:gap-8 sm:py-6">
                                        <dt className="font-display text-lg font-semibold text-white sm:w-44 sm:shrink-0">
                                            {item.title}
                                        </dt>
                                        <dd className="text-sm leading-relaxed text-birch-100/70 sm:text-base">
                                            {item.body}
                                        </dd>
                                    </div>
                                </Reveal>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    );
}
