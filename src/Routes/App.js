import { Link } from "react-router-dom";
import Scoreboard from "../Components/Scoreboard";
import { StoreContext } from "../Components/Data";
import { useContext } from "react";

function App() {
  const { imageDataStore } = useContext(StoreContext);
  const [imageData] = imageDataStore;
  return (
    <div className="app">
      <div className="navbar">
        <p>Choose Any Image To Start</p>
      </div>
      <div id="appBody">
        {imageData.map((data, i) => {
          return (
            <div className="appPictureContainer">
              <Link
                to="/game"
                className="appPictureLink"
                key={i}
                state={{
                  name: data.name,
                  pictureLink: data.pictureLink,
                  find: data.find,
                }}
              >
                <img
                  className="appPicture"
                  src={data.pictureLink}
                  alt={data.name}
                />
                <div className="appPictureName">{data.name}</div>
              </Link>
            </div>
          );
        })}
      </div>
      <Scoreboard />
    </div>
  );
}

export default App;
