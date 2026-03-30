import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { MasterHero } from '@/components/sections/master/MasterHero';
import { MasterPhilosophy } from '@/components/sections/master/MasterPhilosophy';
import { MasterStats } from '@/components/sections/master/MasterStats';
import { MasterRoles } from '@/components/sections/master/MasterRoles';
import { MasterCredential } from '@/components/sections/master/MasterCredential';
import { MasterCTA } from '@/components/sections/master/MasterCTA';

export const metadata: Metadata = {
  title: 'Master Hoàng Mai Linh – Nhà tham vấn chiến lược | Linh Hoa Tâm',
  description: 'Hơn 3.500 giờ tham vấn CEO, Founder và lãnh đạo cấp cao. Chuyên gia Thuật Số Học Ứng Dụng, diễn giả và tác giả sách Sức Mạnh Ẩn Sau Con Số.',
};

export default function MasterPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <MasterHero />
        <MasterPhilosophy />
        <MasterStats />
        <MasterRoles />
        <MasterCredential />
        <MasterCTA />
      </main>
    </>
  );
}
