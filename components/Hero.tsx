import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-cottage.jpg"
                    alt="White Mountain Cottages scenic view"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 animate-fade-in">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 animate-slide-up">
                    Stay in the Heart of
                    <br />
                    <span className="text-cottage-red-light">North Conway</span>
                </h1>
                <p className="text-xl md:text-2xl text-earth-cream mb-8 max-w-2xl mx-auto animate-slide-up">
                    Experience the beauty of the White Mountains in our charming cottages
                    and spacious family house
                </p>
                <a
                    href="https://reservation.asiwebres.com/SearchAvailability.aspx?id=92f48eca701144d9bcb5ec14f9a1629f"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-block text-lg animate-slide-up"
                >
                    Check Availability
                </a>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
                <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
}
