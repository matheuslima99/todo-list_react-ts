import { Trash } from "phosphor-react";

import { useState } from "react";

import styles from "./TaskItem.module.css";

import { Task } from "../App";

interface TaskProps {
  taskItem: Task;
  onDeleteTask: (task: string) => void;
  onToggle: (id: string) => void;
}

export function TaskItem({ taskItem, onDeleteTask, onToggle }: TaskProps) {
  function deleteTask() {
    onDeleteTask(taskItem.id);
  }

  function toggleIsChecked() {
    onToggle(taskItem.id);
  }

  return (
    <li className={styles.wrapper}>
      <label
        style={{
          textDecoration: `${taskItem.done ? "line-through" : "none"}`,
          color: `${taskItem.done ? "#808080" : " #f2f2f2"}`,
        }}
        className={styles.checkbox}
      >
        {" "}
        {taskItem.task}
        <input type="checkbox" checked={taskItem.done} onChange={toggleIsChecked} />
        <span className={styles.check}></span>
      </label>

      <button onClick={deleteTask}>
        <Trash size={18} />
      </button>
    </li>
  );
}
