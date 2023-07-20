import clsx from "clsx";
import styles from "./Layout.module.css";
import { ReactNode } from "react";
import Header from "./Header";

type IProps = {
  children: ReactNode;
};

export default function Layout({ children }: IProps) {
  return (
    <div>
      <Header />
      <main className={styles["main-section"]}>
        <div className={clsx(styles.layout, "container mx-auto")}>
          {children}
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
