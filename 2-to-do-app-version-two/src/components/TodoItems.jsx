import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem todoname={item.name} tododate={item.dueDate} />
      ))}
    </div>
  );
};

export default TodoItems;
