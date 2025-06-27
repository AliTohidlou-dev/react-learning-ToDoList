import { useContext } from "react";
import ItemContext from "./itemContext";

function InputSection() {
  const context = useContext(ItemContext);
  const enter = (e) => {
    if (e.key == "Enter") {
      e.preventDefault(); 
      addList();
    }
  };
  const addList = () => {
    const input = document.querySelector("input");
    if (input.value === "") {
      alert("write something..");
    } else {
      const newItem = {
        id: Math.random(),
        title: input.value,
        status: null,
      };
      context.setItem([...context.items, newItem]);
      input.value = "";
    }
    console.log(context.items);
  };
  const handleSubmit=(e)=>{
    e.preventDefault(); 
    addList()
  }
  return (
    <form className="input-section">
      <input
        type="text"
        placeholder="write here..."
        className="toDoInput"
        onKeyDown={enter}
      />
      <button type="submit" onClick={handleSubmit}>
        Push
      </button>
    </form>
  );
}

export default InputSection;
