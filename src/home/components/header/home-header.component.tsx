import { Link, useLocation, useNavigate } from "react-router-dom";
import { HeaderNav } from "./header-nav.component";
import { useEffect, useState } from "react";

export const HomeHeader = () => {
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
    <header className="w-full max-w-[1100px] flex items-center mx-auto gap-40 justify-center py-4 px-0">
      <Link onClick={() => handleLinkClick("/")} to="/">
        <img
          src="/src/common/images/logo.png"
          alt="logo"
          className="select-none"
        />
      </Link>

      <HeaderNav
        activeLink={activeLink}
        handleClick={handleClick}
        handleLinkClick={handleLinkClick}
      />
    </header>
  );
};
