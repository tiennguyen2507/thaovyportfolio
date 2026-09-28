import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import ProjectDetailSection from "@/components/project/ProjectDetailSection";
import routesPagesDataRaw from "@/data/routes_pages_data.json";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const page = (routesPagesDataRaw as any[]).find((p) => p.slug === "dewey-university-fair-2023");

export const metadata: Metadata = {
  title: "Dewey University Fair 2023 | Hoang Pham Thuy Anh",
  description: "Experience details for Dewey University Fair 2023",
};

export default function Page() {
  if (!page) return notFound();
  return (
    <PageLayout>
      <ProjectDetailSection page={page} />
    </PageLayout>
  );
}
