import { FC } from 'react';
import { BadgeContainer } from './styles';
import { FavoriteBadgeProps } from '../../types';

const FavoriteBadge: FC<FavoriteBadgeProps> = ({ count }) => {
  if (count === 0) return null;

  return <BadgeContainer>{count}</BadgeContainer>;
};

export default FavoriteBadge;
