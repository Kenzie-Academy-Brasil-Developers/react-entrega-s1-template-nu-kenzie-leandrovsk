import React from "react";
import "./style.css";

const Total = ({ cashFlow }) => {
  const empty = "";
  const fill = (
    <span className="total">
      <div>
        <p className="total-value-title">Valor total:</p>
        <p className="total-value">
          ${" "}
          {cashFlow.reduce((previousValue, currentValue) => {
            const sum = currentValue.option === "despesas" ? parseInt(previousValue) - parseInt(currentValue.value) : parseInt(previousValue) + parseInt(currentValue.value);
            return sum;
          }, 0)}
        </p>
      </div>
      <p className="total-value-desc">O valor de refere ao saldo</p>
    </span>
  );

  return <div>{cashFlow.length !== 0 ? fill : empty}</div>;
};

export default Total;
