import { NoteForm } from "components/NoteForm/NoteForm";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export function Note(props) {
  const { noteId } = useParams();

  const note = useSelector((store) =>
    store.NOTE.noteList.find((note) => note.id === noteId)
  );

  return (
    <div>
      {note && (
        <NoteForm
          isEditable={false}
          title={note && note.title}
          note={note}
          onClickEdit={() => ""}
          onClickTrash={() => ""}
        />
      )}
    </div>
  );
}
