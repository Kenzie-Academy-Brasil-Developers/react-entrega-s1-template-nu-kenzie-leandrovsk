import React from "react";
import { FilterBtn } from "../Button";
import Card from "../Card";
import EmptyCard from "../EmptyCard";
import "./style.css";

const Cards = ({ filteredCashFlow, setFilter, filter, removeItem }) => {
  const renderCards = filteredCashFlow.map((cardItem) => <Card removeItem={removeItem} cardItem={cardItem} />);

  const emptyCards = (
    <>
      <h2 className="empty-card-title">Você ainda não possui nenhum lançamento</h2>
      <EmptyCard /> <EmptyCard /> <EmptyCard />
    </>
  );

  return (
    <section>
      <div className="resume-section">
        <p>Resumo Financeiro</p>
        <span>
          <FilterBtn filter={filter} setFilter={setFilter} value="todos" className={"filter-item"}>
            Todos
          </FilterBtn>
          <FilterBtn filter={filter} setFilter={setFilter} value="entrada" className={"filter-item"}>
            Entradas
          </FilterBtn>
          <FilterBtn filter={filter} setFilter={setFilter} value="despesas" className={"filter-item"}>
            Despesas
          </FilterBtn>
        </span>
      </div>
      <ul>{filteredCashFlow.length !== 0 ? renderCards : emptyCards}</ul>
    </section>
  );
};

export default Cards;
