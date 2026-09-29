import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://hoangphamthuyanh.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Hoang Pham Thuy Anh - Communication & Event Portfolio",
    template: "%s | Hoang Pham Thuy Anh Portfolio",
  },
  description:
    "Official Portfolio of Hoang Pham Thuy Anh (Vy / Blaze) - Communication and Event Management Student at RMIT University Hanoi & VinUniversity. Founder of HoopTopia, Communication Executive at Hoang Mai Media.",
  keywords: [
    "Hoang Pham Thuy Anh",
    "Hoàng Phạm Thùy Anh",
    "Thuy Anh",
    "Vy",
    "Blaze",
    "Portfolio",
    "PR and Event Organizing",
    "Communication and Event Student",
    "RMIT University Hanoi",
    "VinUniversity",
    "HoopTopia",
    "Starbucks Vietnam Event",
    "Event Management Vietnam",
    "Media Relations",
  ],
  authors: [{ name: "Hoang Pham Thuy Anh", url: SITE_URL }],
  creator: "Hoang Pham Thuy Anh",
  publisher: "Hoang Pham Thuy Anh",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hoang Pham Thuy Anh - Communication & Event Portfolio",
    description:
      "Explore the official portfolio of Hoang Pham Thuy Anh - Event organizer, PR & media strategist, and founder of HoopTopia.",
    url: SITE_URL,
    siteName: "Hoang Pham Thuy Anh Portfolio",
    images: [
      {
        url: "/_assets/media/b319905f4e4be192c35ff2f881694425.jpg",
        width: 1200,
        height: 630,
        alt: "Hoang Pham Thuy Anh Portfolio",
      },
    ],
    locale: "vi_VN",
    alternateLocale: ["en_US"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hoang Pham Thuy Anh - Communication & Event Portfolio",
    description:
      "Explore the official portfolio of Hoang Pham Thuy Anh - Event organizer, PR & media strategist, and founder of HoopTopia.",
    images: ["/_assets/media/b319905f4e4be192c35ff2f881694425.jpg"],
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.ico", sizes: "48x48" },
    ],
    shortcut: "/icon.png",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Hoang Pham Thuy Anh",
      alternateName: ["Hoàng Phạm Thùy Anh", "Thuy Anh", "Vy", "Blaze"],
      jobTitle: "Event Organizer & Communication Executive",
      description:
        "Communication and Event Student at RMIT University Hanoi & VinUniversity. Founder of HoopTopia.",
      url: SITE_URL,
      image: `${SITE_URL}/_assets/media/813d1384daf8a7d3a253ceb1888613a0.png`,
      sameAs: [
        "https://www.facebook.com/anh.hoangphamthuy.3/",
        "https://www.instagram.com/hpt.anhhh/",
        "https://www.linkedin.com/in/hptanhhh/",
        "https://www.youtube.com/@hptanhhh",
        "https://www.tiktok.com/@hptanhhh",
      ],
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "RMIT University Vietnam",
        },
        {
          "@type": "CollegeOrUniversity",
          name: "VinUniversity",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Hoang Pham Thuy Anh Portfolio",
      description:
        "Portfolio of Hoang Pham Thuy Anh showcasing PR and Event Management projects.",
      publisher: {
        "@id": `${SITE_URL}/#person`,
      },
      inLanguage: ["vi", "en"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased text-gray-900 selection:bg-pink-200 selection:text-pink-900 min-h-screen">
        {children}
      </body>
    </html>
  );
}
