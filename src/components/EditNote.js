import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateNote } from "../redux/noteActions";

const EditNote = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const note = useSelector((state) =>
    state.notes.notes.find((note) => note.id === id)
  );

  const currentUserId = useSelector((state) => state.users.currentUser?.id);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setDescription(note.description);
    }
  }, [note]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note && note.userId === currentUserId) {
      dispatch(
        updateNote({
          id,
          title,
          description,
          userId: currentUserId,
        })
      ).catch((error) => {
        console.error("Ошибка при обновлении заметки:", error);
      });
      navigate("/notes");
    } else {
      alert("Вы не можете редактировать эту заметку.");
    }
  };

  if (!note) return <p>Загрузка заметки...</p>;

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
      <button type="submit">Сохранить изменения</button>
    </form>
  );
};

export default EditNote;
