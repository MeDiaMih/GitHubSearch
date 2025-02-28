import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { repositoryStore } from '../../stores/RepositoryStore';
import LoadingSpinner from '../LoadingSpinner';
import ErrorMessage from '../ErrorMessage';
import RepositoryCard from '../RepositoryCard';
import { RepositoryListProps } from '../../types';
import { RepositoryCardContainer } from './styles';

const RepositoryList: FC<RepositoryListProps> = observer(({ repositories }) => {
  const { loading, error } = repositoryStore;

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <RepositoryCardContainer>
      {repositories.map((repo) => (
        <RepositoryCard key={repo.id} repo={repo} />
      ))}
    </RepositoryCardContainer>
  );
});

export default RepositoryList;
