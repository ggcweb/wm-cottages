'use client';

import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react';

interface RevealProps {
    children: ReactNode;
    className?: string;
    /** Stagger children in a list by passing the index. */
    delay?: number;
    as?: ElementType;
    id?: string;
}

/**
 * Fades content up as it scrolls into view. Content is visible by default in
 * CSS terms once `is-visible` lands, and the reduced-motion media query in
 * globals.css short-circuits the whole effect.
 */
export default function Reveal({
    children,
    className = '',
    delay = 0,
    as: Tag = 'div',
    id,
}: RevealProps) {
    const ref = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        // Never leave content hidden if the browser can't observe it.
        if (typeof IntersectionObserver === 'undefined') {
            setVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisible(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <Tag
            ref={ref}
            id={id}
            className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
            style={delay ? { transitionDelay: `${delay}ms` } : undefined}
        >
            {children}
        </Tag>
    );
}
