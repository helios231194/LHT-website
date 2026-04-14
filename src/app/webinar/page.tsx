import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WebinarHero } from '@/components/sections/webinar/WebinarHero';
import { WebinarContent } from '@/components/sections/webinar/WebinarContent';
import { WebinarForm } from '@/components/sections/webinar/WebinarForm';
import { WebinarBenefits } from '@/components/sections/webinar/WebinarBenefits';
import { WebinarMaster } from '@/components/sections/webinar/WebinarMaster';
import { WebinarFAQ } from '@/components/sections/webinar/WebinarFAQ';
import { WebinarCTA } from '@/components/sections/webinar/WebinarCTA';

export const metadata: Metadata = {
  title: 'Webinar Miễn phí | Linh Hoa Tâm',
  description: '4 sai lầm hệ thống khiến người làm nhiều mà kết quả không tăng. Tham gia webinar chiến lược.',
};

export default function WebinarPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 bg-ice-white text-oxford-blue">
        <WebinarHero />
        <WebinarContent />
        <WebinarForm />
        <WebinarBenefits />
        <WebinarMaster />
        <WebinarFAQ />
        <WebinarCTA />
      </main>
      <Footer />
    </>
  );
}
