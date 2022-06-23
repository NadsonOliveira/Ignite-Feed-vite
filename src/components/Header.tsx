import styles from "./Header.module.css";
import logoIgnite from "../assets/Ignite-logo.svg";

export function Header() {
  return (
    <>
      <div className={styles.headerIgnite}>
        <img src={logoIgnite} alt="logoTIpo do ignite"></img>
      </div>
    </>
  );
}
