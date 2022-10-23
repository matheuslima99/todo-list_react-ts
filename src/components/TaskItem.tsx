import { Trash } from "phosphor-react";

import styles from "./TaskItem.module.css";

export function TaskItem() {
  return (
    <li className={styles.wrapper}>
      <label className={styles.checkbox}>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
        consequatur cum quo exercitationem ex, enim, similique aperiam ullam
        illum magnam quod labore autem delectus ea perspiciatis sed culpa
        maiores hic.
        <input type="checkbox" />
        <span className={styles.check}></span>
      </label>

      <button>
        <Trash size={18} />
      </button>
    </li>
  );
}
