import { Typography } from 'antd';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { useGetNews } from '../../hooks/get-news/use-get-news';
import { NewsGrid } from '../news-grid/NewsGrid';

const Title = styled(Typography.Title)`
  text-align: center;
  text-transform: capitalize;
  margin-top: 32px;
`;

export const Category = () => {
  const { id } = useParams<CategoryParams>();
  const { data, isFetching } = useGetNews(id);
  const articles = data?.articles ?? [];

  return (
    <>
      <Title>{id}</Title>
      <NewsGrid isFetching={isFetching} articles={articles} category={id} />
    </>
  );
};
