import { useState } from "react";
import produce from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  // principle: the component holding the state is the one responsible for updating it
  // that's why we clear cartItems on the App level not the Cart level
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);
  const handleClear = () => {
    setCartItems([]);
  };

  return (
    <div>
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={handleClear} />
    </div>
  );
}

export default App;
