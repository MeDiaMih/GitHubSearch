// src/stores/RepositoryStore.ts
import { makeAutoObservable } from 'mobx';
import {
  getRepositories,
  getRepositoryDetails,
  getSearchRepositories,
} from '../api/githubApi';
import { IRepositoryStore, Repository } from '../types';
import { loadFromLocalStorage, saveToLocalStorage } from './localStorage';

class RepositoryStore implements IRepositoryStore {
  repositories: Repository[] = [];
  favorites: Repository[] = [];
  selectedRepository: Repository | null = null;
  loading: boolean = false;
  error: string | null = null;
  isDataLoaded: boolean = false;
  filters: { query: string; sort: string } = { query: '', sort: 'stars' };

  constructor() {
    makeAutoObservable(this);
    this.loadFavoritesFromLocalStorage();
  }

  fetchRepositories = async (): Promise<void> => {
    if (this.isDataLoaded) return;

    this.loading = true;
    this.error = null;

    try {
      this.repositories = await getRepositories();
      this.isDataLoaded = true;
    } catch (error) {
      this.error = 'Ошибка при загрузке репозиториев';
    } finally {
      this.loading = false;
    }
  };

  searchRepositories = async (
    query: string,
    sort: string = this.filters.sort,
  ): Promise<void> => {
    this.loading = true;
    this.error = null;

    try {
      this.repositories = await getSearchRepositories(
        query || 'stars:>1',
        sort,
      );
      this.isDataLoaded = true;
    } catch (error) {
      this.error = 'Ошибка при загрузке репозиториев';
    } finally {
      this.loading = false;
    }
  };

  fetchRepositoryDetails = async (
    owner: string,
    repo: string,
  ): Promise<void> => {
    this.loading = true;
    this.error = null;
    this.selectedRepository = null;

    try {
      this.selectedRepository = await getRepositoryDetails(owner, repo);
    } catch (error) {
      this.error = 'Ошибка при загрузке деталей репозитория';
    } finally {
      this.loading = false;
    }
  };

  addToFavorites = (repo: Repository): void => {
    if (!this.favorites.find((favorite) => favorite.id === repo.id)) {
      this.favorites.push(repo);
      this.saveFavoritesToLocalStorage();
    }
  };

  removeFromFavorites = (repoId: number): void => {
    this.favorites = this.favorites.filter(
      (favorite) => favorite.id !== repoId,
    );
    this.saveFavoritesToLocalStorage();
  };

  isFavorite(repoId: number): boolean {
    return this.favorites.some((favorite) => favorite.id === repoId);
  }

  setFilters = (filters: { query?: string; sort?: string }): void => {
    this.filters = { ...this.filters, ...filters };
  };

  private loadFavoritesFromLocalStorage(): void {
    const favorites = loadFromLocalStorage<Repository[]>('favorites');
    if (favorites) {
      this.favorites = favorites;
    }
  }

  private saveFavoritesToLocalStorage(): void {
    saveToLocalStorage('favorites', this.favorites);
  }
}

export const repositoryStore = new RepositoryStore();
