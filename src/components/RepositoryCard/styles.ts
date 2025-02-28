import styled from 'styled-components';
import { theme } from '../../styles';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.layout.spacing.medium};
  box-sizing: border-box;
  background-color: ${theme.colors.white};
  border-radius: ${theme.layout.radius.large};
  padding: 24px;
  width: 100%;
  max-width: 282px;
  height: 180px;
`;

export const CardHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.layout.spacing.base};
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardAvatar = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const PopularityContainer = styled.div`
  display: flex;
  gap: ${theme.layout.spacing.base};
`;

export const PopularityInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.layout.spacing.tiny};
  box-sizing: border-box;
  background: ${theme.colors.backgroundIcon};
  padding: 4px 8px;
  border-radius: ${theme.layout.radius.medium};
  font-size: ${theme.typography.fontSize.fxxs};
  line-height: ${theme.typography.lineHeight.l4};
`;

export const RepoInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.layout.spacing.small};
`;

export const RepoName = styled.div`
  font-weight: ${theme.typography.fontWeight.semiBold};
  line-height: ${theme.typography.lineHeight.l2};
`;

export const CardButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CustomButtonsContainer = styled.div`
  display: flex;
  gap: ${theme.layout.spacing.medium};
`;
