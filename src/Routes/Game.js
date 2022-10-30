import Navbar from "../Components/Navbar";
import { useLocation, Navigate } from "react-router-dom";
import { useState, useRef } from "react";

function Game() {
  const location = useLocation();
  const { name, pictureLink, find } = location.state;
  const Ref = useRef(null);
  const [time, setTime] = useState("00:00");
  const [objectsFound, setObjectsFound] = useState(0);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [currentFind, setCurrentFind] = useState({ name: "" });
  const [objectsUsed, setObjectsUsed] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const [score, setScore] = useState(0);
  const [buttonBool, setButtonBool] = useState(true);

  //gets the coordinates from a click on an image

  function getCoordinates(e) {
    let positionX = 0;
    let positionY = 0;
    let imgPos = findPosition(document.getElementById("myImgId"));

    if (e.pageX || e.pageY) {
      positionX = e.pageX;
      positionY = e.pageY;
    } else if (e.clientX || e.clientY) {
      positionX =
        e.clientX +
        document.body.scrollLeft +
        document.documentElement.scrollLeft;
      positionY =
        e.clientY +
        document.body.scrollTop +
        document.documentElement.scrollTop;
    }
    positionX = positionX - imgPos[0];
    positionY = positionY - imgPos[1];
    console.log(positionX, positionY);
    return [positionX, positionY];
  }

  function findPosition(element) {
    let posX;
    let posY;

    if (typeof element.offsetParent != "undefined") {
      for (posX = 0, posY = 0; element; element = element.offsetParent) {
        posX += element.offsetLeft;
        posY += element.offsetTop;
      }
      return [posX, posY];
    } else {
      return [element.x, element.y];
    }
  }

  //when you press start this fires off the timer and the first object to find

  function gameStart() {
    randomizer();
    clearTimer(getTime(300));
    setButtonBool(false);
  }

  function gameLogic(e) {
    const input = getCoordinates(e);
    const [inputX, inputY] = input;
    const { left, right, top, bottom } = currentFind;
    let tempObjectsFound = objectsFound;
    let tepmWrongGuess = wrongGuesses;

    if (inputX > left && inputX < right && inputY > top && inputY < bottom) {
      setObjectsFound((current) => current + 1);
      tempObjectsFound += 1;
      randomizer();
      if (tempObjectsFound === 3) {
        gameEnd(true);
      }
    } else {
      setWrongGuesses((current) => current + 1);
      tepmWrongGuess += 1;
      if (tepmWrongGuess === 3) {
        gameEnd(false);
      }
    }
  }

  // chooses random object to find that hasn't been chosen before

  function randomizer() {
    let randomNum = Math.floor(Math.random() * 9 + 1);
    while (objectsUsed.find((current) => current === randomNum)) {
      randomNum = Math.floor(Math.random() * 9 + 1);
    }
    setObjectsUsed((current) => current.concat(randomNum));
    console.log(find);
    setCurrentFind(find[randomNum]);
  }

  function gameEnd(bool) {
    let endTime;
    if (bool) {
      endTime = time;
      endTime.split("");
      endTime =
        Number(endTime[1]) * 60 +
        60 * 3 +
        Number(endTime[3] + endTime[4]) -
        60 * wrongGuesses;
      clearTimer(getTime(0));
      setScore(endTime);
    } else {
      clearTimer(getTime(0));
      endTime = 60 * objectsFound;
      setScore(endTime);
    }

    //if(3 x's or 3 objects found stop timer push user to scoreboard and create score)
    setRedirect(true);
  }

  // timer is created and upkept here

  function timer(e) {
    const totalTime = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((totalTime / 1000) % 60);
    const minutes = Math.floor((totalTime / 1000 / 60) % 60);
    return {
      totalTime,
      minutes,
      seconds,
    };
  }

  function startTimer(e) {
    let { totalTime, minutes, seconds } = timer(e);

    if (totalTime >= 0) {
      setTime(
        (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  }

  function clearTimer(e) {
    setTime("05:00");

    if (Ref.current) {
      clearInterval(Ref.current);
    }
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  }

  function getTime(totalSeconds) {
    let deadline = new Date();

    deadline.setSeconds(deadline.getSeconds() + totalSeconds);
    return deadline;
  }

  return (
    <div className="game">
      <Navbar currentFindName={currentFind.name} time={time} />
      {buttonBool && (
        <div id="buttonContainer">
          <button onClick={() => gameStart()}>start</button>
        </div>
      )}
      <div id="gameBody">
        <div id="gameImageContainer">
          <img
            id="myImgId"
            src={pictureLink}
            alt="Failed To Load And The Game Will Not Start"
            onMouseDown={(e) => gameLogic(e)}
          />
        </div>
      </div>
      {redirect && (
        <Navigate to="/score" state={{ playerScore: score, imageName: name }} />
      )}
    </div>
  );
}

export default Game;
