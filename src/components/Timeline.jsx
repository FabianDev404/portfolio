import React from "react";

const Timeline = () => {
  // This component renders a timeline with three events.
  // Each event has a date, title, description 
  const timelineData = [
    {
      date: "January 2025",
      title: "Freelance Developer",
      description:
        "Development of custom solutions for independent clients. Focused on creating functional and modern products using technologies such as Next.js, Tailwind CSS, and Supabase. I work across the full development lifecycle—from gathering requirements and designing interfaces to coding, testing, and deployment.",
    },
    {
      date: "2022 - 2024",
      title: "Software Engineer Jr - Terumo Neuro",
      description:
        "Developed In-House web applications using React.js to automate manufacturing workflows and reporting systems. Built reusable components, improved app performance, and maintained critical tools used daily across departments. Collaborated with cross-functional teams to translate business needs into scalable technical solutions.",
    },
    {
      date: "2021 - 2022",
      title: "Software development Intern - Terumo Neuro",
      description:
        "Added new features and enhancing existing modules. Provided technical support to staff in both the United States and Costa Rica, helping resolve issues and maintain daily operations. Gained hands-on experience in debugging, maintaining codebases, and understanding enterprise workflows.",
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
