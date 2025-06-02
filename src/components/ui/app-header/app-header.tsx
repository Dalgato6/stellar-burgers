<<<<<<< HEAD
import React, { FC, useState } from 'react';
=======
import React, { FC } from 'react';
>>>>>>> 9fb9048013bb250a7431808b754de003959eb3a9
import styles from './app-header.module.css';
import { TAppHeaderUIProps } from './type';
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon
} from '@zlden/react-developer-burger-ui-components';
<<<<<<< HEAD
import { NavLink } from 'react-router-dom';
import { AppRoutes } from '../../app/appRoutes';

export const AppHeaderUI: FC<TAppHeaderUIProps> = ({ userName }) => {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  return (
    <header className={styles.header}>
      <nav className={`${styles.menu} p-4`}>
        <div className={styles.menu_part_left}>
          <NavLink
            to={AppRoutes.HOME}
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.link_active : ''}`
            }
            onClick={() => setActiveTab(AppRoutes.HOME)}
          >
            <BurgerIcon
              type={activeTab === AppRoutes.HOME ? 'primary' : 'secondary'}
            />
            <p className='text text_type_main-default ml-2 mr-10'>
              Конструктор
            </p>
          </NavLink>

          <NavLink
            to={AppRoutes.FEED}
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.link_active : ''}`
            }
            onClick={() => setActiveTab(AppRoutes.FEED)}
          >
            <ListIcon
              type={activeTab === AppRoutes.FEED ? 'primary' : 'secondary'}
            />
            <p className='text text_type_main-default ml-2'>Лента заказов</p>
          </NavLink>
        </div>

        <div className={styles.logo}>
          <Logo className='' />
        </div>

        <div className={styles.link_position_last}>
          <NavLink
            to={AppRoutes.PROFILE}
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.link_active : ''}`
            }
            onClick={() => setActiveTab(AppRoutes.PROFILE)}
          >
            <ProfileIcon
              type={activeTab === AppRoutes.PROFILE ? 'primary' : 'secondary'}
            />
            <p className='text text_type_main-default ml-2'>
              {userName || 'Личный кабинет'}
            </p>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};
=======

export const AppHeaderUI: FC<TAppHeaderUIProps> = ({ userName }) => (
  <header className={styles.header}>
    <nav className={`${styles.menu} p-4`}>
      <div className={styles.menu_part_left}>
        <>
          <BurgerIcon type={'primary'} />
          <p className='text text_type_main-default ml-2 mr-10'>Конструктор</p>
        </>
        <>
          <ListIcon type={'primary'} />
          <p className='text text_type_main-default ml-2'>Лента заказов</p>
        </>
      </div>
      <div className={styles.logo}>
        <Logo className='' />
      </div>
      <div className={styles.link_position_last}>
        <ProfileIcon type={'primary'} />
        <p className='text text_type_main-default ml-2'>
          {userName || 'Личный кабинет'}
        </p>
      </div>
    </nav>
  </header>
);
>>>>>>> 9fb9048013bb250a7431808b754de003959eb3a9
