import React from "react";
import "./style.css";

const EmptyCard = () => {
  return (
    <li className="empty-card">
      <div>
        <span className="upper-rect"></span>
        <span className="lower-rect"></span>
      </div>
    </li>
  );
};

export default EmptyCard;
