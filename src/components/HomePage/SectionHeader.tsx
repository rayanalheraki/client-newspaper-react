import styles from "./Home.module.css";
import { BiChevronRight } from "react-icons/bi";

type IProps = {
  withSeeAll?: boolean;
  seeAllLink?: string;
  title: string;
};

export default function SectionHeader({
  title,
  seeAllLink = "#",
  withSeeAll = false,
}: IProps) {
  return (
    <div className={styles["section-header"]}>
      <h2>{title}</h2>
      <div className="divider"></div>
      {withSeeAll && (
        <a href={seeAllLink}>
          See all <BiChevronRight />
        </a>
      )}
    </div>
  );
}
