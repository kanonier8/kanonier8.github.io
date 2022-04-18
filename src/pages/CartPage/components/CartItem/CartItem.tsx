import React, { useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../../../../context';
import { EAction, IProductCart } from '../../../../context/reducer';
import { ArrowDownIcon } from '../../../../icons/ArrowDownIcon';
import { ArrowUpIcon } from '../../../../icons/ArrowUpIcon';
import { formatPrice } from '../../../../utils';
import styles from './CartItem.module.scss';

export type Props = {
  data: IProductCart,
  isModalView?: boolean
}

export const CartItem = ({ data, isModalView = false }: Props) => {
  const { dispatch, state: { favorites } } = useContext(AppContext);
  const { id, count, name, image, description, price } = data;

  const handleClickDecrease = () => {
    dispatch({ type: EAction.decreaseProduct, payload: id });
  };

  const handleClickIncrease = () => {
    dispatch({ type: EAction.increaseProduct, payload: id });
  };

  const handleClickDelete = () => {
    if (window.confirm(`Вы дейтсвительно хотите удалить из корзины ${name}?`)) {
      dispatch({
        type: EAction.deleteProduct,
        payload: id
      });
    }
  };

  const handleClickFavorite = () => {
    dispatch({
      type: EAction.favoriteProduct,
      payload: id
    });
  };

  const isFavorite = favorites.find(favoriteId => favoriteId === id);

  return (
      <article className={`${styles.cart} ${isModalView ? styles.modal : ''}`}>
        <div className={styles.cartCover}>
          <img src={image} alt={name} />
        </div>

        <div className={styles.cartBody}>
          <div className={styles.cartContent}>
            <h2 className={styles.cartName}>{name}</h2>
            <p className={styles.cartDescription}>{description}</p>
            <p className={styles.cartPrice}>{formatPrice(price)}</p>
            <div className={styles.cartControls}>
              <button className={`${styles.cartControlsButton} ${isFavorite ? styles.active : ''}`} onClick={handleClickFavorite}>Избранные</button>
              <button className={styles.cartControlsButton} onClick={handleClickDelete}>Удалить</button>
            </div>
          </div>
          
          {
            !isModalView &&
              <div className={styles.cartCounter}>
                <div className={styles.cartCounterLabel}>{count}</div>
                <div className={styles.cartCounterControls}>
                  <button className={styles.cartCounterButton} onClick={handleClickIncrease} title="Увеличить количество">
                    <ArrowUpIcon color="#CACDD8" />
                  </button>
                  <button disabled={count === 0} className={styles.cartCounterButton} onClick={handleClickDecrease} title="Уменьшить количество">
                    <ArrowDownIcon color="#CACDD8" />
                  </button>
                </div>
              </div>
          }
        </div>

      </article>
  )
}