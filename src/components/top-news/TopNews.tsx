import { useGetNews } from '../../hooks/get-news/use-get-news';
import { NewsGrid } from '../news-grid/NewsGrid';

export const TopNews = () => {
  const { data, isFetching } = useGetNews();
  const articles = data?.articles ?? [];
  return <NewsGrid articles={articles} isFetching={isFetching} />;
};
