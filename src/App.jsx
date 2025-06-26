import { useState } from "react";
import InputSection from "./inputSection";
import ToDoList from "./toDoList";
import ItemContext from "./itemContext";

function App() {
  const [items, setItem] = useState([]);
  return (
    <ItemContext.Provider
      value={{
        items,
        setItem,
      }}
    >
      <div className="main">
        <InputSection />
        <ToDoList />
      </div>
    </ItemContext.Provider>
  );
}

export default App;
