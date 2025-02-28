import { FC } from 'react';
import { ReactComponent as Arrow } from '../../../../assets/icons/Arrow.svg';
import {
  BackButtonContainer,
  BackButtonIcon,
  BackButtonText,
  BackButtonWrapper,
} from './styles';
import { useNavigate } from 'react-router-dom';

const BackButton: FC = () => {
  const navigate = useNavigate();

  return (
    <BackButtonWrapper>
      <BackButtonContainer onClick={() => navigate(-1)}>
        <BackButtonIcon>
          <Arrow />
        </BackButtonIcon>
        <BackButtonText>Back</BackButtonText>
      </BackButtonContainer>
    </BackButtonWrapper>
  );
};

export default BackButton;
