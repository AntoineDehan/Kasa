import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./componants/Header";
import Footer from "./componants/Footer";
import Error from "./componants/Error";
import Logement from "./pages/Logement";
import TestPage from "./pages/TestPage";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:logementId" element={<Logement />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/*" element={<Error />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
