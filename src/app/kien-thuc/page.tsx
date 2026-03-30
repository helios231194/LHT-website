import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { KnowledgeClient } from '@/components/sections/knowledge/KnowledgeClient';

export const metadata: Metadata = {
  title: 'Kiến Thức | Linh Hoa Tâm - Thuật Số Học Ứng Dụng',
  description: 'Bài viết chuyên sâu về lãnh đạo, vận hành doanh nghiệp, phát triển bản thân và ra quyết định theo chu kỳ. Cập nhật định kỳ hàng tuần từ Master Hoàng Mai Linh.',
};

export default function KienThucPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-[72px] bg-ice-white text-oxford-blue">
        {/* Everything from Section 1 to Section 7 is routed through the Client component for interactive filtering */}
        <KnowledgeClient />
      </main>
      <Footer />
    </>
  );
}
