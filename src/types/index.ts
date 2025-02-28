import { ReactNode } from 'react';

export interface Repository {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  archived: boolean;
  language: string;
  created_at: string;
  updated_at: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

export type OptionType = {
  value: string;
  label: string;
};

export interface SortSelectProps {
  value: string;
  onChange: (selectedOption: OptionType | null) => void;
}

export interface StatBoxProps {
  icon: ReactNode;
  value: string;
  label: string;
}

export interface SearchBarProps {
  query: string;
  suggestions: string[];
}

export interface RepositoryCardProps {
  repo: Repository;
}

export interface FavoriteBadgeProps {
  count: number;
}

export interface FavoriteButtonProps {
  repo: Repository;
  width?: number;
  height?: number;
}

export interface ErrorMessageProps {
  message: string;
}

export interface RepositoryListProps {
  repositories: Repository[];
}

export interface IRepositoryStore {
  repositories: Repository[];
  favorites: Repository[];
  selectedRepository: Repository | null;
  loading: boolean;
  error: string | null;
  isDataLoaded: boolean;
  filters: { query: string; sort: string } | null;

  fetchRepositories: () => Promise<void>;
  searchRepositories: (query: string) => Promise<void>;
  fetchRepositoryDetails: (owner: string, repo: string) => Promise<void>;
  addToFavorites: (repo: Repository) => void;
  removeFromFavorites: (repoId: number) => void;
  isFavorite: (repoId: number) => boolean;
  setFilters: (filters: { query: string }) => void;
}
