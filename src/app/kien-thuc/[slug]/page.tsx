import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import Link from 'next/link';
import { ArrowLeft, Clock, CalendarDays, Share2, Facebook, Twitter, Linkedin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Dynamic route parameters interface
interface PageProps {
  params: { slug: string };
}

// Generate metadata based on slug
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const title = `Kiến Thức | ${params.slug.replace(/-/g, ' ')}`;
  return {
    title: `${title} - Linh Hoa Tâm`,
    description: 'Trang thông tin chuyên sâu về Thuật Số Học Ứng Dụng dành cho Lãnh đạo và sự phát triển cá nhân.',
  };
}

export default function ArticleDetailPage({ params }: PageProps) {
  // Mock Data representing the Markdown Article
  const article = {
    title: 'Tại Sao Đầu Tư 10 Tỷ Lúc Này Lại Là Đầu Tư Trái Chu Kỳ?',
    tag: 'Ra quyết định',
    date: '12/05/2026',
    readTime: '8 phút đọc',
    author: 'Master Hoàng Mai Linh',
    content: `
Bản đồ thành công không phải là sao chép người khác, mà là tối ưu hệ thống cá nhân của bạn.

## 1. Chiếc Bẫy Của Sự Hoàn Hảo Bên Ngoài

Trong hơn 3.500 giờ làm việc với các CEO, tôi nhận thấy một quy luật lặp lại: Người càng giỏi phân tích thị trường lại càng dễ mắc bẫy "**Chu kỳ vi mô**". Họ phân tích dòng tiền, phân tích xu hướng đám đông, nhưng lại hoàn toàn mù mờ về chu kỳ năng lượng cá nhân của chính mình.

Anh K., một Founder chuỗi F&B khá tiếng tăm tại TP.HCM, quyết định ném 10 tỷ vào mở rộng 3 cơ sở mới. Các số liệu thị trường lúc đó chỉ ra đây là thời điểm hoàn hảo. Tuy nhiên, nếu xét trên Bản đồ Thuật Số Học của anh K., anh đang ở **Năm Cá Nhân Số 7** — năm của sự quay vào trong, tĩnh lặng, đào sâu nền tảng chứ tuyệt đối không phải năm của sự bành trướng ra ngoài.

### 2. Sai Lầm Khi Bơi Ngược Dòng

Kết quả? Hai trong ba cơ sở mới gặp sự cố liên tục về giấy phép, nhân sự đình công và đối thủ cạnh tranh phá giá. 10 tỷ gần như bốc hơi chỉ sau 8 tháng. Khi anh K. đến gặp tôi, mọi chuyện đã vượt qua điểm hòa vốn an toàn từ lâu.

* Quyết định đầu tư trong năm số 7 giống như bạn cố gắng trồng lúa giữa mùa đông lạnh giá nhất. Hạt giống có tốt đến đâu cũng sẽ chết cóng.
* Bạn đang chiến đấu không chỉ với thị trường, mà với chính đồ thị vận mệnh của mình. Đáng sợ nhất là sức mòn lực kiệt nhưng không thể hiểu lý do.

> **Thuật Số Học Ứng Dụng không ngăn cản bạn đầu tư. Nó chỉ chỉ ra cho bạn khoảnh khắc nào hạt giống sẽ nảy mầm với sức mạnh tối đa, và khoảnh khắc nào bạn phải giữ chặt tiền trong két sắt.**

## 3. Khắc Phục Bằng Cách Đi Thuận Chu Kỳ

Nếu bạn được cảnh báo trước, 10 tỷ đó thay vì mở cơ sở mới, sẽ được dùng để tái cấu trúc nhân sự, đào tạo nội bộ và kiện toàn quy trình (Đúng tính chất của Năm Số 7). Sang năm tiếp theo – **Năm Số 8** – năm của sự bùng nổ vật chất, lúc đó mở rộng quy mô thì tỷ lệ thành công có thể lên tới 90% thay vì 10%.

Lãnh đạo xuất sắc không chỉ giỏi phân tích thị trường, mà còn phải biết định vị chính mình trên trục thời gian của vũ trụ.
`
  };

  // 3 Related Posts for suggestion section
  const relatedPosts = [
    {
      title: '5 Dấu Hiệu Lãnh Đạo Đang Cạn Kiệt Năng Lượng Tự Nhiên',
      desc: 'Nhận biết sớm các tín hiệu cảnh báo từ bộ số cá nhân để tránh sụp đổ hệ thống...',
      tag: 'Hệ điều hành cá nhân',
      date: '18/05/2026',
      slug: 'dau-hieu-lanh-dao-can-kiet'
    },
    {
      title: 'Năm Cá Nhân Số 8: Thời Điểm Vàng Thu Hoạch Tài Chính',
      desc: 'Nếu bản đồ của bạn đang bước vào năm số 8, đây là lúc dồn toàn lực cho tăng trưởng...',
      tag: 'Tài chính & Đầu tư',
      date: '28/04/2026',
      slug: 'nam-ca-nhan-so-8'
    },
    {
      title: 'Xây Dựng Văn Hóa Tổ Chức Phù Hợp Với Người Đứng Đầu',
      desc: 'Doanh nghiệp là hình bóng của Founder. Thiết kế văn hóa thế nào để tương thích nhất...',
      tag: 'Lãnh đạo & Vận hành',
      date: '20/04/2026',
      slug: 'xay-dung-van-hoa-to-chuc'
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-[72px] bg-ice-white text-oxford-blue pb-24">
        
        {/* Breadcrumb & Navigation */}
        <div className="bg-white border-b border-slate-100">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl py-6 flex flex-wrap items-center gap-4 text-sm font-medium text-slate-500">
            <Link href="/kien-thuc" className="hover:text-blaze-orange transition-colors flex items-center gap-1.5 whitespace-nowrap">
              <ArrowLeft className="w-4 h-4" /> Trở về Kiến thức
            </Link>
            <span className="text-slate-300">|</span>
            <span className="text-cyan-azure">{article.tag}</span>
            <span className="text-slate-300">|</span>
            <span className="truncate max-w-[200px] md:max-w-none text-slate-400">{article.title}</span>
          </div>
        </div>

        {/* Article Container (Centered Layout, No Sidebar) */}
        <article className="container mx-auto px-4 md:px-6 max-w-3xl lg:max-w-4xl mt-12 md:mt-16">
          <header className="mb-12">
            <h1 className="text-3xl md:text-5xl lg:text-5xl font-black text-oxford-blue leading-[1.2] mb-6">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-500 pb-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-cyan-azure/10 flex items-center justify-center text-cyan-azure font-bold border border-cyan-azure/20">
                  ML
                </div>
                <span className="text-oxford-blue font-bold">{article.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CalendarDays className="w-4 h-4" /> {article.date}
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> {article.readTime}
              </div>
            </div>
          </header>

          {/* Featured Image Placeholder */}
          <div className="w-full aspect-video bg-slate-100 rounded-[2rem] mb-12 flex items-center justify-center border border-slate-200 overflow-hidden relative shadow-lg shadow-oxford-blue/5">
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-oxford-blue text-white/30 font-bold">
              <span>Ảnh Bìa Bài Viết (16:9)</span>
            </div>
          </div>

          {/* Main Content Prose with ReactMarkdown */}
          <div className="w-full lg:px-8 mx-auto">
            <div className="prose prose-lg md:prose-xl prose-slate max-w-none
              prose-headings:font-black prose-headings:text-oxford-blue prose-headings:tracking-tight
              prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-2 prose-h2:border-b-2 prose-h2:border-cyan-azure/20
              prose-h3:text-xl prose-h3:text-cyan-azure prose-h3:mt-8
              prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-blaze-orange prose-a:font-bold prose-a:no-underline hover:prose-a:underline
              prose-strong:text-oxford-blue prose-strong:font-black
              prose-blockquote:border-l-4 prose-blockquote:border-blaze-orange prose-blockquote:bg-blaze-orange/5 prose-blockquote:p-6 prose-blockquote:rounded-r-2xl prose-blockquote:font-medium prose-blockquote:text-slate-700 prose-blockquote:italic
              prose-li:text-slate-600 marker:text-blaze-orange
              prose-mark:bg-cyan-azure/10 prose-mark:text-cyan-azure prose-mark:font-bold prose-mark:px-1 prose-mark:rounded"
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {article.content}
              </ReactMarkdown>
            </div>

            {/* Tags & Share */}
            <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-start gap-6">
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-slate-500 uppercase">Chuyên mục:</span>
                <Link href={`/kien-thuc?cat=${article.tag}`} className="bg-slate-100 text-slate-700 font-medium text-sm px-4 py-1.5 rounded-full hover:bg-cyan-azure hover:text-white transition-colors">
                  {article.tag}
                </Link>
              </div>
            </div>

            {/* End of Post CTA Line */}
            <div className="mt-16 bg-oxford-blue bg-[url('/noise.png')] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-azure to-blaze-orange" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-azure/20 rounded-full blur-[80px] pointer-events-none" />
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4 relative z-10">Đừng ra quyết định mù mờ.</h3>
              <p className="text-white/80 text-lg mb-8 relative z-10 max-w-lg mx-auto">
                Khám phá bản đồ chiến lược cá nhân hóa để biết chính xác bạn đang ở đâu trên quỹ đạo thành công của mình.
              </p>
              <Link href="/lien-he" className="relative z-10 block">
                <Button variant="primary" className="font-bold px-10 py-5 rounded-xl shadow-[0_0_20px_rgba(255,107,0,0.3)] hover:-translate-y-1 transition-all text-lg">
                  ĐẶT LỊCH THAM VẤN NGAY
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </main>

      {/* Related Posts Section (Gợi ý bài viết liên quan) */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-oxford-blue">Bài viết liên quan</h2>
            <div className="w-16 h-1 bg-blaze-orange mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((post, idx) => (
              <article key={idx} className="group flex flex-col bg-ice-white rounded-3xl overflow-hidden border border-slate-100 shadow-xl shadow-oxford-blue/5 hover:shadow-cyan-azure/10 hover:-translate-y-2 hover:border-cyan-azure/20 transition-all duration-300">
                <Link href={`/kien-thuc/${post.slug}`} className="block relative aspect-[4/3] w-full overflow-hidden bg-slate-200 flex items-center justify-center">
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-oxford-blue/90 text-white/30 font-bold group-hover:scale-105 transition-transform duration-700">
                    <span>Mockup Ảnh</span>
                  </div>
                </Link>

                <div className="p-8 flex flex-col flex-1">
                  <span className="text-blaze-orange text-[10px] uppercase font-bold tracking-wider mb-3">
                    {post.tag}
                  </span>
                  
                  <h3 className="text-lg font-bold text-oxford-blue leading-snug mb-3 group-hover:text-cyan-azure transition-colors line-clamp-2">
                    <Link href={`/kien-thuc/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-slate-600 mb-6 line-clamp-2 text-sm flex-1">
                    {post.desc}
                  </p>
                  
                  <div className="mt-auto pt-5 border-t border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </div>
                    <Link href={`/kien-thuc/${post.slug}`} className="text-sm font-bold text-cyan-azure flex items-center hover:text-blaze-orange transition-colors">
                      Đọc thêm <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
