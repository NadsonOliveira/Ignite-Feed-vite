import styles from "./App.module.css";

import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
            quidem vero. A eum praesentium suscipit harum, sint, accusantium
            architecto beatae quam, ut perspiciatis itaque. Dolorum distinctio
            aliquam dolores culpa animi!
          </p>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
            quidem vero. A eum praesentium suscipit harum, sint, accusantium
            architecto beatae quam, ut perspiciatis itaque. Dolorum distinctio
            aliquam dolores culpa animi!
          </p>
        </main>
      </div>
    </div>
  );
}

export default App;
