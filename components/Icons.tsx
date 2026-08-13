import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

/** Shared geometry so every icon in the site reads as one family. */
function Base({ children, ...props }: IconProps) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}
        >
            {children}
        </svg>
    );
}

export function IconPin(props: IconProps) {
    return (
        <Base {...props}>
            <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
            <circle cx="12" cy="10" r="2.5" />
        </Base>
    );
}

export function IconKey(props: IconProps) {
    return (
        <Base {...props}>
            <circle cx="8" cy="8" r="4.5" />
            <path d="m11.2 11.2 8.3 8.3M17 17l2-2M14.5 14.5l1.5-1.5" />
        </Base>
    );
}

export function IconDoor(props: IconProps) {
    return (
        <Base {...props}>
            <path d="M4 20h16M7 20V5.5a1.5 1.5 0 0 1 1.2-1.47l6-1.2A1.5 1.5 0 0 1 16 4.3V20" />
            <circle cx="13.3" cy="12" r=".9" fill="currentColor" stroke="none" />
        </Base>
    );
}

export function IconGroup(props: IconProps) {
    return (
        <Base {...props}>
            <circle cx="9" cy="8" r="3" />
            <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
            <path d="M16 5.3a3 3 0 0 1 0 5.4M17.5 14a5.5 5.5 0 0 1 3 5" />
        </Base>
    );
}

export function IconCompass(props: IconProps) {
    return (
        <Base {...props}>
            <circle cx="12" cy="12" r="9" />
            <path d="m15.2 8.8-1.7 4.7-4.7 1.7 1.7-4.7 4.7-1.7Z" />
        </Base>
    );
}

export function IconSki(props: IconProps) {
    return (
        <Base {...props}>
            <path d="m3 21 8.5-3.4M21 21l-8.5-3.4" />
            <path d="M12 3 6.5 14h11L12 3Z" />
        </Base>
    );
}

export function IconFork(props: IconProps) {
    return (
        <Base {...props}>
            <path d="M6 3v5a2.5 2.5 0 0 0 5 0V3M8.5 10.5V21" />
            <path d="M17.5 21v-7.5M17.5 13.5c1.4 0 2.5-1.1 2.5-2.5V7a4 4 0 0 0-5 0v4c0 1.4 1.1 2.5 2.5 2.5Z" />
        </Base>
    );
}

export function IconPhone(props: IconProps) {
    return (
        <Base {...props}>
            <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h2.2a1 1 0 0 1 .96.72l1 3.3a1 1 0 0 1-.48 1.16l-1.6.85a11.5 11.5 0 0 0 5.39 5.39l.85-1.6a1 1 0 0 1 1.16-.48l3.3 1a1 1 0 0 1 .72.96v2.2a1.5 1.5 0 0 1-1.5 1.5C10.7 20 4 13.3 4 5.5Z" />
        </Base>
    );
}

export function IconMail(props: IconProps) {
    return (
        <Base {...props}>
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3.5 7 7.4 5.2a2 2 0 0 0 2.2 0L20.5 7" />
        </Base>
    );
}

export function IconClock(props: IconProps) {
    return (
        <Base {...props}>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5.2l3.2 2" />
        </Base>
    );
}

export function IconCheck(props: IconProps) {
    return (
        <Base {...props}>
            <path d="m4.5 12.5 5 5 10-11" />
        </Base>
    );
}

export function IconArrowRight(props: IconProps) {
    return (
        <Base {...props}>
            <path d="M4 12h16M14 6l6 6-6 6" />
        </Base>
    );
}

export function IconArrowUpRight(props: IconProps) {
    return (
        <Base {...props}>
            <path d="M7 17 17 7M8 7h9v9" />
        </Base>
    );
}

export function IconChevronDown(props: IconProps) {
    return (
        <Base {...props}>
            <path d="m6 9.5 6 6 6-6" />
        </Base>
    );
}

export function IconChevronLeft(props: IconProps) {
    return (
        <Base {...props}>
            <path d="m14.5 5-7 7 7 7" />
        </Base>
    );
}

export function IconChevronRight(props: IconProps) {
    return (
        <Base {...props}>
            <path d="m9.5 5 7 7-7 7" />
        </Base>
    );
}

export function IconClose(props: IconProps) {
    return (
        <Base {...props}>
            <path d="m6 6 12 12M18 6 6 18" />
        </Base>
    );
}

export function IconMenu(props: IconProps) {
    return (
        <Base {...props}>
            <path d="M4 7h16M4 12h16M4 17h16" />
        </Base>
    );
}

export function IconExpand(props: IconProps) {
    return (
        <Base {...props}>
            <path d="M9 4H4v5M15 4h5v5M15 20h5v-5M9 20H4v-5" />
        </Base>
    );
}

export function IconMountain(props: IconProps) {
    return (
        <Base {...props}>
            <path d="m2 19 6.5-11L13 15l2.2-3.4L22 19H2Z" />
            <circle cx="17.5" cy="6.5" r="2" />
        </Base>
    );
}

export const attractionIcons = {
    compass: IconCompass,
    ski: IconSki,
    fork: IconFork,
} as const;

export const highlightIcons = {
    pin: IconPin,
    key: IconKey,
    door: IconDoor,
    group: IconGroup,
} as const;
