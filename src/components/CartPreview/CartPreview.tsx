import React from "react";
import styles from "./CartPreview.module.css";
import Button from "../button/Button";
import { DELETE_BUTTON_ICON } from "../../assets/icons";

export interface iCart {
  id?: number;
  products?: [];
  total?: number;
  discountedTotal?: number;
  totalProducts?: number;
  totalQuantity?: number;
  userId?: number;
}

function CartPreview(props: iCart) {
  return (
    <div className={styles.wrapper}>
      <div>{props.id}</div>
      <div>
        <Button
          onClick={() => console.log('delete')}
          icon={DELETE_BUTTON_ICON}
        />
      </div>
    </div>
  );
}

export default CartPreview;
