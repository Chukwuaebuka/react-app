import { useState } from "react";

const App = () => {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
  };

  return (
    <>
      <h1>{pizza.name}</h1>
      <h2>Toppings</h2>
      <ul>
        {pizza.toppings.map((topping) => (
          <li>{topping}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Click me</button>
    </>
  );
};
export default App;
