import { useGetHeadlinesQuery } from '../../common/api/api';
import { getCountry } from '../../common/ducks/settings';
import { useAppSelector } from '../app-selector/use-app-selector';

type OptionalParams = {
  q?: string;
  skip?: boolean;
};

export const useGetNews = (category?: Category, options?: OptionalParams) => {
  const country = useAppSelector(getCountry);
  const { q, skip } = options ?? {};
  return useGetHeadlinesQuery({ country, category, q }, { skip });
};
