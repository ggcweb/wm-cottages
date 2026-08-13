import Reveal from '@/components/Reveal';
import { highlightIcons } from '@/components/Icons';
import { highlights } from '@/lib/site';

export default function Highlights() {
    return (
        <section className="grain relative bg-birch-100 px-5 py-16 sm:px-6 md:py-20">
            <div className="container relative">
                <div className="grid gap-px overflow-hidden rounded-3xl bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
                    {highlights.map((item, i) => {
                        const Icon = highlightIcons[item.icon];
                        return (
                            <Reveal
                                key={item.title}
                                delay={i * 90}
                                className="bg-birch-50 p-7 md:p-8"
                            >
                                <span className="grid h-11 w-11 place-items-center rounded-full bg-spruce/10 text-spruce">
                                    <Icon className="h-5 w-5" />
                                </span>
                                <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                                    {item.title}
                                </h3>
                                <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                                    {item.body}
                                </p>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
