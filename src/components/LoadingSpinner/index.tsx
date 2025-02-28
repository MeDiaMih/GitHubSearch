import { FC } from 'react';
import { Spinner, SpinnerContainer } from './styles';

const LoadingSpinner: FC = () => {
  return (
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
  );
};

export default LoadingSpinner;
