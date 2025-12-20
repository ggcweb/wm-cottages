export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-forest-green-dark via-forest-green to-forest-green-light text-white">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Information */}
                    <div>
                        <h3 className="text-xl font-display font-bold mb-4">Contact Us</h3>
                        <div className="space-y-2 text-earth-cream">
                            <p className="flex items-start">
                                <svg
                                    className="w-5 h-5 mr-2 mt-1 flex-shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <span>
                                    2689 White Mountain Highway
                                    <br />
                                    North Conway, NH 03860
                                </span>
                            </p>
                            <p className="flex items-center">
                                <svg
                                    className="w-5 h-5 mr-2 flex-shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <a href="tel:603-356-6322" className="hover:text-white transition-colors">
                                    (603) 356-6322
                                </a>
                            </p>
                            <p className="flex items-center">
                                <svg
                                    className="w-5 h-5 mr-2 flex-shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <a
                                    href="mailto:info@wmcottage.com"
                                    className="hover:text-white transition-colors"
                                >
                                    info@wmcottage.com
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* About */}
                    <div>
                        <h3 className="text-xl font-display font-bold mb-4">About</h3>
                        <p className="text-earth-cream leading-relaxed">
                            Experience the charm of the White Mountains in our cozy cottages
                            and spacious family house. Perfect for families, couples, and
                            groups seeking a memorable mountain getaway.
                        </p>
                    </div>

                    {/* Social Media */}
                    {/* <div>
                        <h3 className="text-xl font-display font-bold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.instagram.com/whitemountaincottages"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                                aria-label="Instagram"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a
                                href="https://twitter.com/wmcottages"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                                aria-label="X (Twitter)"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a
                                href="https://pinterest.com/wmcottages"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                                aria-label="Pinterest"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0a12 12 0 00-4.37 23.17c-.08-.74-.15-1.88.03-2.69.16-.73 1.05-4.45 1.05-4.45s-.27-.54-.27-1.33c0-1.25.73-2.18 1.63-2.18.77 0 1.14.58 1.14 1.27 0 .77-.49 1.93-.75 3-.21.9.45 1.63 1.34 1.63 1.61 0 2.84-1.69 2.84-4.14 0-2.16-1.56-3.68-3.77-3.68-2.57 0-4.08 1.93-4.08 3.92 0 .78.3 1.61.67 2.06.07.09.08.17.06.26l-.25 1.04c-.04.16-.13.2-.3.12-1.13-.53-1.84-2.18-1.84-3.51 0-2.85 2.07-5.47 5.96-5.47 3.13 0 5.56 2.23 5.56 5.21 0 3.11-1.96 5.61-4.68 5.61-.91 0-1.77-.47-2.07-.1l-.56 2.14c-.2.79-.76 1.78-1.13 2.38A12 12 0 1012 0z" />
                                </svg>
                            </a>
                        </div>
                    </div> */}
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-white/20 text-center text-earth-cream">
                    <p>&copy; {new Date().getFullYear()} White Mountain Cottages. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
