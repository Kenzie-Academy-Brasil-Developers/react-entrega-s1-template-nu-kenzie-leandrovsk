import React from "react";
import "./style.css";
import Logo from "../../assets/img/logo.svg";
import Banner from "../../assets/img/banner.svg";
import { ChangePageBtn } from "../../components/Button";

const Index = ({ setPage }) => {
  const changePageBtn = (
    <ChangePageBtn className="index-btn" setPage={setPage} isTrue={true}>
      Iniciar
    </ChangePageBtn>
  );

  return (
    <section className="index">
      <div className="index-container">
        <span>
          <img src={Logo} alt="logo" />
          <h1 className="index-title">Centralize o controle de suas finanças</h1>
          <p className="index-desc">de forma rápida e segura</p>
          {changePageBtn}
        </span>
        <img src={Banner} alt="" />
      </div>
    </section>
  );
};

export default Index;
