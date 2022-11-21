import React from "react";
import TrashIcon from "../../assets/img/trash.svg";
import "./style.css";

const Card = ({ cardItem, removeItem }) => {
  const cardClass = cardItem.option === "despesas" ? "card outcome-card" : "card income-card";
  return (
    <li className={cardClass}>
      <span>
        <p className="card-desc">{cardItem.description}</p>
        <div>
          <p className="card-value">R$ {cardItem.value},00</p>
          <button className="card-delete-btn" onClick={() => removeItem(cardItem.description)}>
            <img src={TrashIcon} alt="" />
          </button>
        </div>
      </span>
      <p className="card-option">{cardItem.option}</p>
    </li>
  );
};

export default Card;
