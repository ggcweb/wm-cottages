import Reveal from '@/components/Reveal';
import { areaGuide } from '@/lib/site';
import { attractionIcons, IconArrowUpRight } from '@/components/Icons';

export default function AreaGuide() {
    return (
        <section id="area" className="grain relative bg-birch-100 px-5 py-20 sm:px-6 md:py-28">
            <div className="container relative">
                <Reveal className="max-w-2xl">
                    <p className="eyebrow flex items-center gap-2.5 text-barn">
                        <span className="h-px w-8 bg-barn/40" />
                        The area
                    </p>
                    <h2 className="mt-6 text-[clamp(2.25rem,4.5vw,3.5rem)] font-semibold text-ink">
                        Explore the area
                    </h2>
                    <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                        Discover the best attractions, skiing, dining, and shopping that North
                        Conway and the White Mountains have to offer.
                    </p>
                </Reveal>

                <div className="mt-12 grid gap-6 lg:grid-cols-3">
                    {areaGuide.map((category, i) => {
                        const Icon = attractionIcons[category.icon];
                        return (
                            <Reveal
                                key={category.title}
                                delay={i * 100}
                                className="flex flex-col rounded-3xl border border-ink/10 bg-birch-50 p-7 shadow-card md:p-8"
                            >
                                <span className="grid h-12 w-12 place-items-center rounded-full bg-spruce/10 text-spruce">
                                    <Icon className="h-6 w-6" />
                                </span>
                                <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
                                    {category.title}
                                </h3>
                                <p className="mt-2 text-sm text-ink-muted">{category.blurb}</p>

                                <ul className="mt-6 flex-1 border-t border-ink/10">
                                    {category.attractions.map((attraction) => {
                                        const body = (
                                            <>
                                                <span className="flex items-center gap-1.5 font-semibold text-ink">
                                                    {attraction.name}
                                                    {attraction.url && (
                                                        <IconArrowUpRight
                                                            className="h-3.5 w-3.5 shrink-0 text-barn opacity-0
                                                                       transition-all duration-300 group-hover:translate-x-0.5
                                                                       group-hover:opacity-100"
                                                        />
                                                    )}
                                                </span>
                                                <span className="mt-1 block text-sm leading-relaxed text-ink-soft">
                                                    {attraction.description}
                                                </span>
                                            </>
                                        );

                                        return (
                                            <li
                                                key={attraction.name}
                                                className="border-b border-ink/10 last:border-b-0"
                                            >
                                                {attraction.url ? (
                                                    <a
                                                        href={attraction.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="group -mx-3 block rounded-xl px-3 py-4 transition-colors duration-300 hover:bg-barn-wash"
                                                    >
                                                        {body}
                                                    </a>
                                                ) : (
                                                    <div className="px-0 py-4">{body}</div>
                                                )}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
