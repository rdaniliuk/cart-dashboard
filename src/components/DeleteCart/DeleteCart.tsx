import React from "react";
import styles from "./DeleteCart.module.css";
import Button from "../button/Button";
import { CANCEL_ICON, CONFIRM_ICON } from "../../assets/icons";
import { AppContext } from "../../context";
import { OFF_MODAL } from "../../constants";

function DeleteCart({ cartId }: { cartId: number }) {
  const { carts, setCarts, setModalId } = React.useContext(AppContext);

  function deleteCart(id: number) {
    fetch(`https://dummyjson.com/carts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        const newCartsList = carts.filter((cart) => cart.id !== id);
        setCarts(newCartsList);
      });
  }

  return (
    <div className={styles.wrapper}>
      <p>You really want delete this cart?</p>
      <div className={styles.buttons}>
        <Button
          icon={CONFIRM_ICON}
          onClick={() => {
            deleteCart(cartId);
            setModalId(OFF_MODAL);
          }}
          buttonText={""}
        />
        <Button
          icon={CANCEL_ICON}
          onClick={() => setModalId(OFF_MODAL)}
          buttonText={""}
        />
      </div>
    </div>
  );
}

export default DeleteCart;
