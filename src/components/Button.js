import "../App.css";
function Button({ onDelete, index, Status }) {
  return (
    <>
      <button className="delete" onClick={() => onDelete(index)}>
        Delete
      </button>
    </>
  );
}

export default Button;
