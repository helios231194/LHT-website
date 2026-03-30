'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';

export function CommunityPreview() {
  return (
    <section className="py-24 bg-ice-white text-oxford-blue border-y border-light-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Xem trước nội dung đang diễn ra</h2>
            <p className="text-cyan-azure text-lg">Hàng ngàn bài thảo luận, case study và hướng dẫn cụ thể đã có sẵn trong Group.</p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3].map((item, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 0.1}>
              <div className="bg-white border border-light-gray aspect-[4/3] flex flex-col items-center justify-center relative group overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="absolute inset-0 bg-gradient-to-t from-ice-white to-transparent opacity-20 z-0"></div>
                <div className="text-oxford-blue/20 font-bold uppercase tracking-widest z-10">BÀI VIẾT FACEBOOK {item}</div>
                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-cyan-azure text-sm">
                  <span>❤️ 1.2k likes</span>
                  <span>💬 300 bình luận</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
