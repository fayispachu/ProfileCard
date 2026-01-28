'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import me from "@/public/images/profile.png";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

function TypingText({ text, speed = 120 }: { text: string; speed?: number }) {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDeleting && index < text.length) {
        setDisplayText(text.slice(0, index + 1));
        setIndex(i => i + 1);
      } else if (isDeleting && index > 0) {
        setDisplayText(text.slice(0, index - 1));
        setIndex(i => i - 1);
      } else if (index === text.length) {
        setIsDeleting(true);
      } else if (index === 0) {
        setIsDeleting(false);
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearInterval(interval);
  }, [index, isDeleting, text, speed]);

  return (
    <span>
      {displayText}
      <span className="ml-1 text-cyan-400 animate-pulse">|</span>
    </span>
  );
}

export default function HomeClient() {
  return (
    <>
      <Header />

      <main className="min-h-screen flex flex-col md:flex-row items-center px-6 md:px-16 lg:px-32 pt-28 gap-10 bg-neutral-950 text-white">
        {/* Left Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-3xl font-serif font-bold">Hey</h3>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mt-2">
            I am <TypingText text="Fayis K" />
          </h1>
          <p className="text-gray-400 max-w-md mt-4">
            A passionate full-stack developer building modern web applications.
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-cyan-400 shadow-[0_0_40px_#06b6d4] overflow-hidden">
            <Image src={me} alt="Fayis K" fill className="object-cover" priority sizes="(max-width: 768px) 18rem, 24rem" />
          </div>
        </div>
      </main>

      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
