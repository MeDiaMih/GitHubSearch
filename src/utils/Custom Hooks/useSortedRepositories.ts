import { useState } from 'react';
import { Repository } from '../../types';

export const useSortRepositories = (repositories: Repository[]) => {
  const [sortOption, setSortOption] = useState<'stars' | 'forks'>('stars');

  const sortedRepositories = [...repositories].sort((a, b) => {
    if (sortOption === 'stars') {
      return b.stargazers_count - a.stargazers_count;
    } else {
      return b.forks_count - a.forks_count;
    }
  });

  const handleSort = (option: { value: string; label: string } | null) => {
    if (option && (option.value === 'stars' || option.value === 'forks')) {
      setSortOption(option.value);
    }
  };

  return { sortOption, handleSort, sortedRepositories };
};
