import React, { useState } from "react";
import "../styles/Navbar.css";
import pic3 from "../images/logo.png";

const Header = () => {
  const [Mobile, setMobile] = useState(false);
  return (
    <>
      <header>
        <div className="container flexSB">
          <nav className="flexSB">
            <div className="logo">
              <img src={pic3} alt="" />
            </div>
            {/*<ul className='flexSB'>*/}
            <ul
              className={Mobile ? "navMenu-list" : "flexSB"}
              onClick={() => setMobile(false)}
            >
              <li>
                <a href="/netflix_dub">Home</a>
              </li>
              <li>
                <a>Series</a>
              </li>
              <li>
                <a>Movies</a>
              </li>
              <li>
                <a>Pages</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
            <button className="toggle" onClick={() => setMobile(!Mobile)}>
              {Mobile ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </nav>
          <div className="account flexSB">
            <i className="fa fa-search"></i>
            <i class="fas fa-bell"></i>
            <i className="fas fa-user"></i>
            <button>Subscribe</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
