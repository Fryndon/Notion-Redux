import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../redux/noteActions";
import { useNavigate } from "react-router-dom";

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUserId = useSelector((state) => state.users.currentUser?.id);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && description && currentUserId) {
      dispatch(addNote({ title, description, userId: currentUserId }));
      setTitle("");
      setDescription("");
      navigate("/notes");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Название заметки"
        required
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Описание заметки"
        required
      />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default AddNote;
