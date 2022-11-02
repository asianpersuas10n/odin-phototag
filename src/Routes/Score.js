import { Link, Navigate, useLocation } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../Firebase";
import { useState } from "react";

function Score() {
  const location = useLocation();
  const { playerScore, imageName } = location.state;
  const [nameInput, setNameInput] = useState("");
  const [tooShort, setTooShort] = useState(false);
  const [tooLong, setTooLong] = useState(false);
  const [redirectHome, setRedirectHome] = useState(false);

  function recordScore() {
    if (!nameInput.length || nameInput.length > 8) {
      if (!nameInput.length) {
        setTooLong(false);
        setTooShort(true);
      } else {
        setTooShort(false);
        setTooLong(true);
      }
      return;
    }
    const scoreRef = collection(db, imageName);
    addDoc(scoreRef, { score: playerScore, name: nameInput });
    setRedirectHome(true);
  }

  return (
    <div>
      <Link to="/" id="homeButton" className="navbar">
        If You Don't Want To Submit Your Score Click Here To Go Back To Start
      </Link>
      <div className="score">
        <form>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            onChange={(e) => {
              setNameInput(e.target.value);
            }}
          />
        </form>
        <div>Image: {imageName}</div>
        <div>Score: {playerScore}</div>
        <button onClick={() => recordScore()}>Enter Score</button>
        {tooShort && <div className="invalidForm">You need to add a name.</div>}
        {tooLong && (
          <div className="invalidForm">
            The name can only be, at most, eight characters long.
          </div>
        )}
        {redirectHome && <Navigate to="/" />}
      </div>
    </div>
  );
}

export default Score;
