import React, { useState } from "react";
import { createContext } from "react";
import { supabase } from "../../utils/supabaseClient";
import { IProduct } from "../product/model";
import { IFavorite } from "./model";

interface IFavoriteState {
  totalRecords: number;
  favoriteProducts: IFavorite[];
  fetchFavoriteProduct: () => void;
}
const FavoriteContext = createContext<IFavoriteState>({
  totalRecords: 0,
  favoriteProducts: [],
  fetchFavoriteProduct() {},
});

export const useFavoriteState = () => {
  const context = React.useContext(FavoriteContext);
  if (context === undefined) {
    throw new Error("app dispatch must be used within app global provider");
  }

  return context;
};
interface IProps {
  children: React.ReactNode;
}
let limit = 20;
export const FavoriteContextProvider: React.FC<IProps> = ({ children }) => {
  const [product, setProduct] = useState<IProduct>();
  const [favoriteProducts, setFavoriteProducts] = useState<Array<IFavorite>>(
    []
  );
  const [del, setDel] = useState<boolean>(false);
  const [skip, setSkip] = useState(0);
  const [totalRecords, setTotalRecords] = useState(0);

  const fetchFavoriteProduct = async () => {
    const { data: favorites, error } = await supabase
      .from("favorites")
      .select("*");
    if (favorites) {
      console.log(favorites);
    } else {
      console.log(error);
    }
  };

  return (
    <FavoriteContext.Provider
      value={{
        fetchFavoriteProduct,
        totalRecords,
        favoriteProducts,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
