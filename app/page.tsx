import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>hello</h1>
      <Link href="/about">Go to about</Link>
    </main>
  );
}
