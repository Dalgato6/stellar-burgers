import { FC, SyntheticEvent, useState } from 'react';
import { LoginUI } from '@ui-pages';
<<<<<<< HEAD
import { useAppDispatch } from '../../services/store';
import { fetchLoginUser } from '../../slices/userSlice';

import { useNavigate } from 'react-router-dom';
=======
>>>>>>> 9fb9048013bb250a7431808b754de003959eb3a9

export const Login: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
<<<<<<< HEAD
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      await dispatch(fetchLoginUser({ email, password })).unwrap();

      navigate('/');
    } catch (error) {
      console.error('Ошибка авторизации:', error);
    }
=======

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
>>>>>>> 9fb9048013bb250a7431808b754de003959eb3a9
  };

  return (
    <LoginUI
      errorText=''
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
    />
  );
};
