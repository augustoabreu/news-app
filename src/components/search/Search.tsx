import { Input, Result } from 'antd';
import { ChangeEventHandler, useMemo, useRef, useState } from 'react';
import { getCountry } from '../../common/ducks/settings';
import { useAppSelector } from '../../hooks/app-selector/use-app-selector';
import { useGetNews } from '../../hooks/get-news/use-get-news';
import { AppContent } from '../app-content/AppContent';
import { NewsGrid } from '../news-grid/NewsGrid';

export const Search = () => {
  const country = useAppSelector(getCountry);
  const delay = useRef<NodeJS.Timeout | null>(null);
  const [term, setTerm] = useState('');
  const [finalTerm, setFinalTerm] = useState('');
  const { data, isFetching, isUninitialized } = useGetNews(undefined, { q: finalTerm, skip: !finalTerm });
  const articles = data?.articles ?? [];

  const debounceTerm = useMemo(
    () => (val: string) => {
      if (delay.current) clearTimeout(delay.current);
      delay.current = setTimeout(() => setFinalTerm(val), 200);
    },
    []
  );

  const handleSearchOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTerm(e.target.value);
    debounceTerm(e.target.value);
  };
  return (
    <>
      <AppContent>
        <Input
          placeholder={`Search top news from ${country === 'gb' ? 'Great Britain' : 'United States'} by term...`}
          size="large"
          value={term}
          onChange={handleSearchOnChange}
        />
      </AppContent>
      <NewsGrid articles={articles} isFetching={isFetching} />
      {!isUninitialized && !isFetching && !articles.length && (
        <Result status="404" title="Oops.." subTitle="No articles found for this term." />
      )}
    </>
  );
};
