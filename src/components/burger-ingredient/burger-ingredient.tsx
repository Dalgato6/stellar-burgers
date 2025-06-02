import { FC, memo } from 'react';
import { useLocation } from 'react-router-dom';
<<<<<<< HEAD
import { v4 as uuidv4 } from 'uuid';
import { BurgerIngredientUI } from '@ui';
import { IngredientProps } from './type';
import { useAppDispatch } from '../../services/store';
import { addIngredient, setBun } from '../../slices/burgerConstructorSlice';

export const BurgerIngredient: FC<IngredientProps> = memo(
  ({ ingredient, count }) => {
    const location = useLocation();
    const dispatch = useAppDispatch();

    const handleAddToConstructor = () => {
      if (ingredient.type === 'bun') {
        dispatch(setBun(ingredient));
      } else {
        dispatch(addIngredient({ ...ingredient, id: uuidv4() }));
      }
    };
=======

import { BurgerIngredientUI } from '@ui';
import { TBurgerIngredientProps } from './type';

export const BurgerIngredient: FC<TBurgerIngredientProps> = memo(
  ({ ingredient, count }) => {
    const location = useLocation();

    const handleAdd = () => {};
>>>>>>> 9fb9048013bb250a7431808b754de003959eb3a9

    return (
      <BurgerIngredientUI
        ingredient={ingredient}
        count={count}
        locationState={{ background: location }}
<<<<<<< HEAD
        handleAdd={handleAddToConstructor}
      />
    );
  }
);
=======
        handleAdd={handleAdd}
      />
    );
  }
);
>>>>>>> 9fb9048013bb250a7431808b754de003959eb3a9
