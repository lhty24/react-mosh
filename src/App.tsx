import { useState } from "react";

function App() {
  const [drink, setDrink] = useState({
    title: "Coffee",
    price: 5,
  });

  const handleClick = () => {
    const newDrink = {
      ...drink,
      price: 6,
    };

    // setDrink({ ...drink, price: 6 });
    setDrink(newDrink);
  };

  return (
    <div>
      {drink.price}
      <button onClick={handleClick}>Update Price</button>
    </div>
  );
}

export default App;
