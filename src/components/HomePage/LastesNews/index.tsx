import styles from "./LastesNews.module.css";
import clsx from "clsx";
import { Fragment } from "react";
export default function LastesNews() {
  return (
    <div className={styles["grid-container"]}>
      <ColumnOne />
      <ColumnTwo />
      <ColumnThree />
    </div>
  );
}

const ColumnOne = () => {
  return (
    <div className={clsx(styles["grid-item"], styles["column1"])}>
      <div className={clsx(styles["post1-image"])}>
        <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d" />
        <div className="badge">Science</div>
      </div>
      <div className={styles["post1-info"]}>
        <h2>Scientists Discover New Species of Butterfly</h2>
        <p>
          Scientists have recently identified a new species of butterfly in the
          Amazon rainforest scientists have recently identified a new species of
          butterfly in the Amazon rainforest. scientists have recently
          identified a new species of butterfly in the Amazon rainforest
          scientists have recently...
        </p>
      </div>
    </div>
  );
};

const ColumnTwo = () => {
  return (
    <div className={clsx(styles["grid-item"], styles["column2"])}>
      {[1, 1, 1].map((_, i) => (
        <div key={i} className={clsx(styles["post2-conainer"])}>
          <img src="https://images.unsplash.com/photo-1637203727700-9d86c74904d6" />
          <div className={styles["image-gradiant"]}></div>
          <div className={styles["post2-title"]}>
            <div className="badge">Sport</div>
            <h2>World Cup Finals: Team A Wins in Thrilling Overtime</h2>
          </div>
        </div>
      ))}
    </div>
  );
};
const ColumnThree = () => {
  return (
    <div className={clsx(styles["grid-item"], styles["column3"])}>
      {[1, 1, 1, 1].map((_, i) => (
        <Fragment key={i}>
          <div className={styles["post3-container"]}>
            <img src="https://images.unsplash.com/photo-1557862921-37829c790f19" />
            <div className={styles["post3-text"]}>
              <p>
                Lorem ipsum dolor sit amet consectetur. Eget suspendisse turpis
                nunc tristique ut ultrices.
              </p>
              <h3>Ahmet Can</h3>
            </div>
          </div>
          <div className="divider"></div>
        </Fragment>
      ))}
    </div>
  );
};
