/// <reference types="react-scripts" />
/// <reference path="./common/api/api.d.ts" />
/// <reference path="./router/Router.d.ts" />

declare type ArticleSource = {
  id: string | null;
  name: string;
};

declare type Article = {
  source: ArticleSource;
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
};

declare type Country = 'gb' | 'us';
declare type Category = 'entertainment' | 'general' | 'health' | 'science' | 'sports' | 'technology';
