import React from "react";
import { ICart } from "./components/CartPreview/CartPreview";

export type ModalId = number | null | undefined;

export interface IContext {
   carts: ICart[];
   setCarts: (carts: ICart[]) => void;
   modalId: ModalId;
   setModalId: (modalId: number) => void;
   selectedCart: ICart;
   setSelectedCart: (selectedCart: ICart) => void;
 }
 
 export const defaultContext: IContext = {
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