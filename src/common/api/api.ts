import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiKey = '26866afbd1f64c67859ccbb31b838015';

export const newsApi = createApi({
  reducerPath: 'news',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://newsapi.org/v2' }),
  endpoints: (builder) => ({
    getHeadlines: builder.query<ListResponse<Article, 'articles'>, TopHeadlinesEndpoint>({
      query: ({ country, category, q }) => ({
        url: '/top-headlines',
        params: {
          q,
          country,
          apiKey,
          category
        }
      })
    })
  })
});

export const { useGetHeadlinesQuery } = newsApi;
