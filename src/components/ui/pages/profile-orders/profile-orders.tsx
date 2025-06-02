import { FC } from 'react';

import styles from './profile-orders.module.css';

import { ProfileOrdersUIProps } from './type';
import { ProfileMenu, OrdersList } from '@components';

export const ProfileOrdersUI: FC<ProfileOrdersUIProps> = ({ orders }) => (
  <main className={`${styles.main}`}>
<<<<<<< HEAD
    {/* {isModalOpen ? '' : <h2 className={styles.title}>{title}</h2>} */}
=======
>>>>>>> 9fb9048013bb250a7431808b754de003959eb3a9
    <div className={`mt-30 mr-15 ${styles.menu}`}>
      <ProfileMenu />
    </div>
    <div className={`mt-10 ${styles.orders}`}>
      <OrdersList orders={orders} />
    </div>
  </main>
);
