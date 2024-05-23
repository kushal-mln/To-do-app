import AddTodo from "./components/AddTodo";
import WelcomeMessage from "./components/WelcomeMessage";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";
import TodoItemsContextProvider from "./store/TodoItemsStore";

// const todoItemsReducer = (currTodoItems, action) => {
//   let newTodoItems = currTodoItems;
//   if (action.type === "NEW_ITEM") {
//     newTodoItems = [
//       ...currTodoItems,
//       { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
//     ];
//     // return newTodoItems;
//   } else if (action.type === "DELETE_ITEM") {
//     newTodoItems = currTodoItems.filter(
//       (item) => item.name !== action.payload.todoItemName
//     );
//   }
//   return newTodoItems;
// };

// function App() {
//   const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

//   const addNewItem = (itemName, itemDueDate) => {
//     const newItemAction = {
//       //action object
//       type: "NEW_ITEM",
//       payload: {
//         itemName,
//         itemDueDate,
//       },
//     };
//     dispatchTodoItems(newItemAction);
//   };

//   const deleteItem = (todoItemName) => {
//     const deleteItemAction = {
//       //action object
//       type: "DELETE_ITEM",
//       payload: {
//         todoItemName,
//       },
//     };
//     dispatchTodoItems(deleteItemAction);
//   };

//   return (
//     <TodoItemsContext.Provider
//       value={{
//         todoItems,
//         addNewItem,
//         deleteItem,
//       }}
//     >
//       <center className="todo-container">
//         <AppName />
//         <AddTodo />
//         <WelcomeMessage />
//         <TodoItems />
//       </center>
//     </TodoItemsContext.Provider>
//   );
// }

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems />
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
