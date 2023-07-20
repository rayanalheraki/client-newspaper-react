import styles from "./LastesNews.module.css";
import clsx from "clsx";
import { Fragment } from "react";
import { LASTES_DATA } from "@/data/DATA";
import type { Tweet, News } from "@/types/GeneralTypes";

export default function LastesNews() {
  const [firstItem, ...otherItems] = LASTES_DATA.news;
  return (
    <div className={styles["grid-container"]}>
      <ColumnOne news={firstItem} />
      <ColumnTwo news={otherItems} />
      <ColumnThree tweets={LASTES_DATA.tweets} />
    </div>
  );
}

/** Component: first column in Lastes News Section  */
type ColumnOneProps = {
  news: News;
};
const ColumnOne = ({ news }: ColumnOneProps) => {
  return (
    <div className={clsx(styles["grid-item"], styles["column1"])}>
      <div className={clsx(styles["post1-image"])}>
        <img className="card-shadow" src={news.imageSrc} />
        <div className="badge">{news.category}</div>
      </div>
      <div className={styles["post1-info"]}>
        <h2>{news.title}</h2>
        <p>{news.part_of_news}</p>
      </div>
    </div>
  );
};

/** Component: second column in Lastes News Section  */
type ColumnTwoProps = {
  news: News[];
};
const ColumnTwo = ({ news }: ColumnTwoProps) => {
  return (
    <div className={clsx(styles["grid-item"], styles["column2"])}>
      {news.map((item, i) => (
        <div key={i} className={clsx(styles["post2-conainer"])}>
          <img src={item.imageSrc} />
          <div className={styles["image-gradiant"]}></div>
          <div className={styles["post2-title"]}>
            <div className="badge">Sport</div>
            <h2>{item.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

/** Component: Third column in Lastes News Section  */
type ColumnThreeProps = {
  tweets: Tweet[];
};
const ColumnThree = ({ tweets }: ColumnThreeProps) => {
  return (
    <div className={clsx(styles["grid-item"], styles["column3"])}>
      {tweets.map((tweet, i) => (
        <Fragment key={i}>
          <div className={styles["post3-container"]}>
            <img className="card-shadow" src={tweet.imageSrc} />
            <div className={styles["post3-text"]}>
              <p>{tweet.text}</p>
              <h3>{tweet.name}</h3>
            </div>
          </div>
          <div className="divider"></div>
        </Fragment>
      ))}
    </div>
  );
};
