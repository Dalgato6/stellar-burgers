<<<<<<< HEAD
import { FC, useEffect, useMemo } from 'react';
import { Preloader } from '../ui/preloader';
import { OrderInfoUI } from '../ui/order-info';
import { TIngredient } from '@utils-types';
import { useAppDispatch, useAppSelector } from '../../services/store';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { fetchOrderByNumber } from '../../slices/orderSlice';
import { Modal } from '../modal';

export const OrderInfo: FC<{ title?: string }> = ({ title }) => {
  const { number } = useParams<{ number: string }>();
  const { ingredients } = useAppSelector((state) => state.ingredients);
  const orderData = useAppSelector((state) => state.order.orderModalData);
  const isLoading = useAppSelector((state) => state.order.isLoading);
  const location = useLocation();
  const isModalOpen = location.state?.background;

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchOrderByNumber(Number(number)));
  }, [dispatch]);
=======
import { FC, useMemo } from 'react';
import { Preloader } from '../ui/preloader';
import { OrderInfoUI } from '../ui/order-info';
import { TIngredient } from '@utils-types';

export const OrderInfo: FC = () => {
  /** TODO: взять переменные orderData и ingredients из стора */
  const orderData = {
    createdAt: '',
    ingredients: [],
    _id: '',
    status: '',
    name: '',
    updatedAt: 'string',
    number: 0
  };

  const ingredients: TIngredient[] = [];
>>>>>>> 9fb9048013bb250a7431808b754de003959eb3a9

  /* Готовим данные для отображения */
  const orderInfo = useMemo(() => {
    if (!orderData || !ingredients.length) return null;

    const date = new Date(orderData.createdAt);

    type TIngredientsWithCount = {
      [key: string]: TIngredient & { count: number };
    };

    const ingredientsInfo = orderData.ingredients.reduce(
      (acc: TIngredientsWithCount, item) => {
        if (!acc[item]) {
          const ingredient = ingredients.find((ing) => ing._id === item);
          if (ingredient) {
            acc[item] = {
              ...ingredient,
              count: 1
            };
          }
        } else {
          acc[item].count++;
        }

        return acc;
      },
      {}
    );

    const total = Object.values(ingredientsInfo).reduce(
      (acc, item) => acc + item.price * item.count,
      0
    );

    return {
      ...orderData,
      ingredientsInfo,
      date,
      total
    };
  }, [orderData, ingredients]);

  if (!orderInfo) {
    return <Preloader />;
  }

<<<<<<< HEAD
  return isLoading ? (
    <Preloader />
  ) : (
    <OrderInfoUI
      orderInfo={orderInfo}
      isModalOpen={!!isModalOpen}
      title={title}
    />
  );
=======
  return <OrderInfoUI orderInfo={orderInfo} />;
>>>>>>> 9fb9048013bb250a7431808b754de003959eb3a9
};
