import React from "react";
import SkillCard from "./SkillCard";
const Skill = () => {
  const skillItem = [
    {
      imgSrc: "/images/html-5.svg",
      label: "HTML",
      desc: "Structure",
    },
    {
      imgSrc: "/images/css3.svg",
      label: "CSS",
      desc: "Styling",
    },
    {
      imgSrc: "/images/javascript.svg",
      label: "JavaScript",
      desc: "Programming Language",
    },
    {
      imgSrc: "/images/git.svg",
      label: "Git",
      desc: "Version Control",
    },
    {
      imgSrc: "/images/php.svg",
      label: "PHP",
      desc: "Server-side Language",
    },
    {
      imgSrc: "/images/next.svg",
      label: "Next Js",
      desc: "Framework",
    },
    {
      imgSrc: "/images/react.svg",
      label: "React",
      desc: "UI Library",
    },
    {
      imgSrc: "/images/tailwindcss.svg",
      label: "TailwindCSS",
      desc: "CSS Framework",
    },
    {
      imgSrc: "/images/typescript.svg",
      label: "Typescript",
      desc: "Static Typing",
    },
    {
      imgSrc: "/images/supabase.svg",
      label: "Supabase",
      desc: "Backend as a Service",
    },
    {
      imgSrc: "/images/postgresql.svg",
      label: "PostgreSQL",
      desc: "Database",
    },
    {
      imgSrc: "/images/clerk.com.svg",
      label: "Clerk",
      desc: "Authentication",
    },
  ];
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential Tools I use</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,1fr))]">
          {skillItem.map((item, key) => (
            <SkillCard
              key={key}
              imgSrc={item.imgSrc}
              label={item.label}
              desc={item.desc}
              classes="hover:scale-105 transition-transform duration-300 reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
