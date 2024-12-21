import {
  FETCH_NOTES_BY_USER_ID,
  ADD_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
} from "./noteActions";

const initialState = {
  notes: [],
};

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTES_BY_USER_ID:
      return {
        ...state,
        notes: action.payload,
      };
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case UPDATE_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? action.payload : note
        ),
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    default:
      return state;
  }
};

export default noteReducer;
