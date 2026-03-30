'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { name: 'Trang chủ', href: '/' },
  {
    name: 'Về chúng tôi',
    href: '#',
    dropdown: [
      { name: 'Master Hoàng Mai Linh', href: '/master-hoang-mai-linh', desc: 'Nhà sáng lập & Master Coach' },
      { name: 'Linh Hoa Tâm', href: '/linh-hoa-tam', desc: 'Hệ sinh thái & Thương hiệu' },
      { name: 'Phương pháp Thuật Số Học', href: '/phuong-phap', desc: 'Công cụ phân tích con người' },
      { name: 'Sách "Sức Mạnh Ẩn Sau Con Số"', href: '/sach', desc: 'Trực giác có hệ quy chiếu' },
    ],
  },
  {
    name: 'Giải pháp',
    href: '#',
    dropdown: [
      { name: 'Giải pháp Lãnh đạo', href: '/giai-phap-lanh-dao', desc: 'CEO, Founder, Lãnh đạo cấp cao' },
      { name: 'Giải pháp Cá nhân', href: '/phat-trien-ban-than', desc: 'Phát triển bản thân & sự nghiệp' },
    ],
  },
  {
    name: 'Workshop',
    href: '#',
    dropdown: [
      { name: 'Workshop Chiến lược', href: '/workshop-chien-luoc', desc: 'Dành cho CEO & Lãnh đạo' },
      { name: 'Workshop Cá nhân', href: '/workshop-ca-nhan', desc: 'Dành cho cá nhân phát triển' },
    ],
  },
  { name: 'Kiến thức', href: '/kien-thuc' },
  { name: 'Cộng đồng', href: '/cong-dong' },
  { name: 'Liên hệ', href: '/lien-he' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const handleDropdownEnter = (name: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(name);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <>
    <header className={cn(
      "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b border-transparent",
      isScrolled ? "bg-ice-white/95 backdrop-blur-md shadow-sm border-cyan-azure/20 py-2" : "bg-ice-white/80 backdrop-blur-sm py-4"
    )}>
      <div className="container mx-auto px-4 md:px-6 relative z-[100]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center z-50 shrink-0">
            <div className="relative h-10 w-40 md:h-12 md:w-48 flex items-center">
              <Image
                src="/LOGO-07.png"
                alt="Linh Hoa Tâm Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && handleDropdownEnter(link.name)}
                onMouseLeave={() => link.dropdown && handleDropdownLeave()}
              >
                {link.dropdown ? (
                  <button
                    className={cn(
                      "flex items-center gap-1 text-sm font-medium px-2 xl:px-3 py-2 rounded-lg transition-colors whitespace-nowrap",
                      activeDropdown === link.name
                        ? "text-blaze-orange bg-blaze-orange/5"
                        : "text-dark-blue hover:text-blaze-orange"
                    )}
                    onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                  >
                    {link.name}
                    <ChevronDown className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      activeDropdown === link.name && "rotate-180"
                    )} />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="text-sm font-medium px-2 xl:px-3 py-2 rounded-lg text-dark-blue hover:text-blaze-orange transition-colors block whitespace-nowrap"
                  >
                    {link.name}
                  </Link>
                )}

                {/* Desktop Dropdown */}
                {link.dropdown && (
                  <div className={cn(
                    "absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200",
                    activeDropdown === link.name
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  )}>
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2 min-w-[280px]">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex flex-col gap-0.5 px-4 py-3 rounded-lg hover:bg-blaze-orange/5 transition-colors group"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <span className="text-sm font-semibold text-dark-blue group-hover:text-blaze-orange transition-colors">
                            {item.name}
                          </span>
                          <span className="text-xs text-cyan-azure">{item.desc}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Sticky CTA Desktop */}
          <div className="hidden xl:block shrink-0">
            <Link href="/giai-phap-lanh-dao">
              <Button variant="primary" size="sm" className="text-sm font-bold whitespace-nowrap">
                Tham vấn chiến lược 1:1
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="xl:hidden z-50 text-oxford-blue p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Đóng menu' : 'Mở menu'}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </header>

      {/* Mobile Nav Overlay – outside <header> to avoid backdrop-filter containment bug */}
      <div className={cn(
        "fixed inset-0 bg-ice-white z-[90] xl:hidden flex flex-col transition-all duration-300 ease-in-out overflow-y-auto",
        mobileMenuOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
      )}>
        <div className="pt-20 pb-8 px-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.dropdown ? (
                <>
                  <button
                    className="flex items-center justify-between w-full py-3 px-4 text-lg font-medium text-oxford-blue hover:text-blaze-orange transition-colors rounded-lg"
                    onClick={() => setMobileDropdown(mobileDropdown === link.name ? null : link.name)}
                  >
                    {link.name}
                    <ChevronDown className={cn(
                      "w-5 h-5 transition-transform duration-200",
                      mobileDropdown === link.name && "rotate-180"
                    )} />
                  </button>
                  <div className={cn(
                    "overflow-hidden transition-all duration-300",
                    mobileDropdown === link.name ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  )}>
                    <div className="pl-4 pb-2 space-y-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block py-2.5 px-4 text-base text-cyan-azure hover:text-blaze-orange transition-colors rounded-lg hover:bg-blaze-orange/5"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span className="font-medium text-dark-blue">{item.name}</span>
                          <span className="block text-sm text-cyan-azure mt-0.5">{item.desc}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  className="block py-3 px-4 text-lg font-medium text-oxford-blue hover:text-blaze-orange transition-colors rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}

          {/* Mobile Sticky CTA */}
          <div className="mt-6 px-4">
            <Link href="/giai-phap-lanh-dao" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="primary" size="lg" className="w-full h-14 text-lg font-bold">
                Tham vấn chiến lược 1:1
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
