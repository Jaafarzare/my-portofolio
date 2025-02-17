import { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "وب‌سایت شخصی من",
  description:
    "این وب‌سایت شخصی من است که نمونه کارها و اطلاعات من را نمایش می‌دهد.",
  keywords: ["وب‌سایت شخصی", "نمونه کار", "توسعه‌دهنده وب", "Next.js"],
  authors: [{ name: "نام شما", url: "https://example.com" }],
  openGraph: {
    title: "وب‌سایت شخصی من",
    description:
      "این وب‌سایت شخصی من است که نمونه کارها و اطلاعات من را نمایش می‌دهد.",
    url: "https://example.com",
    siteName: "وب‌سایت شخصی من",
    images: [
      {
        url: "https://example.com/og-image.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "وب‌سایت شخصی من",
    description:
      "این وب‌سایت شخصی من است که نمونه کارها و اطلاعات من را نمایش می‌دهد.",
    images: ["https://example.com/og-image.jpg"],
  },
};

const Far_Yekan = localFont({
  src: "../../public/fonts/Far_Yekan.ttf",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={`${Far_Yekan.className}`}>
      <body className="flex flex-col gap-5 min-h-screen bg-gray-100">
        <Header />
        <div className="flex-grow container mx-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
