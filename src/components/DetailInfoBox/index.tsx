import { FC } from 'react';
import StatBox from '../StatBox';
import { RedButton } from '../ui/Buttons/Red';
import { observer } from 'mobx-react-lite';
import { repositoryStore } from '../../stores/RepositoryStore';
import {
  ActionsContainer,
  CustomButtonsContainer,
  DetailPageContent,
  DetailTitle,
  Line,
  ProfileIAvatar,
  ProfileInfoContainer,
  RepoInfoContainer,
  RepoName,
  RepoText,
  StatsContainer,
} from './styles';
import { ReactComponent as Star } from '../../assets/icons/Star.svg';
import { ReactComponent as Fork } from '../../assets/icons/Fork.svg';
import { ReactComponent as Archive } from '../../assets/icons/Archive.svg';
import { ReactComponent as Folder } from '../../assets/icons/Folder.svg';
import { ReactComponent as Create } from '../../assets/icons/Create.svg';
import { ReactComponent as Terminal } from '../../assets/icons/Terminal.svg';
import { CopyLinkButton } from '../ui/Buttons/CustomButtons/CopyLinkButton';
import { FavoriteButton } from '../ui/Buttons/CustomButtons/FavoriteButton';

const DetailInfoBox: FC = observer(() => {
  const { selectedRepository } = repositoryStore;

  if (!selectedRepository) {
    return null;
  }

  return (
    <DetailPageContent>
      <DetailTitle>Профиль</DetailTitle>

      <ProfileInfoContainer>
        <ProfileIAvatar>
          <img
            src={selectedRepository.owner.avatar_url}
            alt={selectedRepository.owner.login}
          />
        </ProfileIAvatar>
        <RepoInfoContainer>
          <RepoName>{selectedRepository.full_name}</RepoName>
          <RepoText>{selectedRepository.description}</RepoText>
        </RepoInfoContainer>
      </ProfileInfoContainer>

      <StatsContainer>
        <StatBox
          icon={<Star />}
          value={selectedRepository.stargazers_count.toLocaleString('ru-RU')}
          label="Количество звезд"
        />

        <StatBox
          icon={<Fork />}
          value={selectedRepository.forks_count.toLocaleString('ru-RU')}
          label="Количестсво форков"
        />

        <StatBox
          icon={<Archive />}
          value={selectedRepository.archived ? 'Да' : 'Нет'}
          label="В архиве"
        />
        <StatBox
          icon={<Terminal />}
          value={selectedRepository.language || 'Не указан'}
          label="Язык"
        />

        <StatBox
          icon={<Folder />}
          value={new Date(selectedRepository.created_at).toLocaleDateString()}
          label="Cоздано"
        />

        <StatBox
          icon={<Create />}
          value={new Date(selectedRepository.updated_at).toLocaleDateString()}
          label="Изменено"
        />
      </StatsContainer>

      <Line />

      <ActionsContainer>
        <CustomButtonsContainer>
          <CopyLinkButton
            link={selectedRepository.html_url}
            width={24}
            height={24}
          />
          <FavoriteButton repo={selectedRepository} width={24} height={21} />
        </CustomButtonsContainer>

        <RedButton
          as="a"
          href={selectedRepository.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Открыть репозиторий
        </RedButton>
      </ActionsContainer>
    </DetailPageContent>
  );
});

export default DetailInfoBox;
