<<<<<<< HEAD
import { getOrdersApi } from '@api';
import { Preloader } from '@ui';
import { FeedUI } from '@ui-pages';
import { TOrder } from '@utils-types';
import { FC, useEffect } from 'react';
import { fetchFeed } from '../../slices/feedSlice';
import { useAppDispatch, useAppSelector } from '../../services/store';

export const Feed: FC = () => {
  const { orders, isLoading } = useAppSelector((state) => state.feed);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFeed());
  }, [dispatch]);

  const handleGetFeeds = () => {
    dispatch(fetchFeed());
  };

  return isLoading ? (
    <Preloader />
  ) : (
    <FeedUI orders={orders.orders} handleGetFeeds={handleGetFeeds} />
  );
=======
import { Preloader } from '@ui';
import { FeedUI } from '@ui-pages';
import { TOrder } from '@utils-types';
import { FC } from 'react';

export const Feed: FC = () => {
  /** TODO: взять переменную из стора */
  const orders: TOrder[] = [];

  if (!orders.length) {
    return <Preloader />;
  }

  <FeedUI orders={orders} handleGetFeeds={() => {}} />;
>>>>>>> 9fb9048013bb250a7431808b754de003959eb3a9
};
