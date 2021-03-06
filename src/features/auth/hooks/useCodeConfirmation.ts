import { useAppDispatch, useAppSelector } from 'store';
import { confirmCodeAction } from '../core/actions';
import { useState } from 'react';

const useCodeConfirmation = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.auth.isLoading);
  const [error, setError] = useState<boolean>(false);

  const confirmCode = (phone: string, code: number) => {
    dispatch(confirmCodeAction({ phone, code }))
      .then(() => {
        setError(false);
      })
      .catch(() => {
        setError(true);
      });
  };

  return { isLoading, error, confirmCode };
};

export default useCodeConfirmation;
