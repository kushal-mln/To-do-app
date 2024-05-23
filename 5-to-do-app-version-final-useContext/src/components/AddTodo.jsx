import { useRef } from "react";
import { IoIosPersonAdd } from "react-icons/io";
import { useContext } from "react";
import { TodoItemsContext } from "../store/TodoItemsStore";

function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);

  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = () => {
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName, dueDate);
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="ENTER TO DO" ref={todoNameElement} />
        </div>
        <div className="col-4">
          <input type="Date" ref={dueDateElement} />
        </div>
        <div className="col-2 kg-button">
          <button
            type="button"
            className="btn btn-success"
            onClick={handleAddButtonClicked}
          >
            <IoIosPersonAdd />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;

//use grid from bootstrap
