import axios from "axios";

export const FETCH_NOTES_BY_USER_ID = "FETCH_NOTES_BY_USER_ID";
export const ADD_NOTE = "ADD_NOTE";
export const UPDATE_NOTE = "UPDATE_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";

const API_URL = "http://localhost:5000/notes";

export const fetchNotesByUserId = (userId) => async (dispatch) => {
  const response = await axios.get(`${API_URL}?userId=${userId}`);
  dispatch({ type: FETCH_NOTES_BY_USER_ID, payload: response.data });
};

export const addNote = (note) => async (dispatch) => {
  const response = await axios.post(API_URL, note);
  dispatch({ type: ADD_NOTE, payload: response.data });
};

export const updateNote = (note) => async (dispatch) => {
  const response = await axios.put(`${API_URL}/${note.id}`, note);
  dispatch({ type: UPDATE_NOTE, payload: response.data });
};

export const deleteNote = (id) => async (dispatch) => {
  await axios.delete(`${API_URL}/${id}`);
  dispatch({ type: DELETE_NOTE, payload: id });
};
