"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const skills = [
  { id: 1, name: "HTML", icon: "/assets/html.png" },
  { id: 2, name: "CSS", icon: "/assets/css.png" },
  { id: 3, name: "React", icon: "/assets/react.png" },
  { id: 4, name: "Node.js", icon: "/assets/nodejs.png" },
  { id: 5, name: "Express.js", icon: "/assets/express.png" },
  { id: 6, name: "MongoDB", icon: "/assets/mongodb.png" },
  { id: 7, name: "MySQL", icon: "/assets/mysql.png" },
  { id: 8, name: "GitHub", icon: "/assets/github.png" },
  { id: 9, name: "Figma", icon: "/assets/figma.png" },
  { id: 10, name: "Tailwind CSS", icon: "/assets/tailwind.png" },
];

const skillDescriptions: Record<string, string> = {
  HTML: "HTML: Strong understanding of semantic markup and accessibility best practices, crafting structured and SEO-friendly web pages.",
  CSS: "CSS: Skilled in creating responsive designs, animations, and layouts using Flexbox, Grid.",
  React: "React: Experienced in building dynamic SPAs using hooks, routing, and state management for highly interactive UIs.",
  "Node.js": "Node.js: Proficient in building scalable backend systems, handling APIs.",
  "Express.js": "Express.js: Skilled at creating RESTful APIs, middleware logic, and handling authentication and routing efficiently.",
  MongoDB: "MongoDB: Expertise in schema design, data modeling, aggregation pipelines, and optimization using Mongoose in MERN stack projects.",
  MySQL: "MySQL: Experience designing relational databases, writing optimized SQL queries, and ensuring data consistency and security.",
  GitHub: "GitHub: Comfortable with version control, collaboration, branching strategies, and managing repositories for team projects.",
  Figma: "Figma: Adept at designing clean, intuitive interfaces and creating prototypes to visualize UX flows before development.",
  "Tailwind CSS": "Tailwind CSS: Efficient at crafting beautiful, responsive UIs quickly with utility-first classes and consistent design systems.",
};

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="skills" className="bg-neutral-950 w-full py-28 px-4 md:px-20 lg:px-36 flex flex-col items-center gap-10">
      <h1 data-aos="fade-up" className="font-bold text-5xl md:text-6xl font-serif text-white mb-10 text-center">
        Skills
      </h1>

      {/* Skill Icons */}
      <div className="flex flex-wrap justify-center gap-8 w-full max-w-5xl">
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            whileHover={{ scale: 1.1 }}
            onClick={() => setActiveSkill(skill.name)}
            className="cursor-pointer flex flex-col items-center"
          >
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
              <Image src={skill.icon} alt={skill.name} fill className="object-contain" />
            </div>
            <p className="mt-2 text-gray-300 text-sm md:text-base">{skill.name}</p>
          </motion.div>
        ))}
      </div>

      {/* Description Box */}
      {activeSkill && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-10 max-w-2xl text-center px-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent mb-3">
            {activeSkill} ⚙️
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            {skillDescriptions[activeSkill]}
          </p>
        </motion.div>
      )}
    </section>
  );
}
