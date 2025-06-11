import React from "react";
import Timeline from "./Timeline.jsx";
import { useTranslation } from "react-i18next";
const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="section">
      <div className="container max-sm:pt-10">
        <h2 className="headline-2 mb-8 reveal-up">{t("experience.title")}</h2>
        <Timeline />
      </div>
    </section>
  );
};

export default Experience;
