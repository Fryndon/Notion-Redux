import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Register from "./components/Register";
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";
import AddNote from "./components/AddNote";
import NotesList from "./components/NotesList";
import EditNote from "./components/EditNote";
import NotFound from "./components/NotFound";
import "./styles/main.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/add-note" element={<AddNote />} />
          <Route path="/notes" element={<NotesList />} />
          <Route path="/edit-note/:id" element={<EditNote />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
