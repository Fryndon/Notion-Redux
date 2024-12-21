import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, deleteUser } from "../redux/userActions";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.users.currentUser);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const handleDeleteAccount = () => {
    if (currentUser) {
      dispatch(deleteUser(currentUser.id));
      navigate("/");
    }
  };

  return (
    <div>
      {currentUser ? (
        <div>
          <h1>Добро пожаловать, {currentUser.login}!</h1>
          <button onClick={handleLogout}>Выйти</button>
          <button onClick={handleDeleteAccount}>Удалить учетную запись</button>
        </div>
      ) : (
        <h1>Вы не вошли в систему</h1>
      )}
    </div>
  );
};

export default UserProfile;
