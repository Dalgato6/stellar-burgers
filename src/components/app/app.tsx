import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import {
  ConstructorPage,
  Feed,
  ForgotPassword,
  Login,
  NotFound404,
  Profile,
  ProfileOrders,
  Register,
  ResetPassword
} from '@pages';
import { AppHeader, IngredientDetails, Modal, OrderInfo } from '@components';
import { useAppDispatch, useAppSelector } from '../../services/store';
import { fetchIngredients } from '../../slices/ingredientSlice';
import { AppRoutes } from './appRoutes';
import ProtectedRoute from '../protectedRoute/ProtectedRoute';
import {
  fetchCheckAuth,
  fetchUser,
  setAuthChecked
} from '../../slices/userSlice';
import { getCookie } from '../../utils/cookie';
import { refreshToken } from '@api';
import { resetOrderModalData } from '../../slices/orderSlice';
import '../../index.css';
import styles from './app.module.css';

const App = () => {
  const location = useLocation();
  const background = location.state?.background;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const orderNumber = useAppSelector(
    (state) => state.order.orderModalData?.number ?? ''
  );

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  useEffect(() => {
    const checkAuth = async () => {
      const refreshToken = getCookie('refreshToken');
      if (refreshToken) {
        await dispatch(fetchUser());
        await dispatch(fetchCheckAuth());
      } else {
        dispatch(setAuthChecked(true));
      }
    };

    checkAuth();
  }, [dispatch, refreshToken]);

  const handleModalClose = () => {
    dispatch(resetOrderModalData());
    navigate(-1);
  };

  const renderModal = (title: string, children: React.ReactNode) => (
    <Modal onClose={handleModalClose} title={title}>
      {children}
    </Modal>
  );

  return (
    <div className={styles.app}>
      <AppHeader />
      
      <Routes location={background || location}>

        <Route path={AppRoutes.HOME} element={<ConstructorPage />} />
        <Route path={AppRoutes.FEED} element={<Feed />} />
        <Route
          path={AppRoutes.INGREDIENT_DETAILS}
          element={<IngredientDetails title='Детали ингредиента' />}
        />
        <Route
          path={AppRoutes.ORDER_DETAILS}
          element={<OrderInfo title={`#${orderNumber}`} />}
        />


        <Route
          path={AppRoutes.LOGIN}
          element={
            <ProtectedRoute onlyUnAuth>
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path={AppRoutes.REGISTER}
          element={
            <ProtectedRoute onlyUnAuth>
              <Register />
            </ProtectedRoute>
          }
        />
        <Route
          path={AppRoutes.FORGOT_PASSWORD}
          element={
            <ProtectedRoute onlyUnAuth>
              <ForgotPassword />
            </ProtectedRoute>
          }
        />
        <Route
          path={AppRoutes.RESET_PASSWORD}
          element={
            <ProtectedRoute onlyUnAuth>
              <ResetPassword />
            </ProtectedRoute>
          }
        />


        <Route
          path={AppRoutes.PROFILE}
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path={AppRoutes.PROFILE_ORDERS}
          element={
            <ProtectedRoute>
              <ProfileOrders />
            </ProtectedRoute>
          }
        />
        <Route
          path={AppRoutes.PROFILE_ORDERS_NUMBER}
          element={
            <ProtectedRoute>
              <OrderInfo title={`#${orderNumber}`} />
            </ProtectedRoute>
          }
        />

        <Route path={AppRoutes.NOT_FOUND} element={<NotFound404 />} />
      </Routes>


      {background && (
        <Routes>
          <Route
            path={AppRoutes.INGREDIENT_DETAILS}
            element={renderModal('Детали ингредиента', <IngredientDetails />)}
          />
          <Route
            path={AppRoutes.ORDER_DETAILS}
            element={renderModal(`#${orderNumber}`, <OrderInfo />)}
          />
          <Route
            path={AppRoutes.PROFILE_ORDERS_NUMBER}
            element={renderModal(`#${orderNumber}`, <OrderInfo />)}
          />
        </Routes>
      )}
    </div>
  );
};

export default App;