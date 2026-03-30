import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { LeaderHero } from '@/components/sections/leader/LeaderHero';
import { LeaderProblems } from '@/components/sections/leader/LeaderProblems';
import { LeaderStrategyMap } from '@/components/sections/leader/LeaderStrategyMap';
import { LeaderConsulting } from '@/components/sections/leader/LeaderConsulting';
import { LeaderTestimonials } from '@/components/sections/leader/LeaderTestimonials';
import { LeaderTopics } from '@/components/sections/leader/LeaderTopics';
import { AboutDifference } from '@/components/sections/about/AboutDifference';

export const metadata: Metadata = {
  title: 'Giải pháp Lãnh đạo | Linh Hoa Tâm',
  description: 'Chiến lược kinh doanh đúng bắt đầu từ người đứng đầu hiểu rõ mình. Ra quyết định đúng thời điểm.',
};

export default function GiaiPhapLanhDaoPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 bg-ice-white text-oxford-blue">
        {/* SECTION 1 – HERO */}
        <LeaderHero />
        
        {/* SECTION 2 – 3 VẤN ĐỀ CỤ THỂ */}
        <LeaderProblems />
        
        {/* SECTION 3 – BẢN ĐỒ CHIẾN LƯỢC 2026 */}
        <LeaderStrategyMap />
        
        {/* SECTION 4 – THAM VẤN 1:1 – 3 CẤP ĐỘ */}
        <LeaderConsulting />
        
        {/* SECTION 5 – CHIA SẺ TỪ LÃNH ĐẠO */}
        <LeaderTestimonials />
        
        {/* SECTION 6 – LINH HOA TÂM VS. THỊ TRƯỜNG */}
        <AboutDifference />
        
        {/* SECTION 7 – CHUYÊN ĐỀ LÃNH ĐẠO */}
        <LeaderTopics />
      </main>
      <Footer />
    </>
  );
}
