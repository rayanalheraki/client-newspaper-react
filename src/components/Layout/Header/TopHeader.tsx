import clsx from "clsx";
import styles from "./Header.module.css";
import { MdSearch } from "react-icons/md";
import { BsList } from "react-icons/bs";
import { useState } from "react";

export default function TopHeader() {
  const [showPageList, setShowPageList] = useState(false);
  const handleClickList = () => {
    setShowPageList((p) => !p);
  };
  return (
    <div className={clsx(styles["top-header"], "container mx-auto")}>
      <div className={styles["show-in-small-screen"]}>
        <BsList
          onClick={handleClickList}
          style={{ fontSize: "32px", color: "var(--secondary-main)" }}
        />
        {showPageList && (
          <div className={clsx(styles["mobile-page-list"], "slide-in-left")}>
            <a
              href="#"
              className={clsx(styles["btn-nav"], styles["btn-active"])}
            >
              Home
            </a>
            <a href="#" className={clsx(styles["btn-nav"])}>
              Politics
            </a>
            <a href="#" className={clsx(styles["btn-nav"])}>
              Sport
            </a>
            <a href="#" className={clsx(styles["btn-nav"])}>
              Tech
            </a>
            <a href="#" className={clsx(styles["btn-nav"])}>
              Health
            </a>
          </div>
        )}
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
