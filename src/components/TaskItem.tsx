import { Trash } from "phosphor-react";

import styles from "./TaskItem.module.css";

import { Task } from "../App";

interface TaskProps {
  taskItem: Task;
}

export function TaskItem({ taskItem }: TaskProps) {
  return (
    <li className={styles.wrapper}>
      <label
        style={{
          textDecoration: `${taskItem.done && "line-through"}`,
          color: `${taskItem.done && "#808080"}`,
        }}
        className={styles.checkbox}
      >
        {" "}
        {taskItem.task}
        <input type="checkbox" checked={taskItem.done} />
        <span className={styles.check}></span>
      </label>

      <button>
        <Trash size={18} />
      </button>
    </li>
  );
}
