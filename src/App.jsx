import { Outlet } from "react-router-dom";
import { Header } from "components/Header/Header";
import { useEffect } from "react";
import { NoteAPI } from "api/note-api";
import { useDispatch } from "react-redux";
import { setNoteListReducer } from "store/note/note-slice";
import s from "./style.module.css";

export function App() {
  const dispatch = useDispatch();

  async function fetchAllNotes() {
    const noteList = await NoteAPI.fetchAll();
    dispatch(setNoteListReducer(noteList));
  }
  useEffect(() => {
    fetchAllNotes();
  }, []);

  return (
    <div className="container-fluid">
      <Header />
      <div className={s.outlet_container}>
        <Outlet />
      </div>
    </div>
  );
}
