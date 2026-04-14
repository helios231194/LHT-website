import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PersonalHero } from '@/components/sections/personal/PersonalHero';
import { PersonalEntryProduct } from '@/components/sections/personal/PersonalEntryProduct';
import { PersonalCoaching } from '@/components/sections/personal/PersonalCoaching';
import { PersonalWhyMaster } from '@/components/sections/personal/PersonalWhyMaster';
import { PersonalTestimonials } from '@/components/sections/personal/PersonalTestimonials';
import { PersonalBook } from '@/components/sections/personal/PersonalBook';
import { PersonalCTA } from '@/components/sections/personal/PersonalCTA';

export const metadata: Metadata = {
  title: 'Phát triển Bản thân | Linh Hoa Tâm',
  description: 'Hiểu cấu trúc năng lượng bản thân là nền tảng của mọi quyết định đúng.',
};

export default function PhatTrienBanThanPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 bg-ice-white text-oxford-blue">
        {/* SECTION 1 – HERO */}
        <PersonalHero />
        
        {/* SECTION 2 – FILE LUẬN GIẢI CÁ NHÂN */}
        <PersonalEntryProduct />
        
        {/* SECTION 3 – COACHING 1:1 CÁ NHÂN – 8 DỊCH VỤ */}
        <PersonalCoaching />
        
        {/* SECTION 4 – TẠI SAO NÊN LÀM VIỆC VỚI MASTER */}
        <PersonalWhyMaster />
        
        {/* SECTION 5 – PHẢN HỒI TỪ KHÁCH HÀNG CÁ NHÂN */}
        <PersonalTestimonials />
        
        {/* SECTION 6 – SÁCH SỨC MẠNH ẨN SAU CON SỐ */}
        <PersonalBook />
        
        {/* SECTION 7 – CTA CUỐI TRANG */}
        <PersonalCTA />
      </main>
      <Footer />
    </>
  );
}
