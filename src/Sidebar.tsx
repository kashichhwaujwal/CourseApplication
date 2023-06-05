import LocalSwitcher from "component/LocalSwitcher";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AiFillCloseCircle } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

import { LOCALES, i18next } from "./i18next";

const Sidebar = () => {
  const { t } = useTranslation();
  const [closeSidebar, setCloseSidebar] = useState<boolean>(true);
  const [activeLocale, setActiveLocale] = useState({
    english: "true",
    french: "false",
  });
  // const activeLocale = {
  //   english: "true",
  //   french: "false",
  // }

  return (
    <>
      {closeSidebar ? (
        <GiHamburgerMenu
          className="sidebar__open"
          onClick={() => setCloseSidebar(!closeSidebar)}
        />
      ) : (
        ""
      )}
      <div className={closeSidebar ? "sidebar__remove" : "sidebar"}>
        <AiFillCloseCircle
          className="sidebar__close"
          onClick={() => setCloseSidebar(!closeSidebar)}
        />
        <div className="sidebar__head">
          <div className="sidebar__logo">
            <span>C</span>
          </div>
          <div className="sidebar__title">
            <h2>{t("sidebar.title")}</h2>
          </div>
        </div>
        <div className="sidebar__body">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "sidebar__active sidebar__links" : "sidebar__links"
            }
          >
            <p>{t("sidebar.home")}</p>
          </NavLink>
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              isActive ? "sidebar__active sidebar__links" : "sidebar__links"
            }
          >
            <p>{t("sidebar.courses")}</p>
          </NavLink>
          <NavLink
            to="/methodology"
            className={({ isActive }) =>
              isActive ? "sidebar__active sidebar__links" : "sidebar__links"
            }
          >
            <p>{t("sidebar.methodology")}</p>
          </NavLink>
        </div>
        <div className="sidebar__footer">
          <div className="sidebar__locale">
            <p>{t("sidebar.language")}</p>
            <div className="sidebar__locale_switcher">
              <LocalSwitcher
                label={t("sidebar.english")}
                isActiveLocale={activeLocale.english}
                onClick={() => {
                  i18next.changeLanguage(LOCALES.ENGLISH);
                  setActiveLocale({ english: "true", french: "false" });
                }}
              />
              <div className="sidebar__vertical" />
              <LocalSwitcher
                label={t("sidebar.francais")}
                isActiveLocale={activeLocale.french}
                onClick={() => {
                  i18next.changeLanguage(LOCALES.FRENCH);
                  setActiveLocale({ english: "false", french: "true" });
                }}
              />
            </div>
          </div>
          <p>{t("sidebar.version")}</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
