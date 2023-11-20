import React, { useState } from "react";
import "./home.css";
import { homeData } from "../../helpers/MenuList";
import Home from "./Home";

const Homes = () => {
  const [items] = useState(homeData);

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
