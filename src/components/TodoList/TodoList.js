import React, { useState } from "react";
import "./TodoList.scss";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { ListBox } from "primereact/listbox";
import { Panel } from "primereact/panel";

import ListItem from "../ListItem/ListItem";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { label: task, completed: false }]);
      setTask("");
    }
  };

  const toggleTaskCompletion = (taskToToggle) => {
    const updatedTasks = tasks.map((t) =>
      t === taskToToggle ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  const removeTask = (taskToRemove) => {
    const updatedTasks = tasks.filter((t) => t !== taskToRemove);
    setTasks(updatedTasks);
  };

  return (
    <>
      <Panel header="Todo List">
        <div className="p-inputgroup mb-3">
          <InputText
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="New Task"
          />
          <Button
            label="Add"
            icon="pi pi-plus"
            onClick={addTask}
            disabled={!task.length}
          />
        </div>

        <ListBox
          options={tasks}
          itemTemplate={(item) => (
            <ListItem
              item={item}
              onToggle={() => toggleTaskCompletion(item)}
              onRemove={() => removeTask(item)}
            ></ListItem>
          )}
        />
      </Panel>
    </>
  );
};

export default TodoList;
