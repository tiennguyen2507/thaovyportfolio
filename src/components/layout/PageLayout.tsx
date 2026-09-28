"use client";

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface PageLayoutProps {
  children: React.ReactNode;
  showFooter?: boolean;
}

export default function PageLayout({ children, showFooter = true }: PageLayoutProps) {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-between relative overflow-x-hidden selection:bg-pink-200 selection:text-pink-900">
      {/* Universal Top Header/Navigation */}
      <Navbar />

      {/* Main Semantic Page Content */}
      <main className="w-full flex-1 flex flex-col items-center justify-start z-10">
        {children}
      </main>

      {/* Universal Footer */}
      {showFooter && <Footer />}
    </div>
  );
}
