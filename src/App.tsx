import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import "./global.css";
import styles from "./App.module.css";

import { PlusCircle } from "phosphor-react";

import { Header } from "./components/Header";
import { EmptyList } from "./components/EmptyList";
import { TaskItem } from "./components/TaskItem";

import { getSavedTask, saveTasks } from "./services/storeTasks";

export interface Task {
  id: string;
  task: string;
  done: boolean;
}

export function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState<Task[]>([]);

  useEffect(() => {
    function loadTasks() {
      const tasks = getSavedTask("@TaskList");
      setTaskList(tasks);
    }
    loadTasks();
  }, []);

  const completedTasks = taskList.filter((t) => {
    return t.done;
  });

  const isNewCommentEmpty = task.trim().length === 0;

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value);
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    const newTask = [
      ...taskList,
      {
        id: uuidv4(),
        task,
        done: false,
      },
    ];

    setTaskList(newTask);
    saveTasks("@TaskList", newTask);
    setTask("");
  }

  function deleteTask(taskToDelete: string) {
    const delTask = taskList.filter((t) => t.id !== taskToDelete);
    setTaskList(delTask);
    saveTasks("@TaskList", delTask);
  }

  function toggleChecked(taskId: string) {
    const newList = taskList.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          done: !task.done,
        };
      }
      return task;
    });
    setTaskList(newList);
    saveTasks("@TaskList", newList);
  }

  return (
    <div>
      <Header />

      <main className={styles.main}>
        <form onSubmit={handleCreateNewTask} className={styles.newTaskForm}>
          <input
            name="newTask"
            placeholder="Adicione uma nova tarefa"
            value={task}
            onChange={handleNewTaskChange}
          />

          <button type="submit" disabled={isNewCommentEmpty}>
            Criar
            <PlusCircle size={18} />
          </button>
        </form>

        <section className={styles.wrapper}>
          <header>
            <div className={styles.infoTasks}>
              <strong>Tarefas criadas</strong>
              <span>{taskList.length}</span>
            </div>

            <div className={styles.infoTasks}>
              <strong style={{ color: " #8284fa" }}>Concluídas</strong>
              <span>{`${completedTasks.length} de ${taskList.length}`}</span>
            </div>
          </header>

          <div className={styles.todoList}>
            {taskList.length ? (
              <ul>
                {taskList.map((task) => (
                  <TaskItem
                    key={task.id}
                    taskItem={task}
                    onDeleteTask={deleteTask}
                    onToggleChecked={toggleChecked}
                  />
                ))}
              </ul>
            ) : (
              <EmptyList />
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
