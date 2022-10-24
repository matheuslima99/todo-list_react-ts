import { Task } from "../App";

export function getSavedTask(key: string) {
  const myTasks = localStorage.getItem(key);
  const savedTasks: Task[] | [] = JSON.parse(myTasks!) ?? [];
  return savedTasks;
}

export function saveTasks(key: string, taskList: Task[]) {
  localStorage.setItem(key, JSON.stringify(taskList));
}
