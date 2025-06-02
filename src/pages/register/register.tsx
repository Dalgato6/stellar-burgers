import { FC, SyntheticEvent, useState } from 'react';
import { RegisterUI } from '@ui-pages';
<<<<<<< HEAD
import { TRegisterData } from '@api';
import { useAppDispatch, useAppSelector } from '../../services/store';
import { fetchLoginUser, fetchRegisterUser } from '../../slices/userSlice';

export const Register: FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const error = useAppSelector((state) => state.user.error);
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const userData: TRegisterData = {
      name,
      email,
      password
    };
    const resultAction = await dispatch(fetchRegisterUser(userData));

    if (fetchRegisterUser.fulfilled.match(resultAction)) {
      dispatch(
        fetchLoginUser({ email: userData.email, password: userData.password })
      );
    }
=======

export const Register: FC = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
>>>>>>> 9fb9048013bb250a7431808b754de003959eb3a9
  };

  return (
    <RegisterUI
<<<<<<< HEAD
      errorText={error?.message}
      email={email}
      userName={name}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      setUserName={setName}
=======
      errorText=''
      email={email}
      userName={userName}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      setUserName={setUserName}
>>>>>>> 9fb9048013bb250a7431808b754de003959eb3a9
      handleSubmit={handleSubmit}
    />
  );
};
