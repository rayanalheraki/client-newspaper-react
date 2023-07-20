import styles from "./Header.module.css";
import TopHeader from "./TopHeader";
import Navbar from "./Navbar";

export default function index() {
  return (
    <div className={styles.header}>
      <TopHeader />
      <Navbar />
    </div>
  );
}
