import React, { FC, useEffect } from 'react';
import { HomePageContainer } from './styles';
import SearchBar from '../../components/SearchBar';
import { PageWrapper } from '../../components/ui/Containers/PageWrapper';
import { observer } from 'mobx-react-lite';
import { repositoryStore } from '../../stores/RepositoryStore';
import RepositoryList from '../../components/RepositoryList';
import { throttledSearch } from '../../utils/throttle';
import { useSearchParams } from 'react-router-dom';
import { useSuggestions } from '../../utils/Custom Hooks/useSuggestions';

const HomePage: FC = observer(() => {
  const {
    repositories,
    isDataLoaded,
    searchRepositories,
    filters,
    setFilters,
    fetchRepositories,
  } = repositoryStore;
  const [searchParams, setSearchParams] = useSearchParams();
  const urlQuery = searchParams.get('q') || '';
  const urlSort = searchParams.get('sort') || 'stars';
  const suggestions = useSuggestions(filters.query || '');

  useEffect(() => {
    if (urlQuery === filters.query && urlSort === filters.sort) return;
    setFilters({ query: urlQuery, sort: urlSort });
  }, [urlQuery, urlSort]);

  useEffect(() => {
    throttledSearch(filters.query, searchRepositories);

    if (!filters.query && !isDataLoaded && !urlQuery) {
      fetchRepositories();
    }
  }, [filters.query, filters.sort]);

  useEffect(() => {
    const params = new URLSearchParams();
    if (filters.query) params.set('q', filters.query);
    if (filters.sort) params.set('sort', filters.sort);
    setSearchParams(params);
  }, [filters.query, filters.sort]);

  return (
    <HomePageContainer>
      <PageWrapper>
        <SearchBar query={filters.query} suggestions={suggestions} />
        <RepositoryList repositories={repositories} />
      </PageWrapper>
    </HomePageContainer>
  );
});

export default HomePage;
