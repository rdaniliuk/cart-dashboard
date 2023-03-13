import React from "react";
// @ts-ignore
import styles from "./Button.module.css";

export interface iButton {
  icon: string;
  onClick: () => void;
}

function Button(props: iButton) {
  return (
    <button className={styles.wrapper} onClick={props.onClick}>
      <img src={props.icon} alt="button-icon" />
    </button>
  );
}

export default Button;
