import { Outlet, useLocation } from "react-router-dom";
import { HomeFooter } from "./components/home-footer.component";
import { HomeHeader } from "./components/header/home-header.component";
import { useEffect } from "react";

export const HomeLayout = () => {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/roadmap":
        document.title = "РОАДМАПА | ФСИ Банк";
        break;

      case "/converter":
        document.title = "Конвертер | ФСИ Банк";
        break;

      case "/making":
        document.title = "Оформление карты | ФСИ Банк";
        break;

      case "/secret":
        document.title = "Гэрри Уткорот | ФСИ Банк";
        break;

      default:
        document.title = "ФСИ Банк";
    }
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <HomeHeader />

      <div className="flex-grow">
        <Outlet />
      </div>

      <HomeFooter />
    </div>
  );
};
