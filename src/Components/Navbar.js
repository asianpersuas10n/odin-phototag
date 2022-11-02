import { Link } from "react-router-dom";

function Navbar({ time, currentFindName, wrongGuesses, objectsFound }) {
  return (
    <div className="navbar">
      <Link to="/" id="homeButton">
        Back to Start
      </Link>
      <div id="currentFind">Find: {currentFindName}</div>
      <div id="timer">
        <div>{time && time}</div>
        <div>
          Correct: {objectsFound >= 1 ? "O" : "_"},{" "}
          {objectsFound >= 2 ? "O" : "_"}, {objectsFound >= 3 ? "O" : "_"}
        </div>
        <div>
          Wrong: {wrongGuesses >= 1 ? "X" : "_"},{" "}
          {wrongGuesses >= 2 ? "X" : "_"}, {wrongGuesses >= 3 ? "X" : "_"}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
