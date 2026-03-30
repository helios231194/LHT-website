'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import { Check, Star } from 'lucide-react';
import Link from 'next/link';

const pricingTiers = [
  {
    name: 'GÓI NỀN TẢNG 2026',
    price: '6.800.000 VND',
    popular: false,
    fit: 'Lãnh đạo cần bản đồ cá nhân rõ ràng, ra quyết định trong 1 buổi chuyên sâu.',
    includes: [
      'Luận giải 7 chỉ số',
      'Chu kỳ 2026',
      'Lộ trình 4 trụ cột',
      'PDF 100+ trang'
    ],
    duration: '1 buổi chuyên sâu (90 phút)',
    ctaTextPrimary: 'ĐẶT LỊCH GÓI NỀN TẢNG',
    ctaLinkPrimary: '#booking',
    ctaTextSecondary: 'Xem chi tiết →',
    ctaLinkSecondary: '/goi-nen-tang-2026',
  },
  {
    name: 'GÓI CỐ VẤN CHIẾN LƯỢC 90 NGÀY',
    price: '19.800.000 VND',
    popular: true,
    fit: 'Lãnh đạo cần theo sát tiến độ trong 30 ngày đầu và tham vấn các quyết định thực tế: tuyển dụng, mở chi nhánh, đầu tư, ký hợp đồng.',
    includes: [
      'Toàn bộ quyền lợi Gói Nền Tảng',
      '3 phiên cố vấn check-in (30 phút/phiên)',
      'Bản Đồ Hành Động 90 Ngày',
      'Hỗ trợ Zalo/Telegram liên tục trong 30 ngày'
    ],
    duration: 'Đồng hành 90 ngày',
    ctaTextPrimary: 'ĐẶT LỊCH GÓI CỐ VẤN',
    ctaLinkPrimary: '#booking',
    ctaTextSecondary: 'Xem chi tiết →',
    ctaLinkSecondary: '/goi-co-van-90-ngay',
  },
  {
    name: 'GÓI ĐỘI NGŨ TINH NHUỆ 2026',
    price: '35–70 triệu VND',
    popular: false,
    fit: 'Ban lãnh đạo 3–7 người cần đồng bộ vai trò, tránh xung đột quyền hạn, tái cấu trúc cách ra quyết định nhóm.',
    includes: [
      'Luận giải cá nhân từng người',
      'Bản Đồ Năng Lượng Đội Ngũ',
      'Sơ đồ phân quyền chi tiết',
      'Thỏa Thuận Làm Việc Chung 2026'
    ],
    duration: 'Dành cho nhóm 3-7 thành viên',
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
              <div className={`relative flex flex-col h-full bg-white rounded-3xl p-8 md:p-10 transition-all duration-300 ${
                tier.popular 
                  ? 'border-2 border-blaze-orange shadow-2xl shadow-blaze-orange/10 transform lg:-translate-y-4' 
                  : 'border border-gray-200 shadow-xl shadow-cyan-azure/5 mt-4'
              }`}>
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blaze-orange text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-wider flex items-center gap-1 shadow-lg">
                    <Star className="w-4 h-4 fill-white text-white" />
                    ĐƯỢC CHỌN NHIỀU NHẤT
                  </div>
                )}
                
                <h3 className="text-xl font-black text-oxford-blue mb-4 tracking-tight">{tier.name}</h3>
                <div className="text-3xl font-black text-blaze-orange mb-6">{tier.price}</div>
                
                <div className="mb-8">
                  <span className="text-sm font-bold text-oxford-blue tracking-wider uppercase mb-2 block">Phù hợp với</span>
                  <p className="text-slate-600 leading-relaxed text-[15px]">{tier.fit}</p>
                </div>
                
                <div className="mb-8 flex-1">
                  <span className="text-sm font-bold text-oxford-blue tracking-wider uppercase mb-4 block">Bao gồm</span>
                  <ul className="space-y-4">
                    {tier.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-blaze-orange shrink-0 mt-0.5" />
                        <span className="text-slate-700 font-medium text-[15px] leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-8 border-t border-gray-100 flex flex-col gap-3">
                  <div className="text-center text-sm font-bold text-cyan-azure mb-2 bg-slate-50 py-2 rounded-lg">
                    ⏳ {tier.duration}
                  </div>
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
