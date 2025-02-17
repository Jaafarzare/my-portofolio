import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تماس با من | وب‌سایت شخصی من",
  description: "راه‌های ارتباطی با من برای همکاری یا سوالات.",
  keywords: ["تماس", "راه‌های ارتباطی", "همکاری"],
  openGraph: {
    title: "تماس با من | وب‌سایت شخصی من",
    description: "راه‌های ارتباطی با من برای همکاری یا سوالات.",
    images: [
      {
        url: "https://example.com/og-contact.jpg",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function ContactPgae() {
  return <div>Contact Pgae</div>;
}
