import Navbar from "./Navbar";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
const Header = () => {
  const { t } = useTranslation();
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header
      className="fixed top-0 left-0 w-full h-20 flex items-center
     z-40 bg-gradiend-to-b from-zinc-900 to-zinc-900/0"
    >
      <div
        className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 
      md:grid md:grid-cols-[1fr,3fr,1fr]"
      >
        <LanguageSwitcher/>

        <div className="relative md:justify-self-center">
          <button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen(!navOpen)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>
        <a
          href="#contact"
          className="btn btn-secondary max-md:hidden md:justify-self-end"
        >
          {t("buttons.contactMe")}
        </a>
      </div>
    </header>
  );
};
export default Header;
