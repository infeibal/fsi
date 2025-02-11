import { HeaderNav } from "./header-nav.component";

export const HomeHeader = () => {
  return (
    <header className="w-full max-w-[1100px] flex items-center mx-auto gap-40 justify-center py-4 px-0">
      <img src="/src/common/images/logo.png" alt="logo" />

      <HeaderNav />
    </header>
  );
};
