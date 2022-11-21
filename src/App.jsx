import { useState } from "react";
import Index from "./pages/Index";
import Home from "./pages/Home";
import "./App.css";

function App() {
  const [page, setPage] = useState(false);
  const [cashFlow, setCashFlow] = useState([]);
  const [filter, setFilter] = useState("todos");

  const removeItem = (itemName) => {
    const newList = cashFlow.filter((item) => item.description !== itemName);
    setCashFlow(newList);
  };

  const filteredCashFlow = cashFlow.filter((cashEntry) => (filter === "todos" ? true : cashEntry.option === filter));

  const index = <Index setPage={setPage} />;
  const home = <Home setPage={setPage} cashFlow={cashFlow} setCashFlow={setCashFlow} setFilter={setFilter} filter={filter} filteredCashFlow={filteredCashFlow} removeItem={removeItem} />;

  return <main className="App">{page === false ? index : home}</main>;
}

export default App;
