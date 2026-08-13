import Image from 'next/image';
import Reveal from '@/components/Reveal';
import { BOOKING_URL, contact } from '@/lib/site';
import { IconArrowRight, IconKey, IconPhone } from '@/components/Icons';

export default function BookingCta() {
    return (
        <section className="relative isolate overflow-hidden bg-barn-dark px-5 py-24 sm:px-6 md:py-32">
            <Image
                src="/booking-images/cottage-24.jpg"
                alt=""
                fill
                className="-z-10 object-cover opacity-25"
                sizes="100vw"
                quality={80}
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-barn-dark/90 via-barn-dark/70 to-spruce-dark/85" />

            <div className="container relative text-center">
                <Reveal>
                    <p className="eyebrow inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-white/90 backdrop-blur-sm">
                        <IconKey className="h-3.5 w-3.5" />
                        Self check-in · no front desk
                    </p>
                    <h2 className="mx-auto mt-8 max-w-3xl text-[clamp(2.25rem,5.5vw,4rem)] font-semibold text-white">
                        Your place in North Conway is waiting
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/80">
                        Check the calendar, pick your cabin, and let yourself in when you arrive.
                    </p>
                </Reveal>

                <Reveal delay={120}>
                    <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <a
                            href={BOOKING_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn group bg-white px-8 py-4 text-barn-dark shadow-lift hover:bg-birch-100"
                        >
                            Check Availability
                            <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                        <a href={contact.phoneHref} className="btn-ghost-light px-8 py-4">
                            <IconPhone className="h-4 w-4" />
                            {contact.phone}
                        </a>
                    </div>
                </Reveal>

                <Reveal delay={200}>
                    <p className="mt-10 text-sm text-white/60">
                        {contact.street}, {contact.city}, {contact.state} {contact.zip}
                    </p>
                </Reveal>
            </div>
        </section>
    );
}
