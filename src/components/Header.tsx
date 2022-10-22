import styles from "./Header.module.css";

import rocketLogo from "../assets/rocket-logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={rocketLogo} alt="Logotipo de um foguete" />
      <h1>
        to<span>do</span>
      </h1>
    </header>
  );
}
