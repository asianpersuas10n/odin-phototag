import { Link } from "react-router-dom";

function App() {
  const info = [
    {
      name: "test",
      pictureLink: "*",
      pictureAlt: "test",
    },
    {
      name: "test2",
      pictureLink: "*",
      pictureAlt: "test2",
    },
  ];

  return (
    <div className="app">
      <div className="navbar">
        <p>Choose Any Image To Start</p>
      </div>
      {info.map((x, i) => {
        return (
          <div>
            <Link to="/game" className="appPictureContainer" key={i}>
              <img
                className="appPicture"
                src={x.pictureLink}
                alt={x.pictureAlt}
              />
              <div className="appPictureName">{x.name}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default App;
