import DesignTogether from "@/components/ui/DesignTogether";
import Introduction from "@/components/ui/Introduction";
import MyProjects from "@/components/ui/MyProjects";
import Services from "@/components/ui/Services";
import SkillsSection from "@/components/ui/SkillsSection";
import Testimonials from "@/components/ui/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "صفحه اصلی | وب‌سایت شخصی من",
  description:
    "به صفحه اصلی وب‌سایت شخصی من خوش آمدید. اینجا می‌توانید نمونه کارها و اطلاعات من را ببینید.",
  keywords: ["صفحه اصلی", "نمونه کار", "توسعه‌دهنده وب"],
  openGraph: {
    title: "صفحه اصلی | وب‌سایت شخصی من",
    description: "به صفحه اصلی وب‌سایت شخصی من خوش آمدید.",
    images: [
      {
        url: "https://example.com/og-home.jpg",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <Introduction />
      <SkillsSection />
      <Services />
      <MyProjects />
      <Testimonials />
      <DesignTogether />
    </main>
  );
}
