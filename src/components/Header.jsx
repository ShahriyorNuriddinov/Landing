import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import img from "../assets/svg/Britlex.svg";
const Header = () => {
  const { t, i18n } = useTranslation();

  const navbar = [
    { id: 1, key: "home", path: "/" },
    { id: 2, key: "skills", path: "/skills" },
    { id: 3, key: "about", path: "/about" },
    { id: 4, key: "pricing", path: "/pricing" },
    { id: 5, key: "contacts", path: "/contact" },
  ];

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <header className="container  flex items-center justify-between py-4">
      <img src={img} alt="" />
      <nav>
        <ul className="flex gap-6">
          {navbar.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-500"
                }
              >
                {t(`navbar.${item.key}`)}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <select
        value={i18n.language}
        onChange={handleLanguageChange}
        className="border px-3 py-1 rounded outline-none"
      >
        <option value="en">🇺🇸 {t("languages.english")}</option>
        <option value="uz">🇺🇿 {t("languages.uzbek")}</option>
      </select>
    </header>
  );
};

export default Header;
