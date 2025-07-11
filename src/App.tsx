import Like from "./components/Like";

const App = () => {
  const handleClick = () => {
    console.log("Clicked");
  };

  return (
    <div>
      <Like onClick={handleClick} />
    </div>
  );
};
export default App;
