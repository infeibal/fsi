import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeLayout } from "../../home/home-layout";
import { HomeModule } from "../../home/home-module";
import { Roadmap } from "../../roadmap/roadmap.component";
import { Making } from "../../making/making.component";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<HomeModule />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/making" element={<Making />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
