import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";

export function Sidebar() {
  return (
    <>
      <aside className={styles.sideBar}>
        <img
          className={styles.cover}
          src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        ></img>

        <div className={styles.profile}>
          <img
            className={styles.avatar}
            src="https://lh3.googleusercontent.com/a-/AOh14GjAnDEZYzzh5DfefoHPVVXdOUYDzcld0d7Yqz-w=s432-p-rw-no"
          />
          <strong>Nadson Oliveira</strong>
          <span>web Developer</span>
        </div>
        <footer>
          <a href="#">
            <PencilLine size={20} />
            Editar seu Perfil
          </a>
        </footer>
      </aside>
    </>
  );
}
