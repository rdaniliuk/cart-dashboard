import React from "react";
// @ts-ignore
import styles from './CartPreview.module.css'
import DeleteButton from "../buttons/deleteButton/DeleteButton";

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
      <div>
         {props.id}
      </div>
      <div>
         <DeleteButton onClick={function (): void {
          throw new Error("Function not implemented.");
        } } />
      </div>
    </div>
  );
}

export default CartPreview;
