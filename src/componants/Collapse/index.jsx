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
          {isOpen ? (
            <i className="fa-solid fa-angle-up"></i>
          ) : (
            <i className="fa-solid fa-angle-down"></i>
          )}
        </div>
      </div>
      <div className="collapse__hidden">{isOpen && <p>{content}</p>}</div>
    </div>
  );
}

export default Collapse;
