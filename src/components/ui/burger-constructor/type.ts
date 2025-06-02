import { TOrder } from '@utils-types';

export type BurgerConstructorUIProps = {
  constructorItems: any;
  orderRequest: boolean;
  price: number;
  orderModalData: TOrder | null;
  onOrderClick: () => void;
  closeOrderModal: () => void;
<<<<<<< HEAD
  error?: string | null;
=======
>>>>>>> 9fb9048013bb250a7431808b754de003959eb3a9
};
