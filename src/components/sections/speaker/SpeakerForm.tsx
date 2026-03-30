'use client';
import { FadeIn, SlideIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import { Send } from 'lucide-react';

export function SpeakerForm() {
  return (
    <section className="py-24 bg-ice-white relative" id="booking-form">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blaze-orange/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
        <SlideIn direction="up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-oxford-blue leading-[1.2] mb-4">
              Gửi yêu cầu mời Master làm diễn giả.
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              Linh Hoa Tâm sẽ phản hồi trong vòng <strong className="text-blaze-orange">24 giờ làm việc.</strong>
            </p>
          </div>
        </SlideIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-oxford-blue/5 p-8 md:p-12 border border-slate-100 relative overflow-hidden">
            <form className="space-y-6" onSubmit={e => e.preventDefault()}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-oxford-blue mb-2">Họ tên người liên hệ <span className="text-blaze-orange">*</span></label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 focus:border-cyan-azure focus:ring-2 focus:ring-cyan-azure/20 rounded-xl px-4 h-14 outline-none transition-all font-medium text-oxford-blue" placeholder="Nhập họ và tên" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-oxford-blue mb-2">Chức danh và tổ chức <span className="text-blaze-orange">*</span></label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 focus:border-cyan-azure focus:ring-2 focus:ring-cyan-azure/20 rounded-xl px-4 h-14 outline-none transition-all font-medium text-oxford-blue" placeholder="CEO tại ABC Corp" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-oxford-blue mb-2">Email liên hệ <span className="text-blaze-orange">*</span></label>
                  <input type="email" className="w-full bg-slate-50 border border-slate-200 focus:border-cyan-azure focus:ring-2 focus:ring-cyan-azure/20 rounded-xl px-4 h-14 outline-none transition-all font-medium text-oxford-blue" placeholder="email@congty.com" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-oxford-blue mb-2">Số điện thoại <span className="text-blaze-orange">*</span></label>
                  <input type="tel" className="w-full bg-slate-50 border border-slate-200 focus:border-cyan-azure focus:ring-2 focus:ring-cyan-azure/20 rounded-xl px-4 h-14 outline-none transition-all font-medium text-oxford-blue" placeholder="09xx xxx xxx" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-oxford-blue mb-2">Tên sự kiện và loại hình</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 focus:border-cyan-azure focus:ring-2 focus:ring-cyan-azure/20 rounded-xl px-4 h-14 outline-none transition-all font-medium text-oxford-blue" placeholder="VD: Hội thảo lãnh đạo, Lễ tất niên, Training..." />
                </div>
                <div>
                  <label className="block text-sm font-bold text-oxford-blue mb-2">Quy mô người tham dự</label>
                  <select className="w-full bg-slate-50 border border-slate-200 focus:border-cyan-azure focus:ring-2 focus:ring-cyan-azure/20 rounded-xl px-4 h-14 outline-none transition-all font-medium text-oxford-blue appearance-none">
                    <option value="" disabled selected>Chọn quy mô</option>
                    <option value="Dưới 50">Dưới 50 người</option>
                    <option value="50 - 200">Từ 50 đến 200 người</option>
                    <option value="Trên 200">Trên 200 người</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-oxford-blue mb-2">Ngày dự kiến</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 focus:border-cyan-azure focus:ring-2 focus:ring-cyan-azure/20 rounded-xl px-4 h-14 outline-none transition-all font-medium text-oxford-blue" placeholder="VD: Giữa tháng 10/2026" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-oxford-blue mb-2">Hình thức tổ chức</label>
                  <select className="w-full bg-slate-50 border border-slate-200 focus:border-cyan-azure focus:ring-2 focus:ring-cyan-azure/20 rounded-xl px-4 h-14 outline-none transition-all font-medium text-oxford-blue appearance-none">
                    <option value="" disabled selected>Offline / Online / Hybrid</option>
                    <option value="Offline">Offline trực tiếp</option>
                    <option value="Online">Online qua Zoom/Teams</option>
                    <option value="Hybrid">Hybrid (Kết hợp)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-oxford-blue mb-2">Chủ đề mong muốn</label>
                <select className="w-full bg-slate-50 border border-slate-200 focus:border-cyan-azure focus:ring-2 focus:ring-cyan-azure/20 rounded-xl px-4 h-14 outline-none transition-all font-medium text-oxford-blue appearance-none mb-3">
                  <option value="" disabled selected>-- Chọn chuyên đề hoặc nhập tự do bên dưới --</option>
                  <option value="Quy Luật Năng Lượng & Ra Quyết Định">Quy Luật Năng Lượng & Ra Quyết Định</option>
                  <option value="Đội Ngũ Tinh Nhuệ 2026">Đội Ngũ Tinh Nhuệ 2026</option>
                  <option value="Chu Kỳ Vận Hành Doanh Nghiệp">Chu Kỳ Vận Hành Doanh Nghiệp</option>
                  <option value="Khác">Chuyên đề nội bộ theo yêu cầu</option>
                </select>
                <textarea 
                  className="w-full bg-slate-50 border border-slate-200 focus:border-cyan-azure focus:ring-2 focus:ring-cyan-azure/20 rounded-xl px-4 py-4 outline-none transition-all font-medium text-oxford-blue" 
                  rows={4}
                  placeholder="Trao đổi thêm về chủ đề, yêu cầu đặc biệt hoặc ghi chú khác..."
                ></textarea>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col items-center">
                <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto px-12 h-16 text-lg font-bold rounded-xl shadow-xl shadow-blaze-orange/20 hover:-translate-y-1 hover:shadow-blaze-orange/40 transition-all duration-300 group">
                  GỬI YÊU CẦU MỜI SPEAKER
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-sm font-medium text-slate-500 mt-4 text-center">
                  Thông tin của bạn được bảo mật tuyệt đối theo chính sách của Linh Hoa Tâm.
                </p>
              </div>

            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
