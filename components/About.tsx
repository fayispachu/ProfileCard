'use client';

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
import ComputersCanvas from "./canvas/ComputersCanvas";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section
      id="about"
      className="bg-neutral-900 text-white py-16 px-4 md:px-12 flex flex-col items-center"
    >
      <h1
        data-aos="fade-up"
        className="text-5xl sm:text-6xl font-bold font-serif text-center mb-12"
      >
        About
      </h1>

      <div className="flex flex-col-reverse md:flex-row gap-10 w-full max-w-6xl items-center">
        {/* Text Content */}
        <div data-aos="fade-right" className="md:w-1/2 text-left">
          <p className="font-medium text-lg sm:text-xl md:text-2xl leading-relaxed hover:drop-shadow-2xl hover:drop-shadow-neutral-500 transition">
            I’m a self-taught{" "}
            <span className="text-cyan-400 hover:drop-shadow-2xl hover:drop-shadow-neutral-500 transition">
              MERN Stack Developer
            </span>{" "}
            with a passion for crafting clean, efficient, and user-focused web
            applications. With a strong foundation in{" "}
            <span className="text-cyan-400 hover:drop-shadow-2xl hover:drop-shadow-neutral-500 transition">
              MongoDB, Express.js, React, and Node.js
            </span>
            , I specialize in turning ideas into seamless digital experiences.
          </p>

          <p className="mt-6 font-medium text-base sm:text-lg md:text-xl leading-relaxed text-gray-300 hover:drop-shadow-2xl hover:drop-shadow-neutral-500 transition">
            I thrive in problem-solving, adapt quickly to new technologies, and
            believe in writing code that’s not only functional but also elegant.
            My goal is to build products that deliver value, perform flawlessly,
            and leave a lasting impact.
          </p>
        </div>

        {/* Canvas / Image */}
        <div
          data-aos="zoom-in"
          className="md:w-1/2 w-full h-64 sm:h-80 md:h-[50vh] flex justify-center"
        >
          <ComputersCanvas />
        </div>
      </div>

      
    </section>
  );
}
