'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  { id: 1, src: '/herobanner/hero01.png', alt: 'Linh Hoa Tâm – Tham vấn chiến lược 1:1' },
  { id: 2, src: '/herobanner/hero02.png', alt: 'Linh Hoa Tâm – Workshop Chiến lược' },
  { id: 3, src: '/herobanner/hero03.png', alt: 'Linh Hoa Tâm – Thuật Số Học Ứng Dụng' },
  { id: 4, src: '/herobanner/hero04.png', alt: 'Linh Hoa Tâm – Master Hoàng Mai Linh' },
];

export function HomeHero() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback((idx: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(idx);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating]);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-oxford-blue text-white group flex items-center">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-oxford-blue" />
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-blaze-orange/10 to-transparent opacity-50 pointer-events-none" />

      {/* Image Slider - Right Section */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 flex justify-end">
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out',
              idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            )}
          >
            {/* Using object-contain ensures NO ZOOMING and NO CROPPING. 
                The image fits inside this half of the screen perfectly. */}
            <div className="relative w-full h-full lg:max-w-[90%] ml-auto">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={idx === 0}
                className="object-contain object-bottom md:object-center lg:object-right-bottom drop-shadow-2xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        ))}
        {/* Soft elegant gradient from left to blend image with text */}
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-oxford-blue to-transparent z-10" />
        {/* Soft bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-oxford-blue to-transparent z-10" />
      </div>

      {/* Content Section - Left */}
      <div className="relative z-20 container mx-auto px-4 md:px-6 pt-32 pb-24 md:py-0">
        <div className="max-w-2xl lg:max-w-[45%]">
          {/* Tagline badge */}
          <div
            key={`badge-${current}`}
            className="inline-flex items-center gap-2 py-1.5 px-4 mb-6 md:mb-8 bg-blaze-orange/10 border border-blaze-orange/20 backdrop-blur-md rounded-full animate-fadeSlideUp"
            style={{ animationDelay: '100ms', animationFillMode: 'both' }}
          >
            <span className="w-2 h-2 rounded-full bg-blaze-orange animate-pulse" />
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-blaze-orange uppercase">
              Numerology for Leaders
            </span>
          </div>

          <h1
            key={`h1-${current}`}
            className="text-4xl md:text-5xl lg:text-[4rem] font-black leading-[1.35] text-white mb-6 animate-fadeSlideUp"
            style={{ animationDelay: '300ms', animationFillMode: 'both' }}
          >
            Một quyết định
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blaze-orange to-[#ff9b50] my-2 pb-2">
              đúng thời điểm
            </span>
            thay đổi cả năm vận hành.
          </h1>

          <p
            key={`p-${current}`}
            className="text-base md:text-lg text-white/80 mb-10 leading-relaxed max-w-lg animate-fadeSlideUp font-medium"
            style={{ animationDelay: '500ms', animationFillMode: 'both' }}
          >
            <span className="whitespace-nowrap">Linh Hoa Tâm</span> đồng hành cùng CEO, Founder, Lãnh đạo cấp cao và cá nhân muốn hiểu rõ bản thân thông qua Thuật Số Học Ứng Dụng – công cụ giúp đặt đúng người và rẽ đúng hướng.
          </p>

          <div
            key={`cta-${current}`}
            className="flex flex-col sm:flex-row gap-4 animate-fadeSlideUp"
            style={{ animationDelay: '700ms', animationFillMode: 'both' }}
          >
            <Link href="/giai-phap-lanh-dao">
              <Button variant="primary" size="lg" className="h-14 px-8 text-base font-bold shadow-xl shadow-blaze-orange/20 w-full sm:w-auto hover:scale-105 transition-transform">
                THAM VẤN CHIẾN LƯỢC 1:1
              </Button>
            </Link>
            <Link href="/linh-hoa-tam">
              <Button
                variant="outline"
                size="lg"
                className="h-14 px-8 text-base border-2 border-white/40 text-white hover:bg-white hover:text-oxford-blue w-full sm:w-auto backdrop-blur-sm transition-all"
              >
                KHÁM PHÁ THUẬT SỐ HỌC
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md rounded-full text-white transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:flex hover:scale-110"
        aria-label="Ảnh trước"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md rounded-full text-white transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:flex hover:scale-110"
        aria-label="Ảnh tiếp"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Bottom Controls: Slide Counter & Dots */}
      <div className="absolute bottom-6 md:bottom-10 left-0 right-0 z-30 container mx-auto px-4 md:px-6 flex items-end justify-between">
        
        {/* Counter */}
        <div className="text-white/60 text-sm font-mono flex flex-col gap-1 w-24">
          <span className="text-white font-black text-xl leading-none">{String(current + 1).padStart(2, '0')}</span>
          <span className="w-6 h-px bg-white/30" />
          <span className="text-xs">{String(slides.length).padStart(2, '0')}</span>
        </div>

        {/* Scroll down indicator */}
        <div className="hidden md:flex flex-col items-center gap-2 animate-bounce opacity-50 flex-1">
          <span className="text-[10px] tracking-widest uppercase font-bold text-white [writing-mode:vertical-lr] mb-2">Cuộn xuống</span>
          <div className="w-px h-8 bg-gradient-to-b from-white to-transparent" />
        </div>

        {/* Dots */}
        <div className="flex items-center gap-3 w-24 justify-end">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={cn(
                'transition-all duration-500 rounded-full',
                idx === current
                  ? 'w-10 h-1.5 bg-blaze-orange'
                  : 'w-2 h-2 bg-white/20 hover:bg-white/50'
              )}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
