const ListGroup = () => {
  let items = [
    "Nigeria",
    "Mexico",
    "United States",
    "United kingdom",
    "Japan",
    "China",
  ];
  items = [];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};
export default ListGroup;
