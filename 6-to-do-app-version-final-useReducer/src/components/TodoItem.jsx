import { RiDeleteBin2Fill } from "react-icons/ri";
import { useContext } from "react";
import { TodoItemsContext } from "../store/TodoItemsStore";

export default function TodoItem({ todoname, tododate }) {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <div className="container ">
      <div className="row kg-row">
        <div className="col-6">{todoname}</div>
        <div className="col-4">{tododate}</div>
        <div className="col-2 kg-button">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => deleteItem(todoname)}
          >
            <RiDeleteBin2Fill />
          </button>
        </div>
      </div>
    </div>
  );
}
