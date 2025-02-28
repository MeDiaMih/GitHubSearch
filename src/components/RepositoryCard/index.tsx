import { FC } from 'react';
import {
  Card,
  CardAvatar,
  CardButtonsContainer,
  CardHeader,
  CardHeaderContainer,
  CustomButtonsContainer,
  PopularityContainer,
  PopularityInfoContainer,
  RepoInfoContainer,
  RepoName,
} from './styles';
import { ReactComponent as Star } from '../../assets/icons/Star.svg';
import { ReactComponent as Fork } from '../../assets/icons/Fork.svg';
import { useNavigate } from 'react-router-dom';
import { RedButton } from '../ui/Buttons/Red';
import { RepositoryCardProps } from '../../types';
import { observer } from 'mobx-react-lite';
import { FavoriteButton } from '../ui/Buttons/CustomButtons/FavoriteButton';
import { CopyLinkButton } from '../ui/Buttons/CustomButtons/CopyLinkButton';

const RepositoryCard: FC<RepositoryCardProps> = observer(({ repo }) => {
  const navigate = useNavigate();

  return (
    <Card>
      <CardHeaderContainer>
        <CardHeader>
          <CardAvatar>
            <img src={repo.owner.avatar_url} alt={repo.owner.login} />
          </CardAvatar>
          <PopularityContainer>
            <PopularityInfoContainer>
              <Star />
              <span>{repo.stargazers_count.toLocaleString('ru-RU')}</span>
            </PopularityInfoContainer>
            <PopularityInfoContainer>
              <Fork />
              <span>{repo.forks_count.toLocaleString('ru-RU')}</span>
            </PopularityInfoContainer>
          </PopularityContainer>
        </CardHeader>
        <RepoInfoContainer>
          <RepoName>@{repo.owner.login}</RepoName>
          <a href={repo.html_url}>{repo.full_name}</a>
        </RepoInfoContainer>
      </CardHeaderContainer>
      <CardButtonsContainer>
        <CustomButtonsContainer>
          <FavoriteButton repo={repo} />
          <CopyLinkButton link={repo.html_url} />
        </CustomButtonsContainer>
        <RedButton
          onClick={() => navigate(`/detail/${repo.owner.login}/${repo.name}`)}
        >
          Подробнее
        </RedButton>
      </CardButtonsContainer>
    </Card>
  );
});

export default RepositoryCard;
