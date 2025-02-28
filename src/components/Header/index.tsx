import {
  AccountWrapper1,
  AccountWrapper2,
  ContentContainer,
  FavoriteWrapper,
  HeaderContainer,
  IconContainer,
  Logo,
  LogoContainer,
} from './styles';
import { ReactComponent as SearchIcon } from '../../assets/icons/Search.svg';
import { ReactComponent as Favorite } from '../../assets/icons/Favorite.svg';
import { ReactComponent as Account } from '../../assets/icons/Account.svg';
import { Link, useNavigate } from 'react-router-dom';
import { FC } from 'react';
import FavoriteBadge from '../FavoriteBadge';
import { observer } from 'mobx-react-lite';
import { repositoryStore } from '../../stores/RepositoryStore';

const Header: FC = observer(() => {
  const { favorites } = repositoryStore;
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <ContentContainer>
        <div onClick={() => navigate('/', { replace: true })}>
          <LogoContainer>
            <SearchIcon />
            <Logo>GitHubSearch</Logo>
          </LogoContainer>
        </div>

        <IconContainer>
          <FavoriteWrapper>
            <Link to="/favorites">
              <Favorite />
              <FavoriteBadge count={favorites.length} />
            </Link>
          </FavoriteWrapper>

          <AccountWrapper2>
            <AccountWrapper1>
              <Account />
            </AccountWrapper1>
          </AccountWrapper2>
        </IconContainer>
      </ContentContainer>
    </HeaderContainer>
  );
});

export default Header;
