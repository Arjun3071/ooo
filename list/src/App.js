import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import { Home } from "./routes/Home";
import { Watchlist } from "./routes/Watchlist";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Watchlist" element={<Watchlist />} />
      </Routes>
    </>
  );
}

export default App;
