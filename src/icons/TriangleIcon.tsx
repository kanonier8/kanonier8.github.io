import React from 'react';
import { IconProps } from './BagIcon';

export const TriangleIcon = ({ color = '#ffffff' }: IconProps) => {
  return (
    <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 8.09753L0.339745 0.45119L17.6603 0.451192L9 8.09753Z" fill={color} />
    </svg>
  )
}