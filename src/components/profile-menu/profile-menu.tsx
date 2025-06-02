import { FC } from 'react';
<<<<<<< HEAD
import { useLocation, useNavigate } from 'react-router-dom';
import { ProfileMenuUI } from '@ui';
import { useAppDispatch } from '../../services/store';
import { fetchLogoutUser } from '../../slices/userSlice';

export const ProfileMenu: FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    try {
      await dispatch(fetchLogoutUser()).unwrap();
      navigate('/login');
    } catch (error) {
      console.error('Ошибка при выходе:', error);
    }
  };
=======
import { useLocation } from 'react-router-dom';
import { ProfileMenuUI } from '@ui';

export const ProfileMenu: FC = () => {
  const { pathname } = useLocation();

  const handleLogout = () => {};
>>>>>>> 9fb9048013bb250a7431808b754de003959eb3a9

  return <ProfileMenuUI handleLogout={handleLogout} pathname={pathname} />;
};
