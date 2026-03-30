'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, PhoneCall } from 'lucide-react';
import Link from 'next/link';

const categories = [
  {
    title: 'Phát triển bản thân & Sự nghiệp',
    services: [
      {
        name: 'Full 19 Chỉ Số Vận Mệnh',
        desc: 'Tấm bản đồ được thiết kế riêng cho mỗi người',
        price: '3.600.000 VND',
        time: '2 tiếng',
        slug: '/full-19-chi-so-van-menh',
        bullets: [
          'Phân tích chi tiết 19 chỉ số vận mệnh',
          'Nhận diện điểm mạnh và điểm cần phát triển',
          'Nắm rõ các mốc đại vận trong cuộc đời',
          'Biết thời điểm nên tiến, nên dừng, nên thay đổi'
        ]
      },
      {
        name: 'Cố Vấn Sự Nghiệp',
        desc: 'Làm việc mình yêu và yêu việc mình làm',
        price: '5.400.000 VND',
        time: '2 tiếng',
        slug: '/co-van-su-nghiep',
        bullets: [
          'Xác định nghề nghiệp phù hợp bộ số vận mệnh',
          'Vạch lộ trình sự nghiệp theo từng giai đoạn',
          'Nhận diện điểm mạnh và môi trường làm việc phù hợp',
          'Cảnh báo các quyết định sai ở các mốc thời gian cụ thể'
        ]
      },
      {
        name: 'Hóa Giải Mâu Thuẫn',
        desc: 'Kết nối với những mối quan hệ bạn trân trọng',
        price: '6.500.000 VND',
        time: '2 tiếng',
        slug: '/hoa-giai-mau-thuan',
        bullets: [
          'Tìm ra sự kết nối thực sự giữa bạn và đối phương',
          'Hiểu rõ tính cách và điểm dễ xung đột của cả hai',
          'Hóa giải điểm khuyết, phát huy điểm chung',
          'Cách tăng giá trị bản thân trong mối quan hệ'
        ]
      }
    ]
  },
  {
    title: 'Tình duyên, Hôn nhân & Gia đình',
    services: [
      {
        name: 'Xem Đối Tượng Kết Hôn',
        desc: 'Yêu đúng người, cưới đúng người',
        price: '9.600.000 VND',
        time: '2 tiếng',
        slug: '/xem-doi-tuong-ket-hon',
        bullets: [
          'Hiểu rõ tính cách ẩn giấu và mong muốn thầm kín',
          'Phân tích độ hòa hợp và tương lai của cả hai',
          'Nhận diện mâu thuẫn tiềm ẩn từ trong bộ số',
          'Cách để cả hai cùng phát triển và giữ lửa dài lâu'
        ]
      },
      {
        name: 'Hành Trang Cho Bé Sơ Sinh',
        desc: 'Tặng bé nền tảng vững vàng ngay từ tên gọi',
        price: '10.000.000 VND',
        time: 'Combo tên và ngày sinh',
        slug: '/hanh-trang-be-so-sinh',
        bullets: [
          'Phân tích bộ số vận mệnh của bé theo ngày sinh',
          'Chọn tên bổ trợ những năng lượng khuyết thiếu',
          'Giúp bé phát huy điểm mạnh bẩm sinh',
          'Định hướng nuôi dạy phù hợp theo cấu trúc số'
        ]
      },
      {
        name: 'Cải Vận Bằng Con Số',
        desc: 'Những con số quanh bạn ảnh hưởng đến năng lượng',
        price: '2.900.000 VND',
        time: '2 tiếng',
        slug: '/cai-van-bang-con-so',
        bullets: [
          'Tìm ra các con số may mắn phù hợp với bộ số',
          'Phân tích số SIM, số tài khoản, số nhà hiện tại',
          'Đề xuất điều chỉnh để nâng cao trường năng lượng',
          'Giúp sự nghiệp và tài chính vận hành thuận hơn'
        ]
      }
    ]
  },
  {
    title: 'Đặt tên & Doanh nghiệp',
    services: [
      {
        name: 'Đặt Tên Thương Hiệu & Sản Phẩm',
        desc: 'Tên đúng năng lượng – thương hiệu đi xa hơn',
        price: '8.900.000 VND',
        time: '2 tiếng',
        slug: '/dat-ten-thuong-hieu',
        bullets: [
          'Kết hợp 3 trường phái Thuật Số và Phong Thủy',
          'Đặt tên doanh nghiệp, nhãn hiệu, sản phẩm, nghệ danh',
          'Phân tích tên hiện tại nếu đã có',
          'Đề xuất tên phù hợp với mục tiêu và lĩnh vực'
        ]
      },
      {
        name: 'Cải Tổ Doanh Nghiệp',
        desc: 'Đưa đúng linh hồn vào doanh nghiệp của bạn',
        price: '27.000.000 VND',
        time: 'Nửa ngày',
        slug: '/cai-to-doanh-nghiep',
        bullets: [
          'Phân tích nguyên nhân doanh nghiệp chưa vận hành thuận',
          'Tìm và lựa chọn nhân sự phù hợp theo bộ số',
          'Định hướng phát triển doanh nghiệp theo chu kỳ',
          'Nắm bắt thời cơ và loại bỏ rủi ro theo biểu đồ'
        ]
      }
    ]
  }
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
              Mỗi buổi coaching 1:1 được dẫn dắt trực tiếp bởi Master Hoàng Mai Linh. Hình thức online qua Zoom hoặc gặp mặt trực tiếp tại văn phòng. 
              <strong> Tặng kèm:</strong> File ghi âm buổi coaching, File lá số PDF, Sổ ghi chú và Biểu mẫu hành động cụ thể.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-24 max-w-7xl mx-auto">
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
                    <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-cyan-azure/5 hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col relative overflow-hidden group">
                      {/* Sub-bg hover effect */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 group-hover:bg-blaze-orange transition-colors duration-300" />
                      
                      <h4 className="text-xl font-bold text-oxford-blue mb-2 pr-4">{svc.name}</h4>
                      <p className="text-cyan-azure font-medium text-sm mb-6">{svc.desc}</p>
                      
                      <div className="mb-8">
                        <div className="text-2xl font-black text-blaze-orange mb-1">{svc.price}</div>
                        <div className="text-slate-500 text-sm font-bold uppercase tracking-wider bg-slate-50 inline-block px-3 py-1 rounded-md">
                          ⏳ {svc.time}
                        </div>
                      </div>

                      <ul className="space-y-4 mb-8 flex-1">
                        {svc.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-blaze-orange shrink-0 mt-0.5" />
                            <span className="text-slate-600 text-[15px] leading-snug">{b}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-col gap-3 pt-6 border-t border-gray-100 mt-auto">
                        <Link href="#booking">
                          <Button variant="primary" className="w-full font-bold h-12 shadow-md">
                            ĐẶT LỊCH GÓI NÀY
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

        {/* Haven't chosen block */}
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
