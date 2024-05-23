import { useRef } from "react";
import { IoIosPersonAdd } from "react-icons/io";

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = () => {
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    onNewItem(todoName, dueDate);
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
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
