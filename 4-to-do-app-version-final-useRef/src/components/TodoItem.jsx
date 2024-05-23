import { RiDeleteBin2Fill } from "react-icons/ri";

export default function TodoItem({ todoname, tododate, onDeleteClick }) {
  return (
    <div className="container ">
      <div className="row kg-row">
        <div className="col-6">{todoname}</div>
        <div className="col-4">{tododate}</div>
        <div className="col-2 kg-button">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => onDeleteClick(todoname)}
          >
            <RiDeleteBin2Fill />
          </button>
        </div>
      </div>
    </div>
  );
}
