import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HomeHero } from '@/components/sections/home/HomeHero';
import { TrustBar } from '@/components/sections/home/TrustBar';
import { WhatIsNumerology } from '@/components/sections/home/WhatIsNumerology';
import { TargetAudience } from '@/components/sections/home/TargetAudience';
import { FeaturedProducts } from '@/components/sections/home/FeaturedProducts';
import { Testimonials } from '@/components/sections/home/Testimonials';
import { WebinarBanner } from '@/components/sections/home/WebinarBanner';
import { CommunityBanner } from '@/components/sections/home/CommunityBanner';
import { MasterProfilePreview } from '@/components/sections/home/MasterProfilePreview';
import { HomeCTA } from '@/components/sections/home/HomeCTA';
import { RepresentativeSection } from '@/components/sections/home/RepresentativeSection';
import { TikTokEmbed } from '@/components/sections/home/TikTokEmbed';

export const metadata: Metadata = {
  title: 'Trang chủ | Linh Hoa Tâm - Thuật Số Học Ứng Dụng Cho Người Lãnh Đạo',
  description: 'Một quyết định đúng thời điểm có thể thay đổi cả năm vận hành. Linh Hoa Tâm đồng hành cùng CEO, Founder, Lãnh đạo cấp cao thông qua Thuật Số Học Ứng Dụng.',
  openGraph: {
    title: 'Trang chủ | Linh Hoa Tâm - Thuật Số Học Ứng Dụng Cho Người Lãnh Đạo',
    description: 'Một quyết định đúng thời điểm có thể thay đổi cả năm vận hành. Đồng hành cùng CEO, Founder, Lãnh đạo cấp cao.',
    type: 'website',
  }
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen bg-ice-white pt-20">
        {/* Section 1 - Hero */}
        <HomeHero />
        
        {/* Section 2 - Trust Bar */}
        <TrustBar />
        
        {/* Section 3 - What is Numerology */}
        <WhatIsNumerology />
        
        {/* Section 4 - Target Audience */}
        <TargetAudience />
        
        {/* Section 5 - Featured Products */}
        <FeaturedProducts />
        
        {/* Section 6 - Testimonials */}
        <Testimonials />
        
        {/* Section 7 - Workshop */}
        <WebinarBanner />
        
        {/* Section 8 - Community */}
        <CommunityBanner />
        
        {/* Section 9 - Profile Preview */}
        <MasterProfilePreview />
        
        {/* Section 10 - CTA */}
        <HomeCTA />

        {/* Section 11 - Trưởng Đại Diện */}
        <RepresentativeSection />

        {/* Section 12 - TikTok */}
        <TikTokEmbed />
      </main>
      <Footer />
    </>
  );
}
