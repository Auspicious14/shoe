import React, { useEffect } from "react";
import { useFavoriteState } from "./context";
import { FavoriteProductListItem } from "./product/components/listitem";

export const FavoritePage = () => {
  const { favoriteProducts, fetchFavoriteProduct } = useFavoriteState();

  useEffect(() => {
    fetchFavoriteProduct();
  }, []);
  return (
    <>
      {favoriteProducts.map((product, i) => (
        <FavoriteProductListItem
          favoriteProduct={product}
          key={i}
          onViewDetail={() => {}}
        />
      ))}
    </>
  );
};
