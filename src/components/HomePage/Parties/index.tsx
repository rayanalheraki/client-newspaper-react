import { useState } from "react";
import styles from "./Parties.module.css";
import clsx from "clsx";
import SectionHeader from "../SectionHeader";

type Taps = "peoples" | "nations" | "other";

export default function Parties() {
  const [selectedTab, setSelectedTab] = useState<Taps>("peoples");

  const handleClickTab = (value: Taps) => setSelectedTab(value);

  return (
    <div className={styles["tabs-container"]}>
      <SectionHeader title="Parties & Alliance" />
      <div className={styles["tabs-buttons"]}>
        <button
          className={clsx(
            styles["tab-btn"],
            selectedTab === "peoples" && styles["tab-btn-active"]
          )}
          onClick={() => handleClickTab("peoples")}
        >
          People's
          <br />
          <span>Allance</span>
        </button>
        <button
          className={clsx(
            styles["tab-btn"],
            selectedTab === "nations" && styles["tab-btn-active"]
          )}
          onClick={() => handleClickTab("nations")}
        >
          nation's
          <br />
          <span>Allance</span>
        </button>
        <button
          className={clsx(
            styles["tab-btn"],
            selectedTab === "other" && styles["tab-btn-active"]
          )}
          onClick={() => handleClickTab("other")}
        >
          Other
          <br />
          <span>Parties</span>
        </button>
      </div>
      {selectedTab === "peoples" && <PeopleContent />}
      {selectedTab === "nations" && (
        <div className={styles["tabs-content"]}>No Content yet</div>
      )}
      {selectedTab === "other" && (
        <div className={styles["tabs-content"]}>No Content yet</div>
      )}
    </div>
  );
}

const PeopleContent = () => {
  return (
    <div className={styles["tabs-content"]}>
      <p>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.standard dummy text ever since the 1500s
        standard dummy text ever since the 1500s.
      </p>
      <div className={styles["parties"]}>
        <div className={styles.party}>
          <img src="https://logowik.com/content/uploads/images/458_akparti.jpg" />
          <div className={styles["party-text"]}>
            <h3>AK PARTY</h3>
            <h4>RECEP TAYYIP ERDOGAN</h4>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s
            </p>
          </div>
        </div>
        <div className={styles.party}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/MHP_logo_Turkey.png" />
          <div className={styles["party-text"]}>
            <h3>MHP PARTY</h3>
            <h4>DEVLET BAHCELI</h4>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s
            </p>
          </div>
        </div>
        <div className={styles.party}>
          <img src="https://i.dha.com.tr/i/dha/75/0x410/6163115045d2a06a3ce183dd.jpg" />
          <div className={styles["party-text"]}>
            <h3>BBP PARTY</h3>
            <h4>MUSTAFA DESTICI</h4>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
