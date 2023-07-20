import { FaYoutube, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import styles from "./Layout.module.css";

export default function SocialMedia() {
  return (
    <div className={styles.icons}>
      <FaFacebook className={styles["social-media-icon"]} />
      <FaYoutube className={styles["social-media-icon"]} />
      <FaInstagram className={styles["social-media-icon"]} />
      <FaTwitter className={styles["social-media-icon"]} />
    </div>
  );
}
