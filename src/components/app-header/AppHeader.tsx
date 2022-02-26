import { Menu, Layout } from 'antd';
import { useLocation, useNavigate } from 'react-router';
import styled from 'styled-components';
import { CountrySwitch } from '../country-switch/CountrySwitch';

const Header = styled(Layout.Header)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AppHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const parts = location.pathname.split('/').filter(Boolean);
  return (
    <Header>
      <div style={{ width: '320px' }}>
        <Menu theme="dark" mode="horizontal" selectedKeys={[location.pathname]}>
          <Menu.Item key="/" onClick={() => navigate('/')}>
            Top News
          </Menu.Item>
          <Menu.Item key="/categories" onClick={() => navigate('/categories')}>
            Categories
          </Menu.Item>
          <Menu.Item key="/search" onClick={() => navigate('/search')}>
            Search
          </Menu.Item>
        </Menu>
      </div>
      {parts[0] !== 'news' ? <CountrySwitch /> : null}
    </Header>
  );
};
