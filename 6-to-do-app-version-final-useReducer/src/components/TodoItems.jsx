import { useContext } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { TodoItemsContext } from "../store/TodoItemsStore";

const TodoItems = () => {
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;

  // const { todoItems } = useContext(TodoItemsContext); //both methods are same

  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoname={item.name}
          tododate={item.dueDate}
        />
      ))}
    </div>
  );
};

export default TodoItems;
