import React, { useState } from "react";
import "./App.css";
import Main from "./components/Main/Main";
import Modal from "./components/modal/Modal";
import CreateCart from "./components/CreateCart/CreateCart";
import DeleteCart from "./components/DeleteCart/DeleteCart";
import CartInfo from "./components/CartInformation/CartInfo";
import { ICart } from "./components/CartPreview/CartPreview";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { ModalId, AppContext, defaultContext } from "./context";
import { INFO_MODAL, CREATE_MODAL, CONFIRM_MODAL } from "./constants";

function App() {
  const [carts, setCarts] = useState<ICart[]>([]);
  const [modalId, setModalId] = useState<ModalId>(null);
  const [selectedCart, setSelectedCart] = useState<ICart>(
    defaultContext.selectedCart
  );

  return (
    <div className="App">
      <Header />
      <AppContext.Provider
        value={{
          carts,
          setCarts,
          modalId,
          setModalId,
          selectedCart,
          setSelectedCart,
        }}
      >
        <Main />
        {modalId === INFO_MODAL ? (
          <Modal setModalId={setModalId}>
            <CartInfo cart={selectedCart} />
          </Modal>
        ) : null}
        {modalId === CREATE_MODAL ? (
          <Modal setModalId={setModalId} children={<CreateCart />} />
        ) : null}
        {modalId === CONFIRM_MODAL ? (
          <Modal
            setModalId={setModalId}
            children={<DeleteCart cartId={selectedCart.id} />}
          />
        ) : null}
      </AppContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
