import PageLayout from "@/components/layout/PageLayout";
import TestimoniesSection from "@/components/testimonies/TestimoniesSection";
import TypewriterText from "@/components/common/TypewriterText";

export const metadata = {
  title: "Testimonies | Hoang Pham Thuy Anh",
  description: "What professors, mentors and teammates say about Hoang Pham Thuy Anh",
};

export default function TestimoniesPage() {
  return (
    <PageLayout>
      <div className="w-full max-w-[1366px] mx-auto px-4 sm:px-10 py-4 sm:py-10 flex flex-col gap-5 sm:gap-8 select-none">
        {/* Page Title with Pink Heart */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <TypewriterText
            as="h1"
            text="testimonies"
            speed={80}
            className="font-['Intro_Rust'] text-4xl sm:text-6xl lg:text-[66px] text-[#f783b7] tracking-wider capitalize leading-none"
          />
          <svg
            className="w-8 h-8 sm:w-12 sm:h-12 transform rotate-[41deg] animate-pulse"
            viewBox="0 0 24 24"
            fill="#ffc7e0"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>

        {/* 21 Testimonies Card Grid */}
        <TestimoniesSection />
      </div>
    </PageLayout>
  );
}
