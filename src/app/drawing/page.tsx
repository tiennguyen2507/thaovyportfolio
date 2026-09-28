import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import DrawingSection from "@/components/hobbies/DrawingSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drawing | Hoang Pham Thuy Anh",
  description: "Artworks and illustrations by Hoang Pham Thuy Anh",
};

export default function DrawingPage() {
  return (
    <PageLayout>
      <DrawingSection />
    </PageLayout>
  );
}
