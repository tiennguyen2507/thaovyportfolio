import SinglePageRenderer from "@/components/SinglePageRenderer";
import routesPagesDataRaw from "@/data/routes_pages_data.json";
import { notFound } from "next/navigation";

const routesPagesData = routesPagesDataRaw as any[];

export function generateStaticParams() {
  return routesPagesData
    .filter((p) => p.slug && p.slug !== "home")
    .map((p) => ({ slug: p.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function DynamicPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const page = routesPagesData.find((p) => p.slug === slug);

  if (!page) {
    return notFound();
  }

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-start bg-transparent">
      <SinglePageRenderer page={page} />
    </main>
  );
}
