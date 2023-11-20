import React, { useState } from "react";
import { trending } from "../helpers/MenuList";
import Home from "../pages/Home";
import "../styles/Trending.css";

const Trending = () => {
  const [items, setItems] = useState(trending);
  return (
    <>
      <section className="trending">
        <Home items={items} />
      </section>
    </>
  );
};

export default Trending;
