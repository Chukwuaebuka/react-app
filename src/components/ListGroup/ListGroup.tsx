import { useState } from "react";
import styles from "./ListGroup.module.css";

interface Props {
  heading: string;
  items: string[];
  onSelectItem: (item: string) => void;
}

const ListGroup = ({ heading, items, onSelectItem }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className={[styles["list-group"], styles["container"]].join(" ")}>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};
export default ListGroup;
