import { useAppDispatch, useAppSelector } from 'store';
import { loginAction } from '../core/actions';
import { useState } from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { codeConfirmationRoute } from 'navigation/routes';
import { AuthScreens } from 'navigation/screens';

const useLogin = () => {
  const navigation = useNavigation<NavigationProp<AuthScreens>>();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.auth.isLoading);
  const [error, setError] = useState<boolean>(false);

  const login = (phone: string) => {
    dispatch(loginAction({ phone }))
      .then(() => {
        setError(false);
        navigation.navigate(codeConfirmationRoute, { phone });
      })
      .catch(() => {
        setError(true);
      });
  };

  return { isLoading, error, login };
};

export default useLogin;
