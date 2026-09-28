import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import WritingSection from "@/components/hobbies/WritingSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing | Hoang Pham Thuy Anh",
  description: "Articles and written publications by Hoang Pham Thuy Anh",
};

export default function WritingPage() {
  return (
    <PageLayout>
      <WritingSection />
    </PageLayout>
  );
}
