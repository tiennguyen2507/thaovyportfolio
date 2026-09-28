"use client";

import React from "react";

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar?: string;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "1",
    name: "Jang Woojung",
    role: "vice president of Dewey Student Council 2023-2024",
    quote: "From what i see you work very diligently on every task and take it meticulously. You provide very great alternative solution when you handle difficulties.",
    avatar: "/_assets/avatars/jang_woojung.png",
  },
  {
    id: "2",
    name: "Thach Do Hoang Anh",
    role: "captain of The Dewey School Basketball Team",
    quote: "She is a decisive problem-solver with strong leadership skills, the ability to establish influence within communities, and exceptional writing expertise.",
    avatar: "/_assets/avatars/thach_do_hoang_anh.png",
  },
  {
    id: "3",
    name: "Bui Ngoc Phuong Thy",
    role: "secretary of Dewey Student Council 2023-2024",
    quote: "Thuy Anh is straightforward leader, who prioritize time-efficient, professional, and skilled at optimizing human resources.",
    avatar: "/_assets/avatars/bui_ngoc_phuong_thy.png",
  },
  {
    id: "4",
    name: "Khuat Hoang Thai Long",
    role: "member of finance committee of Dewey Student Council",
    quote: "A strong leader, skillful at handling unexpected situations, with an impressive ability to break down problems and solve them efficiently. She maintains professionalism.",
    avatar: "/_assets/avatars/khuat_hoang_thai_long.png",
  },
  {
    id: "5",
    name: "Vu Thi Kim Anh",
    role: "member of finance committee of Dewey Student Council",
    quote: "Thùy Anh exudes an aura of confidence, with a strong presence that says, \"Thùy Anh can handle it\". She is doing an excellent job of radiating this powerful aura.",
    avatar: "/_assets/avatars/vu_thi_kim_anh.png",
  },
  {
    id: "6",
    name: "To Nhu Y",
    role: "member of media committee of Dewey Student Council",
    quote: "Thùy Anh is often the person who helps others regain their spirit when challenges arise. She remains calm and considers different perspectives.",
    avatar: "/_assets/avatars/to_nhu_y.png",
  },
  {
    id: "7",
    name: "Nguyen Ha Phuong",
    role: "member of media committee of Dewey Student Council",
    quote: "She is incredibly responsible, enthusiastic, and energetic. With a broad knowledge of social issues, she is well-informed, speaks eloquently, and is well-suited for leadership roles.",
    avatar: "/_assets/avatars/nguyen_ha_phuong.png",
  },
  {
    id: "8",
    name: "Pham Quang Minh",
    role: "classmate, The Dewey Schools",
    quote: "She has exceptional leadership skills and time management, always full of responsibility. Her ability to organize tasks efficiently with time and her diligence are key strengths.",
    avatar: "/_assets/avatars/pham_quang_minh.png",
  },
  {
    id: "9",
    name: "Duong Khanh Uyen",
    role: "member of media committee of Dewey Student Council",
    quote: "Thùy Anh always inspires trust and leaves a strong impression while working. She is also quick-witted and has fast thinking, allowing her to respond appropriately to situations.",
    avatar: "/_assets/avatars/duong_khanh_uyen.png",
  },
  {
    id: "10",
    name: "Mrs. Dinh Thi Ngoc Anh",
    role: "Executive Assistant Vietnamese Program, The Dewey Schools",
    quote: "She is always creative, constantly experimenting with new ideas and activities, and is always willing to challenge herself and make changes to improve.",
  },
  {
    id: "11",
    name: "Mrs. Vu Cam Van",
    role: "Homeroom and Math Teacher, The Dewey Schools",
    quote: "A goal-oriented person, you face challenges head-on rather than avoiding them, and the way you handle and overcome difficulties is always graceful and respectful.",
    avatar: "/_assets/avatars/vu_cam_van.png",
  },
  {
    id: "12",
    name: "Mrs. Be Thi Thanh Thanh",
    role: "Vietnamese Literature Teacher, The Dewey Schools",
    quote: "She is decisive and confident in the issues she presents. She values keeping promises, respects herself and others, and emphasizes integrity, with a distinct personality.",
  },
  {
    id: "13",
    name: "Mr. Kelly Patricia Diamund",
    role: "Humanities Teacher, The Dewey Schools",
    quote: "She could show flexibility in understanding the limits of others and to adjust her expectations in order to everyone to be part of her success.",
  },
  {
    id: "14",
    name: "Nguyen Minh Nha",
    role: "IELTS Teacher, The Dewey Schools Tay Ho Tay",
    quote: "My biggest impression of you is your perseverance in solving problems, your fearlessness in facing challenges, and even your love for them.",
  },
  {
    id: "15",
    name: "Mr. Vu Kieu Minh",
    role: "students' parent, The Dewey Schools",
    quote: "She has the ability to connect with others, inspiring those around her to follow. She is also someone who sits down with the team to discuss, and find solutions to problems.",
  },
  {
    id: "16",
    name: "Ms. Chara Banos",
    role: "Science Teacher, The Dewey Schools Tay Ho Tay",
    quote: "Thùy Anh is an exemplary figure in the classroom, consistently displaying leadership qualities. Her active participation in class discussions, independence in individual tasks.",
  },
  {
    id: "17",
    name: "Ms. Tran Khanh Huyen",
    role: "Intern Teacher, The Dewey Schools",
    quote: "The first impression of Thùy Anh is her great respect for others. She actively listens to the information shared by others, responds thoughtfully.",
  },
  {
    id: "18",
    name: "Chu Phuong Linh",
    role: "President of Dewey Science Club",
    quote: "My first impression of Thùy Anh is that she's cool and confident. She truly cares about others, and her positive energy and unique personality make her stand out.",
  },
  {
    id: "19",
    name: "Pham Ha My",
    role: "classmate, The Dewey Schools",
    quote: "Thùy Anh demonstrates a strong sense of responsibility, especially with her excellent leadership skills as a group leader. She always approaches her tasks with confidence and gives her best effort.",
  },
  {
    id: "20",
    name: "Vu Tuan Nghia",
    role: "classmate, The Dewey Schools",
    quote: "She is responsible, and skilled in management, always respectful and fulfilling her duties. Resilient under stress, she can improve her approach to help teammates.",
  },
  {
    id: "21",
    name: "Nguyen Hoàng Lan",
    role: "member of media committee of Dewey Student Council",
    quote: "She's charming, adaptable in her work style, and balances relaxation with seriousness when needed. She's responsible, and straightforward.",
  },
];

