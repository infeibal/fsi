import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const HeaderNav = () => {
  const navigate = useNavigate();

  const [activeLink, setActiveLink] = useState<string>("/");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  const handleClick = () => {
    navigate("/");

    setActiveLink("/");

    setTimeout(() => {
      const element = document.getElementById("products");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <nav>
      <ul className="text-xl flex gap-6">
        <li>
          <Link
            to="/"
            onClick={() => handleLinkClick("/")}
            className={`${
              activeLink === "/" ? "text-gray-500" : ""
            } hover:text-gray-500 duration-300`}
          >
            Главная
          </Link>
        </li>
        <li>
          <Link
            to="/roadmap"
            onClick={() => handleLinkClick("/roadmap")}
            className={`${
              activeLink === "/roadmap" ? "text-gray-500" : ""
            } hover:text-gray-500 duration-300`}
          >
            РОАДМАПА
          </Link>
        </li>
        <li>
          <a
            onClick={handleClick}
            className={` hover:text-gray-500 duration-300 cursor-pointer`}
          >
            Продукты
          </a>
        </li>
        <li>
          <Link
            to="/converter"
            onClick={() => handleLinkClick("/converter")}
            className={`${
              activeLink === "/converter" ? "text-gray-500" : ""
            } hover:text-gray-500 duration-300`}
          >
            Конвертер
          </Link>
        </li>
        <li>
          <Link
            to="/"
            onClick={() => handleLinkClick("/feedback")}
            className={`${
              activeLink === "/feedback" ? "text-gray-500" : ""
            } hover:text-gray-500 duration-300`}
          >
            Отзывы
          </Link>
        </li>
        <li>
          <Link
            to="/"
            onClick={() => handleLinkClick("/contacts")}
            className={`${
              activeLink === "/contacts" ? "text-gray-500" : ""
            } hover:text-gray-500 duration-300`}
          >
            Контакты
          </Link>
        </li>
      </ul>
    </nav>
  );
};
