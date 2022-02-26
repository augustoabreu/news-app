import { Button, Result, Spin } from 'antd';
import { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router';
import { useGetNews } from '../../hooks/get-news/use-get-news';
import { NewsSummary } from '../news-summary/NewsSummary';
import { AppContent } from '../app-content/AppContent';

export const News = () => {
  const { title, category } = useParams<NewsParams>();
  const { data, isFetching } = useGetNews(category);
  const navigate = useNavigate();
  const article = useMemo(() => {
    if (data && data.articles) {
      return data?.articles.find((article) => article.title === decodeURIComponent(title ?? ''));
    }
    return null;
  }, [data, title]);

  const handleBackToList = () => {
    navigate(-1);
  };

  return (
    <AppContent>
      {isFetching && <Spin />}
      {!isFetching && article && <NewsSummary article={article} />}
      {!isFetching && !article && (
        <Result
          status="404"
          title="Oops.."
          subTitle="The article you are trying to see was not found."
          extra={
            <Button type="primary" onClick={handleBackToList}>
              See Top News
            </Button>
          }
        />
      )}
    </AppContent>
  );
};
