import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeScreen, ExploreClubs } from "./screens";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/explore-clubs" element={<ExploreClubs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
