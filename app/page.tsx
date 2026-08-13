import Hero from '@/components/Hero';
import Highlights from '@/components/Highlights';
import LocationSection from '@/components/LocationSection';
import StaySection from '@/components/StaySection';
import SelfCheckIn from '@/components/SelfCheckIn';
import Gallery from '@/components/Gallery';
import AreaGuide from '@/components/AreaGuide';
import Policies from '@/components/Policies';
import BookingCta from '@/components/BookingCta';
import { stays } from '@/lib/site';

const [cottages, house] = stays;

export default function Home() {
    return (
        <main>
            <Hero />
            <Highlights />
            <LocationSection />
            <StaySection stay={cottages} />
            <StaySection stay={house} reverse tone="warm" />
            <SelfCheckIn />
            <Gallery />
            <AreaGuide />
            <Policies />
            <BookingCta />
        </main>
    );
}
