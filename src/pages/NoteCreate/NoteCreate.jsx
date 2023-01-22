import { NoteForm } from "components/NoteForm/NoteForm";
import { useDispatch } from "react-redux";
import { addNoteReducer } from "store/note/note-slice";
import { NoteAPI } from "api/note-api";
import { useNavigate } from "react-router-dom";

export function NoteCreate(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function addNote(formValues) {
    const createdNote = await NoteAPI.create({
      ...formValues,
      created_at: new Date().toLocaleDateString,
    });
    dispatch(addNoteReducer(createdNote));
    navigate("/");
  }

  return (
    <>
      <NoteForm title="Create a note" onSubmit={addNote} />
    </>
  );
}
