import React from "react";
import ProjectCard from "./ProjectCard";
import { useTranslation } from "react-i18next";
const Work = () => {
  const { t } = useTranslation();
  const works = [
    {
      imgSrc: "/images/project-1.jpg",
      title: "Full stack music app",
      tags: ["API", "MVC", "Development"],
      projectLink: "https://musify-5al0.onrender.com/",
    },
    {
      imgSrc: "/images/project-2.jpg",
      title: "Free stock photo app",
      tags: ["API", "SPA"],
      projectLink: "https://pixstock-official.vercel.app/",
    },
    {
      imgSrc: "/images/project-3.jpg",
      title: "Recipe app",
      tags: ["Development", "API"],
      projectLink: "",
    },
    {
      imgSrc: "/images/project-4.jpg",
      title: "Real state website",
      tags: ["Web-design", "Development"],
      projectLink: "https://github.com/codewithsadee-org/wealthome",
    },
    {
      imgSrc: "/images/project-5.jpg",
      title: "eCommerce website",
      tags: ["eCommerce", "Development"],
      projectLink: "https://github.com/codewithsadee/anon-ecommerce-website",
    },
    {
      imgSrc: "/images/project-6.jpg",
      title: "vCard Personal portfolio",
      tags: ["Web-design", "Development"],
      projectLink: "https://github.com/codewithsadee/vcard-personal-portfolio",
    },
  ];
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">{t("portfolio.title")}</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))]">
            {works.map((item, key) => (
                <ProjectCard key={key} imgSrc={item.imgSrc} title={item.title}
                 tags={item.tags} projectLink={item.projectLink} classes="reveal-up" />
            ))}
        </div>
      </div>
    </section>
  );
};


export default Work;
