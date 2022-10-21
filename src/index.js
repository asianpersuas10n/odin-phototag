import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./Routes/App";
import Game from "./Routes/Game";
import Score from "./Routes/Score";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="game" element={<Game />} />
        <Route path="score" element={<Score />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
