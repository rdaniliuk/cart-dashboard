import React, { useEffect, useState } from "react";
import CartPreview from "../CartPreview/CartPreview";
import { ICart } from "../CartPreview/CartPreview";
import styles from "./CartsList.module.css";
import Button from "../button/Button";
import { CREATE_BUTTON_ICON } from "../../assets/icons";
import { AppContext } from "../../context";
import { CREATE_MODAL } from "../../constants";

function CartsList() {
  const { carts, setCarts, setModalId } = React.useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    fetch("https://dummyjson.com/carts")
      .then((res) => res.json())
      .then((res) => {
        setCarts(res.carts);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2>All Carts ({carts.length})</h2>
        <Button
          icon={CREATE_BUTTON_ICON}
          onClick={() => setModalId(CREATE_MODAL)}
          buttonText={"Create"}
        />
      </div>
      <div className={styles.list}>
        {!isLoading ? (
          carts.map((cart: ICart, index: number) => (
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
