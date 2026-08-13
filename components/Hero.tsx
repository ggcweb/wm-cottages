import Image from 'next/image';
import { BOOKING_URL, hero } from '@/lib/site';
import { IconArrowRight, IconKey, IconPin } from '@/components/Icons';

export default function Hero() {
    return (
        <section className="relative flex min-h-[92svh] flex-col justify-end overflow-hidden bg-spruce-dark">
            {/* Photograph */}
            <div className="absolute inset-0">
                <div className="relative h-full w-full animate-ken-burns">
                    <Image
                        src={hero.image.src}
                        alt={hero.image.alt}
                        fill
                        className="object-cover object-center"
                        priority
                        quality={88}
                        sizes="100vw"
                    />
                </div>
                <div className="absolute inset-0 bg-scrim-b" />
                <div className="absolute inset-0 bg-gradient-to-r from-spruce-dark/70 via-spruce-dark/25 to-transparent" />
            </div>

            {/* Copy */}
            <div className="container relative z-10 pb-14 pt-36 sm:pb-16 md:pb-20 md:pt-40">
                <div className="max-w-3xl">
                    <p className="animate-hero-in flex items-center gap-2.5 text-white/85">
                        <IconPin className="h-4 w-4 text-brass-light" />
                        <span className="eyebrow">{hero.eyebrow}</span>
                    </p>

                    <h1
                        className="animate-hero-in mt-5 text-[clamp(2.5rem,8vw,5.25rem)] font-semibold text-white"
                        style={{ animationDelay: '80ms' }}
                    >
                        {hero.title}{' '}
                        <span className="relative whitespace-nowrap italic text-brass-light">
                            {hero.titleAccent}
                        </span>
                    </h1>

                    <p
                        className="animate-hero-in mt-6 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl"
                        style={{ animationDelay: '160ms' }}
                    >
                        {hero.lede}
                    </p>

                    <div
                        className="animate-hero-in mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
                        style={{ animationDelay: '240ms' }}
                    >
                        <a
                            href={BOOKING_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary group"
                        >
                            Check Availability
                            <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                        <a href="#check-in" className="btn-ghost-light">
                            <IconKey className="h-4 w-4" />
                            How self check-in works
                        </a>
                    </div>
                </div>
            </div>

            {/* Facts rail */}
            <div className="relative z-10 border-t border-white/15 bg-white/[0.07] backdrop-blur-md">
                <div className="container">
                    <dl className="grid grid-cols-4 divide-x divide-white/15">
                        {hero.stats.map((stat) => (
                            <div key={stat.label} className="px-2 py-5 text-center sm:px-4 md:py-6">
                                <dt className="sr-only">{stat.label}</dt>
                                <dd>
                                    <span className="block font-display text-2xl font-semibold text-white md:text-3xl">
                                        {stat.value}
                                    </span>
                                    <span className="eyebrow mt-1.5 block text-white/65">
                                        {stat.label}
                                    </span>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
}
