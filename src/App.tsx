import React, { useState } from "react";
import "./App.css";
import Main from "./components/Main/Main";
import Modal from "./components/modal/Modal";
import CreateCart from "./components/CreateCart/CreateCart";
import DeleteCart from "./components/DeleteCart/DeleteCart";
import CartInfo from "./components/CartInformation/CartInfo";
import { ICart } from "./components/CartPreview/CartPreview";

type ModalId = number | null | undefined;

interface IContext {
  carts: ICart[];
  setCarts: (carts: ICart[]) => void;
  modalId: ModalId;
  setModalId: (modalId: number) => void;
  selectedCart: ICart;
  setSelectedCart: (selectedCart: ICart) => void;
}

const defaultContext: IContext = {
  carts: [],
  setCarts: () => {},
  modalId: null,
  setModalId: () => {},
  selectedCart: {
    id: 0,
    products: [],
    total: 0,
    discountedTotal: 0,
    totalProducts: 0,
    totalQuantity: 0,
    userId: 0,
  },
  setSelectedCart: () => {},
};


export const AppContext = React.createContext<IContext>(defaultContext);

function App() {
  const [carts, setCarts] = useState<ICart[]>([]);
  const [modalId, setModalId] = useState<ModalId>(null);
  const [selectedCart, setSelectedCart] = useState<ICart>(defaultContext.selectedCart);

  return (
    <div className="App">
      <p>Hello World</p>
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
        {modalId === 1 ? (
          <Modal
            setModalId={setModalId}
            children={<CartInfo cart={selectedCart} />}
          />
        ) : null}
        {modalId === 2 ? (
          <Modal setModalId={setModalId} children={<CreateCart />} />
        ) : null}
        {modalId === 3 ? (
          <Modal
            setModalId={setModalId}
            children={<DeleteCart cartId={selectedCart.id} />}
          />
        ) : null}
      </AppContext.Provider>
    </div>
  );
}

export default App;
