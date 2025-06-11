import React from "react";
import { ButtonPrimary } from "./Button";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
  const sitemap = [
    {
      label: t("navigation.home"),
      href: "#home",
    },
    {
      label: t("navigation.about"),
      href: "#about",
    },
    {
      label: t("navigation.experience"),
      href: "#experience",
    },
    {
      label: t("navigation.work"),
      href: "#work",
    },
    {
      label: t("navigation.contact"),
      href: "#contact",
    },
  ];

  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/FabianDev404",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/fabianespinozaviquez-412772198/",
    }
  ];
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2 ">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
              {t("footer.cta")}
            </h2>
            <ButtonPrimary
              href="mailto:fabianespinozadeveloper@gmail.com"
              label={t("buttons.startProject")}
              icon="chevron_right"
              classes="reveal-up"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2 reveal-up">{t("footer.sitemap")}</p>

              <ul>
                {sitemap.map((item, key) => (
                  <li key={key}>
                    <a
                      href={item.href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 reveal-up">{t("footer.socials")}</p>

              <ul>
                {socials.map((item, key) => (
                  <li key={key}>
                    <a
                      href={item.href}
                      target="_blank"
                      className="block text-sm  text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-10 mb-8">
          <a href="/" className="logo reveal-up">
            <img src="/images/logo.svg" width={40} height={40} alt="Logo" />
          </a>
          <p className="text-zinc-500 text-sm reveal-up">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-zinc-200">Fabian Espinoza</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
