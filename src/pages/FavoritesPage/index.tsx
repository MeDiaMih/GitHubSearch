// src/pages/FavoritesPage/FavoritesPage.tsx
import { FavoritesPageContainer } from './styles';
import { PageWrapper } from '../../components/ui/Containers/PageWrapper';
import { FC } from 'react';
import BackButton from '../../components/ui/Buttons/Back';
import { TitleContainer } from '../../components/ui/Containers/Title';
import { Title } from '../../components/ui/Title';
import SortSelect from '../../components/SortSelect';
import { observer } from 'mobx-react-lite';
import { repositoryStore } from '../../stores/RepositoryStore';
import RepositoryList from '../../components/RepositoryList';
import { useSortRepositories } from '../../utils/Custom Hooks/useSortedRepositories';

const FavoritesPage: FC = observer(() => {
  const { favorites } = repositoryStore;
  const { sortOption, handleSort, sortedRepositories } =
    useSortRepositories(favorites);

  return (
    <FavoritesPageContainer>
      <PageWrapper>
        <BackButton />

        <TitleContainer>
          <Title>Favorites: {favorites.length}</Title>
          <SortSelect value={sortOption} onChange={handleSort} />
        </TitleContainer>

        <RepositoryList repositories={sortedRepositories} />
      </PageWrapper>
    </FavoritesPageContainer>
  );
});

export default FavoritesPage;
