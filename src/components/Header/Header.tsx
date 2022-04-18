import React, { useContext, useEffect, useRef } from 'react';
import { Container } from '../Container/Container';
import { Link, NavLink, NavLinkProps } from 'react-router-dom';
import styles from './Header.module.scss';

import { TileIcon } from '../../icons/TileIcon';
import { CartIcon } from '../../icons/CartIcon';
import { EMediaBreakpoints, useMediaQuery } from '../../hooks/useMediaQuery';
import { AppContext } from '../../context';
import { EAction } from '../../context/reducer';

export const Header = () => {
  const isMobileSize = useMediaQuery(EMediaBreakpoints.xsDown);
  const elementRef = useRef<HTMLElement>(null);
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    dispatch({
      type: EAction.setPopupRef,
      payload: elementRef
    });
  }, []);

  const getNavLinkClasses = ({ isActive }: { isActive: boolean }) => {
    return `${styles.navItemLink} ${isActive ? styles.active : ''}`;
  }

  return (
    <header className={styles.header} ref={elementRef}>
      <Container className={styles.container}>
        <h1 className={styles.brand}>Интерьер.</h1>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <NavLink className={getNavLinkClasses} to='/'>
                { isMobileSize ? <TileIcon /> : 'Каталог' }
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink className={getNavLinkClasses} to='/cart'>
                { isMobileSize ? <CartIcon /> : 'Корзина' }
              </NavLink>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}
