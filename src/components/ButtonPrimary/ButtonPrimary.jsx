import s from "./style.module.css";

export function ButtonPrimary({ children, onClick, isDisabled }) {
  return (
    <button
      disabled={isDisabled}
      type="button"
      className={`btn btn-primary ${s.button}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
