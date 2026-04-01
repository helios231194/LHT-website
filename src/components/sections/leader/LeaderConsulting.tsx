'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import { Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const PLACEHOLDER = '/images/placeholder-800x800.svg';

const pricingTiers = [
  {
    name: 'GÓI NỀN TẢNG 2026',
    image: PLACEHOLDER,
    popular: false,
    ctaTextPrimary: 'ĐẶT LỊCH GÓI NỀN TẢNG',
    ctaLinkPrimary: '#booking',
    ctaTextSecondary: 'Xem chi tiết →',
    ctaLinkSecondary: '/goi-nen-tang-2026',
  },
  {
    name: 'GÓI CỐ VẤN CHIẾN LƯỢC 90 NGÀY',
    image: PLACEHOLDER,
    popular: true,
    ctaTextPrimary: 'ĐẶT LỊCH GÓI CỐ VẤN',
    ctaLinkPrimary: '#booking',
    ctaTextSecondary: 'Xem chi tiết →',
    ctaLinkSecondary: '/goi-co-van-90-ngay',
  },
  {
    name: 'GÓI ĐỘI NGŨ TINH NHUỆ 2026',
    image: PLACEHOLDER,
    popular: false,
    ctaTextPrimary: 'ĐẶT LỊCH WORKSHOP ĐỘI NGŨ',
    ctaLinkPrimary: '#booking',
    ctaTextSecondary: 'Xem chi tiết →',
    ctaLinkSecondary: '/goi-doi-ngu-tinh-nhue',
  }
];

export function LeaderConsulting() {
  return (
    <section className="py-24 md:py-32 bg-[#F8FAFC] relative" id="consulting">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <FadeIn direction="up">
          <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-black text-oxford-blue mb-6 leading-[1.2]">
              Chương trình Tham vấn Chiến lược 1:1 <br className="hidden md:block"/> 
              Mỗi cấp độ đồng hành cho <span className="text-blaze-orange">một giai đoạn khác nhau</span>
            </h2>
            <p className="text-cyan-azure text-lg md:text-xl font-medium leading-relaxed">
              Mỗi chương trình tham vấn được thiết kế riêng theo vai trò, theo giai đoạn doanh nghiệp, theo chu kỳ cá nhân. 
              Master Hoàng Mai Linh đồng hành trực tiếp để xây bản đồ vận hành riêng cho từng lãnh đạo và tổ chức.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
          {pricingTiers.map((tier, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 0.15}>
              <div className={`relative flex flex-col h-full bg-white rounded-3xl overflow-hidden transition-all duration-300 group ${
                tier.popular 
                  ? 'border-2 border-blaze-orange shadow-2xl shadow-blaze-orange/10 transform lg:-translate-y-4' 
                  : 'border border-gray-200 shadow-xl shadow-cyan-azure/5 mt-4'
              }`}>
                {tier.popular && (
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-blaze-orange text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-wider flex items-center gap-1 shadow-lg">
                    <Star className="w-4 h-4 fill-white text-white" />
                    ĐƯỢC CHỌN NHIỀU NHẤT
                  </div>
                )}

                {/* Package Image */}
                <div className="relative w-full aspect-square overflow-hidden">
                  <Image
                    src={tier.image}
                    alt={tier.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* CTA Buttons */}
                <div className="p-6 flex flex-col gap-3">
                  <Link href={tier.ctaLinkPrimary}>
                    <Button variant={tier.popular ? 'primary' : 'outline'} size="lg" className={`w-full h-14 font-bold ${!tier.popular && 'border-gray-200 text-oxford-blue hover:text-white hover:bg-oxford-blue hover:border-oxford-blue'}`}>
                      {tier.ctaTextPrimary}
                    </Button>
                  </Link>
                  <Link href={tier.ctaLinkSecondary} className="text-center py-2">
                    <span className="text-sm font-bold text-cyan-azure hover:text-blaze-orange transition-colors">
                      {tier.ctaTextSecondary}
                    </span>
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
