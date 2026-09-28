import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import PhotographySection from "@/components/hobbies/PhotographySection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photography | Hoang Pham Thuy Anh",
  description: "Photography collection and camera gear by Hoang Pham Thuy Anh",
};

export default function PhotographyPage() {
  return (
    <PageLayout>
      <PhotographySection />
    </PageLayout>
  );
}
