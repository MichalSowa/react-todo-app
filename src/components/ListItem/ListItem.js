import React from "react";

import { Button } from "primereact/button";

const ListItem = ({ item, onToggle, onRemove }) => {
  return (
    <>
      <div className="flex justify-content-between align-items-center">
        <span
          style={{
            textDecoration: item.completed ? "line-through" : "none",
          }}
        >
          {item.label}
        </span>
        <div>
          <Button
            icon="pi pi-check"
            className="p-button-rounded p-button-success mr-2"
            onClick={() => onToggle(item)}
          />
          <Button
            icon="pi pi-trash"
            className="p-button-rounded p-button-danger"
            onClick={() => onRemove(item)}
          />
        </div>
      </div>
    </>
  );
};

export default ListItem;
