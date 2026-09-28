import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hoang Pham Thuy Anh Portfolio Online | PR & Event Organizing",
  description: "Official Portfolio of Hoang Pham Thuy Anh - Communication and Event Student at RMIT University Hanoi & VinUniversity. Founder of HoopTopia, Communication Executive at Hoang Mai Media.",
  keywords: ["Hoang Pham Thuy Anh", "Portfolio", "PR", "Event Organizing", "RMIT University Hanoi", "HoopTopia", "Starbucks", "Communication"],
  authors: [{ name: "Hoang Pham Thuy Anh" }],
  openGraph: {
    title: "Hoang Pham Thuy Anh Portfolio Online",
    description: "Welcome to my portfolio - Hoang Pham Thuy Anh, communication and event student.",
    url: "https://hoangphamthuyanh.com/",
    siteName: "Hoang Pham Thuy Anh Portfolio",
    images: [
      {
        url: "/_assets/media/b319905f4e4be192c35ff2f881694425.jpg",
        width: 1200,
        height: 630,
        alt: "Hoang Pham Thuy Anh Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/_assets/media/2d0b56e7e51cf11036ad8734bdb67e2d.png",
    shortcut: "/_assets/media/2d0b56e7e51cf11036ad8734bdb67e2d.png",
    apple: "/_assets/media/725b756a69a7d4c235070e51acd85560.png",
  }
};

const CANVA_CSS_FILES = [
  "/_assets/b944c5112e8b1828.ltr.css",
  "/_assets/static_font_4.ltr.css",
  "/_assets/06b1e480f5fc0960.ltr.css",
  "/_assets/28f64f5a77f6500c.ltr.css",
  "/_assets/4b869a0c4034a3e7.ltr.css",
  "/_assets/b32c1410d840135e.ltr.css",
  "/_assets/9880713039821adb.ltr.css",
  "/_assets/c627ef89c1764c44.ltr.css",
  "/_assets/3409e8e504c69dd2.ltr.css",
  "/_assets/6dcf592a099575f4.ltr.css",
  "/_assets/49165a5d963019da.ltr.css",
  "/_assets/8ef1614d513d9534.ltr.css",
  "/_assets/6ef534890ea95fd1.ltr.css",
  "/_assets/f006f4aff9718490.ltr.css",
  "/_assets/c33ae7848c78a6af.ltr.css"
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        {CANVA_CSS_FILES.map((cssHref, idx) => (
          <link key={idx} rel="stylesheet" href={cssHref} />
        ))}
      </head>
      <body className="antialiased text-gray-900 selection:bg-pink-200 selection:text-pink-900">
        {children}
      </body>
    </html>
  );
}
