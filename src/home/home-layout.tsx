import { Outlet } from "react-router-dom";
import { HomeHeader } from "./components/home-header.component";
import { HomeFooter } from "./components/home-footer.component";

export const HomeLayout = () => {
  return (
    <div>
      <HomeHeader />

      <Outlet />

      <HomeFooter />
    </div>
  );
};
