import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/userActions";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(loginUser({ login, password }));
      navigate("/profile");
    } catch (error) {
      alert("Неверный логин или пароль");
    }
    setLogin("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        placeholder="Логин"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Пароль"
        required
      />
      <button type="submit">Войти</button>
    </form>
  );
};

export default Login;
