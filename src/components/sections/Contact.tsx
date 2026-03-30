'use client';
import { SectionTitle, SectionSubtitle } from '@/components/ui/Typography';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="lien-he" className="py-24 bg-ice-white relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <FadeIn className="text-center mb-16">
          <SectionTitle>Liên Hệ Tư Vấn</SectionTitle>
          <SectionSubtitle>
            Hãy để lại thông tin, chúng tôi sẽ liên hệ để lắng nghe và chia sẻ cùng bạn.
          </SectionSubtitle>
        </FadeIn>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden border border-cyan-azure/10">
          
          {/* Contact Info Side */}
          <div className="p-10 bg-oxford-blue text-ice-white relative overflow-hidden">
             {/* Deco */}
             <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-cyan-azure rounded-full blur-[80px] opacity-30 pointer-events-none" />
             <div className="absolute top-10 -left-10 w-32 h-32 bg-blaze-orange rounded-full blur-[60px] opacity-30 pointer-events-none" />
             
             <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6">Kết nối với <br/> Linh Hoa Tâm<span className="text-blaze-orange">.</span></h3>
                <p className="text-cyan-azure mb-12 text-lg">
                  Mỗi cuộc gọi đều là một cơ hội để thấu hiểu và mở ra những lựa chọn tốt hơn.
                </p>

                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-metallic-blue/30 rounded-full flex items-center justify-center shrink-0">
                       <MapPin className="w-6 h-6 text-blaze-orange" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Địa chỉ</h4>
                      <p className="text-cyan-azure">Văn phòng Linh Hoa Tâm, Số 1 Đường, Quận, TP.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-metallic-blue/30 rounded-full flex items-center justify-center shrink-0">
                       <Phone className="w-6 h-6 text-blaze-orange" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Điện thoại</h4>
                      <p className="text-cyan-azure">0123 456 789</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-metallic-blue/30 rounded-full flex items-center justify-center shrink-0">
                       <Mail className="w-6 h-6 text-blaze-orange" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Email</h4>
                      <p className="text-cyan-azure">contact@linhhoatam.vn</p>
                    </div>
                  </div>
                </div>
             </div>
          </div>

          {/* Contact Form Side */}
          <div className="p-10 flex flex-col justify-center">
            <FadeIn delay={0.2} direction="right">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-oxford-blue">Họ tên *</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 rounded-lg border border-cyan-azure/30 bg-ice-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blaze-orange/50 transition-colors text-dark-blue"
                      placeholder="Nhập họ tên của bạn"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-oxford-blue">Email *</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-3 rounded-lg border border-cyan-azure/30 bg-ice-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blaze-orange/50 transition-colors text-dark-blue"
                        placeholder="example@email.com"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-semibold text-oxford-blue">Số điện thoại *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full px-4 py-3 rounded-lg border border-cyan-azure/30 bg-ice-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blaze-orange/50 transition-colors text-dark-blue"
                        placeholder="0912..."
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="content" className="text-sm font-semibold text-oxford-blue">Nội dung quan tâm</label>
                    <textarea 
                      id="content" 
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-cyan-azure/30 bg-ice-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blaze-orange/50 transition-colors text-dark-blue resize-none"
                      placeholder="Bạn đang muốn tìm điều gì..."
                    />
                  </div>

                  <div className="pt-4">
                    <Button variant="primary" size="lg" className="w-full group">
                      <Send className="w-5 h-5 mr-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                      Gửi yêu cầu
                    </Button>
                  </div>
                </form>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
