import React, { useState } from "react";
import "../styles/Home.css";
import { homeData } from "../helpers/MenuList";
import Home from "./Home";

const Homes = () => {
  const [items, setItems] = useState(homeData);

  return (
    <>
      <section className="home">
        <Home items={items} />
      </section>
      <div className="mragin"></div>
    </>
  );
};

export default Homes;
