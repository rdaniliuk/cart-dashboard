import React from "react";
import styles from "./CartPreview.module.css";
import Button from "../button/Button";
import { DELETE_BUTTON_ICON } from "../../assets/icons";

export interface ICart {
  id?: number;
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
  return (
    <div className={styles.wrapper}>
      <div>{props.id}</div>
      <div>
        <Button
          onClick={() => console.log("delete")}
          icon={DELETE_BUTTON_ICON}
        />
      </div>
    </div>
  );
}

export default CartPreview;
