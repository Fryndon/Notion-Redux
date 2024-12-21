import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/userActions";

const Register = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser({ login, password }));
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
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};

export default Register;
