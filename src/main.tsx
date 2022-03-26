import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "virtual:windi.css";
import { Pp } from "./Pp";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy-policy" element={<Pp />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
