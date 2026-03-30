import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WorkshopHero } from '@/components/sections/workshop/WorkshopHero';
import { WorkshopUpcoming } from '@/components/sections/workshop/WorkshopUpcoming';
import { WorkshopContent } from '@/components/sections/workshop/WorkshopContent';
import { WorkshopRegisterForm } from '@/components/sections/workshop/WorkshopRegisterForm';
import { WorkshopBenefits } from '@/components/sections/workshop/WorkshopBenefits';
import { WorkshopTopics } from '@/components/sections/workshop/WorkshopTopics';
import { WorkshopHistory } from '@/components/sections/workshop/WorkshopHistory';
import { WorkshopStats } from '@/components/sections/workshop/WorkshopStats';
import { WorkshopSpeaker } from '@/components/sections/workshop/WorkshopSpeaker';
import { WorkshopFAQ } from '@/components/sections/workshop/WorkshopFAQ';
import { WorkshopCTA } from '@/components/sections/workshop/WorkshopCTA';

export const metadata: Metadata = {
  title: 'Workshop Chiến Lược | Linh Hoa Tâm - Thuật Số Học Ứng Dụng',
  description: 'Workshop Chiến lược – Thuật Số Học Ứng Dụng cho Lãnh đạo & Doanh nghiệp do Master Hoàng Mai Linh trực tiếp dẫn dắt.',
};

export default function WorkshopChienLuocPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-[72px] bg-ice-white text-oxford-blue">
        {/* SECTION 1 – HERO */}
        <WorkshopHero />
        
        {/* SECTION 2 – WORKSHOP SẮP TỚI */}
        <WorkshopUpcoming />
        
        {/* SECTION 3 – NỘI DUNG */}
        <WorkshopContent />
        
        {/* SECTION 4 – FORM ĐĂNG KÝ */}
        <WorkshopRegisterForm />
        
        {/* SECTION 5 – SAU KHI ĐĂNG KÝ BẠN NHẬN ĐƯỢC */}
        <WorkshopBenefits />
        
        {/* SECTION 6 – CÁC CHỦ ĐỀ WORKSHOP CHIẾN LƯỢC */}
        <WorkshopTopics />
        
        {/* SECTION 7 – LỊCH SỬ WORKSHOP ĐÃ TỔ CHỨC */}
        <WorkshopHistory />
        
        {/* SECTION 8 – CON SỐ THỰC TẾ */}
        <WorkshopStats />
        
        {/* SECTION 9 – ĐĂNG KÝ NHẬN THÔNG BÁO & DIỄN GIẢ */}
        <WorkshopSpeaker />
        
        {/* SECTION 10 – CÂU HỎI THƯỜNG GẶP */}
        <WorkshopFAQ />
        
        {/* SECTION 11 – CTA CUỐI TRANG */}
        <WorkshopCTA />
      </main>
      <Footer />
    </>
  );
}
