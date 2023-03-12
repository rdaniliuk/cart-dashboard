import React from "react";
// @ts-ignore
import styles from "./CreateButton.module.css";

export interface iButton  {
  onClick: () => void;
}


function CreateButton(props: iButton) {
  return (
    <button className={styles.wrapper} onClick={props.onClick}>
      <img
        src="https://img.icons8.com/arcade/256/create-new.png"
        alt="crt-button"
      />
    </button>
  );
}

export default CreateButton;
