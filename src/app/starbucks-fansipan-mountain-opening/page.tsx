import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import ProjectDetailSection from "@/components/project/ProjectDetailSection";
import routesPagesDataRaw from "@/data/routes_pages_data.json";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const page = (routesPagesDataRaw as any[]).find((p) => p.slug === "starbucks-fansipan-mountain-opening");

export const metadata: Metadata = {
  title: "Starbucks Fansipan Mountain Opening | Hoang Pham Thuy Anh",
  description: "Experience details for Starbucks Fansipan Mountain Opening",
};

export default function Page() {
  if (!page) return notFound();
  return (
    <PageLayout>
      <ProjectDetailSection page={page} />
    </PageLayout>
  );
}
