import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import SpeakingAndSingingSection from "@/components/hobbies/SpeakingAndSingingSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speaking and Singing | Hoang Pham Thuy Anh",
  description: "Speaking and singing performances and events by Hoang Pham Thuy Anh",
};

export default function SpeakingAndSingingPage() {
  return (
    <PageLayout>
      <SpeakingAndSingingSection />
    </PageLayout>
  );
}
