import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import ClearAllTwoToneIcon from "@material-ui/icons/ClearAllTwoTone";
import ListAltTwoToneIcon from "@material-ui/icons/ListAltTwoTone";
import TodoList from "./TodoList";

function TodoMain() {
  const [task, setTask] = useState("");
  const [etask, seteTask] = useState("");
  const [newTask, setNewTask] = useState([]);

  const onTaskChange = (event) => {
    setTask(event.target.value);
  };
  const onTaskedit = (event) => {
    seteTask(event.target.value);
  };
  const addTask = () => {
    setNewTask((prevTasks) => {
      return [task, ...prevTasks];
    });
    setTask("");
  };
  const deleteAll = () => {
    setNewTask([]);
  };
  const deleteTask = (index) => {
    setNewTask((prevTasks) => {
      return prevTasks.filter((items, itemIndex) => itemIndex !== index);
    });
  };
  const editTask = (index) => {
    console.log(task);
    setNewTask((prevTasks) => {
      prevTasks[index] = etask;
      return prevTasks;
    });
    seteTask("");
  };
  return (
    <div className="main_div">
      <div className="center_div">
        <ListAltTwoToneIcon />
        <h1>Todo List</h1>
        <br />
        <h2>Total Task:{newTask.length}</h2>
        <input
          type="text"
          value={task}
          placeholder="Add Tasks..."
          onChange={onTaskChange}
        />

        <Button className="newBtn" onClick={addTask}>
          <AddIcon />
        </Button>

        <br />
        <ol>
          {newTask.map((val, index) => {
            return (
              <TodoList
                key={index}
                text={val}
                etask={etask}
                deleteTask={deleteTask}
                editTask={editTask}
                onTaskedit={onTaskedit}
                index={index}
              />
            );
          })}
        </ol>
        <Button className="newBtn" onClick={deleteAll}>
          <ClearAllTwoToneIcon />
        </Button>
      </div>
    </div>
  );
}

export default TodoMain;
