import { LOGO_ICON } from "../../assets/icons";
import { useHeader } from "../hooks/useHeader";
import styles from "./Header.module.css";

function Header() {
  const headerWrapper = useHeader();
  return (
    <div className={styles.wrapper} ref={headerWrapper}>
      <div>
        <img src={LOGO_ICON} alt="icon" />
      </div>
      Card Dashboard
    </div>
  );
}

export default Header;
