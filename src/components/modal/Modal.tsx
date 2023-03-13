import React from "react";
import styles from "./Modal.module.css";

interface IModal {
  setModalIsOpen: (state: boolean) => void;
  children: React.ReactNode;
}

function Modal({ setModalIsOpen, children }: IModal) {
  return (
    <div className={styles.modal} onClick={() => setModalIsOpen(false)}>
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
