import { Geist_Mono, Quattrocento_Sans } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiUser, FiShoppingBag } from "react-icons/fi";
import Messagebar from "@/components/Messagebar";


const quattro = Quattrocento_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-quattro",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${quattro.variable} ${geistMono.variable} antialiased`}>
        <Messagebar />
        <div className="flex items-center justify-center text-anmasa-accent h-15 ">
          <Image
            src="/LOGO.avif"
            alt="Logo"
            width={160}
            height={160}
            className="object-contain"
          />
          <div className="flex gap-10 ml-10">
            <Link href="/">Flour</Link>
            <Link href="/">Wood Pressed Oil</Link>
            <Link href="/">Spices</Link>
            <Link href="/">Pulses</Link>
            <Link href="/">Dry Fruits</Link>
            <Link href="/">About Us</Link>
            <Link href="/">Shop All</Link>
          </div>
          <button><FiSearch className="ml-5 text-lg" /></button>
          <button><FiUser className="ml-3 text-lg" /></button>
          <button><FiShoppingBag className="ml-3 text-lg" /></button>
        </div>
        <div className="flex items-center justify-center h-10 bg-anmasa-yellow">
          <p className="m-0">FLAT 20% OFF sitewide on every order</p>
        </div>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
