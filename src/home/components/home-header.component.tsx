import { HeaderNav } from "./header-nav.component";

export const HomeHeader = () => {
  return (
    <header className="w-full flex items-center gap-40 justify-center py-4">
      <img src="/src/common/images/logo.png" alt="logo" />

      <HeaderNav />
    </header>
  );
};
