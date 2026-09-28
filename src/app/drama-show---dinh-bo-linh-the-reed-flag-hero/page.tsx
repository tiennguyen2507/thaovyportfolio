import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import ProjectDetailSection from "@/components/project/ProjectDetailSection";
import routesPagesDataRaw from "@/data/routes_pages_data.json";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const page = (routesPagesDataRaw as any[]).find((p) => p.slug === "drama-show---dinh-bo-linh-the-reed-flag-hero");

export const metadata: Metadata = {
  title: "Drama Show - Dinh Bo Linh, the Reed Flag Hero | Hoang Pham Thuy Anh",
  description: "Experience details for Drama Show - Dinh Bo Linh, the Reed Flag Hero",
};

export default function Page() {
  if (!page) return notFound();
  return (
    <PageLayout>
      <ProjectDetailSection page={page} />
    </PageLayout>
  );
}
