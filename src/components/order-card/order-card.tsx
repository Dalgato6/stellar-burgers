import { FC, memo, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
<<<<<<< HEAD
import { OrderCardUI } from '../ui/order-card';
import { useAppSelector } from '../../services/store';
import { OrderCardProps } from './type';
import { TIngredient } from '@utils-types';

const MAX_INGREDIENTS_TO_SHOW = 6;

export const OrderCard: FC<OrderCardProps> = memo(({ order }) => {
  const location = useLocation();
  const ingredients = useAppSelector((state) => state.ingredients.ingredients);
=======

import { OrderCardProps } from './type';
import { TIngredient } from '@utils-types';
import { OrderCardUI } from '../ui/order-card';

const maxIngredients = 6;

export const OrderCard: FC<OrderCardProps> = memo(({ order }) => {
  const location = useLocation();

  /** TODO: взять переменную из стора */
  const ingredients: TIngredient[] = [];
>>>>>>> 9fb9048013bb250a7431808b754de003959eb3a9

  const orderInfo = useMemo(() => {
    if (!ingredients.length) return null;

<<<<<<< HEAD
    const getIngredientsInfo = (): TIngredient[] => {
      return order.ingredients.reduce((acc: TIngredient[], itemId: string) => {
        const ingredient = ingredients.find((ing) => ing._id === itemId);
        return ingredient ? [...acc, ingredient] : acc;
      }, []);
    };

    const ingredientsInfo = getIngredientsInfo();
    const totalPrice = ingredientsInfo.reduce((sum, item) => sum + item.price, 0);
    const visibleIngredients = ingredientsInfo.slice(0, MAX_INGREDIENTS_TO_SHOW);
    const hiddenIngredientsCount = Math.max(
      ingredientsInfo.length - MAX_INGREDIENTS_TO_SHOW, 
      0
    );

    return {
      ...order,
      ingredientsInfo,
      ingredientsToShow: visibleIngredients,
      remains: hiddenIngredientsCount,
      total: totalPrice,
      date: new Date(order.createdAt)
=======
    const ingredientsInfo = order.ingredients.reduce(
      (acc: TIngredient[], item: string) => {
        const ingredient = ingredients.find((ing) => ing._id === item);
        if (ingredient) return [...acc, ingredient];
        return acc;
      },
      []
    );

    const total = ingredientsInfo.reduce((acc, item) => acc + item.price, 0);

    const ingredientsToShow = ingredientsInfo.slice(0, maxIngredients);

    const remains =
      ingredientsInfo.length > maxIngredients
        ? ingredientsInfo.length - maxIngredients
        : 0;

    const date = new Date(order.createdAt);
    return {
      ...order,
      ingredientsInfo,
      ingredientsToShow,
      remains,
      total,
      date
>>>>>>> 9fb9048013bb250a7431808b754de003959eb3a9
    };
  }, [order, ingredients]);

  if (!orderInfo) return null;

  return (
    <OrderCardUI
      orderInfo={orderInfo}
<<<<<<< HEAD
      maxIngredients={MAX_INGREDIENTS_TO_SHOW}
      locationState={{ background: location }}
    />
  );
});
=======
      maxIngredients={maxIngredients}
      locationState={{ background: location }}
    />
  );
});
>>>>>>> 9fb9048013bb250a7431808b754de003959eb3a9
