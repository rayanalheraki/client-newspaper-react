import clsx from "clsx";
import styles from "./Header.module.css";
import Dropdown from "@/components/Layout/Header/Dropdown/index";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [direction, setDirection] = useState("ltr"); // 'ltr' stands for Left-to-Right

  // Function to toggle the direction on button click
  const toggleDirection = () => {
    setDirection((prevDirection) => (prevDirection === "ltr" ? "rtl" : "ltr"));
  };
  useEffect(() => {
    // Update the dir attribute of the <html> tag
    document.documentElement.setAttribute("dir", direction);
  }, [direction]);
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
          <div onClick={toggleDirection} className={styles["btn-nav"]}>
            LTR
          </div>
        </div>
      </div>
    </div>
  );
}
