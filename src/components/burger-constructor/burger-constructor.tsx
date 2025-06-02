<<<<<<< HEAD
import { FC, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { TConstructorIngredient, TIngredient } from '@utils-types';
import { BurgerConstructorUI } from '@ui';
import { useAppDispatch, useAppSelector } from '../../services/store';
import { fetchOrderBurger, resetOrderModalData } from '../../slices/orderSlice';
import { resetConstructor } from '../../slices/burgerConstructorSlice';

export const BurgerConstructor: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();


  const { bun, ingredients } = useAppSelector(
    (state) => state.burgerConstructor
  );
  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);
  const { orderModalData, orderRequest } = useAppSelector(
    (state) => state.order
  );


  const constructorItems = useMemo(() => ({
    bun: bun ?? null,
    ingredients: ingredients ?? []
  }), [bun, ingredients]);

  const price = useMemo(() => (
    (constructorItems.bun ? constructorItems.bun.price * 2 : 0) +
    constructorItems.ingredients.reduce(
      (sum: number, item: TConstructorIngredient) => sum + item.price,
      0
    )
  ), [constructorItems]);


  const onOrderClick = useCallback(async () => {
    if (!constructorItems.bun || orderRequest) return;
    if (!isAuthenticated) return navigate('/login');

    const order = [
      constructorItems.bun._id,
      ...constructorItems.ingredients.map((ingredient) => ingredient._id),
      constructorItems.bun._id
    ];

    await dispatch(fetchOrderBurger(order));
    dispatch(resetConstructor());
  }, [constructorItems, orderRequest, isAuthenticated, navigate, dispatch]);

  const closeOrderModal = useCallback(() => {
    dispatch(resetOrderModalData());
  }, [dispatch]);
=======
import { FC, useMemo } from 'react';
import { TConstructorIngredient } from '@utils-types';
import { BurgerConstructorUI } from '@ui';

export const BurgerConstructor: FC = () => {
  /** TODO: взять переменные constructorItems, orderRequest и orderModalData из стора */
  const constructorItems = {
    bun: {
      price: 0
    },
    ingredients: []
  };

  const orderRequest = false;

  const orderModalData = null;

  const onOrderClick = () => {
    if (!constructorItems.bun || orderRequest) return;
  };
  const closeOrderModal = () => {};

  const price = useMemo(
    () =>
      (constructorItems.bun ? constructorItems.bun.price * 2 : 0) +
      constructorItems.ingredients.reduce(
        (s: number, v: TConstructorIngredient) => s + v.price,
        0
      ),
    [constructorItems]
  );

  return null;
>>>>>>> 9fb9048013bb250a7431808b754de003959eb3a9

  return (
    <BurgerConstructorUI
      price={price}
      orderRequest={orderRequest}
      constructorItems={constructorItems}
      orderModalData={orderModalData}
      onOrderClick={onOrderClick}
      closeOrderModal={closeOrderModal}
    />
  );
<<<<<<< HEAD
};
=======
};
>>>>>>> 9fb9048013bb250a7431808b754de003959eb3a9
