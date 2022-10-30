import { Navigate, useLocation } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../Firebase";
import { useState } from "react";

function Score() {
  const location = useLocation();
  const { playerScore, imageName } = location.state;
  const [nameInput, setNameInput] = useState("");
  const [redirectHome, setRedirectHome] = useState(false);

  function recordScore() {
    if (!nameInput.length || nameInput.length > 4) {
      return;
    }
    const scoreRef = collection(db, imageName);
    addDoc(scoreRef, { score: playerScore, name: nameInput });
    setRedirectHome(true);
  }

  return (
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
      {redirectHome && <Navigate to="/" />}
    </div>
  );
}

export default Score;
