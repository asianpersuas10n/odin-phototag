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
      find: [
        {
          name: "A smile as cute as a button",
          left: 474,
          right: 507,
          top: 265,
          bottom: 298,
        },
        {
          name: "A dog looking a bit spotty",
          left: 895,
          right: 968,
          top: 36,
          bottom: 93,
        },
        {
          name: "Choo Choo",
          left: 608,
          right: 676,
          top: 339,
          bottom: 400,
        },
        {
          name: "I'm a bit of a fan",
          left: 745,
          right: 793,
          top: -1,
          bottom: 36,
        },
        {
          name: "Potassium",
          left: 356,
          right: 424,
          top: 146,
          bottom: 217,
        },
        {
          name: "A",
          left: 332,
          right: 386,
          top: 414,
          bottom: 462,
        },
        {
          name: "This hat probably belongs to the rhinestone cowboy",
          left: 64,
          right: 131,
          top: 200,
          bottom: 270,
        },
        {
          name: "Strawberry nice to meet you",
          left: 501,
          right: 554,
          top: 185,
          bottom: 249,
        },
        {
          name: "A marble in a sea of beads",
          left: 656,
          right: 729,
          top: 514,
          bottom: 571,
        },
        {
          name: "If the boot fits",
          left: 543,
          right: 606,
          top: 362,
          bottom: 413,
        },
      ],
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
