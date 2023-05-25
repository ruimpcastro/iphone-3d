import React from "react";
import iPhone from "../assets/images/iphone-14.jpg";
import HoldingiPhone from "../assets/images/iphone-hand.png";

export const Jumbotron = () => {
  const handleLearnMore = () => {
    const element = document.querySelector(".sound-section");
    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="jumbotron-section wrapper">
      <h2 className="title">New</h2>
      <img className="logo" src={iPhone} alt="iPhone 14 Pro" />
      <p className="text">Big and bigger.</p>
      <span className="description">
        From $41.62/mo. for 24 mo. or $999 before trade-in.
      </span>
      <ul className="links">
        <li>
          <button style={{ border: 0 }} className="button">
            Buy
          </button>
        </li>
        <li>
          <a className="link" onClick={handleLearnMore}>
            Learn More
          </a>
        </li>
      </ul>
      <img className="iphone-img" src={HoldingiPhone} alt="Holding iPhone" />
    </div>
  );
};
