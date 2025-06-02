import { FC, memo, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { OrderCardUI } from '../ui/order-card';
import { useAppSelector } from '../../services/store';
import { OrderCardProps } from './type';
import { TIngredient } from '@utils-types';

const MAX_INGREDIENTS_TO_SHOW = 6;

export const OrderCard: FC<OrderCardProps> = memo(({ order }) => {
  const location = useLocation();
  const ingredients = useAppSelector((state) => state.ingredients.ingredients);

  const orderInfo = useMemo(() => {
    if (!ingredients.length) return null;

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
    };
  }, [order, ingredients]);

  if (!orderInfo) return null;

  return (
    <OrderCardUI
      orderInfo={orderInfo}
      maxIngredients={MAX_INGREDIENTS_TO_SHOW}
      locationState={{ background: location }}
    />
  );
});