import styled, { keyframes } from 'styled-components';
import { theme } from '../../styles';

export const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

export const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid ${theme.colors.darkGrey};
  border-top: 4px solid transparent;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;
