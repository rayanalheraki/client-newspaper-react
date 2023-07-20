import clsx from "clsx";
import styles from "./Header.module.css";
import { MdSearch } from "react-icons/md";
import { BsList } from "react-icons/bs";

export default function TopHeader() {
  return (
    <div className={clsx(styles["top-header"], "container mx-auto")}>
      <div className={styles["show-in-small-screen"]}>
        <BsList style={{ fontSize: "32px", color: "var(--secondary-main)" }} />
      </div>
      <div className={styles.logo}>
        <span style={{ color: "var(--primary-main)" }}>LO</span>
        <span style={{ color: "var(--secondary-main)" }}>GO</span>
      </div>
      <div className={styles["show-in-small-screen"]}>
        <MdSearch
          style={{ fontSize: "32px", color: "var(--secondary-main)" }}
        />
      </div>
      <div className={styles["search-box"]}>
        <MdSearch style={{ fontSize: "22px" }} />
        <input
          className={styles["search-input"]}
          placeholder="search..."
          type="text"
        />
      </div>
    </div>
  );
}
