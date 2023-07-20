import clsx from "clsx";
import styles from "./Header.module.css";
import Dropdown from "@/components/Layout/Header/Dropdown/index";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={clsx("container mx-auto")}>
        <div className={clsx(styles["pages-list"])}>
          <a
            href="#home"
            className={clsx(styles["btn-nav"], styles["btn-active"])}
          >
            Home
          </a>
          <a href="#politics" className={clsx(styles["btn-nav"])}>
            Politics
          </a>
          <Dropdown
            title="Sport"
            links={[
              { title: "link 1", href: "#" },
              { title: "link2", href: "#" },
              { title: "link 3", href: "#" },
            ]}
          />
          <a href="#tech" className={clsx(styles["btn-nav"])}>
            Tech
          </a>
          <a href="#health" className={clsx(styles["btn-nav"])}>
            Health
          </a>

          <Dropdown
            title="Science"
            links={[
              { title: "link 4", href: "#" },
              { title: "link 5", href: "#" },
              { title: "link 6", href: "#" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
