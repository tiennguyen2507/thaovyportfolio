import React from "react";
import { notFound } from "next/navigation";
import SinglePageRenderer from "@/components/SinglePageRenderer";
import routesPagesDataRaw from "@/data/routes_pages_data.json";

const routesPagesData = routesPagesDataRaw as any[];

export async function generateStaticParams() {
  return routesPagesData
    .filter((p) => p.slug && p.slug !== "home")
    .map((p) => ({
      slug: p.slug,
    }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = routesPagesData.find((p) => p.slug === slug);
  if (!page) return { title: "Page Not Found" };

  return {
    title: `${page.title} | Hoang Pham Thuy Anh Portfolio`,
    description: `Details of ${page.title} - Hoang Pham Thuy Anh PR & Event Organizing Portfolio.`,
  };
}

export default async function DynamicSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = routesPagesData.find((p) => p.slug === slug);

  if (!page) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-transparent flex flex-col items-center justify-start w-full">
      <SinglePageRenderer page={page} />
    </main>
  );
}
