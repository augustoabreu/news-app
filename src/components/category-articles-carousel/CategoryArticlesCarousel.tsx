import { Carousel } from 'antd';
import { CarouselRef } from 'antd/lib/carousel';
import { useRef } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

type CategoryArticlesProps = {
  category: Category;
  articles: Article[];
};

const CarouselWrapper = styled.div`
  position: relative;
`;

const CarouselArrow = styled.div`
  position: absolute;
  z-index: 1;
  font-size: 40px;
  color: rgba(255, 255, 255, 0.9);
  top: 50%;
  transform: translateY(-50%);
  padding: 12px;
  cursor: pointer;
`;

const CarouselItem = styled.div<{ img: string }>`
  background: url(${({ img }) => img}) #ccc;
  background-clip: contain;
  background-position: center center;
  width: 100%;
  height: 280px;
  position: relative;
  cursor: pointer;

  p {
    background: rgba(255, 255, 255, 0.8);
    padding: 12px;
    position: absolute;
    bottom: 0;
    margin: 12px;
  }
`;

export const CategoryArticlesCarousel = ({ articles, category }: CategoryArticlesProps) => {
  const carouselRef = useRef<CarouselRef>(null);
  const navigate = useNavigate();

  const handleLeft = () => {
    carouselRef.current?.prev();
  };

  const handleRight = () => {
    carouselRef.current?.next();
  };

  return (
    <CarouselWrapper>
      <CarouselArrow onClick={handleLeft}>‹</CarouselArrow>
      <CarouselArrow onClick={handleRight} style={{ right: 0 }}>
        ›
      </CarouselArrow>
      <Carousel ref={carouselRef} dots={false}>
        {articles.map((article) => (
          <CarouselItem
            key={article.title}
            img={article.urlToImage as string}
            onClick={() => navigate(`/news/${encodeURIComponent(article.title)}/${category}`)}
          >
            <p>{article.title}</p>
          </CarouselItem>
        ))}
      </Carousel>
    </CarouselWrapper>
  );
};
