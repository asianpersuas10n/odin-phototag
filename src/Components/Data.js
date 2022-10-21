import { createContext } from "react";
import photo1 from "../Images/photo1.jpeg";
import photo2 from "../Images/photo2.jpg";
import photo3 from "../Images/photo3.jpg";
import photo4 from "../Images/photo4.jpg";
import photo5 from "../Images/photo5.jpg";
import photo6 from "../Images/photo6.jpg";
export const StoreContext = createContext(null);

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ children }) => {
  const imageData = [
    {
      name: "Buckets of Buttons and Beads",
      pictureLink: photo1,
      find: [],
    },
    {
      name: "A Small City",
      pictureLink: photo2,
      find: [],
    },
    {
      name: "Glass By The SeaShore",
      pictureLink: photo3,
      find: [],
    },
    {
      name: "Mordern Highway",
      pictureLink: photo4,
      find: [],
    },
    {
      name: "Cyberpunk 2077",
      pictureLink: photo5,
      find: [],
    },
    {
      name: "Circus",
      pictureLink: photo6,
      find: [],
    },
  ];
  const store = {
    imageDataStore: [imageData],
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
