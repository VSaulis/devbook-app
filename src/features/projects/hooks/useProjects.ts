import { useAppDispatch, useAppSelector } from 'store';
import { useEffect } from 'react';
import { getProjectsAction } from '../core/actions';

const useProjects = () => {
  const dispatch = useAppDispatch();
  const { projects, count, isLoading } = useAppSelector(
    (state) => state.projects
  );

  useEffect(() => {
    dispatch(getProjectsAction());
  }, [dispatch]);

  return { projects, count, isLoading };
};

export default useProjects;
