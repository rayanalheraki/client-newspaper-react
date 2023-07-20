import SectionHeader from "../SectionHeader";
import styles from "./Media.module.css";
import { BsPlayCircleFill } from "react-icons/bs";

type IProps = {
  data: {
    title: string;
    category: string;
    link: string;
    date: string;
    src: string;
  }[];
  title: string;
  pageLink?: string;
};

export default function Media({ data, title, pageLink = "#" }: IProps) {
  const [firstItem, ...otherItems] = data;
  return (
    <div>
      <SectionHeader title={title} withSeeAll seeAllLink={pageLink} />
      <div className={styles["grid-container"]}>
        <div className={styles["grid-main-item"]}>
          <img src={firstItem.src} />
          <div className={styles["image-gradiant"]}>
            <BsPlayCircleFill className={styles["play-icon"]} />
          </div>

          <div className={styles["main-item-title"]}>
            <h3>{firstItem.title}</h3>
            <p>{firstItem.date}</p>
          </div>
        </div>
        <div className={styles["grid-sub-item"]}>
          {otherItems.map((item, i) => (
            <div key={i} className={styles["mini-video-cart"]}>
              <div className={styles["mini-cart-image"]}>
                <img src={item.src} />
                <div className={styles["image-gradiant"]}>
                  <BsPlayCircleFill className={styles["play-icon"]} />
                </div>
              </div>
              <div className={styles["card-body"]}>
                <h2>{item.title}</h2>

                <div className={styles.date}>{item.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
