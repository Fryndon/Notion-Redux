import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { combineReducers } from "redux";
import userReducer from "./redux/userReducer";
import noteReducer from "./redux/noteReducer";

const rootReducer = combineReducers({
  users: userReducer,
  notes: noteReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
