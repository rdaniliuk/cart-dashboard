import React, { useState } from "react";
import "./App.css";
import Main from "./components/Main/Main";
import Modal from "./components/modal/Modal";
import CreateCart from "./components/CreateCart/CreateCart";
import DeleteCart from "./components/DeleteCart/DeleteCart";
import CartInfo from "./components/CartInformation/CartInfo";
import { ICart } from "./components/CartPreview/CartPreview";

interface IContext {
  carts: ICart[];
  setCarts: (carts: ICart[]) => void;
  modalIsOpen: boolean;
  setModalIsOpen: (isOpen: boolean) => void;
}

const defaultContext: IContext = {
  carts: [],
  setCarts: () => {},
  modalIsOpen: false,
  setModalIsOpen: () => {},
};

export const AppContext = React.createContext<IContext>(defaultContext);

function App() {
  const [carts, setCarts] = useState<ICart[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(true);

  return (
    <div className="App">
      <p>Hello World</p>
      <AppContext.Provider
        value={{ carts, setCarts, modalIsOpen, setModalIsOpen }}
      >
        {/* {modalIsOpen ? (
          <Modal setModalIsOpen={setModalIsOpen} children={<CartInfo cart={carts[1]} />} />
        ) : null} */}
        <Main />
      </AppContext.Provider>
    </div>
  );
}

export default App;
