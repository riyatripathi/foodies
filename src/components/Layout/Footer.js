import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-dark">
        <div className="row pt-3">
          <div className="col text-center" style={{ color: "#daa520" }}>
            <AiOutlineInstagram className="mx-1 display-5 icon" />
            <AiOutlineTwitter className="mx-1 display-5 icon" />
            <AiOutlineGithub className="mx-1 display-5 icon" />
            <AiOutlineYoutube className="mx-1 display-5 icon" />
          </div>
        </div>
        <div className="row py-3">
          <div className="col text-white text-center">
            <h3>All Rights Reserved &copy; Foodies 2023</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
