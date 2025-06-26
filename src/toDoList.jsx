import { useContext } from "react";
import ToDoItem from "./toDoItem";
import ItemContext from "./itemContext";

function ToDoList() {
  const { items } = useContext(ItemContext);
  return (
    <div className="to-do-list">
      {items.length == 0 ? <p>nothing to show</p> : <ToDoItem />}
    </div>
  );
}
export default ToDoList;
