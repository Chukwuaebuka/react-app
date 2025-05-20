import ListGroup from "./components/ListGroup";

const App = () => {
  const items = ["Anambra", "Ebonyi", "Enugu", "Delta"];
  return (
    <div>
      <ListGroup heading="Cities" items={items} onSelectItem={() => {}} />
    </div>
  );
};
export default App;
