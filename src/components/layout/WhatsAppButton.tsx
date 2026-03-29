"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const number = (
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+971545567799"
  ).replace(/[^0-9]/g, "");
  const url = `https://wa.me/${number}?text=${encodeURIComponent("Hello! I'm interested in Al Haya Cleaning Services.")}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-pulse"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
