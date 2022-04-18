import React from 'react';
import { IconProps } from './BagIcon';

export const TileIcon = ({ color = '#ffffff' }: IconProps) => {
  return (
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="5" height="5" fill={color} />
      <rect y="7" width="5" height="5" fill={color} />
      <rect y="14" width="5" height="5" fill={color} />
      <rect x="7" y="7" width="5" height="5" fill={color} />
      <rect x="7" y="14" width="5" height="5" fill={color} />
      <rect x="7" width="5" height="5" fill={color} />
      <rect x="14" y="7" width="5" height="5" fill={color} />
      <rect x="14" y="14" width="5" height="5" fill={color} />
      <rect x="14" width="5" height="5" fill={color} />
    </svg>
  )
}