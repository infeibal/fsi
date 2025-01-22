import { HomeNew } from "./components/new.component";

export const HomeModule = () => {
  return (
    <div className="w-full max-w-[1100px] mx-auto h-full flex flex-col">
      <HomeNew />

      <div className="">
        <img src="/src/common/images/wave.svg" alt="" />
      </div>
    </div>
  );
};
