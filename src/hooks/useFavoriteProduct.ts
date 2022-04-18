import { useContext } from "react"
import { AppContext } from "../context"
import { EAction } from "../context/reducer";

export const useFavoriteProduct = (id: number) => {
  const { dispatch, state: { favorites } } = useContext(AppContext);
  const isFavorite = favorites.find(favoriteId => favoriteId === id);

  const toggleFavorite = () => {
    dispatch({
      type: EAction.favoriteProduct,
      id
    })
  }

  return {
    isFavorite,
    toggleFavorite
  }
}