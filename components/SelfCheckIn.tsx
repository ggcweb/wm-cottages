import Image from 'next/image';
import Reveal from '@/components/Reveal';
import { checkIn, contact } from '@/lib/site';
import { IconClock, IconKey, IconPhone } from '@/components/Icons';

export default function SelfCheckIn() {
    return (
        <section id="check-in" className="relative bg-birch-50 px-5 py-20 sm:px-6 md:py-28">
            <div className="container">
                <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
                    {/* Photograph + times */}
                    <div className="lg:col-span-5">
                        <Reveal className="relative">
                            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-lift">
                                <Image
                                    src={checkIn.image.src}
                                    alt={checkIn.image.alt}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                    quality={85}
                                />
                            </div>

                            <div className="relative z-10 -mt-12 ml-4 mr-4 rounded-2xl border border-ink/10 bg-birch-50 p-5 shadow-card sm:ml-8 sm:mr-12 sm:p-6">
                                <p className="eyebrow flex items-center gap-2 text-barn">
                                    <IconClock className="h-3.5 w-3.5" />
                                    Your times
                                </p>
                                <dl className="mt-4 grid grid-cols-2 gap-4">
                                    {checkIn.times.map((time) => (
                                        <div key={time.label}>
                                            <dt className="text-xs font-medium uppercase tracking-wide text-ink-muted">
                                                {time.label}
                                            </dt>
                                            <dd className="mt-1 font-display text-2xl font-semibold text-ink">
                                                {time.value}
                                            </dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </Reveal>
                    </div>

                    {/* Explainer */}
                    <div className="lg:col-span-7 lg:pt-2">
                        <Reveal>
                            <p className="eyebrow flex items-center gap-2.5 text-barn">
                                <span className="h-px w-8 bg-barn/40" />
                                {checkIn.eyebrow}
                            </p>
                            <h2 className="mt-6 text-[clamp(2.25rem,4.5vw,3.5rem)] font-semibold text-ink">
                                {checkIn.title}
                            </h2>
                            <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-soft">
                                {checkIn.lede}
                            </p>
                        </Reveal>

                        <ol className="mt-10 border-t border-ink/10">
                            {checkIn.steps.map((step, i) => (
                                <Reveal key={step.n} delay={100 + i * 90}>
                                    <li className="flex gap-5 border-b border-ink/10 py-6 sm:gap-7">
                                        <span
                                            className="font-display text-2xl font-semibold text-barn/35 sm:text-3xl"
                                            aria-hidden="true"
                                        >
                                            {step.n}
                                        </span>
                                        <span className="flex-1">
                                            <h3 className="font-display text-xl font-semibold text-ink">
                                                {step.title}
                                            </h3>
                                            <p className="mt-1.5 text-base leading-relaxed text-ink-soft">
                                                {step.body}
                                            </p>
                                        </span>
                                    </li>
                                </Reveal>
                            ))}
                        </ol>

                        <Reveal delay={340}>
                            <div className="mt-8 flex items-start gap-3 rounded-2xl bg-spruce-wash px-5 py-4 text-sm text-spruce">
                                <IconKey className="mt-1 h-4 w-4 shrink-0" />
                                <p>
                                    {checkIn.footnote}{' '}
                                    <a
                                        href={contact.phoneHref}
                                        className="inline-flex items-center gap-1.5 whitespace-nowrap font-semibold underline decoration-spruce/30 underline-offset-4 transition-colors hover:decoration-spruce"
                                    >
                                        <IconPhone className="h-3.5 w-3.5" />
                                        {contact.phone}
                                    </a>
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
