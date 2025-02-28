import { useEffect, useState } from 'react';
import { repositoryStore } from '../../stores/RepositoryStore';

export const useSuggestions = (query: string) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const { repositories } = repositoryStore;

  useEffect(() => {
    if (query.trim() === '') {
      setSuggestions([]);
    } else {
      const repoNames = repositories.map((repo) => repo.name);
      const filteredSuggestions = repoNames.filter((name) =>
        name.toLowerCase().includes(query.toLowerCase()),
      );
      setSuggestions(filteredSuggestions.slice(0, 5));
    }
  }, [query, repositories]);

  return suggestions;
};
