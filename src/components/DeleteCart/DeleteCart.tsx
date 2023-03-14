import React from "react";
import { AppContext } from "../../App";
import styles from "./DeleteCart.module.css";
import Button from "../button/Button";
import { CANCEL_ICON, CONFIRM_ICON } from "../../assets/icons";

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
    <div>
      <p>You really want delete this cart?</p>
      <Button
        icon={CONFIRM_ICON}
        onClick={() => {
          deleteCart(cartId);
          setModalId(0);
        }}
      />
      <Button icon={CANCEL_ICON} onClick={() => setModalId(0)} />
    </div>
  );
}

export default DeleteCart;
