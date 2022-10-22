import "./global.css";
import styles from "./App.module.css";

import { PlusCircle } from "phosphor-react";

import { Header } from "./components/Header";
import { EmptyList } from "./components/EmptyList";

export function App() {
  return (
    <div>
      <Header />

      <main className={styles.main}>
        <form className={styles.newTaskForm}>
          <input name="newTask" placeholder="Adicione uma nova tarefa" />

          <button>
            Criar
            <PlusCircle size={18} />
          </button>
        </form>

        <section className={styles.wrapper}>
          <header>
            <div className={styles.infoTasks}>
              <strong>Tarefas criadas</strong>
              <span>0</span>
            </div>

            <div className={styles.infoTasks}>
              <strong style={{ color: " #8284fa" }}>Concluídas</strong>
              <span>0</span>
            </div>
          </header>

          <div className={styles.todoList}>
            <EmptyList />
          </div>
        </section>
      </main>
    </div>
  );
}
