import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

// Book Sections
import { BookHero } from '@/components/sections/sach/BookHero';
import { BookContent } from '@/components/sections/sach/BookContent';
import { BookCombos } from '@/components/sections/sach/BookCombos';
import { BookDetails } from '@/components/sections/sach/BookDetails';
import { BookFeedback } from '@/components/sections/sach/BookFeedback';
import { BookCorporate } from '@/components/sections/sach/BookCorporate';

export const metadata: Metadata = {
  title: 'Sách Sức Mạnh Ẩn Sau Con Số | Linh Hoa Tâm',
  description: 'Cuốn sách của tác giả Hoàng Mai Linh về Thuật Số Học Ứng Dụng dành cho lãnh đạo doanh nghiệp, cá nhân và bất kỳ ai muốn hiểu rõ mình trước khi ra quyết định.',
  openGraph: {
    title: 'Sách Sức Mạnh Ẩn Sau Con Số | Linh Hoa Tâm',
    description: 'Sức Mạnh Ẩn Sau Con Số: khi trực giác lãnh đạo có một hệ quy chiếu khoa học.',
    locale: 'vi_VN',
    type: 'website',
  },
};

export default function BookPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <BookHero />
        <BookContent />
        <BookCombos />
        <BookFeedback />
        <BookDetails />
        <BookCorporate />
      </main>
      <Footer />
    </>
  );
}
