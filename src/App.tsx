import { useState } from "react";

const App = () => {
  const [game, setGame] = useState({ id: 1, player: { name: "John" } });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Moses" } });
  };

  return (
    <>
      <p>Player name: {game.player.name}</p>
      <button onClick={handleClick}>Click me</button>
    </>
  );
};
export default App;
