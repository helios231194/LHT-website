'use client';
import { useState } from 'react';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import { Download, CheckCircle } from 'lucide-react';

export function MasterCredential() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [purpose, setPurpose] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email || !purpose) return;
    // In production this would call an API / email service
    setSubmitted(true);
  }

  return (
    <section id="credential" className="py-20 md:py-32 bg-ice-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn direction="up">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-px bg-blaze-orange" />
                <span className="text-xs font-bold tracking-[0.25em] text-blaze-orange uppercase">Credential</span>
                <div className="w-8 h-px bg-blaze-orange" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-oxford-blue mb-4 leading-tight">
                Tải hồ sơ chuyên môn đầy đủ của Master Hoàng Mai Linh.
              </h2>
              <p className="text-lg text-cyan-azure max-w-2xl mx-auto">
                File PDF bao gồm hồ sơ chuyên môn, kinh nghiệm, danh sách sự kiện đã tham gia, các chuyên đề và thông tin liên hệ. Dành cho ban tổ chức sự kiện, đối tác và khách hàng cần tài liệu tham khảo trước khi ra quyết định.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.15}>
            <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-sm">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-oxford-blue mb-3">Cảm ơn bạn!</h3>
                  <p className="text-cyan-azure text-lg">
                    Credential PDF sẽ được gửi vào email <strong className="text-oxford-blue">{email}</strong> ngay lập tức.<br />
                    Vui lòng kiểm tra hộp thư (bao gồm thư mục spam).
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-oxford-blue mb-2">Họ và tên *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Nguyễn Văn A"
                        className="w-full h-12 px-4 border border-gray-300 rounded-xl text-oxford-blue placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blaze-orange/30 focus:border-blaze-orange transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-oxford-blue mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="email@example.com"
                        className="w-full h-12 px-4 border border-gray-300 rounded-xl text-oxford-blue placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blaze-orange/30 focus:border-blaze-orange transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-oxford-blue mb-2">Mục đích tải *</label>
                    <select
                      required
                      value={purpose}
                      onChange={e => setPurpose(e.target.value)}
                      className="w-full h-12 px-4 border border-gray-300 rounded-xl text-oxford-blue bg-white focus:outline-none focus:ring-2 focus:ring-blaze-orange/30 focus:border-blaze-orange transition-colors"
                    >
                      <option value="">Chọn mục đích…</option>
                      <option value="speaker">Cân nhắc mời Speaker</option>
                      <option value="coaching">Tìm hiểu về dịch vụ coaching</option>
                      <option value="other">Khác</option>
                    </select>
                  </div>
                  <div className="pt-2">
                    <Button type="submit" variant="primary" size="lg" className="w-full h-14 text-lg font-bold flex items-center justify-center gap-2">
                      <Download className="w-5 h-5" />
                      GỬI VÀ NHẬN FILE PDF QUA EMAIL
                    </Button>
                    <p className="text-center text-sm text-gray-400 mt-3">
                      File PDF sẽ được gửi vào email của bạn ngay lập tức.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
