import { FC } from 'react';
import { AppHeaderUI } from '@ui';
<<<<<<< HEAD
import { useAppSelector } from '../../services/store';

export const AppHeader: FC = () => {
  const user = useAppSelector((state) => state.user.user?.name);
  return <AppHeaderUI userName={user} />;
};
=======

export const AppHeader: FC = () => <AppHeaderUI userName='' />;
>>>>>>> 9fb9048013bb250a7431808b754de003959eb3a9
