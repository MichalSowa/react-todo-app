import React from "react";
import { ListBox } from "primereact/listbox";
import ListItem from "../ListItem/ListItem";

const List = ({ listTitle, listData, onToggle, onRemove }) => {
  const listItemsActions = {
    onToggle,
    onRemove,
  };

  return (
    <>
      <h3>{listTitle}</h3>
      <ListBox
        options={listData}
        itemTemplate={(item) => <ListItem item={item} {...listItemsActions} />}
      />
    </>
  );
};

export default List;
