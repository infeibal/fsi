import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeLayout } from "../../home/home-layout";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<h1>Hello</h1>} />
          <Route path="/name" element={<h1>Name</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
