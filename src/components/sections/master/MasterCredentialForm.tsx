'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';

export function MasterCredentialForm() {
  return (
    <section id="credential" className="py-24 bg-ice-white text-oxford-blue">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <FadeIn direction="right">
            <div>
              <span className="inline-block py-1 px-3 mb-4 text-xs font-bold tracking-wider text-oxford-blue bg-blaze-orange/10 uppercase">
                TÀI LIỆU CHUYÊN MÔN
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-oxford-blue">
                Tải hồ sơ chuyên môn đầy đủ của Master Hoàng Mai Linh.
              </h2>
              <p className="text-lg text-cyan-azure leading-relaxed mb-8">
                File PDF bao gồm hồ sơ chuyên môn, kinh nghiệm, danh sách sự kiện đã tham gia, các chuyên đề và thông tin liên hệ. Dành cho ban tổ chức sự kiện, đối tác và khách hàng cần tài liệu tham khảo trước khi ra quyết định.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2}>
            <div className="bg-oxford-blue p-8 md:p-10 border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-white">Nhận Credential qua Email</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white/70">Họ tên *</label>
                  <input type="text" className="w-full bg-white/5 border border-white/20 p-4 text-white placeholder-white/30 focus:outline-none focus:border-blaze-orange transition-colors" placeholder="Nguyễn Văn A" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white/70">Email *</label>
                  <input type="email" className="w-full bg-white/5 border border-white/20 p-4 text-white placeholder-white/30 focus:outline-none focus:border-blaze-orange transition-colors" placeholder="email@congty.com" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white/70">Mục đích tải *</label>
                  <select className="w-full bg-oxford-blue border border-white/20 p-4 text-white focus:outline-none focus:border-blaze-orange transition-colors" required>
                    <option value="">-- Chọn mục đích --</option>
                    <option value="Cân nhắc mời speaker">Cân nhắc mời speaker</option>
                    <option value="Tìm hiểu về dịch vụ coaching">Tìm hiểu về dịch vụ coaching</option>
                    <option value="Khác">Khác</option>
                  </select>
                </div>
                <Button type="submit" variant="primary" size="lg" className="w-full h-14 text-lg">
                  TẢI CREDENTIAL (PDF)
                </Button>
                <p className="text-xs text-white/50 text-center mt-4">
                  File PDF sẽ được gửi vào email của bạn ngay lập tức.
                </p>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
