<<<<<<< HEAD
import { FC, useState } from 'react';
import { Preloader } from '../ui/preloader';
import { IngredientDetailsUI } from '../ui/ingredient-details';
import { useAppSelector } from '../../services/store';

import { redirect, useLocation, useParams } from 'react-router-dom';

export const IngredientDetails: FC<{ title?: string }> = ({ title }) => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const isModalOpen = location.state?.background;

  if (!id) {
    redirect('/');
    return null;
  }

  const { ingredients, error, isLoading } = useAppSelector(
    (state) => state.ingredients
  );

  const ingredientData = ingredients.find((item) => item._id === id);

  const [isImageLoaded, setImageLoaded] = useState(false);
=======
import { FC } from 'react';
import { Preloader } from '../ui/preloader';
import { IngredientDetailsUI } from '../ui/ingredient-details';

export const IngredientDetails: FC = () => {
  /** TODO: взять переменную из стора */
  const ingredientData = null;
>>>>>>> 9fb9048013bb250a7431808b754de003959eb3a9

  if (!ingredientData) {
    return <Preloader />;
  }

<<<<<<< HEAD
  if (error) {
    return <p>Ингредиент не найден</p>;
  }

  return (
    <>
      {(!isImageLoaded || isLoading) && <Preloader />}
      <IngredientDetailsUI
        ingredientData={ingredientData}
        onImageLoad={() => setImageLoaded(true)}
        title={title || 'Детали ингредиента'}
        isModalOpen={!!isModalOpen}
      />
    </>
  );
=======
  return <IngredientDetailsUI ingredientData={ingredientData} />;
>>>>>>> 9fb9048013bb250a7431808b754de003959eb3a9
};
