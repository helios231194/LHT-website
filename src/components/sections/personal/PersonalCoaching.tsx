'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import { PhoneCall } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const PLACEHOLDER = '/images/placeholder-800x800.svg';

const categories = [
  {
    title: 'Phát triển bản thân & Sự nghiệp',
    services: [
      {
        name: 'Full 19 Chỉ Số Vận Mệnh',
        image: PLACEHOLDER,
        ctaText: 'ĐẶT LỊCH GÓI NÀY',
        ctaLink: '#booking',
        slug: '/full-19-chi-so-van-menh',
      },
      {
        name: 'Cố Vấn Sự Nghiệp',
        image: PLACEHOLDER,
        ctaText: 'ĐẶT LỊCH GÓI NÀY',
        ctaLink: '#booking',
        slug: '/co-van-su-nghiep',
      },
      {
        name: 'Hóa Giải Mâu Thuẫn',
        image: PLACEHOLDER,
        ctaText: 'ĐẶT LỊCH GÓI NÀY',
        ctaLink: '#booking',
        slug: '/hoa-giai-mau-thuan',
      },
    ],
  },
  {
    title: 'Tình duyên, Hôn nhân & Gia đình',
    services: [
      {
        name: 'Xem Đối Tượng Kết Hôn',
        image: PLACEHOLDER,
        ctaText: 'ĐẶT LỊCH GÓI NÀY',
        ctaLink: '#booking',
        slug: '/xem-doi-tuong-ket-hon',
      },
      {
        name: 'Hành Trang Cho Bé Sơ Sinh',
        image: PLACEHOLDER,
        ctaText: 'ĐẶT LỊCH GÓI NÀY',
        ctaLink: '#booking',
        slug: '/hanh-trang-be-so-sinh',
      },
      {
        name: 'Cải Vận Bằng Con Số',
        image: PLACEHOLDER,
        ctaText: 'ĐẶT LỊCH GÓI NÀY',
        ctaLink: '#booking',
        slug: '/cai-van-bang-con-so',
      },
    ],
  },
  {
    title: 'Đặt tên & Doanh nghiệp',
    services: [
      {
        name: 'Đặt Tên Thương Hiệu & Sản Phẩm',
        image: PLACEHOLDER,
        ctaText: 'ĐẶT LỊCH GÓI NÀY',
        ctaLink: '#booking',
        slug: '/dat-ten-thuong-hieu',
      },
      {
        name: 'Cải Tổ Doanh Nghiệp',
        image: PLACEHOLDER,
        ctaText: 'ĐẶT LỊCH GÓI NÀY',
        ctaLink: '#booking',
        slug: '/cai-to-doanh-nghiep',
      },
    ],
  },
];

export function PersonalCoaching() {
  return (
    <section className="py-24 md:py-32 bg-[#F8FAFC] relative" id="coaching">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <FadeIn direction="up">
          <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-black text-oxford-blue mb-6 leading-tight">
              8 Dịch vụ coaching 1:1 chuyên sâu <br className="hidden md:block"/>
              <span className="text-blaze-orange">dành riêng cho từng nhu cầu cụ thể</span>
            </h2>
            <div className="w-16 h-1.5 bg-blaze-orange mx-auto rounded-full mb-8" />
            <p className="text-cyan-azure text-lg font-medium max-w-3xl mx-auto leading-relaxed">
              Mỗi buổi coaching 1:1 được dẫn dắt trực tiếp bởi Master Hoàng Mai Linh. Hình thức online qua Zoom hoặc gặp mặt trực tiếp tại văn phòng.{' '}
              <strong>Tặng kèm:</strong> File ghi âm, File lá số PDF, Sổ ghi chú và Biểu mẫu hành động cụ thể.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-20 max-w-7xl mx-auto">
          {categories.map((cat, catIdx) => (
            <div key={catIdx}>
              <FadeIn direction="up">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 rounded-full bg-blaze-orange text-white flex items-center justify-center font-black text-xl shadow-lg shadow-blaze-orange/20">
                    {catIdx + 1}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-oxford-blue">
                    {cat.title}
                  </h3>
                  <div className="flex-1 h-px bg-gray-200 ml-4 hidden md:block" />
                </div>
              </FadeIn>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {cat.services.map((svc, svcIdx) => (
                  <FadeIn key={svcIdx} direction="up" delay={svcIdx * 0.1}>
                    <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xl shadow-cyan-azure/5 hover:-translate-y-2 transition-transform duration-300 flex flex-col group">
                      {/* Square image area */}
                      <div className="relative w-full aspect-square overflow-hidden">
                        <Image
                          src={svc.image}
                          alt={svc.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>

                      {/* Name + CTAs */}
                      <div className="p-6 flex flex-col gap-3">
                        <h4 className="text-lg font-bold text-oxford-blue leading-snug">{svc.name}</h4>
                        <Link href={svc.ctaLink}>
                          <Button variant="primary" className="w-full font-bold h-12 shadow-md">
                            {svc.ctaText}
                          </Button>
                        </Link>
                        <Link href={svc.slug} className="text-center">
                          <span className="text-sm font-bold text-cyan-azure hover:text-blaze-orange transition-colors">
                            Xem chi tiết →
                          </span>
                        </Link>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Block */}
        <FadeIn direction="up" delay={0.2}>
          <div className="mt-24 max-w-4xl mx-auto bg-oxford-blue text-white rounded-[2.5rem] p-10 md:p-14 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-blaze-orange/20 blur-[100px] rounded-full pointer-events-none" />
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
                <PhoneCall className="w-8 h-8 text-blaze-orange" />
              </div>
              <h3 className="text-2xl md:text-4xl font-black mb-4">Chưa biết chọn gói nào?</h3>
              <p className="text-white/80 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
                Mỗi người có một nhu cầu và giai đoạn khác nhau. Liên hệ trực tiếp để được tư vấn chọn dịch vụ phù hợp nhất – hoàn toàn miễn phí.
              </p>
              <Link href="/lien-he">
                <Button variant="primary" size="lg" className="h-16 px-10 font-bold text-lg rounded-full">
                  LIÊN HỆ TƯ VẤN MIỄN PHÍ
                </Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
