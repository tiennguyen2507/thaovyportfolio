"use client";

import React from "react";
import { Newspaper, ExternalLink, Award, Sparkles } from "lucide-react";
import embedsData from "@/data/embeds_data.json";

export default function PressSection() {
  if (!embedsData || embedsData.length === 0) return null;

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-pink-50/50 to-white">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Press & Media Coverage</span>
        </div>
        <h2 className="font-intro-rust text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
          Báo Chí & Truyền Thông Đưa Tin
        </h2>
        <p className="text-sm text-gray-600 mt-2 font-intro-pro">
          Các dự án sự kiện, thể thao học đường và hoạt động văn hoá nghệ thuật được ghi nhận trên các trang báo uy tín.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {embedsData.map((item, idx) => (
          <a
            key={idx}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white border border-pink-100 shadow-sm hover:shadow-xl hover:border-pink-300 hover:-translate-y-1 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-pink-50 text-pink-600 font-bold text-xs">
                  <Newspaper className="w-3.5 h-3.5" />
                  {item.name}
                </span>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-pink-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <p className="text-sm font-semibold text-gray-800 line-clamp-3 group-hover:text-pink-600 transition-colors">
                {item.url}
              </p>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
              <span className="font-medium text-pink-500">Xem bài viết gốc</span>
              <span className="text-[10px] text-gray-400">Tin chính thức</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
