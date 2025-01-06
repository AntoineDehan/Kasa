import React from "react";
import { useState } from "react";
import "../../styles/css/collapse/style.css";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const openstate = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse__barre">
        <h2>{title}</h2>
        <div className="collapse__btn" onClick={openstate}>
          <i
            className={`fa-solid ${isOpen ? "fa-angle-down" : "fa-angle-up"}`}
          ></i>
        </div>
      </div>
      <div className={`collapse__hidden ${isOpen ? "open" : ""}`}>
        <div className="collapse__content">{content}</div>
      </div>
    </div>
  );
}

export default Collapse;
