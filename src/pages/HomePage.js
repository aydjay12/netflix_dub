import React, { useState } from "react";
import Homes from "../pages/Homes";
import Trending from "../pages/Trending";
import Upcomming from "../pages/Upcomming";
import { latest, recommended, upcome } from "../helpers/MenuList";

const HomePage = () => {
  const [items, setItems] = useState(upcome);
  const [item, setItem] = useState(latest);
  const [rec, setRec] = useState(recommended);
  return (
    <>
      <Homes />
      <Upcomming items={items} title="Upcoming Movies" />
      <Upcomming items={item} title="Latest Movies" />
      <Trending />
      <Upcomming items={rec} title="Recommended Movies" />
    </>
  );
};

export default HomePage;
