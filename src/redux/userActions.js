import axios from "axios";

export const REGISTER_USER = "REGISTER_USER";
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT = "LOGOUT";

const API_URL = "http://localhost:5000/users";
const NOTES_API_URL = "http://localhost:5000/notes";

export const registerUser = (userData) => async (dispatch) => {
  const response = await axios.get(API_URL);
  const existingUser = response.data.find(
    (user) => user.login === userData.login
  );

  if (existingUser) {
    alert("Пользователь с таким логином уже существует.");
    return;
  }

  const newUserResponse = await axios.post(API_URL, userData);
  dispatch({ type: REGISTER_USER, payload: newUserResponse.data });
};

export const loginUser = (loginData) => async (dispatch) => {
  const response = await axios.get(API_URL);
  const user = response.data.find(
    (user) =>
      user.login === loginData.login && user.password === loginData.password
  );

  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
    dispatch({ type: LOGIN_USER, payload: user });
    return Promise.resolve();
  } else {
    return Promise.reject();
  }
};

export const logout = () => {
  localStorage.removeItem("currentUser");
  return { type: LOGOUT };
};

export const deleteUser = (userId) => async (dispatch) => {
  const response = await axios.get(`${NOTES_API_URL}?userId=${userId}`);
  const userNotes = response.data;

  await Promise.all(
    userNotes.map((note) => axios.delete(`${NOTES_API_URL}/${note.id}`))
  );

  await axios.delete(`${API_URL}/${userId}`);
  dispatch(logout());
};
