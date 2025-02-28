import { throttle } from 'lodash';

export const throttledSearch = throttle(
  (query: string, searchRepositories: (query: string) => void) => {
    searchRepositories(query);
  },
  1000,
  { leading: false, trailing: true },
);
