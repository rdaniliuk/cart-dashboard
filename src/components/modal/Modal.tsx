import React from "react";
import styles from "./Modal.module.css";

interface IModal {
  setModalId: (state: number) => void;
  children: React.ReactNode;
}

function Modal({ setModalId, children }: IModal) {
  return (
    <div className={styles.modal} onClick={() => setModalId(0)}>
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
