"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Sun,
  Moon,
  Mail,
  Phone,
  MapPin,
  Github,
  Globe,
} from "lucide-react";
import Me from "@/public/Me.jpeg";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
  <main
  className={`min-h-dvh overflow-hidden flex items-center justify-center px-4 transition-colors duration-700 ${
  darkMode
          ? "bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white"
          : "bg-gradient-to-br from-blue-100 via-white to-blue-50 text-gray-900"
      }`}
    >
      <div
        className={`relative w-full max-w-md p-6 sm:p-8 rounded-2xl border shadow-xl ${
          darkMode
            ? "bg-gray-800 border-gray-700"
            : "bg-white border-gray-200"
        }`}
      >
        {/* Theme toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-700 text-yellow-400"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Profile */}
        <div className="flex flex-col items-center mt-4">
          {/* RESPONSIVE CIRCLE */}
          <div
            className="
              relative
              w-28 h-28
              sm:w-32 sm:h-32
              md:w-36 md:h-36
              rounded-full
              overflow-hidden
              border-4 border-blue-500
            "
          >
            <Image
              src={Me}
              alt="Profile Picture"
              fill
              className="object-cover"
              priority
            />
          </div>

          <h1 className="text-xl sm:text-2xl font-semibold mt-4">
            Fayis.k
          </h1>

          <p className="text-xs sm:text-sm text-center mt-2 opacity-80 px-2">
            Full Stack Developer | Crypto Trader & Content Creator.
          </p>
        </div>

        {/* Contact */}
        <div className="mt-6 flex flex-col gap-2 text-center text-sm sm:text-base">
          <a
            href="mailto:fayizpachu217@gmail.com"
            className="flex justify-center gap-2 text-blue-500 break-all"
          >
            <Mail size={16} /> fayizpachu217@gmail.com
          </a>

          <p className="flex justify-center gap-2 opacity-70">
            <Phone size={16} /> 9744850680
          </p>

          <p className="flex justify-center gap-2 opacity-70">
            <MapPin size={16} /> Kozhikode
          </p>
        </div>

        {/* Social */}
        <div className="mt-6 flex justify-center gap-6">
          <a href="https://github.com/fayispachu" target="_blank">
            <Github />
          </a>
          <a href="https://fayis-k-developer.onrender.com" target="_blank">
            <Globe />
          </a>
        </div>

        <footer className="mt-8 text-center text-xs sm:text-sm opacity-60">
          © {new Date().getFullYear()} Fayis.k. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
