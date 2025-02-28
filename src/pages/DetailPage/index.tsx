import { DetailPageContainer, PageContentWrapper } from './styles';
import { PageWrapper } from '../../components/ui/Containers/PageWrapper';
import BackButton from '../../components/ui/Buttons/Back';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import { repositoryStore } from '../../stores/RepositoryStore';
import { useEffect } from 'react';
import DetailInfoBox from '../../components/DetailInfoBox';
import LoadingSpinner from '../../components/LoadingSpinner';

const DetailPage = observer(() => {
  const { owner, repo } = useParams<{ owner: string; repo: string }>();
  const { fetchRepositoryDetails, loading } = repositoryStore;

  useEffect(() => {
    if (owner && repo) {
      fetchRepositoryDetails(owner, repo);
    }
  }, [owner, repo, fetchRepositoryDetails]);

  return (
    <DetailPageContainer>
      <PageWrapper>
        <BackButton />

        <PageContentWrapper>
          {loading ? <LoadingSpinner /> : <DetailInfoBox />}
        </PageContentWrapper>
      </PageWrapper>
    </DetailPageContainer>
  );
});

export default DetailPage;
