import { FC, memo, useCallback } from 'react';
import { BurgerConstructorElementUI } from '@ui';
import { useAppDispatch } from '../../services/store';
import { removeIngredient } from '../../slices/burgerConstructorSlice';
import { BurgerConstructorElementProps } from './type';

export const BurgerConstructorElement: FC<BurgerConstructorElementProps> = memo(({
  ingredient,
  index,
  totalItems
}) => {
  const dispatch = useAppDispatch();

  const handlers = {
    delete: useCallback(() => {
      dispatch(removeIngredient(ingredient));
    }, [dispatch, ingredient]),
    
    moveUp: () => {
    },
    
    moveDown: () => {
    }
  };

  return (
    <BurgerConstructorElementUI
      ingredient={ingredient}
      index={index}
      totalItems={totalItems}
      handleMoveUp={handlers.moveUp}
      handleMoveDown={handlers.moveDown}
      handleClose={handlers.delete}
    />
  );
});