'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isPoliciesOpen, setIsPoliciesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsPoliciesOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    const openPolicies = () => {
        setIsPoliciesOpen(true);
        setIsMobileMenuOpen(false);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-lg'
                    : 'bg-transparent'
                }`}
        >
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <h1
                            className={`text-2xl font-display font-bold transition-colors duration-300 ${isScrolled ? 'text-cottage-red' : 'text-white'
                                }`}
                        >
                            White Mountain Cottages
                        </h1>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <button
                            onClick={() => scrollToSection('cottages')}
                            className={`font-medium transition-colors duration-300 hover:text-cottage-red ${isScrolled ? 'text-gray-800' : 'text-white'
                                }`}
                        >
                            Cabins
                        </button>
                        <button
                            onClick={() => scrollToSection('house')}
                            className={`font-medium transition-colors duration-300 hover:text-cottage-red ${isScrolled ? 'text-gray-800' : 'text-white'
                                }`}
                        >
                            Family House
                        </button>
                        <button
                            onClick={openPolicies}
                            className={`font-medium transition-colors duration-300 hover:text-cottage-red ${isScrolled ? 'text-gray-800' : 'text-white'
                                }`}
                        >
                            Policies
                        </button>
                        <a
                            href="https://reservation.asiwebres.com/SearchAvailability.aspx?id=92f48eca701144d9bcb5ec14f9a1629f"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                        >
                            Book Now
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`md:hidden p-2 transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'
                            }`}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMobileMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-xl">
                        <button
                            onClick={() => scrollToSection('cottages')}
                            className="block w-full text-left px-4 py-3 text-gray-800 hover:bg-earth-cream transition-colors"
                        >
                            Cabins
                        </button>
                        <button
                            onClick={() => scrollToSection('house')}
                            className="block w-full text-left px-4 py-3 text-gray-800 hover:bg-earth-cream transition-colors"
                        >
                            Family House
                        </button>
                        <button
                            onClick={openPolicies}
                            className="block w-full text-left px-4 py-3 text-gray-800 hover:bg-earth-cream transition-colors"
                        >
                            Policies
                        </button>
                        <div className="px-4 py-3">
                            <a
                                href="https://reservation.asiwebres.com/SearchAvailability.aspx?id=92f48eca701144d9bcb5ec14f9a1629f"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary block text-center"
                            >
                                Book Now
                            </a>
                        </div>
                    </div>
                )}
            </nav>

            {/* Policies Modal */}
            {isPoliciesOpen && (
                <div
                    className="fixed inset-0 z-[60] flex items-center justify-center p-4"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="policies-title"
                    onClick={() => setIsPoliciesOpen(false)}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

                    {/* Dialog */}
                    <div
                        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                            <h2
                                id="policies-title"
                                className="text-2xl font-display font-bold text-cottage-red"
                            >
                                Our Policies
                            </h2>
                            <button
                                onClick={() => setIsPoliciesOpen(false)}
                                className="p-2 text-gray-500 hover:text-gray-800 transition-colors"
                                aria-label="Close policies"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="px-6 py-6 space-y-6">
                            {/* Check-in / Check-out */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-earth-cream/60 rounded-xl p-4 text-center">
                                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                                        Check-in
                                    </p>
                                    <p className="mt-1 text-xl font-semibold text-gray-900">
                                        3:00 PM
                                    </p>
                                </div>
                                <div className="bg-earth-cream/60 rounded-xl p-4 text-center">
                                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                                        Check-out
                                    </p>
                                    <p className="mt-1 text-xl font-semibold text-gray-900">
                                        11:00 AM
                                    </p>
                                </div>
                            </div>

                            {/* Age Requirement */}
                            <div className="flex items-start space-x-3">
                                <span className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-cottage-red" />
                                <p className="text-gray-700">
                                    Guests must be at least{' '}
                                    <span className="font-semibold text-gray-900">
                                        21 years of age
                                    </span>{' '}
                                    to make a reservation and to check in.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
