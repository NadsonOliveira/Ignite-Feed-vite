import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://lh3.googleusercontent.com/a-/AOh14GjAnDEZYzzh5DfefoHPVVXdOUYDzcld0d7Yqz-w=s288-p-rw-no"
          />

          <div className={styles.authorInfo}>
            <strong>Nadson Oliveira</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="23 the juny the 2022" dateTime="2022-06-23 09:23:00">
          {" "}
          Públicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          👉<a> jane.design/doctorcare</a>{" "}
        </p>

        <p>
          <a>#novoprojeto</a> <a>#nlw</a> <a>#rocketseat </a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedBack</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>
    </article>
  );
}
