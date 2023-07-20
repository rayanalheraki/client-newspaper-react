import clsx from "clsx";
import styles from "./Home.module.css";
import LastesNews from "./LastesNews";

export default function index() {
  return (
    <div className={clsx(styles["parent"])}>
      {/* lastes news */}
      <LastesNews />

      {/* EDITORS' PICKS */}
      <div>EDITORS' PICKS</div>

      {/* New Report */}
      <div>New Report</div>

      {/* Reports */}
      <div>Reports</div>

      {/* Media */}
      <div>Media</div>
    </div>
  );
}
