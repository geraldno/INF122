import Image from "next/image";
import styles from "./page.module.css";
import Dogs from "./components/dogs";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Dogs/>
      </div>
    </main>
  );
}
