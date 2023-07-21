import clsx from "clsx";
import styles from "./Home.module.css";
import LastesNews from "./LastesNews";
import EditorsPicks from "./EditorsPicks";
import SectionThreeItems from "./SectionThreeItems";
import { REPORTS_DATA, WORLD_DATA } from "@/data/DATA";
import Media from "./Media";
import Parties from "./Parties";
export default function index() {
  return (
    <div className={clsx(styles["home-page-container"])}>
      {/* lastes news */}
      <LastesNews />

      {/* EDITORS' PICKS */}
      <EditorsPicks />

      {/* New Report */}

      {/* Reports */}
      <SectionThreeItems title="Reports" data={REPORTS_DATA} pageLink="#" />

      {/* World */}
      <SectionThreeItems title="World" data={WORLD_DATA} pageLink="#" />

      {/* Media */}
      <Media />

      {/* Parties */}
      <Parties />
    </div>
  );
}
