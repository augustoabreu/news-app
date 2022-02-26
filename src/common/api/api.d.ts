declare type TopHeadlinesEndpoint = {
  country: string;
  category?: Category;
  q?: string;
};

declare type ListResponse<T, PropertyName extends string> = {
  status: string;
  totalResults: number;
} & { [P in PropertyName]: T[] };
