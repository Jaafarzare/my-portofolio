import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "درباره من | وب‌سایت شخصی من",
  description: "اطلاعات بیشتر درباره من و تجربیات من در توسعه وب.",
  keywords: ["درباره من", "توسعه‌دهنده وب", "تجربیات"],
  openGraph: {
    title: "درباره من | وب‌سایت شخصی من",
    description: "اطلاعات بیشتر درباره من و تجربیات من در توسعه وب.",
    images: [
      {
        url: "https://example.com/og-about.jpg",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function AboutPage() {
  return <div>Aboute Page</div>;
}
