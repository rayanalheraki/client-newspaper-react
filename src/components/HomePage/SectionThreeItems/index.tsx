import clsx from "clsx";
import SectionHeader from "../SectionHeader";
import styles from "./Reports.module.css";
import type { News } from "@/types/GeneralTypes";

type IProps = {
  data: News[];
  title: string;
  pageLink?: string;
};

export default function Reports({ data, title, pageLink = "#" }: IProps) {
  return (
    <div>
      <SectionHeader title={title} withSeeAll seeAllLink={pageLink} />
      <div className={styles["grid-container"]}>
        {data.map((item, i) => (
          <div key={i} className={styles["grid-item"]}>
            <img
              className={clsx("card-shadow", styles["card-image"])}
              src={item.imageSrc}
            />
            <div className={styles["card-body"]}>
              <h2>{item.title}</h2>
              <div className={styles["sub-info"]}>
                <div className="badge">{item.category}</div>
                <div className={styles.date}>{item.date}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
