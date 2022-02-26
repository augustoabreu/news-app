import { Card, Spin } from 'antd';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

type NewsGridProps = {
  articles: Article[];
  isFetching: boolean;
  category?: Category;
};

const Cards = styled.div`
  display: flex;
  width: 80%;
  flex-wrap: wrap;
  margin: 20px auto;
  justify-content: center;

  @media (max-width: 768px) {
    margin: 10px auto;
    width: 100%;
  }
`;

const CardItem = styled(Card)`
  width: 280px;
  margin: 8px;

  @media (max-width: 768px) {
    width: 240px;
  }
`;

const ImageWrapper = styled.div<{ img: string }>`
  width: 100%;
  height: 160px;
  background: url(${({ img }) => img}) #ccc;
  background-size: contain;
`;

const Description = styled.div`
  line-height: 22px;
  height: 44px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const NewsGrid = ({ articles, isFetching, category }: NewsGridProps) => {
  const navigate = useNavigate();
  return (
    <Cards>
      {isFetching && <Spin />}
      {!isFetching &&
        articles.map((item) => (
          <CardItem
            hoverable
            key={item.title}
            cover={item.urlToImage ? <ImageWrapper img={item.urlToImage} /> : null}
            onClick={() => navigate(`/news/${encodeURIComponent(item.title)}${category ? `/${category}` : ''}`)}
          >
            <Card.Meta title={item.title} description={<Description>{item.description}</Description>} />
          </CardItem>
        ))}
    </Cards>
  );
};
