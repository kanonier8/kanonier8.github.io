import { RefObject } from "react";
import { initialState } from ".";

export interface IProduct {
  id: number,
  name: string,
  image: string,
  description: string,
  price: number
}

export interface IProductCart extends IProduct {
  count: number
}

export enum ESort {
  default = 'DEFAULT',
  asc = 'ASC',
  desc = 'DESC'
}

export interface IContextState {
  sort: ESort,
  data: IProduct[],
  cart: IProductCart[],
  favorites: number[],
  popupRefContainer: RefObject<HTMLElement> | null
}

export enum EAction {
  setSort = 'SET_SORT',
  addCart = 'ADD_CART',
  increaseProduct = 'INCREASE_PRODUCT',
  decreaseProduct = 'DECREASE_CART',
  deleteProduct = 'DELETE_PRODUCT',
  clearCart = 'CLEAR_CART',
  favoriteProduct = 'FAVORITE_PRODUCT',
  setPopupRef = 'SET_POPUP_REF'
}

export type Action =
  | { type: EAction.addCart, product: IProduct }
  | { type: EAction.clearCart, payload?: unknown }
  | { type: EAction.favoriteProduct, id: number }
  | { type: EAction.deleteProduct, id: number }
  | { type: EAction.increaseProduct, id: number }
  | { type: EAction.decreaseProduct, id: number }
  | { type: EAction.setSort, sort: ESort }
  | { type: EAction.setPopupRef, ref: RefObject<HTMLElement> };

  export const reducer = (state: IContextState, action: Action) => {
    const { type } = action;

    switch(type) {

      case EAction.addCart: {
        const { product: productPayload } = action;
        const productInCart = state.cart.find(product => product.id === productPayload.id);

        if (productInCart) {
          const updatedCart = state.cart.map(product =>
            product.id === productPayload.id ?
              { ...product, count: product.count++ } :
              product
          )
          return { ...state, cart: updatedCart }
        }

        return { ...state, cart: [...state.cart, { ...productPayload, count: 1 }] }
      }

      case EAction.increaseProduct: {
        const { id: payloadId } = action;
        const cart = state.cart.map(product => 
          product.id === payloadId ? 
            { ...product, count: product.count + 1 } :
            product
        );
        return { ...state, cart }
      }

      case EAction.decreaseProduct: {
        const { id: payloadId } = action;
        const cart = state.cart.map(product =>
          product.id === payloadId ? 
            { ...product, count: product.count === 0 ? 0 : product.count - 1 } : 
            product
        );
        return { ...state, cart }
      }

      case EAction.deleteProduct: {
        const { id: payloadId } = action;
        const cart = state.cart.filter(product => product.id !== payloadId);
        return { ...state, cart }
      }

      case EAction.setSort: {
        const { sort: payloadSort } = action;
        return { ...state, sort: payloadSort }
      }

      case EAction.setPopupRef: {
        const { ref: payloadRef } = action;
        return { ...state, popupRefContainer: payloadRef }
      }

      case EAction.clearCart: {
        return { ...state, cart: initialState.cart }
      }

      case EAction.favoriteProduct: {
        const { id: payloadId } = action;
        const isFavorite = state.favorites.find(id => id === payloadId);
        if (isFavorite) {
          return { ...state, favorites: state.favorites.filter(id => id !== payloadId) }
        }
        return { ...state, favorites: [ ...state.favorites, payloadId ] }
      }

      default: {
        return state
      }
  }
}