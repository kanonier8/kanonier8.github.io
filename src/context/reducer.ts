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
  | { type: EAction.addCart, payload: IProduct }
  | { type: EAction.clearCart, payload?: unknown }
  | { type: EAction.favoriteProduct, payload: number }
  | { type: EAction.deleteProduct, payload: number }
  | { type: EAction.increaseProduct, payload: number }
  | { type: EAction.decreaseProduct, payload: number }
  | { type: EAction.setSort, payload: ESort }
  | { type: EAction.setPopupRef, payload: RefObject<HTMLElement> };

  export const reducer = (state: IContextState, action: Action) => {
    const { type, payload } = action;

    switch(type) {

      case EAction.addCart: {
        const productInCart = state.cart.find(product => product.id === payload.id);

        if (productInCart) {
          const updatedCart = state.cart.map(product =>
            product.id === payload.id ?
              { ...product, count: product.count++ } :
              product
          )
          return { ...state, cart: updatedCart }
        }

        return { ...state, cart: [ ...state.cart, { ...payload, count: 1 }] }
      }

      case EAction.increaseProduct: {
        const cart = state.cart.map(product => 
          product.id === payload ? 
            { ...product, count: product.count++ } :
            product
        );
        return { ...state, cart }
      }

      case EAction.decreaseProduct: {
        const cart = state.cart.map(product =>
          product.id === payload ? 
            { ...product, count: product.count === 0 ? 0 : product.count-- } : 
            product
        );
        return { ...state, cart }
      }

      case EAction.deleteProduct: {
        const cart = state.cart.filter(product => product.id !== payload);
        return { ...state, cart }
      }

      case EAction.setSort: {
        return { ...state, sort: payload }
      }

      case EAction.setPopupRef: {
        return { ...state, popupRefContainer: payload }
      }

      case EAction.clearCart: {
        return { ...state, cart: initialState.cart }
      }

      case EAction.favoriteProduct: {
        const isFavorite = state.favorites.find(id => id === payload);
        if (isFavorite) {
          return { ...state, favorites: state.favorites.filter(id => id !== payload) }
        }
        return { ...state, favorites: [ ...state.favorites, payload ] }
      }

      default: {
        return state
      }
  }
}