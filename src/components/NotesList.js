import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotesByUserId, deleteNote } from "../redux/noteActions";
import { Link } from "react-router-dom";
import "../styles/NotesList.css";

const NotesList = () => {
  const currentUserId = useSelector((state) => state.users.currentUser?.id);
  const dispatch = useDispatch();
  const notesList = useSelector((state) => state.notes.notes);

  useEffect(() => {
    if (currentUserId) {
      dispatch(fetchNotesByUserId(currentUserId));
    }
  }, [currentUserId, dispatch]);

  return (
    <div className="notes-list">
      <h2>Ваши Заметки</h2>
      <ul>
        {notesList.map((note) => (
          <li key={note.id}>
            <div>
              <h3>{note.title}</h3>
              <p>{note.description}</p>
            </div>
            <div>
              <Link to={`/edit-note/${note.id}`}>
                <button>Редактировать</button>
              </Link>
              <button onClick={() => dispatch(deleteNote(note.id))}>
                Удалить
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesList;
