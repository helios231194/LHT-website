'use client';
import { FadeIn, SlideIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import { ArrowRight, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function RepresentHero() {
  return (
    <section className="bg-oxford-blue text-white pt-24 pb-24 md:pt-32 md:pb-32 relative overflow-hidden">
      {/* Decorative gradient glowing orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-azure/20 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      <div className="absolute -bottom-32 left-0 w-[600px] h-[600px] bg-blaze-orange/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.15] mix-blend-overlay pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="w-full lg:w-3/5">
            <SlideIn direction="right">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blaze-orange/20 text-blaze-orange rounded-full text-xs font-bold tracking-[0.15em] uppercase mb-8 border border-blaze-orange/30 shadow-[0_0_20px_rgba(255,107,0,0.2)]">
                <span className="w-2 h-2 rounded-full bg-blaze-orange animate-pulse" />
                Mở rộng mạng lưới toàn quốc
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black mb-6 leading-[1.15] text-white">
                Trở thành Master <br/>Thuật Số Học Ứng Dụng.
                <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-azure to-white/90 leading-tight">
                  Xây sự nghiệp tại chính địa bàn của bạn.
                </span>
              </h1>
              
              <p className="text-white/80 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mb-12 border-l-4 border-blaze-orange pl-6">
                Đây là cơ hội sở hữu một sự nghiệp có vị thế, mang lại thu nhập thực và tạo giá trị lâu dài cho cộng đồng tại chính tỉnh/thành phố nơi bạn đang sống.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-5">
                <Link href="#dang-ky" className="w-full sm:w-auto block">
                  <Button variant="primary" size="lg" className="w-full h-16 px-8 text-lg font-bold rounded-xl shadow-[0_0_30px_rgba(255,107,0,0.3)] hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,107,0,0.5)] transition-all duration-300">
                    ĐĂNG KÝ TÌM HIỂU NGAY
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                
                <Link href="#danh-sach-tdd" className="w-full sm:w-auto block group">
                  <div className="h-16 px-8 rounded-xl border-2 border-cyan-azure/30 bg-cyan-azure/10 flex items-center justify-center gap-3 text-white font-bold hover:bg-cyan-azure/20 hover:border-cyan-azure transition-all duration-300">
                    <MapPin className="w-5 h-5 group-hover:-translate-y-1 transition-transform text-cyan-azure" />
                    Tìm Trưởng Đại Diện ở khu vực của tôi
                  </div>
                </Link>
              </div>
            </SlideIn>
          </div>

          <div className="w-full lg:w-2/5 relative">
            <FadeIn direction="left" delay={0.2}>
              {/* Concept Image / Franchise Map / Graphic */}
              <div className="relative aspect-square w-full max-w-[500px] mx-auto rounded-full border border-white/10 flex items-center justify-center p-8">
                {/* Simulated concentric rings */}
                <div className="absolute inset-0 rounded-full border border-white/5 animate-[spin_60s_linear_infinite]" />
                <div className="absolute inset-8 rounded-full border border-dashed border-white/10 animate-[spin_40s_linear_infinite_reverse]" />
                <div className="absolute inset-16 rounded-full border border-cyan-azure/20 shadow-[0_0_50px_rgba(21,155,202,0.2)]" />
                
                <div className="relative z-10 w-full h-full bg-gradient-to-tr from-cyan-azure/20 to-blaze-orange/20 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-white mb-4 mx-auto drop-shadow-lg" />
                    <div className="text-xl font-black tracking-widest text-white uppercase text-center">
                      Vietnam
                      <span className="block text-sm font-medium tracking-normal text-white/50 mt-1">Exclusive Network</span>
                    </div>
                  </div>
                </div>

                {/* Floating Map Pins simulating branches */}
                <div className="absolute top-[10%] left-[20%] w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce-slow">
                  <span className="w-3 h-3 bg-blaze-orange rounded-full" />
                </div>
                <div className="absolute bottom-[20%] right-[10%] w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce-slow" style={{ animationDelay: '1s' }}>
                  <span className="w-3 h-3 bg-cyan-azure rounded-full" />
                </div>
                <div className="absolute top-[40%] -right-4 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce-slow" style={{ animationDelay: '2s' }}>
                  <span className="w-4 h-4 bg-blaze-orange rounded-full" />
                </div>
              </div>
            </FadeIn>
          </div>
          
        </div>
      </div>
    </section>
  );
}
