import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import ProjectDetailSection from "@/components/project/ProjectDetailSection";
import routesPagesDataRaw from "@/data/routes_pages_data.json";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const page = (routesPagesDataRaw as any[]).find((p) => p.slug === "grand-opening-starbucks-quang-trung");

export const metadata: Metadata = {
  title: "Grand Opening Starbucks Quang Trung | Hoang Pham Thuy Anh",
  description: "Experience details for Grand Opening Starbucks Quang Trung",
};

export default function Page() {
  if (!page) return notFound();
  return (
    <PageLayout>
      <ProjectDetailSection page={page} />
    </PageLayout>
  );
}
