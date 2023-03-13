import React, { useEffect, useState } from "react";
import CartPreview from "../CartPreview/CartPreview";
import { iCart } from "../CartPreview/CartPreview";
// @ts-ignore
import styles from "./CartsList.module.css";
import Button from "../button/Button";
import { CREATE_BUTTON_ICON } from "../../assets/icons";
import { AppContext } from "../../App";

function CartsList() {
  // @ts-ignore
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

  function createCart() {
    setIsLoading(true);
    fetch("https://dummyjson.com/carts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: 1,
        products: [
          {
            id: 60,
            quantity: 1,
          },
          {
            id: 50,
            quantity: 2,
          },
        ],
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        // @ts-ignore
        setCarts([...carts, res]);
        setIsLoading(false);
      });
  }

  function deleteCart(id: number) {
    fetch(`https://dummyjson.com/carts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        // @ts-ignore
        const newCartsList = carts.filter((cart) => cart.id !== id);
        setCarts(newCartsList);
      });
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2>All Carts ({carts.length})</h2>
        <Button icon={CREATE_BUTTON_ICON} onClick={createCart} />
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
