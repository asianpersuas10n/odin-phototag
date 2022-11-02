import { Link } from "react-router-dom";
import Scoreboard from "../Components/Scoreboard";
import { StoreContext } from "../Components/Data";
import { useContext } from "react";

function App() {
  const { imageDataStore, loadingBoolStore } = useContext(StoreContext);
  const [imageData] = imageDataStore;
  const [loadingBool] = loadingBoolStore;

  return (
    <div id="appContainer">
      <div id="neededAnotherDivForStickyFooter">
        <div className="app">
          <div className="navbar">
            <p>Choose Any Image To Start</p>
          </div>
          {loadingBool && (
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
                      {console.log(data.find)}
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
          )}
          <Scoreboard />
        </div>
      </div>
      <footer>
        <a href="https://github.com/asianpersuas10n/odin-phototag">
          Github Here
        </a>
      </footer>
    </div>
  );
}

export default App;
