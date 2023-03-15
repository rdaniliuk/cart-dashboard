import React from "react";
import { OFF_MODAL } from "../../constants";
import styles from "./Modal.module.css";

interface IModal {
  setModalId: (state: number) => void;
  children: React.ReactNode;
}

function Modal({ setModalId, children }: IModal) {
  return (
    <div className={styles.modal} onClick={() => setModalId(OFF_MODAL)}>
      <div
        className={styles.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
