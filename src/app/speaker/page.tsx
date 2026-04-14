import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SpeakerHero } from '@/components/sections/speaker/SpeakerHero';
import { SpeakerClients } from '@/components/sections/speaker/SpeakerClients';
import { SpeakerStats } from '@/components/sections/speaker/SpeakerStats';
import { SpeakerStyle } from '@/components/sections/speaker/SpeakerStyle';
import { SpeakerTopics } from '@/components/sections/speaker/SpeakerTopics';
import { SpeakerTestimonials } from '@/components/sections/speaker/SpeakerTestimonials';
import { SpeakerProcess } from '@/components/sections/speaker/SpeakerProcess';
import { SpeakerForm } from '@/components/sections/speaker/SpeakerForm';
import { SpeakerCredential } from '@/components/sections/speaker/SpeakerCredential';

export const metadata: Metadata = {
  title: 'Mời Speaker | Linh Hoa Tâm - Thuật Số Học Ứng Dụng',
  description: 'Mời Master Hoàng Mai Linh diễn giả chiến lược về Thuật Số Học Ứng Dụng trong lãnh đạo và vận hành doanh nghiệp. Tải Credential PDF và gửi yêu cầu hợp tác.',
};

export default function SpeakerPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 bg-ice-white text-oxford-blue">
        {/* SECTION 1 - HERO */}
        <SpeakerHero />
        
        {/* SECTION 2 - ĐÃ DIỄN GIẢ TẠI */}
        <SpeakerClients />
        
        {/* SECTION 3 - SỐ LIỆU & THÀNH TỰU */}
        <SpeakerStats />
        
        {/* SECTION 4 - PHONG CÁCH DIỄN GIẢI */}
        <SpeakerStyle />
        
        {/* SECTION 5 - CÁC CHUYÊN ĐỀ NỔI BẬT */}
        <SpeakerTopics />
        
        {/* SECTION 6 - PHẢN HỒI TỪ ĐƠN VỊ ĐÃ MỜI */}
        <SpeakerTestimonials />
        
        {/* SECTION 7 - QUY TRÌNH LÀM VIỆC */}
        <SpeakerProcess />
        
        {/* SECTION 8 - FORM MỜI SPEAKER */}
        <SpeakerForm />
        
        {/* SECTION 9 - TẢI CREDENTIAL */}
        <SpeakerCredential />
      </main>
      <Footer />
    </>
  );
}
