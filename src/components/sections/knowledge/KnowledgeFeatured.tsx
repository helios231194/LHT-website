'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';

export function KnowledgeFeatured() {
  return (
    <section className="py-24 bg-ice-white relative" id="featured">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="up">
          <div className="bg-white rounded-[2.5rem] shadow-2xl p-6 md:p-10 border border-slate-100 flex flex-col lg:flex-row items-center gap-10 md:gap-16 group hover:shadow-cyan-azure/10 transition-all duration-500 overflow-hidden relative">
            
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blaze-orange/5 blur-3xl rounded-full pointer-events-none" />

            {/* Thumbnail (Left - 50%) */}
            <Link href="/kien-thuc/bai-viet-mau-1" className="block w-full lg:w-1/2 aspect-video lg:aspect-square xl:aspect-[4/3] relative rounded-3xl overflow-hidden bg-slate-100 border border-slate-200">
              {/* Simulate Image Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center bg-oxford-blue text-white/20 font-bold border-4 border-dashed border-white/10 m-4 rounded-2xl group-hover:scale-105 transition-transform duration-700">
                <span className="text-xl">Ảnh Thumbnail Bài Nổi Bật</span>
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
              </div>
            </Link>

            {/* Content (Right - 50%) */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blaze-orange text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                  Featured
                </span>
                <span className="bg-cyan-azure/10 text-cyan-azure text-xs font-bold uppercase tracking-wider px-3 py-1 border border-cyan-azure/20 rounded-full">
                  Lãnh đạo & Vận hành
                </span>
              </div>

              {/* Title */}
              <Link href="/kien-thuc/bai-viet-mau-1">
                <h2 className="text-3xl md:text-4xl xl:text-5xl font-black text-oxford-blue leading-[1.2] mb-6 hover:text-cyan-azure transition-colors duration-300">
                  Giải Mã Chu Kỳ 9 Năm: Khi Nào CEO Nên Mở Rộng, Khi Nào Nên Co Cụm?
                </h2>
              </Link>

              {/* Summary */}
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Hầu hết các quyết định sai lầm gây thiệt hại hàng tỷ đồng đều đến từ việc mở rộng sai thời điểm. Khám phá cách tính toán chu kỳ từ Thuật Số Học để đưa ra những bước đi chiến lược chuẩn xác nhất cho doanh nghiệp của bạn trong năm 2026.
              </p>

              {/* Meta */}
              <div className="flex items-center gap-4 text-sm font-medium text-slate-500 mb-10 pb-10 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-oxford-blue">
                    ML
                  </div>
                  <span className="text-oxford-blue font-bold">Master Hoàng Mai Linh</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-slate-300" />
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  <span>24/05/2026</span>
                </div>
              </div>

              {/* CTA */}
              <Link href="/kien-thuc/bai-viet-mau-1">
                <Button variant="primary" size="lg" className="h-14 px-8 font-bold rounded-xl shadow-lg shadow-blaze-orange/20 hover:-translate-y-1 hover:shadow-blaze-orange/40 transition-all w-full sm:w-auto">
                  ĐỌC BÀI VIẾT NÀY 
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>

            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
