import { useState, useCallback } from "react";
import { Task } from "./Task";
import TaskItem from "./TaskItem";
import styles from "./TaskList.module.css";
import styled from "styled-components";

//Before Hooks
//Class
//Dumb Component

//React Hook
//1. react componetns
//2. level asli component
//3. exception: custome hooks

const a = () => console.log("salam");
const b = () => console.log("salam");
if (a === b) {
  //
}

const Input = styled.input`
  font-size: 1.5em;
  text-align: center;
  border-color: palevioletred;
  border-radius: 10%;
`;

const msg = "donya";
const str = `salam ${msg}`; //back tick, string interpolation, string template

export default function TodoList() {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "React hooks", done: true },
    { id: 2, title: "Ajax", done: false },
  ]); // <Type> generics

  const toggleTask = useCallback(
    (task: Task) => {
      task.done = !task.done;
      setTasks([...tasks]);
      // setTasks(tasks.slice());
    },
    [tasks]
  );

  const addTask = () => {
    let newtasks = [...tasks];
    newtasks.push({
      id: Math.random(),
      title,
      done: false,
    });
    setTasks(newtasks);
    setTitle("");

    //Batch

    // tasks.push({
    //   id: Math.random(),
    //   title,
    //   done: false,
    // });
    // setTasks(tasks);
  };

  return (
    <>
      <h1 className={styles.header}>New Task:</h1>
      <Input onChange={(e) => setTitle(e.target.value)} value={title} />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleTask={toggleTask}
          ></TaskItem>
        ))}
      </ul>
    </>
  );
}
