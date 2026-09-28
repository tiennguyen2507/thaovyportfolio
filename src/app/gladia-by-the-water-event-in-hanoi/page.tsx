import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import ProjectDetailSection from "@/components/project/ProjectDetailSection";
import routesPagesDataRaw from "@/data/routes_pages_data.json";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const page = (routesPagesDataRaw as any[]).find((p) => p.slug === "gladia-by-the-water-event-in-hanoi");

export const metadata: Metadata = {
  title: "Gladia By The Water Event in Hanoi | Hoang Pham Thuy Anh",
  description: "Experience details for Gladia By The Water Event in Hanoi",
};

export default function Page() {
  if (!page) return notFound();
  return (
    <PageLayout>
      <ProjectDetailSection page={page} />
    </PageLayout>
  );
}
