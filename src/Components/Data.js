import { createContext, useEffect, useState } from "react";
import { db } from "../Firebase";
import photo1 from "../Images/photo1.jpeg";
import photo2 from "../Images/photo2.jpg";
import photo3 from "../Images/photo3.jpg";
import photo4 from "../Images/photo4.jpg";
import photo5 from "../Images/photo5.jpg";
import photo6 from "../Images/photo6.jpg";
export const StoreContext = createContext(null);

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ children }) => {
  const [loadingBool, setLoadingBool] = useState(false);
  const [imageData, setImageData] = useState();

  useEffect(() => {
    const fetchFind = async () => {
      const response = db.collection("locations");
      const data = await response.get();
      const itemData = data.docs[0].data();

      setImageData([
        {
          name: "Buckets of Buttons and Beads",
          pictureLink: photo1,
          find: itemData.one,
        },
        {
          name: "A Small City",
          pictureLink: photo2,
          find: itemData.two,
        },
        {
          name: "Glass By The SeaShore",
          pictureLink: photo3,
          find: itemData.three,
        },
        {
          name: "Modern Highway",
          pictureLink: photo4,
          find: itemData.four,
        },
        {
          name: "Cyberpunk 2077",
          pictureLink: photo5,
          find: itemData.five,
        },
        {
          name: "Circus",
          pictureLink: photo6,
          find: itemData.six,
        },
      ]);
      setLoadingBool(true);
    };
    fetchFind();
  }, []);

  const store = {
    imageDataStore: [imageData],
    loadingBoolStore: [loadingBool],
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
