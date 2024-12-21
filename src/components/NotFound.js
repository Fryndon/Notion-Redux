import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Страница не найдена</h1>
      <p>Извините, но такая страница не существует.</p>
      <Link to="/profile">Вернуться на главную страницу</Link>
    </div>
  );
};

export default NotFound;
