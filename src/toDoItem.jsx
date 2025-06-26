import { useContext } from "react";
import ItemContext from "./itemContext";

function ToDoItem() {
  const { items, setItem } = useContext(ItemContext);
  const accept = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, status: "accept" } : item
    );
    setItem(updatedItems);
  };
  const reject = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, status: "reject" } : item
    );
    setItem(updatedItems);
  };
  const del = (id) => {
    const delItem = items.filter((item) => item.id === id);
    items.splice(delItem, 1);
    setItem([...items]);
  };
  return (
    <>
      {items.map((item) => (
        <div
          className={
            item.status !== null ? `to-do-item ${item.status}` : "to-do-item"
          }
          key={item.id}
        >
          <p>{item.title}</p>
          <div className="item-icons">
            {item.status == null || item.status == "reject" ? (
              <i className="fa fa-check" onClick={() => accept(item.id)}></i>
            ) : (
              ""
            )}
            {item.status == null || item.status == "accept" ? (
              <i className="fa fa-close" onClick={() => reject(item.id)}></i>
            ) : (
              ""
            )}
            <i className="fa fa-trash" onClick={() => del(item.id)}></i>
          </div>
        </div>
      ))}
    </>
  );
}

export default ToDoItem;
