import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const HeaderNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeLink, setActiveLink] = useState<string>("/");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  const handleClick = (nav: string) => {
    navigate("/");

    setActiveLink("/");

    setTimeout(() => {
      const element = document.getElementById(nav);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  useEffect(() => {
    setActiveLink(location.pathname);
  }, []);

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
            onClick={() => handleClick("products")}
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
          <a
            onClick={() => handleClick("feedback")}
            className={` hover:text-gray-500 duration-300 cursor-pointer`}
          >
            Отзывы
          </a>
        </li>
        <li>
          <a
            onClick={() => handleClick("contacts")}
            className={` hover:text-gray-500 duration-300 cursor-pointer`}
          >
            Контакты
          </a>
        </li>
      </ul>
    </nav>
  );
};
