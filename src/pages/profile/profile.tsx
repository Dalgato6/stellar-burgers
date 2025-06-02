import { ProfileUI } from '@ui-pages';
import { FC, SyntheticEvent, useEffect, useState } from 'react';
<<<<<<< HEAD
import { useAppDispatch, useAppSelector } from '../../services/store';
import { fetchUpdateUser } from '../../slices/userSlice';

export const Profile: FC = () => {
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();

  const [formValue, setFormValue] = useState({
    name: user?.name || '',
    email: user?.email || '',
=======

export const Profile: FC = () => {
  /** TODO: взять переменную из стора */
  const user = {
    name: '',
    email: ''
  };

  const [formValue, setFormValue] = useState({
    name: user.name,
    email: user.email,
>>>>>>> 9fb9048013bb250a7431808b754de003959eb3a9
    password: ''
  });

  useEffect(() => {
    setFormValue((prevState) => ({
      ...prevState,
      name: user?.name || '',
      email: user?.email || ''
    }));
  }, [user]);

  const isFormChanged =
    formValue.name !== user?.name ||
    formValue.email !== user?.email ||
    !!formValue.password;

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
<<<<<<< HEAD
    dispatch(fetchUpdateUser(formValue));
=======
>>>>>>> 9fb9048013bb250a7431808b754de003959eb3a9
  };

  const handleCancel = (e: SyntheticEvent) => {
    e.preventDefault();
    setFormValue({
<<<<<<< HEAD
      name: user?.name || '',
      email: user?.email || '',
=======
      name: user.name,
      email: user.email,
>>>>>>> 9fb9048013bb250a7431808b754de003959eb3a9
      password: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <ProfileUI
      formValue={formValue}
      isFormChanged={isFormChanged}
      handleCancel={handleCancel}
      handleSubmit={handleSubmit}
      handleInputChange={handleInputChange}
    />
  );
<<<<<<< HEAD
=======

  return null;
>>>>>>> 9fb9048013bb250a7431808b754de003959eb3a9
};
