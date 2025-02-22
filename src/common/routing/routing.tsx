import { HashRouter, Routes, Route } from "react-router-dom";
import { HomeLayout } from "../../home/home-layout";
import { HomeModule } from "../../home/home-module";
import { Roadmap } from "../../roadmap/roadmap.component";
import { Making } from "../../making/making.component";
import { Converter } from "../../converter/converter";
import { Secret } from "../../secret/secret.component";
import { PageNotFound } from "../components/page-not-found.component";

export const Routing = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<HomeModule />} />

          <Route path="/roadmap" element={<Roadmap />} />

          <Route path="/making" element={<Making />} />

          <Route path="/converter" element={<Converter />} />

          <Route path="/secret" element={<Secret />} />

          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
