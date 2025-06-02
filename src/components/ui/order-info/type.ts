import { TIngredient } from '@utils-types';

export type OrderInfoUIProps = {
  orderInfo: TOrderInfo;
<<<<<<< HEAD
  isModalOpen?: boolean;
  title?: string;
=======
>>>>>>> 9fb9048013bb250a7431808b754de003959eb3a9
};

type TOrderInfo = {
  ingredientsInfo: {
    [key: string]: TIngredient & { count: number };
  };
  date: Date;
  total: number;
  _id: string;
  status: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
  ingredients: string[];
};
