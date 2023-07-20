import styles from "./Footer.module.css";
import clsx from "clsx";
export default function Footer() {
  return (
    <div className={clsx(styles.footer, "center")}>
      <div>2023 © All Rights Reserved</div>
    </div>
  );
}
