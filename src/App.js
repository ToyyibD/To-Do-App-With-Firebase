import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Layout } from "./pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Layout />} />
      </Routes>
    </>
  );
};

export default App;
