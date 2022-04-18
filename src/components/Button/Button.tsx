import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  linkTo?: string
  variant?: 'outlined' | 'filled',
  children: ReactNode
}

export const Button = ({ children, linkTo = '', variant = 'outlined', className = '', ...props }: Props) => {
  const classes = variant === 'outlined' ? styles.outlined : styles.filled;

  if (!!linkTo) {
    return (
      <Link to={linkTo}>
        <button className={`${classes} ${className}`} {...props}>{children}</button>
      </Link>
    )
  }

  return (
    <button className={`${classes} ${className}`} {...props}>{children}</button>
  )
}