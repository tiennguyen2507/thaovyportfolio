import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import ProjectDetailSection from "@/components/project/ProjectDetailSection";
import routesPagesDataRaw from "@/data/routes_pages_data.json";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const page = (routesPagesDataRaw as any[]).find((p) => p.slug === "3x3-hooptopia-uprising-2025");

export const metadata: Metadata = {
  title: "3x3 HoopTopia Uprising 2025 | Hoang Pham Thuy Anh",
  description: "Experience details for 3x3 HoopTopia Uprising 2025",
};

export default function Page() {
  if (!page) return notFound();
  return (
    <PageLayout>
      <ProjectDetailSection page={page} />
    </PageLayout>
  );
}
