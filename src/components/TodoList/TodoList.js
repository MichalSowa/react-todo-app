import React, { useState } from "react";
import "./TodoList.scss";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Panel } from "primereact/panel";

import List from "../List/List";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { label: task, completed: false }]);
      setTask("");
    }
  };

  const toggleTaskCompletion = (taskToToggle) => {
    if (taskToToggle.completed) {
      setTasks([...tasks, { ...taskToToggle, completed: false }]);
      setDoneTasks(doneTasks.filter((t) => t !== taskToToggle));
    } else {
      setDoneTasks([...doneTasks, { ...taskToToggle, completed: true }]);
      setTasks(tasks.filter((t) => t !== taskToToggle));
    }
  };

  const removeTask = (taskToRemove) => {
    setTasks(tasks.filter((t) => t !== taskToRemove));
  };

  const removeDoneTask = (taskToRemove) => {
    setDoneTasks(doneTasks.filter((t) => t !== taskToRemove));
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

        <List
          listTitle="Tasks"
          listData={tasks}
          onToggle={toggleTaskCompletion}
          onRemove={removeTask}
        />
        <List
          listTitle="Done Tasks"
          listData={doneTasks}
          onRemove={removeDoneTask}
        />
      </Panel>
    </>
  );
};

export default TodoList;
