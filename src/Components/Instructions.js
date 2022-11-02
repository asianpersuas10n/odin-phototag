import { useState } from "react";

function Instructions() {
  const [showInstructions, setShowInstructions] = useState(false);
  return (
    <div id="instructions">
      <div id="instructionButton" onClick={() => setShowInstructions(true)}>
        Instructions
      </div>
      {showInstructions && (
        <div
          className="buttonContainer"
          onClick={() => setShowInstructions(false)}
        >
          <div>
            <p>
              When the game starts a green button will appear in the middle of
              the screen.
            </p>
            <p>
              When you press that button the game will start and you will be
              asked to find an object. The object being asked of will appear at
              the top of the page.
            </p>
            <p>
              Clicking on the image will have the game process if your answer is
              right or wrong.
            </p>
            <p>
              Three wrong answer and the game ends with a fairly low score.
              Three Right answers and the game will add up your score.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Instructions;
