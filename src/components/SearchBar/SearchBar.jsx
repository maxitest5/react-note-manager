import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

export function SearchBar({ placeholder, onTextChanged }) {
  return (
    <>
      <SearchIcon size={25} className={s.icon} />
      <input
        type="text"
        className={s.input}
        onChange={(e) => onTextChanged(e.target.value)}
        placeholder={placeholder}
      />
    </>
  );
}
