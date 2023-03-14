import React from "react";
import { IProduct } from "../CartPreview/CartPreview";
import styles from "./CartInfoMobile.module.css";

function CartInfoMobile({ products }: { products: IProduct[] }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header} >
         <p>Title</p>
         <p>Discount Price</p>
      </div>
      {products.map((product) => (
        <div className={styles.product__content}>
          <div className={styles.product__title}>{product.title}</div>
          <div>{product.discountPrice}</div>
        </div>
      ))}
    </div>
  );
}

export default CartInfoMobile;
