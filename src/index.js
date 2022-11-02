import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./Routes/App";
import Game from "./Routes/Game";
import Score from "./Routes/Score";
import StoreProvider from "./Components/Data";
import "./Font/Roboto-Light.ttf";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="game" element={<Game />} />
          <Route path="score" element={<Score />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  </React.StrictMode>
);

/* overhead
 * photo loads up
 * user clicks on area of photo
 * click brings up box surrounding click / user should see the box
 * when user answers move on to next object
 * when finished log if users got it right and if they got it right log the time it took to find
 */

/* photo loads up
 * maybe use routes to acomplish this homepage->game->add score->homepage
 * have scores shown off on home page
 */

/* user clicks on area of photo / bring up box surrounding click
 * create element that shows up on click posistion absolute
 */

/* when user answers move on to next object
 * let user know if they got it right or wrong
 */

/* when finished log what users got right and if they got it right log the time it took to find
 * spot to add name and button to take to homepage
 * if no name added and button pressed score wont be logged
 */
