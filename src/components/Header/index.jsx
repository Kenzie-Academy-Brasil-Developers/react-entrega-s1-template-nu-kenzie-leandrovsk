import React from "react";
import { ChangePageBtn } from "../../components/Button";
import Logo from "../../assets/img/logo2.svg";
import "./style.css";

const Header = ({ setPage }) => {
  return (
    <header className="header">
      <nav className="navbar container">
        <img src={Logo} alt="logo" />
        <ChangePageBtn className="home-btn" setPage={setPage} isTrue={false}>
          Início
        </ChangePageBtn>
      </nav>
    </header>
  );
};

export default Header;
