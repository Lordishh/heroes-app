import { Routes, Route } from "react-router-dom";

import { DcScreen } from "../components/dc/DcScreen";
import { HeroScreen } from "../components/heros/HeroScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SeachScreen } from "../components/search/SearchScreen";

import { Navbar } from "../components/ui/Navbar";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container mt-3">
        <Routes>
          <Route path="marvel" element={<MarvelScreen />} />
          <Route path="dc" element={<DcScreen />} />

          <Route path="search" element={<SeachScreen />} />
          <Route path="hero/:id" element={<HeroScreen />} />

          <Route path="/" element={<MarvelScreen />} />
        </Routes>
      </div>
    </>
  );
};
