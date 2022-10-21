import Navbar from "../Components/Navbar";
import { useLocation } from "react-router-dom";

function Game() {
  const location = useLocation();
  const { name, pictureLink, find } = location.state;
  return (
    <div className="game">
      <Navbar />
      <div id="gameBody">
        <div id="gameImageContainer">
          <img
            src={pictureLink}
            alt="Failed To Load And The Game Will Not Start"
          />
        </div>
      </div>
    </div>
  );
}

export default Game;
