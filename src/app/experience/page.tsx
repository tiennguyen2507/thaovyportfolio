import PageLayout from "@/components/layout/PageLayout";
import ExperienceSection from "@/components/experience/ExperienceSection";

export const metadata = {
  title: "Experience & Events | Hoang Pham Thuy Anh",
  description: "Explore events and projects organized by Hoang Pham Thuy Anh",
};

export default function ExperiencePage() {
  return (
    <PageLayout>
      <ExperienceSection />
    </PageLayout>
  );
}
