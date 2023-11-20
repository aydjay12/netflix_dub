import React from "react";
// import { homeData } from "../helpers/MenuList";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="box">
            <ul className="flex">
              <li>Terms of Use</li>
              <li>Privacy-Policy</li>
              <li>Blog</li>
              <li>FAQ</li>
              <li>Watch List</li>
            </ul>
            <p>
              © 2022 STREAMIT. All Rights Reserved. All videos and shows on this
              platform are trademarks of, and all related images and content are
              the property of, Streamit Inc. Duplication and copy of this is
              strictly prohibited. All rights reserved.
            </p>
          </div>
          <div className="box">
            <h3>Follow Us</h3>
            <i className="fab fa-facebook-f fa-bounce"></i>
            <i className="fab fa-twitter fa-bounce"></i>
            <i className="fab fa-github fa-bounce"></i>
            <i className="fab fa-instagram fa-bounce"></i>
          </div>
          <div className="box">
            <h3>Streamit App</h3>
            <div className="img flexSB">
              <img
                src="https://img.icons8.com/color/48/000000/apple-app-store--v3.png"
                alt=""
              />
              <span>App Store</span>
              <img
                src="https://img.icons8.com/fluency/48/000000/google-play.png"
                alt=""
              />
              <span>Google Play Store</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
