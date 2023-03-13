import React, { useEffect, useState } from "react";
import CartPreview from "../CartPreview/CartPreview";
import { iCart } from "../CartPreview/CartPreview";
import styles from "./CartsList.module.css";
import Button from "../button/Button";
import { CREATE_BUTTON_ICON } from "../../assets/icons";
import { AppContext } from "../../App";
import CreateCart from "../CreateCart/CreateCart";
import Modal from "../modal/Modal";

function CartsList() {

  const { carts, setCarts } = React.useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    fetch("https://dummyjson.com/carts")
      .then((res) => res.json())
      .then((res) => {
        setCarts(res.carts);
        setIsLoading(false);
        console.log(res.carts);
      });
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2>All Carts ({carts.length})</h2>
        <Button
          icon={CREATE_BUTTON_ICON}
          onClick={() => console.log("create cart")}
        />
      </div>
      <div>
        {!isLoading ? (
          carts.map((cart: iCart, index: number) => (
            <CartPreview key={index} {...cart} />
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}

export default CartsList;