import { createContext } from "react";

const ItemContext = createContext({
  items: [],
  setItem: () => {},
});
export default ItemContext;
