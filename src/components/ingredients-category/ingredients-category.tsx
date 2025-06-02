import { forwardRef, useMemo } from 'react';
import { TIngredientsCategoryProps } from './type';
import { TIngredient } from '@utils-types';
import { IngredientsCategoryUI } from '../ui/ingredients-category';

<<<<<<< HEAD
import { useAppSelector } from '../../services/store';

=======
>>>>>>> 9fb9048013bb250a7431808b754de003959eb3a9
export const IngredientsCategory = forwardRef<
  HTMLUListElement,
  TIngredientsCategoryProps
>(({ title, titleRef, ingredients }, ref) => {
<<<<<<< HEAD
  const { bun, ingredients: selectedIngredients } = useAppSelector(
    (state) => state.burgerConstructor
  );

  const burgerConstructor = {
    bun: {
      _id: bun?._id
    },
    ingredients: selectedIngredients
=======
  /** TODO: взять переменную из стора */
  const burgerConstructor = {
    bun: {
      _id: ''
    },
    ingredients: []
>>>>>>> 9fb9048013bb250a7431808b754de003959eb3a9
  };

  const ingredientsCounters = useMemo(() => {
    const { bun, ingredients } = burgerConstructor;
    const counters: { [key: string]: number } = {};
    ingredients.forEach((ingredient: TIngredient) => {
      if (!counters[ingredient._id]) counters[ingredient._id] = 0;
      counters[ingredient._id]++;
    });
<<<<<<< HEAD
    if (bun._id) counters[bun._id] = 2;
=======
    if (bun) counters[bun._id] = 2;
>>>>>>> 9fb9048013bb250a7431808b754de003959eb3a9
    return counters;
  }, [burgerConstructor]);

  return (
    <IngredientsCategoryUI
      title={title}
      titleRef={titleRef}
      ingredients={ingredients}
      ingredientsCounters={ingredientsCounters}
      ref={ref}
    />
  );
});
