import SinglePageRenderer from "@/components/SinglePageRenderer";
import routesPagesDataRaw from "@/data/routes_pages_data.json";

const routesPagesData = routesPagesDataRaw as any[];
const homePage = routesPagesData.find((p) => p.slug === "home") || routesPagesData[0];

export default function HomePage() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-start bg-transparent">
      <SinglePageRenderer page={homePage} />
    </main>
  );
}
