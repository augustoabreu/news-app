import { Layout } from 'antd';
import { Outlet } from 'react-router';
import { AppHeader } from '../app-header/AppHeader';

export const Dashboard = () => (
  <Layout style={{ minHeight: '100vh' }}>
    <AppHeader />
    <Outlet />
  </Layout>
);
