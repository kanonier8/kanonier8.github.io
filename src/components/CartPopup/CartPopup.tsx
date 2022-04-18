import { useContext } from 'react';
import { createPortal } from 'react-dom';
import { AppContext } from '../../context';
import { CartItem } from '../../pages/CartPage/components/CartItem/CartItem';
import styles from './CartPopup.module.scss';

export const CartPopup = () => {
  const { state: { cart, popupRefContainer: container } } = useContext(AppContext);

  const renderCarts = cart.length ?
    cart.reverse().map((item) => <CartItem isModalView={true} key={item.id} data={item}/>) :
    <p className={styles.popupEmptyLabel}>В корзине нет товаров</p>

  return createPortal(<div className={styles.popup}>{renderCarts}</div>, container?.current as HTMLLIElement);
};