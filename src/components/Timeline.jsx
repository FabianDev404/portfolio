import React from "react";
import { useTranslation } from "react-i18next";

const Timeline = () => {
  const { t } = useTranslation();
  // This component renders a timeline with three events.
  // Each event has a date, title, description 
  const timelineData = [
    // {
    //   date: "January 2025",
    //   title: "Freelance Developer",
    //   description: t("experience.freelance.description")
    // },
    {
      date: "2022 - 2024",
      title: "Software Engineer Jr - Terumo Neuro",
      description: t("experience.terumoJr.description")
    },
    {
      date: "2021 - 2022",
      title: "Software development Intern - Terumo Neuro",
      description: t("experience.terumoIntern.description")
    },
  ];

  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">
      {timelineData.map((event, index) => (
        <li key={index} className="mb-10 mx-4">
          <div className="absolute w-3 h-3 bg-sky-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900"></div>
          <p className="mb-1 text-sm text-zinc-400">
            {event.date}
          </p>
          <h3 className="headline-3 mb-1 text-zinc-200 reveal-up">
            {event.title}
          </h3>
          <p className="text-zinc-400 mt-3 mb-8 reveal-up">
            {event.description}
          </p>
        </li>
      ))}
    </ol>
  );
};

export default Timeline;
