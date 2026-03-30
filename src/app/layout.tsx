import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const poppins = localFont({ 
  src: [
    { path: "../../public/fonts/FONT/FZ Poppins-Light.ttf", weight: '300', style: 'normal' },
    { path: "../../public/fonts/FONT/FZ Poppins-Regular.ttf", weight: '400', style: 'normal' },
    { path: "../../public/fonts/FONT/FZ Poppins-Medium.ttf", weight: '500', style: 'normal' },
    { path: "../../public/fonts/FONT/FZ Poppins-SemiBold.ttf", weight: '600', style: 'normal' },
    { path: "../../public/fonts/FONT/FZ Poppins-Bold.ttf", weight: '700', style: 'normal' },
  ],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Linh Hoa Tâm | Thuật Số Học",
  description: "Linh Hoa Tâm đồng hành cùng cá nhân và tổ chức trên hành trình trở thành phiên bản tốt nhất.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={poppins.variable}>
      <body className="font-poppins antialiased bg-ice-white text-dark-blue">
        {children}
      </body>
    </html>
  );
}
