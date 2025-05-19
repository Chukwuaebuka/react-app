import Button from "./components/Button";

const App = () => {
  const handleClick = () => {
    console.log("Clicked");
  };
  return (
    <div>
      <Button color="success" onClick={handleClick}>
        Button 1
      </Button>
    </div>
  );
};
export default App;
