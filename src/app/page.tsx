import PageLayout from "@/components/layout/PageLayout";
import HomeHero from "@/components/home/HomeHero";

export const metadata = {
  title: "Home | Hoang Pham Thuy Anh - Portfolio",
  description:
    "Official Portfolio of Hoang Pham Thuy Anh (Vy / Blaze) - Communication & Event Management Student at RMIT University Hanoi & VinUniversity.",
};

export default function HomePage() {
  return (
    <PageLayout>
      <HomeHero />
    </PageLayout>
  );
}
