import React from "react";
import styles from "./Button.module.css";

export interface IButton {
  icon: string;
  onClick: () => void;
}

function Button(props: IButton) {
  return (
    <button className={styles.wrapper} onClick={props.onClick}>
      <img src={props.icon} alt="button-icon" />
    </button>
  );
}

export default Button;
