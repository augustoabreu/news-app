import { Button, Space, Typography } from 'antd';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

type NewsSummaryProps = {
  article: Article;
};

const ArticleImage = styled.div<{ img: string }>`
  width: calc(100% + 40px);
  height: 240px;
  background: url(${({ img }) => img});
  background-clip: contain;
  margin-left: -20px;
`;

export const NewsSummary = ({ article }: NewsSummaryProps) => {
  const navigate = useNavigate();
  const handleBackToList = () => {
    navigate(-1);
  };

  return (
    <div>
      <Typography.Title>{article.title}</Typography.Title>
      <Space direction="vertical" size="middle">
        {article.urlToImage ? <ArticleImage img={article.urlToImage as string} /> : null}
        <Typography.Text>{article.content}</Typography.Text>
        <Button type="primary" onClick={handleBackToList}>
          Back to list{' '}
        </Button>
      </Space>
    </div>
  );
};
