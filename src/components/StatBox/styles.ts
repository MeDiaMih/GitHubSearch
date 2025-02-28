import styled from 'styled-components';
import { theme } from '../../styles';
import { RepoInfoContainer, RepoText } from '../DetailInfoBox/styles';

export const StatBoxContent = styled.div`
  display: flex;
  gap: ${theme.layout.spacing.medium};
`;

export const StatBoxIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(58, 58, 58, 0.08);
  height: 32px;
  width: 32px;
  border-radius: 50%;
`;

export const StatBoxInfoContainer = styled(RepoInfoContainer)`
  gap: 0;
`;

export const StatBoxText = styled(RepoText)`
  font-size: ${theme.typography.fontSize.fs};
  color: ${theme.colors.statBoxText};
`;

export const StatBoxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.layout.spacing.medium};
  background-color: rgba(58, 58, 58, 0.04);
  padding: 16px;
  box-sizing: border-box;
  border-radius: ${theme.layout.radius.large};
  height: 81px;
  width: 100%;
  max-width: 250px;
`;
