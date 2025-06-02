import { FC } from 'react';

import { TOrder } from '@utils-types';
import { FeedInfoUI } from '../ui/feed-info';
<<<<<<< HEAD
import { useAppSelector } from '../../services/store';
=======
>>>>>>> 9fb9048013bb250a7431808b754de003959eb3a9

const getOrders = (orders: TOrder[], status: string): number[] =>
  orders
    .filter((item) => item.status === status)
    .map((item) => item.number)
    .slice(0, 20);

export const FeedInfo: FC = () => {
<<<<<<< HEAD
  const orders = useAppSelector((state) => state.feed.orders);

  const feed = {
    total: orders.total,
    totalToday: orders.totalToday
  };

  const readyOrders = getOrders(orders.orders, 'done');

  const pendingOrders = getOrders(orders.orders, 'pending');
=======
  /** TODO: взять переменные из стора */
  const orders: TOrder[] = [];
  const feed = {};

  const readyOrders = getOrders(orders, 'done');

  const pendingOrders = getOrders(orders, 'pending');
>>>>>>> 9fb9048013bb250a7431808b754de003959eb3a9

  return (
    <FeedInfoUI
      readyOrders={readyOrders}
      pendingOrders={pendingOrders}
      feed={feed}
    />
  );
};
