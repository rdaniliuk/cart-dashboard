import React from "react";
import styles from "./CartPreview.module.css";
import Button from "../button/Button";
import { DELETE_BUTTON_ICON } from "../../assets/icons";
import { AppContext } from "../../App";
import DeleteCart from "../DeleteCart/DeleteCart";
import Modal from "../modal/Modal";

export interface ICart {
  id: number;
  products?: IProduct[];
  total?: number;
  discountedTotal?: number;
  totalProducts?: number;
  totalQuantity?: number;
  userId?: number;
}

export interface IProduct {
  discountPercentage: number;
  discountedPrice: number;
  discountPrice?: number;
  id: number;
  price: number;
  quantity: number;
  title: string;
  total: number;
}

function CartPreview(props: ICart) {
  const { setModalId, setSelectedCart } = React.useContext(AppContext);
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.wrapper}
        onClick={() => {
          setSelectedCart(props);
          setModalId(1);
        }}
      >
        {props.id}
      </div>
      <div>
        <Button
          onClick={() => {
            setSelectedCart(props);
            setModalId(3);
          }}
          icon={DELETE_BUTTON_ICON}
        />
      </div>
    </div>
  );
}

export default CartPreview;