export default function TestimoniesSection() {
  return (
    <div className="w-full max-w-[1366px] mx-auto px-4 sm:px-8 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
        {TESTIMONIALS_DATA.map((item) => (
          <div
            key={item.id}
            className="group relative flex flex-col items-center justify-between p-5 sm:p-6 rounded-2xl bg-[#fed7e2]/75 hover:bg-[#fed7e2] border border-pink-200/60 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-center select-text"
            style={{
              minHeight: "340px",
            }}
          >
            {/* Top avatar */}
            <div className="flex flex-col items-center justify-center w-full mb-3 min-h-[76px]">
              {item.avatar ? (
                <div className="relative w-16 h-16 rounded-full overflow-hidden ring-4 ring-white/90 shadow-sm group-hover:scale-105 transition-transform duration-300 bg-white">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="w-14 h-14 rounded-full bg-white/60 flex items-center justify-center text-pink-400 font-bold text-lg ring-2 ring-white/80">
                  {item.name.charAt(0)}
                </div>
              )}
            </div>

            {/* Quote content */}
            <div className="flex-1 flex items-center justify-center px-1 my-2">
              <p className="font-intro-pro font-bold text-[#0c2340] text-xs sm:text-[13px] leading-snug tracking-tight">
                "{item.quote.replace(/^"|"$/g, "")}"
              </p>
            </div>

            {/* Author info & bottom dot */}
            <div className="w-full mt-3 pt-3 border-t border-pink-200/50 flex flex-col items-center">
              <h4 className="font-intro-pro text-[11px] sm:text-xs font-semibold text-gray-800 leading-tight">
                {item.name}
              </h4>
              <p className="font-intro-pro text-[9.5px] sm:text-[10px] text-gray-600 mt-0.5 leading-tight">
                {item.role}
              </p>
              <div className="w-1.5 h-1.5 rounded-full bg-white/90 mt-2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
