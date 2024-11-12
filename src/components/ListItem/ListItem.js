import React from "react";
import { Button } from "primereact/button";

const ListItem = ({ item, onToggle, onUntoggle, onRemove }) => {
  const renderToggleButton = () => {
    if (onToggle) {
      return (
        <Button
          icon="pi pi-check"
          className="p-button-rounded p-button-success mr-2"
          onClick={() => onToggle(item)}
        />
      );
    }
  };

  const renderUntoggleButton = () => {
    if (onUntoggle) {
      return (
        <Button
          icon="pi pi-undo"
          className="p-button-rounded p-button-warning mr-2"
          onClick={() => onUntoggle(item)}
        />
      );
    }
  };

  const renderRemoveButton = () => {
    if (onRemove) {
      return (
        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-danger"
          onClick={() => onRemove(item)}
        />
      );
    }
  };

  return (
    <div className="flex justify-content-between align-items-center">
      <span>{item.label}</span>
      <div>
        {renderToggleButton()}
        {renderUntoggleButton()}
        {renderRemoveButton()}
      </div>
    </div>
  );
};

export default ListItem;
