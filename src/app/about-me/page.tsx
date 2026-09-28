import PageLayout from "@/components/layout/PageLayout";
import AboutMeSection from "@/components/about/AboutMeSection";

export const metadata = {
  title: "About Me - Hoang Pham Thuy Anh",
  description: "Learn more about Hoang Pham Thuy Anh - Education, Experience, Skills and Hobbies",
};

export default function AboutMePage() {
  return (
    <PageLayout>
      <AboutMeSection />
    </PageLayout>
  );
}
