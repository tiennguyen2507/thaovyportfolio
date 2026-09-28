import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import ProjectDetailSection from "@/components/project/ProjectDetailSection";
import routesPagesDataRaw from "@/data/routes_pages_data.json";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const page = (routesPagesDataRaw as any[]).find((p) => p.slug === "5x5-hooptopia-season-i-2026");

export const metadata: Metadata = {
  title: "5x5 hoopTopia season I 2026 | Hoang Pham Thuy Anh",
  description: "Experience details for 5x5 hoopTopia season I 2026",
};

export default function Page() {
  if (!page) return notFound();
  return (
    <PageLayout>
      <ProjectDetailSection page={page} />
    </PageLayout>
  );
}
