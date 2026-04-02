'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Phone, Mail, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export function BookCorporate() {
  return (
    <section className="py-24 bg-oxford-blue relative overflow-hidden" id="qua-tang-doanh-nghiep">
       {/* Background Ambient */}
       <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan-azure/10 blur-[130px] pointer-events-none rounded-full" />
       <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-blaze-orange/5 blur-[100px] pointer-events-none rounded-full" />
       
       <div className="container mx-auto px-4 md:px-6 relative z-10">
         <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center justify-between">
            
            {/* Left Content */}
            <div className="lg:w-[55%]">
              <FadeIn direction="up">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 shadow-sm">
                  <Award className="w-4 h-4 text-cyan-azure" />
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-azure/90">Quà tặng doanh nghiệp</span>
                </div>
                
                {/* Title */}
                <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-white mb-6 leading-[1.15] text-balance">
                  Tri ân đội ngũ <br className="hidden md:block"/>
                  quản lý nòng cốt.
                </h2>
                
                {/* Desc */}
                <p className="text-white/80 text-lg mb-10 leading-relaxed text-pretty max-w-xl">
                  Nhiều CEO và Founder chọn <strong className="text-white font-bold">Sức Mạnh Ẩn Sau Con Số</strong> làm quà tặng tri thức cho đội ngũ quản lý. Mỗi người hiểu về Thuật Số Học sẽ giúp cả nhóm giao tiếp hiệu quả hơn và phân vai chính xác hơn.
                </p>
                
                {/* Features List */}
                <ul className="space-y-6">
                  {[
                    'Chiết khấu hấp dẫn cho đơn từ 10 cuốn',
                    'In tên tổ chức hoặc lời chúc lên bìa sách theo yêu cầu',
                    'Giao hàng toàn quốc',
                    'Hỗ trợ workshop giới thiệu nội dung sách cho đội ngũ (nếu cần)'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="w-2.5 h-2.5 bg-blaze-orange shrink-0 mt-2" />
                      <span className="text-white/95 font-medium text-lg leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
            
            {/* Right Contact Card / Form */}
            <div className="lg:w-[45%] w-full max-w-[440px] mx-auto lg:mr-0">
               <FadeIn direction="up" delay={0.2}>
                  <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl relative">
                    <h3 className="text-2xl font-black text-oxford-blue text-center mb-8">Liên hệ đặt số lượng</h3>
                    
                    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-bold text-oxford-blue mb-2">
                          Họ và tên <span className="text-blaze-orange">*</span>
                        </label>
                        <input 
                          type="text" 
                          id="fullName" 
                          placeholder="Nhập họ tên của bạn" 
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blaze-orange/50 focus:border-blaze-orange/30 transition-all text-oxford-blue font-medium placeholder:text-slate-400"
                        />
                      </div>
                      
                      <div className="mb-2">
                        <label htmlFor="phoneNumber" className="block text-sm font-bold text-oxford-blue mb-2">
                          Số điện thoại <span className="text-blaze-orange">*</span>
                        </label>
                        <input 
                          type="tel" 
                          id="phoneNumber" 
                          placeholder="Nhập số điện thoại liên hệ" 
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blaze-orange/50 focus:border-blaze-orange/30 transition-all text-oxford-blue font-medium placeholder:text-slate-400"
                        />
                      </div>

                      <div className="pt-2">
                        <Button type="button" variant="primary" className="w-full h-[60px] font-bold text-lg rounded-xl shadow-[0_8px_30px_rgb(255,107,0,0.2)] hover:shadow-[0_8px_30px_rgb(255,107,0,0.4)] hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group">
                          GỬI YÊU CẦU 
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                        </Button>
                      </div>
                    </form>
                  </div>
               </FadeIn>
            </div>
         </div>
       </div>
    </section>
  );
}
