import { Link } from "react-router-dom";

type HeaderNavType = {
  handleLinkClick: (link: string) => void;
  handleClick: (nav: string) => void;
  activeLink: string;
};

export const HeaderNav = ({
  handleLinkClick,
  handleClick,
  activeLink,
}: HeaderNavType) => {
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
