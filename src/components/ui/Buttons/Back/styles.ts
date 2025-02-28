import styled from 'styled-components';
import { theme } from '../../../../styles';

export const BackButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

export const BackButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.layout.spacing.tiny};
  cursor: pointer;
`;

export const BackButtonText = styled.span`
  font-size: ${theme.typography.fontSize.fs};
`;

export const BackButtonIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;
