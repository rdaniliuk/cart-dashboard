import React from "react";
import styles from "./CreateCart.module.css";
import Button from "../button/Button";
import { CREATE_CART_ICON } from "../../assets/icons";
import { AppContext } from "../../context";
import { OFF_MODAL } from "../../constants";

function CreateCart() {
  const { carts, setCarts, setModalId } = React.useContext(AppContext);
  const [value, setValue] = React.useState(1);

  function createNewCart(productsValue: number) {
    const productsList = [];

    for (let i = 0; i < productsValue; i++) {
      productsList.push({
        id: Math.ceil(Math.random() * 100),
        quantity: Math.ceil(Math.random() * 3),
      });
    }

    fetch("https://dummyjson.com/carts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: 1,
        products: productsList,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setCarts([...carts, res]);
      });
  }

  return (
    <div>
      <form
        className={styles.form}
        action=""
        onSubmit={(e: React.FormEvent) => e.preventDefault()}
      >
        <label htmlFor="products">
          How many products do you need in the cart?
        </label>
        <input
          data-testid="product-value-input"
          type="range"
          id="products"
          onChange={(e) => {
            setValue(Number(e.target.value));
          }}
          min={1}
          max={5}
          step={1}
          value={value}
        />
        {value}
        <Button
          icon={CREATE_CART_ICON}
          onClick={() => {
            createNewCart(value);
            setModalId(OFF_MODAL);
          }}
          buttonText={"Create"}
        />
      </form>
    </div>
  );
}

export default CreateCart;
