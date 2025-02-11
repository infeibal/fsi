import { Outlet } from "react-router-dom";
import { HomeFooter } from "./components/home-footer.component";
import { HomeHeader } from "./components/header/home-header.component";

export const HomeLayout = () => {
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
