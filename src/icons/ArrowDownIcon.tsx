import React from 'react';
import { IconProps } from './BagIcon';

export const ArrowDownIcon = ({ color = '#ffffff' }: IconProps) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 7L8 9L6 7" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}