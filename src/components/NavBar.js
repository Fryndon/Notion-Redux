import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Регистрация</Link>
      <Link to="/login">Вход</Link>
      <Link to="/profile">Профиль</Link>
      <Link to="/add-note">Добавить заметку</Link>
      <Link to="/notes">Список заметок</Link>
    </nav>
  );
};

export default NavBar;
