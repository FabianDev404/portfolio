import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import CertificateCard from "./CertificateCard";

const Certificates = () => {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);
  const CERTIFICATES = [
    {
      imgSrc: "/images/certificates/Bachelor-Degree.png",
      title: t("certificates.certificates.bachelorDegree.title"),
      from: t("certificates.certificates.bachelorDegree.from"),
      src: "/pdf/Bachelor-Degree.pdf",
    },
    {
      imgSrc: "/images/certificates/React-Udemy.jpg",
      title: t("certificates.certificates.reactJs.title"),
      from: t("certificates.certificates.reactJs.from"),
      src: "https://www.udemy.com/certificate/UC-a493758b-d7e4-46f3-8af4-a9459611dae7/",
    },
    {
      imgSrc: "/images/certificates/Python.png",
      title: t("certificates.certificates.python.title"),
      from: t("certificates.certificates.python.from"),
      src: "/pdf/Python.pdf",
    },
    {
      imgSrc: "/images/certificates/Cybersecurity.png",
      title: t("certificates.certificates.cybersecurity.title"),
      from: t("certificates.certificates.cybersecurity.from"),
      src: "/pdf/Cybersecurity.pdf",
    },
    {
      imgSrc: "/images/certificates/IoT.png",
      title: t("certificates.certificates.iot.title"),
      from: t("certificates.certificates.iot.from"),
      src: "/pdf/IoT.pdf",
    },
    {
      imgSrc: "/images/certificates/PacketTracer.png",
      title: t("certificates.certificates.packetTracer.title"),
      from: t("certificates.certificates.packetTracer.from"),
      src: "/pdf/PacketTracer.pdf",
    },
    {
      imgSrc: "/images/certificates/English-Certificate.png",
      title: t("certificates.certificates.english.title"),
      from: t("certificates.certificates.english.from"),
      src: "/pdf/English-Certificate.pdf",
    },
    {
      imgSrc: "/images/certificates/Snowflake.png",
      title: t("certificates.certificates.snowflake.title"),
      from: t("certificates.certificates.snowflake.from"),
      src: "https://www.credly.com/badges/4d2bd53e-4135-4ccf-844d-a98ca4d3b35a?source=linked_in_profile",
    },
  ];

  return (
    <section id="certificates" className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">{t("certificates.title")}</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          {t("certificates.subtitle")}
        </p>
        <div className="grid grid-cols-1 gap-3 mb-6 md:grid-cols-3">
          {(showAll ? CERTIFICATES : CERTIFICATES.slice(0, 3)).map(({ title, imgSrc, from, src }, idx) => (
            <CertificateCard
              key={idx}
              imgSrc={imgSrc}
              title={title}
              from={from}
              src={src}
            //   classes="hover:scale-105 transition-transform duration-300 reveal-up"
            />
          ))}
        </div>
        <div className="flex justify-center">
          <button
            className="btn btn-secondary"
            onClick={() => {
              setShowAll((s) => {
                const next = !s;
                if (s) {
                  setTimeout(() => {
                    document.getElementById('certificates').scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }, 100);
                }
                return next;
              });
            }}
          >
            {showAll
              ? t("buttons.showLess")
              : t("buttons.showMore")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
