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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className="antialiased text-gray-900 selection:bg-pink-200 selection:text-pink-900">
        {children}
      </body>
    </html>
  );
}
