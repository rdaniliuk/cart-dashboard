import React from "react";
import styles from "./Main.module.css";
import CartsList from "../CartsList/CartsList";

function Main() {
  return (
    <div className={styles.main}>
      <CartsList />
    </div>
  );
}

export default Main;
