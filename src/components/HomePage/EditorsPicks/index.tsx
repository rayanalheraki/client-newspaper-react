import clsx from "clsx";
import styles from "./EditorsPicks.module.css";
import SectionHeader from "../SectionHeader";

export default function EditorsPicks() {
  return (
    <div>
      <SectionHeader title="Editor's Picks" />
      <div className={clsx(styles["grid-container"])}>
        <div className={clsx(styles["grid-item"], styles["column-divider"])}>
          <span>1</span>
          <p>Lorem ipsum dolor sit amet consectetur rhoncus nisl.</p>
        </div>
        <div className={clsx(styles["grid-item"], styles["column-divider"])}>
          <span>2</span>
          <p>
            Lorem ipsum dolor sit amet consectetur. rhoncus nisl maecenas
            viverra.
          </p>
        </div>
        <div className={clsx(styles["grid-item"], styles["column-divider"])}>
          <span>3</span>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className={styles["grid-item"]}>
          <span>4</span>
          <p>Lorem ipsum dolor sit amet consectetur. rhoncus.</p>
        </div>
      </div>
    </div>
  );
}
