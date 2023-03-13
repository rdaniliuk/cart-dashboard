import React, { useState } from "react";
import "./App.css";
import Main from "./components/Main/Main";
import Modal from "./components/modal/Modal";
import CreateCart from "./components/CreateCart/CreateCart";
import DeleteCart from "./components/DeleteCart/DeleteCart";
import { iCart } from "./components/CartPreview/CartPreview";

interface IContext {
  carts: iCart[];
  setCarts: (carts: iCart[]) => void;
  modalIsOpen: boolean;
  setModalIsOpen: (isOpen: boolean) => void;
}
export const AppContext = React.createContext<IContext>({
  carts: [],
  setCarts: function (carts: iCart[]): void {
    throw new Error("Function not implemented.");
  },
  modalIsOpen: false,
  setModalIsOpen: function (isOpen: boolean): void {
    throw new Error("Function not implemented.");
  }
});

function App() {
  const [carts, setCarts] = useState<iCart[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(true);

  return (
    <div className="App">
      <p>Hello World</p>
      <AppContext.Provider
        value={{ carts, setCarts, modalIsOpen, setModalIsOpen }}
      >
        {modalIsOpen ? (
          <Modal setModalIsOpen={setModalIsOpen} children={<CreateCart />} />
        ) : null}
        <Main />
      </AppContext.Provider>
    </div>
  );
}

export default App;
