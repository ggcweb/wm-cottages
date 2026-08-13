import Reveal from '@/components/Reveal';
import { contact, policies } from '@/lib/site';
import { IconClock, IconPhone } from '@/components/Icons';

export default function Policies() {
    return (
        <section id="policies" className="bg-birch-50 px-5 py-20 sm:px-6 md:py-24">
            <div className="container">
                <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
                    <Reveal className="lg:col-span-4">
                        <p className="eyebrow flex items-center gap-2.5 text-barn">
                            <span className="h-px w-8 bg-barn/40" />
                            Before you come
                        </p>
                        <h2 className="mt-6 text-[clamp(2rem,4vw,3rem)] font-semibold text-ink">
                            Good to know
                        </h2>
                        <p className="mt-5 text-base leading-relaxed text-ink-soft">
                            The short list — everything else, just ask.
                        </p>
                        <a
                            href={contact.phoneHref}
                            className="btn-outline mt-7"
                        >
                            <IconPhone className="h-4 w-4" />
                            {contact.phone}
                        </a>
                    </Reveal>

                    <div className="lg:col-span-8">
                        <div className="grid gap-4 sm:grid-cols-2">
                            {policies.times.map((time, i) => (
                                <Reveal
                                    key={time.label}
                                    delay={i * 90}
                                    className="rounded-3xl border border-ink/10 bg-white/60 p-6 shadow-card md:p-7"
                                >
                                    <p className="eyebrow flex items-center gap-2 text-ink-muted">
                                        <IconClock className="h-3.5 w-3.5" />
                                        {time.label}
                                    </p>
                                    <p className="mt-3 font-display text-4xl font-semibold text-ink">
                                        {time.value}
                                    </p>
                                    <p className="mt-2 text-sm text-ink-soft">{time.note}</p>
                                </Reveal>
                            ))}
                        </div>

                        <ul className="mt-4 space-y-px overflow-hidden rounded-3xl border border-ink/10">
                            {policies.rules.map((rule, i) => (
                                <Reveal
                                    key={rule}
                                    delay={180 + i * 80}
                                    as="li"
                                    className="flex items-start gap-4 bg-white/60 px-6 py-5 md:px-7"
                                >
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-barn" />
                                    <span className="text-base text-ink-soft">{rule}</span>
                                </Reveal>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
