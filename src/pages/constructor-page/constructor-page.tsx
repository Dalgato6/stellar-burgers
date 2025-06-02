<<<<<<< HEAD
import { useAppDispatch, useAppSelector } from '../../services/store';
=======
import { useSelector } from '../../services/store';
>>>>>>> 9fb9048013bb250a7431808b754de003959eb3a9

import styles from './constructor-page.module.css';

import { BurgerIngredients } from '../../components';
import { BurgerConstructor } from '../../components';
import { Preloader } from '../../components/ui';
import { FC } from 'react';

export const ConstructorPage: FC = () => {
<<<<<<< HEAD
  const { isLoading } = useAppSelector((state) => state.ingredients);
  const isIngredientsLoading = isLoading;
=======
  /** TODO: взять переменную из стора */
  const isIngredientsLoading = false;
>>>>>>> 9fb9048013bb250a7431808b754de003959eb3a9

  return (
    <>
      {isIngredientsLoading ? (
        <Preloader />
      ) : (
        <main className={styles.containerMain}>
          <h1
            className={`${styles.title} text text_type_main-large mt-10 mb-5 pl-5`}
          >
            Соберите бургер
          </h1>
          <div className={`${styles.main} pl-5 pr-5`}>
            <BurgerIngredients />
            <BurgerConstructor />
          </div>
        </main>
      )}
    </>
  );
};
