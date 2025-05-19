import ListGroup from "./components/ListGroup";

const App = () => {
  let items = [
    "Nigeria",
    "Mexico",
    "United States",
    "United kingdom",
    "Japan",
    "China",
  ];
  return (
    <div>
      <ListGroup items={items} heading="Countries" />
    </div>
  );
};
export default App;
