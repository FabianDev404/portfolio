// components/LanguageSwitcher.jsx
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
      <button
        onClick={toggleLanguage}
        className={`btn bg-zinc-50/10 rounded-xl ring-inset ring-1 ring-zinc-50/[0.02]
  backdrop-blur-2xl hover:bg-zinc-50/15 transition-[transform,background-color] active:scale-95`}
        aria-label="Change language"
      >
        <span className="text-lg">{i18n.language === "en" ? "🇺🇸" : "🇪🇸"}</span>
        <span className="text-sm font-medium">
          {i18n.language === "en" ? "EN" : "ES"}
        </span>
      </button>
  );
};

export default LanguageSwitcher;
