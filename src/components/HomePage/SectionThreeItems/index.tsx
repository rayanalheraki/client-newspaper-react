import SectionHeader from "../SectionHeader";
import styles from "./Reports.module.css";

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

export default function Reports({ data, title, pageLink = "#" }: IProps) {
  return (
    <div>
      <SectionHeader title={title} withSeeAll seeAllLink={pageLink} />
      <div className={styles["grid-container"]}>
        {data.map((item, i) => (
          <div key={i} className={styles["grid-item"]}>
            <img className={styles["card-image"]} src={item.src} />
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
