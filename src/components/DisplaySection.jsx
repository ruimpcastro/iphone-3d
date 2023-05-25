import React from "react";

export const DisplaySection = () => {
  const handleScrollToTop = () => {
    const element = document.querySelector(".top-section");
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="display-section wrapper">
      <h2 className="title">New </h2>
      <p className="text">Brilliant</p>
      <span className="description">
        A display that's up to 2x brighter in the sun.
      </span>
      <button className="button" style={{ border: 0 }}>
        Try me!
      </button>
      <button className="back-button" onClick={handleScrollToTop}>
        TOP
      </button>
    </div>
  );
};
