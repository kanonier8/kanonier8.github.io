import React, { Dispatch }  from 'react';
import { createContext } from "react";
import { PRODUCTS } from './products';
import { Action, ESort, IContextState } from "./reducer";

export const initialState: IContextState = {
  data: PRODUCTS,
  sort: ESort.default,
  cart: [],
  favorites: [],
  popupRefContainer: null
}

export interface IAppContext {
  state: IContextState,
  dispatch: Dispatch<Action>
}

export const AppContext = createContext<IAppContext>({
  state: initialState,
  dispatch: () => null
});
