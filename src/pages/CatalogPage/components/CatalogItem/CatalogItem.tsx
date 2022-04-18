import React, { Fragment, useContext, useState } from 'react';
import { CartPopup } from '../../../../components/CartPopup/CartPopup';
import { AppContext } from '../../../../context';
import { EAction, IProduct } from '../../../../context/reducer';
import { useFavoriteProduct } from '../../../../hooks/useFavoriteProduct';
import { BagIcon } from '../../../../icons/BagIcon';
import { HeartIcon } from '../../../../icons/HeartIcon';
import { formatPrice } from '../../../../utils';
import styles from './CatalogItem.module.scss';

export type Props = {
    data: IProduct
}

export const CatalogItem = ({ data }: Props) => {
  const { dispatch } = useContext(AppContext);
  const { id, name, image, description, price } = data;
  const { isFavorite, toggleFavorite } = useFavoriteProduct(id);
  const [showModalCart, setShowModalCart] = useState<boolean>(false);


  const handleClickAddCard = () => {
    dispatch({
      type: EAction.addCart,
      payload: data
    });

    setShowModalCart(true);
    setTimeout(() => {
      setShowModalCart(false);
    }, 5000);
  };

  return (
    <Fragment>
      <article className={styles.card}>
        <div className={styles.cardCover}>
          <img src={image} alt={name} />
          <div className={styles.cardControls}>
            <button onClick={handleClickAddCard} className={styles.iconButton}><BagIcon /></button>
            <button onClick={toggleFavorite} className={styles.iconButton}><HeartIcon color={isFavorite ? 'red' : 'white'} /></button>
          </div>
        </div>
        <div className={styles.cardBody}>
          <h2 className={styles.cardName}>{name}</h2>
          <p className={styles.cardDescription}>{description}</p>
          <p className={styles.cardPrice}>{formatPrice(price)}</p>
        </div>
      </article>
      {
         showModalCart && <CartPopup />
      }
    </Fragment>
  )
}