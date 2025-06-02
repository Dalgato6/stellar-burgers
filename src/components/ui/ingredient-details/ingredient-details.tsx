import React, { FC, memo } from 'react';
import styles from './ingredient-details.module.css';
import { IngredientDetailsUIProps } from './type';

export const IngredientDetailsUI: FC<IngredientDetailsUIProps> = memo(
<<<<<<< HEAD
  ({ ingredientData, onImageLoad, title, isModalOpen }) => {
    const { name, image_large, calories, proteins, fat, carbohydrates } =
      ingredientData;
    return (
      <div className={styles.content}>
        {isModalOpen ? '' : <h2 className={styles.title}>{title}</h2>}
=======
  ({ ingredientData }) => {
    const { name, image_large, calories, proteins, fat, carbohydrates } =
      ingredientData;

    return (
      <div className={styles.content}>
>>>>>>> 9fb9048013bb250a7431808b754de003959eb3a9
        <img
          className={styles.img}
          alt='изображение ингредиента.'
          src={image_large}
<<<<<<< HEAD
          onLoad={onImageLoad}
=======
>>>>>>> 9fb9048013bb250a7431808b754de003959eb3a9
        />
        <h3 className='text text_type_main-medium mt-2 mb-4'>{name}</h3>
        <ul className={`${styles.nutritional_values} text_type_main-default`}>
          <li className={styles.nutritional_value}>
            <p className={`text mb-2 ${styles.text}`}>Калории, ккал</p>
            <p className={`text text_type_digits-default`}>{calories}</p>
          </li>
          <li className={styles.nutritional_value}>
            <p className={`text mb-2 ${styles.text}`}>Белки, г</p>
            <p className={`text text_type_digits-default`}>{proteins}</p>
          </li>
          <li className={styles.nutritional_value}>
            <p className={`text mb-2 ${styles.text}`}>Жиры, г</p>
            <p className={`text text_type_digits-default`}>{fat}</p>
          </li>
          <li className={styles.nutritional_value}>
            <p className={`text mb-2 ${styles.text}`}>Углеводы, г</p>
            <p className={`text text_type_digits-default`}>{carbohydrates}</p>
          </li>
        </ul>
      </div>
    );
  }
);
