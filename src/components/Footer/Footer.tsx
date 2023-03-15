import { GITHUB_ICON, LINKEDIN_ICON } from "../../assets/icons";
import { GITHUB_LINK, LINKED_LINK } from "../../assets/link";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.wrapper}>
      <a href={LINKED_LINK} target="_blank" rel="noreferrer">
        <img src={LINKEDIN_ICON} alt="icon" />
      </a>
      <a href={GITHUB_LINK} target="_blank" rel="noreferrer">
        <img src={GITHUB_ICON} alt="icon" />
      </a>
    </div>
  );
}

export default Footer;
