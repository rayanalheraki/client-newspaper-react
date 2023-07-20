import clsx from "clsx";
import styles from "../Header.module.css";
import { BiChevronDown } from "react-icons/bi";

type IProps = {
  title: string;
  links: {
    title: string;
    href?: string;
  }[];
};

export default function Dropdown({ title, links }: IProps) {
  return (
    <div className={clsx(styles.dropdown)}>
      <button className={clsx(styles.dropbtn, styles["btn-nav"])}>
        {title} <BiChevronDown />
      </button>
      <div className={styles["dropdown-content"]}>
        {links.map(({ href = "#", title }) => (
          <a key={title} href={href}>
            {title}
          </a>
        ))}
      </div>
    </div>
  );
}
