import { Collapse, Spin } from 'antd';
import { useGetNews } from '../../hooks/get-news/use-get-news';
import { AppContent } from '../app-content/AppContent';
import { PanelHeader } from '../panel-header/PanelHeader';
import { CategoryArticlesCarousel } from '../category-articles-carousel/CategoryArticlesCarousel';

const { Panel } = Collapse;

export const Categories = () => {
  const { data: entertainmentData, isFetching: entertainmentIsFetching } = useGetNews('entertainment');
  const { data: generalData, isFetching: generalIsFetching } = useGetNews('general');
  const { data: healthData, isFetching: healthIsFetching } = useGetNews('health');
  const { data: scienceData, isFetching: scienceIsFetching } = useGetNews('science');
  const { data: sportsData, isFetching: sportsIsFetching } = useGetNews('sports');
  const { data: technologyData, isFetching: technologyIsFetching } = useGetNews('technology');

  const isFetching =
    entertainmentIsFetching ||
    generalIsFetching ||
    healthIsFetching ||
    scienceIsFetching ||
    sportsIsFetching ||
    technologyIsFetching;

  return (
    <>
      {isFetching && <Spin />}
      {!isFetching && (
        <AppContent>
          <Collapse ghost>
            {entertainmentData?.articles && (
              <Panel key="entertainment" header={<PanelHeader category="entertainment">Entertainment</PanelHeader>}>
                <CategoryArticlesCarousel articles={entertainmentData.articles} category="entertainment" />
              </Panel>
            )}
            {generalData?.articles && (
              <Panel key="general" header={<PanelHeader category="general">General</PanelHeader>}>
                <CategoryArticlesCarousel articles={generalData.articles} category="general" />
              </Panel>
            )}
            {healthData?.articles && (
              <Panel key="health" header={<PanelHeader category="health">Health</PanelHeader>}>
                <CategoryArticlesCarousel articles={healthData.articles} category="health" />
              </Panel>
            )}
            {scienceData?.articles && (
              <Panel key="science" header={<PanelHeader category="science">Science</PanelHeader>}>
                <CategoryArticlesCarousel articles={scienceData.articles} category="science" />
              </Panel>
            )}
            {sportsData?.articles && (
              <Panel key="sports" header={<PanelHeader category="sports">Sports</PanelHeader>}>
                <CategoryArticlesCarousel articles={sportsData.articles} category="sports" />
              </Panel>
            )}
            {technologyData?.articles && (
              <Panel key="technology" header={<PanelHeader category="technology">Technology</PanelHeader>}>
                <CategoryArticlesCarousel articles={technologyData.articles} category="technology" />
              </Panel>
            )}
          </Collapse>
        </AppContent>
      )}
    </>
  );
};
