import { useState } from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 4px;
  border-radius: 8px;
  background: ${(props) => (props.active ? "lightblue" : "none")};
`;

interface Props {
  heading: string;
  items: string[];
  onSelectItem: (item: string) => void;
}

const ListGroup = ({ heading, items, onSelectItem }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            active={selectedIndex === index}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
};
export default ListGroup;
