'use client';
import { useState, useEffect } from 'react';
import { FadeIn, SlideIn } from '@/components/ui/AnimationWrapper';
import { ArrowRight, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface KnowledgeGridProps {
  category: string;
  headline: string;
}

// Extensive mock data for pagination
const mockPosts = Array.from({ length: 24 }).map((_, i) => {
  const categories = [
    'Hệ điều hành cá nhân', 
    'Ra quyết định', 
    'Đội ngũ & Nhân sự', 
    'Tài chính & Đầu tư',
    'Lãnh đạo & Vận hành'
  ];
  return {
    id: i,
    title: `[Bài viết ${i + 1}] Dấu Hiệu Lãnh Đạo Đang Cạn Kiệt Năng Lượng Tự Nhiên`,
    desc: 'Nhận biết sớm các tín hiệu cảnh báo từ bộ số cá nhân để tránh sụp đổ hệ thống lúc quan trọng nhất. Đây là một bài học xương máu cho các chủ doanh nghiệp SMBs.',
    tag: categories[i % categories.length],
    date: `1${(i % 9) + 1}/05/2026`,
    slug: `bai-viet-mau-${i + 1}`
  };
});

const ITEMS_PER_PAGE = 6;

export function KnowledgeGrid({ category, headline }: KnowledgeGridProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = category === 'Mới nhất' || category === 'Tất cả'
    ? mockPosts 
    : mockPosts.filter(post => post.tag === category);

  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE, 
    currentPage * ITEMS_PER_PAGE
  );

  // Reset pagination when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [category]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: document.getElementById('knowledge-grid')?.offsetTop || 0, behavior: 'smooth' });
  };

  return (
    <section id="knowledge-grid" className="py-24 bg-white relative scroll-mt-24">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <SlideIn direction="up">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-oxford-blue">
              {headline}
            </h2>
            <div className="flex-1 h-px bg-slate-200 mt-2 hidden sm:block" />
          </div>
        </SlideIn>

        {currentPosts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPosts.map((post, idx) => (
                <FadeIn key={post.id} direction="up" delay={idx * 0.1}>
                  <article className="group h-full flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xl shadow-oxford-blue/5 hover:shadow-cyan-azure/10 hover:-translate-y-2 hover:border-cyan-azure/20 transition-all duration-300">
                    <Link href={`/kien-thuc/${post.slug}`} className="block relative aspect-[4/3] w-full overflow-hidden bg-slate-100 flex items-center justify-center">
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-oxford-blue text-white/30 font-bold group-hover:scale-105 transition-transform duration-700">
                        <span>Mockup Ảnh</span>
                      </div>
                    </Link>

                    <div className="p-8 flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <span className="bg-blaze-orange/10 text-blaze-orange text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-blaze-orange/20">
                          {post.tag}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-oxford-blue leading-snug mb-4 group-hover:text-cyan-azure transition-colors line-clamp-2">
                        <Link href={`/kien-thuc/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>

                      <p className="text-slate-600 mb-6 line-clamp-2 text-[15px] flex-1">
                        {post.desc}
                      </p>

                      <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{post.date}</span>
                        </div>
                        
                        <Link href={`/kien-thuc/${post.slug}`} className="text-sm font-bold text-cyan-azure flex items-center hover:text-blaze-orange transition-colors">
                          Đọc thêm <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-16 flex items-center justify-center gap-2">
                <button 
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:text-blaze-orange hover:border-blaze-orange disabled:opacity-30 disabled:hover:border-slate-200 disabled:hover:text-slate-500 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <div className="flex items-center gap-2">
                  {Array.from({ length: totalPages }).map((_, idx) => {
                    const page = idx + 1;
                    // Simplify pagination for UX (show logic: first, last, current, adjacent)
                    if (
                      page === 1 || 
                      page === totalPages || 
                      Math.abs(currentPage - page) <= 1
                    ) {
                      return (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          className={`w-12 h-12 flex items-center justify-center rounded-full font-bold transition-colors ${
                            currentPage === page 
                              ? 'bg-blaze-orange text-white border-blaze-orange shadow-lg shadow-blaze-orange/20' 
                              : 'border border-slate-200 text-slate-600 hover:border-blaze-orange hover:text-blaze-orange'
                          }`}
                        >
                          {page}
                        </button>
                      );
                    }
                    if (
                      (page === 2 && currentPage > 3) || 
                      (page === totalPages - 1 && currentPage < totalPages - 2)
                    ) {
                      return <span key={page} className="text-slate-400 font-bold px-1">...</span>;
                    }
                    return null;
                  })}
                </div>

                <button 
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:text-blaze-orange hover:border-blaze-orange disabled:opacity-30 disabled:hover:border-slate-200 disabled:hover:text-slate-500 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="py-20 text-center text-slate-500 font-medium">
            <FadeIn direction="up">
              Chưa có bài viết nào trong danh mục này. Vui lòng quay lại sau!
            </FadeIn>
          </div>
        )}
      </div>
    </section>
  );
}
