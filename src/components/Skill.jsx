import React from "react";
import SkillCard from "./SkillCard";
import { useTranslation } from "react-i18next";
const Skill = () => {
  const { t } = useTranslation();
  const skillItem = [
    {
      imgSrc: "/images/tools/html-5.svg",
      label: "HTML",
      desc: t('tools.categories.structure'),
    },
    {
      imgSrc: "/images/tools/css3.svg",
      label: "CSS",
      desc: t('tools.categories.styling'),
    },
    {
      imgSrc: "/images/tools/javascript.svg",
      label: "JavaScript",
      desc: t('tools.categories.programmingLanguage'),
    },
    {
      imgSrc: "/images/tools/git.svg",
      label: "Git",
      desc: t('tools.categories.versionControl'),
    },
    {
      imgSrc: "/images/tools/php.svg",
      label: "PHP",
      desc: t('tools.categories.serverSideLanguage'),
    },
    {
      imgSrc: "/images/tools/next.svg",
      label: "Next Js",
      desc: t('tools.categories.framework'),  
    },
    {
      imgSrc: "/images/tools/react.svg",
      label: "React",
      desc: t('tools.categories.uiLibrary'),
    },
    {
      imgSrc: "/images/tools/tailwindcss.svg",
      label: "TailwindCSS",
      desc: t('tools.categories.cssFramework'),
    },
    {
      imgSrc: "/images/tools/typescript.svg",
      label: "Typescript",
      desc: t('tools.categories.staticTyping'),
    },
    {
      imgSrc: "/images/tools/supabase.svg",
      label: "Supabase",
      desc: t('tools.categories.backendAsService'),
    },
    {
      imgSrc: "/images/tools/postgresql.svg",
      label: "PostgreSQL",
      desc: t('tools.categories.database'),
    },
    {
      imgSrc: "/images/tools/clerk.svg",
      label: "Clerk",
      desc: t('tools.categories.authentication'),
    },
  ];
  return (
    <section id="skill" className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">{t('tools.title')}</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          {t('tools.subtitle')}
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
