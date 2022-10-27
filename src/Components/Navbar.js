import { Link } from "react-router-dom";

function Navbar({ time, currentFindName }) {
  return (
    <div className="navbar">
      <Link to="/" id="homeButton">
        Back to Start
      </Link>
      <div id="currentFind">Find: {currentFindName}</div>
      <div id="timer">{time && time}</div>
    </div>
  );
}

export default Navbar;
