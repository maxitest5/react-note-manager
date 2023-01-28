import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "noteSlice",
  initialState: {
    noteList: [],
  },
  reducers: {
    setNoteListReducer: (currentSlice, action) => {
      currentSlice.noteList = action.payload;
    },
    addNoteReducer: (currentSlice, action) => {
      currentSlice.noteList.push(action.payload);
    },
    updateNoteReducer: (currentSlice, action) => {
      const indexToUpdate = currentSlice.noteList.findIndex(
        (note) => note.id === action.payload.id
      );
      currentSlice.noteList[indexToUpdate] = action.payload;
    },
    deleteNoteReducer: (currentSlice, action) => {
      const filteredNoteList = currentSlice.noteList.filter(
        (note) => note.id !== action.payload.id
      );
      currentSlice.noteList = filteredNoteList;
    },
  },
});

export const noteReducer = noteSlice.reducer;

export const {
  setNoteListReducer,
  addNoteReducer,
  updateNoteReducer,
  deleteNoteReducer,
} = noteSlice.actions;
