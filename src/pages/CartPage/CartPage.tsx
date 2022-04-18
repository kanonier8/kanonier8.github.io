import React, { useContext } from 'react';
import { Container } from '../../components/Container/Container';
import { AppContext } from '../../context';
import { CartItem } from './components/CartItem/CartItem';
import { Button } from '../../components/Button/Button';
import { CartForm } from './components/CartForm/CartForm';
import styles from './CartPage.module.scss';
import { EAction } from '../../context/reducer';
import { Link } from 'react-router-dom';

export const CartPage = () => {
  const { state: { cart }, dispatch } = useContext(AppContext);
  const isCartEmpty = !cart.length;

  const handleClearCart = () => {
    if (window.confirm('Вы действительно хотите очитсть корзину?')) {
      dispatch({ type: EAction.clearCart })
    }
  };

  return (
    <div className={styles.cart}>
      <Container className={styles.cartContent}>
        <div className={styles.cartList}>
          <div className={styles.cartListHeader}>
            <div>Товар</div>
            <div>К-во</div>
          </div>
          <section className={styles.cartListContent}>
            {
              !isCartEmpty ?
                cart.map((item) => <CartItem key={item.id} data={item} />) :
                <p className={styles.cartEmpty}>Корзина пуста, <Link to="/" className={styles.cartLinkToCatalog}>перейти в каталог</Link></p>
            }
          </section>
          {
            !isCartEmpty &&
              <div className={styles.cartControls}>
                <Button style={{ marginRight: '10px' }} onClick={handleClearCart}>Очистить корзину</Button>
                <Button variant="filled" linkTo="/">Продолжить покупки</Button>
              </div>
          }
        </div>
        {
          !isCartEmpty &&
            <div className={styles.cartForm}>
              <CartForm />
            </div>
        }
      </Container>
    </div>
  )
}