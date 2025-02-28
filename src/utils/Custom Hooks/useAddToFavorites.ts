import { Repository } from '../../types';
import { repositoryStore } from '../../stores/RepositoryStore';

export const useAddToFavorites = (repo: Repository | null) => {
  if (!repo) {
    return {
      handleAddToFavorites: () => {
        console.warn('Repository is not selected');
      },
      isRepoFavorite: false,
    };
  }
  const { addToFavorites, removeFromFavorites } = repositoryStore;

  const isRepoFavorite = repositoryStore
    ? repositoryStore.isFavorite(repo.id)
    : false;

  const handleAddToFavorites = () => {
    if (isRepoFavorite) {
      removeFromFavorites(repo.id);
    } else {
      addToFavorites(repo);
    }
  };

  return { handleAddToFavorites, isRepoFavorite };
};
