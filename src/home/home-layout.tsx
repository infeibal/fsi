import { Outlet } from "react-router-dom";
import { HomeHeader } from "./components/home-header.component";
import { HomeFooter } from "./components/home-footer.component";

export const HomeLayout = () => {
  return (
    <div className="flex flex-col">
      <div className="mx-auto">
        <HomeHeader />

        <Outlet />
      </div>
      <HomeFooter />
    </div>
  );
};
