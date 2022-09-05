import { ProviderId } from "firebase/auth";
import { onValue, ref, set, update } from "firebase/database";
import React, { createContext, useContext, useState } from "react";
import { uid } from "uid";
import PRODUCTS_DATA from "../../dummydata/index.json";
import { database } from "../../firebase/database.js";
import { db } from "../../firebase/firebase";
import { IProduct } from "./model";

interface IProductState {
  products: IProduct[];
  writeData: (product: any) => void;
  updateData: (product: any) => void;
  readData: () => void;
  setProducts: (products: IProduct[]) => void;
}
const ProductContext = createContext<IProductState>({
  products: [],
  writeData(product) {},
  updateData(product) {},
  readData() {},
  setProducts() {},
});

export const useProductState = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("context must be wrapped around the app provider");
  }
  return context;
};
interface IProps {
  children: React.ReactNode;
}

// const productFields = {
//   name: "",
//   imageUrl: "",
//   price: "",
//   description: "",
//   category: "",
//   location: "",
// };
export const ProductContextProvider: React.FC<IProps> = ({ children }) => {
  const [product, setProduct] = useState<IProduct>();
  const [products, setProducts] = useState<IProduct[]>([]);
  const writeData = (product: any) => {
    const uniqueId = uid();
    set(ref(database, `/${uniqueId}`), {
      // productName: "Adidas NMD",
      product,
      uniqueId,
    });
  };

  const updateData = (product: any) => {
    const uniqueId = uid();
    update(ref(database, `/${uniqueId}`), {
      product,
      uniqueId,
    });
  };

  const readData = () => {
    onValue(ref(database), (snapshot) => {
      const data = snapshot.val();
      console.log(data);
    });
  };
  return (
    <ProductContext.Provider
      value={{ writeData, products, setProducts, updateData, readData }}
    >
      {children}
    </ProductContext.Provider>
  );
};
