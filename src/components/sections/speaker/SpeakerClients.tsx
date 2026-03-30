'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import Image from 'next/image';

const clientLogos = [
  'Prudential Vietnam',
  'Shinhan Life',
  'SIA Media',
  'Forbes Women 2023-2024',
  'NEU TP.HCM',
  'BUH TP.HCM'
];

export function SpeakerClients() {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-sm font-bold tracking-[0.25em] text-slate-400 uppercase mb-4">
            Đã diễn giả và tham vấn tại
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
            {/* Logo placeholders - in reality these would be Image components */}
            {clientLogos.map((logo, idx) => (
              <FadeIn key={idx} direction="up" delay={idx * 0.1}>
                <div className="h-12 flex items-center justify-center font-bold text-xl text-slate-800">
                  {logo}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Real life speaking photos gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <FadeIn key={item} direction="up" delay={item * 0.15}>
              <div className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-slate-100 border border-slate-200">
                {/* Simulated Image */}
                <div className="absolute inset-0 flex items-center justify-center bg-oxford-blue text-white/30 font-bold group-hover:scale-105 transition-transform duration-700">
                  <span>Ảnh sự kiện thực tế 0{item}</span>
                </div>
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-oxford-blue/90 via-oxford-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white font-bold leading-snug">
                    Sự kiện Forbes Women Summit
                  </p>
                  <p className="text-cyan-azure text-sm font-medium mt-1">
                    TP.HCM, 2024
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        

      </div>
    </section>
  );
}
