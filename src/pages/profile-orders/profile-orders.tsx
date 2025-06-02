<<<<<<< HEAD
import { Preloader } from '@ui';
import { ProfileOrdersUI } from '@ui-pages';
import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../services/store';
import { fetchOrders } from '../../slices/orderSlice';

export const ProfileOrders: FC = () => {
  const { userOrders, userOrdersLoading } = useAppSelector(
    (state) => state.order
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return userOrdersLoading ? (
    <Preloader />
  ) : (
    <ProfileOrdersUI orders={userOrders} />
  );
=======
import { ProfileOrdersUI } from '@ui-pages';
import { TOrder } from '@utils-types';
import { FC } from 'react';

export const ProfileOrders: FC = () => {
  /** TODO: взять переменную из стора */
  const orders: TOrder[] = [];

  return <ProfileOrdersUI orders={orders} />;
>>>>>>> 9fb9048013bb250a7431808b754de003959eb3a9
};
