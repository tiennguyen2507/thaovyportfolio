import PageLayout from "@/components/layout/PageLayout";
import HomeHero from "@/components/home/HomeHero";

export const metadata = {
  title: "Hoang Pham Thuy Anh - Portfolio",
  description: "Communication and Event Student Portfolio of Hoang Pham Thuy Anh",
};

export default function HomePage() {
  return (
    <PageLayout>
      <HomeHero />
    </PageLayout>
  );
}
