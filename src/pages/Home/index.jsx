import React from "react";
import "./style.css";
import Header from "../../components/Header";
import Form from "../../components/Form";
import Total from "../../components/Total";
import Cards from "../../components/Cards";

const Home = ({ setPage, cashFlow, setCashFlow, setFilter, filter, filteredCashFlow, removeItem }) => {
  return (
    <section className="home">
      <Header setPage={setPage} />
      <div className="container content-wrapper">
        <aside className="form-section">
          <Form cashFlow={cashFlow} setCashFlow={setCashFlow} />
          <Total cashFlow={cashFlow} />
        </aside>
        <aside className="card-section">
          <Cards filteredCashFlow={filteredCashFlow} setFilter={setFilter} filter={filter} removeItem={removeItem} />
        </aside>
      </div>
    </section>
  );
};

export default Home;
