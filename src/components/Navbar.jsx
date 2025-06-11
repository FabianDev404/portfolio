import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useTranslation } from 'react-i18next';
const Navbar = ({ navOpen }) => {
  const { t, i18n } = useTranslation();
  const lastActiveLink = useRef();
  const activeBox = useRef();

  const initActiveBox = () => {
    if (activeBox.current && lastActiveLink.current) {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
      activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px";
    }
  };

  const activeCurrentLink = (e) => {
    lastActiveLink.current?.classList.remove("active");
    e.target.classList.add("active");
    lastActiveLink.current = e.target;

    activeBox.current.style.top = e.target.offsetTop + "px";
    activeBox.current.style.left = e.target.offsetLeft + "px";
    activeBox.current.style.width = e.target.offsetWidth + "px";
    activeBox.current.style.height = e.target.offsetHeight + "px";
  };

  useEffect(() => initActiveBox(), []);


  window.addEventListener("resize", initActiveBox);

  const navItems = [
    {
      label: "navigation.home",
      link: "#home",
      className: "nav-link active",
      ref: lastActiveLink,
    },
    {
      label: "navigation.about",
      link: "#about",
      className: "nav-link",
    },
    {
      label: "navigation.experience",
      link: "#experience",
      className: "nav-link",
    },
    {
      label: "navigation.work",
      link: "#work",
      className: "nav-link",
    },
    {
      label: "navigation.contact",
      link: "#contact",
      className: "nav-link md:hidden",
    },
  ];

  if (!i18n.isInitialized) {
    return <nav className="navbar">Loading...</nav>;
  }

  return (
    <nav className={"navbar " + (navOpen ? "active" : "")}>
      {navItems.map(({ label, link, className, ref }, key) => (
        <a
          key={key}
          href={link}
          className={className}
          ref={ref}
          onClick={activeCurrentLink}
        >
          {t(label)}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;