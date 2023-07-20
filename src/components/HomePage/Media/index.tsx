import SectionHeader from "../SectionHeader";
import styles from "./Media.module.css";
import { BsPlayCircleFill } from "react-icons/bs";
import { MEDIA_DATA } from "@/data/DATA";
import type { Media } from "@/types/GeneralTypes";

export default function Media() {
  const [firstItem, ...otherItems] = MEDIA_DATA;
  return (
    <div>
      <SectionHeader title="Media" withSeeAll />
      <div className={styles["grid-container"]}>
        <div className={styles["grid-main-item"]}>
          <img className="card-shadow" src={firstItem.thumbnail} />
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
                <img className="card-shadow" src={item.thumbnail} />
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
