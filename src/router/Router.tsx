import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Categories } from '../components/categories/Categories';
import { Category } from '../components/category/Category';
import { Dashboard } from '../components/dashboard/Dashboard';
import { News } from '../components/news/News';
import { Search } from '../components/search/Search';
import { TopNews } from '../components/top-news/TopNews';

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<TopNews />} />
        <Route path="news/:title" element={<News />} />
        <Route path="news/:title/:category" element={<News />} />
        <Route path="categories" element={<Categories />} />
        <Route path="categories/:id" element={<Category />} />
        <Route path="search" element={<Search />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
