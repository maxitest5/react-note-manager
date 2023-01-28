import { NoteAPI } from "api/note-api";
import { NoteForm } from "components/NoteForm/NoteForm";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteNoteReducer, updateNoteReducer } from "store/note/note-slice";

export function Note(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isEditable, setIsEditable] = useState(false);
  const { noteId } = useParams();

  const note = useSelector((store) =>
    store.NOTE.noteList.find((note) => note.id === noteId)
  );

  function deleteNote(note) {
    if (window.confirm("Supprimer la note ?")) {
      NoteAPI.deleteById(note.id);
      dispatch(deleteNoteReducer(note));
      navigate("/");
    }
  }

  async function submit(formValues) {
    const updatedNote = await NoteAPI.update({ ...formValues, id: note.id });
    dispatch(updateNoteReducer(updatedNote));
    setIsEditable(false);
  }

  return (
    <div>
      {note && (
        <NoteForm
          isEditable={isEditable}
          title={note && isEditable ? "Edit note" : note.title}
          note={note}
          onClickEdit={() => setIsEditable(!isEditable)}
          onClickTrash={() => deleteNote(note)}
          onSubmit={isEditable && submit}
        />
      )}
    </div>
  );
}
