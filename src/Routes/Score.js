import { useLocation } from "react-router-dom";

function Score() {
  const location = useLocation();
  const { playerScore, imageName } = location.state;
  return (
    <div className="score">
      <form>
        <label htmlFor="name">Name:</label>
        <input id="name" />
      </form>
      <div>Image: {imageName}</div>
      <div>Score: {playerScore}</div>
      <button>Enter Score</button>
    </div>
  );
}

export default Score;
