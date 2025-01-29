import { HomeAd } from "./components/ad.components";
import { HomeApplication } from "./components/application.component";
import { HomeCompany } from "./components/company.component";
import { HomeFeedback } from "./components/feedback/feedback.component";
import { HomeNew } from "./components/new.component";
import { HomeProducts } from "./components/products.component";

export const HomeModule = () => {
  return (
    <div className="w-full max-w-[1100px] mx-auto h-full flex flex-col">
      <HomeNew />

      <HomeAd />

      <HomeProducts />

      <HomeApplication />

      <HomeCompany />

      <HomeFeedback />
    </div>
  );
};
