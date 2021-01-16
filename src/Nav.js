import React, { useEffect, useState } from "react";
import "./Nav.css";
function Nav() {
  const [show, showhandle] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 100 ? showhandle(true) : showhandle(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav_img"
        src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg"
        alt="Netflix logo"
      ></img>
      <img
        className="nav_avtar"
        src="https://www.zilliondesigns.com/blog/wp-content/uploads/feature-img-min.png"
        alt="Netflix logo"
      ></img>
    </div>
  );
}

export default Nav;
