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

  const handleSelectItem = (item: string): void => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Countries"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
};
export default App;
