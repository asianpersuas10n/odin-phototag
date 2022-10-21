import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./Routes/App";
import Game from "./Routes/Game";
import Score from "./Routes/Score";
import StoreProvider from "./Components/Data";

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
 * page ask user to find something in photo
 * user clicks on area of photo
 * click brings up box surrounding click / user should see the box
 * a submit button maybe add enter to function as submit
 * decide if object that user is looking for is in that click generated box
 * (maybe do this via adding multiple pixel points that the box can check if one of the x ys of the object is in the box)
 * when user answers move on to next object
 * when finished log if users got it right and if they got it right log the time it took to find
 */

/* photo loads up
 * add functionality to add multiple photos to choose from
 * have user choose between different photos
 * maybe use routes to acomplish this homepage->game->add score->homepage
 * have scores shown off on home page
 */

/* page ask user to find something in photo
 * maybe have a set time limit?
 * have a list of objects containing x ys of things the user has to find have a lot to choose from but only have user find 3 things
 */

/* user clicks on area of photo / bring up box surrounding click
 * perhaps use something similar to drag and drop
 */

/* submit button /enter for answer
 * self explanitory
 */

/* decide if object that user if looking for is in that click generated box / (maybe do this via adding multiple pixel points that the
 * 	box can check if one of the x ys of the object is in the box)
 * mark x ys to look for and if its within the x y of the box its right
 */

/* when user answers move on to next object
 * let user know if they got it right or wrong
 * regardless if right or wrong move to next object for user to look for
 */

/* when finished log what users got right and if they got it right log the time it took to find
 * if wrong put max time with 0 score
 * show user score
 * spot to add name and button to take to homepage
 * if no name added and button pressed score wont be logged
 */
