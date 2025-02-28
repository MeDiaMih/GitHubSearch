import styled from 'styled-components';
import { theme } from '../../styles';
import { CustomButton } from '../ui/Buttons/CustomButtons/styles';

export const DetailPageContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.layout.spacing.large};
  width: 100%;
  max-width: 862px;
  min-height: 544px;
  box-sizing: border-box;
  padding: 32px;
  border-radius: ${theme.layout.radius.large};
  background-color: ${theme.colors.white};
  margin-top: 48px;
`;

export const DetailTitle = styled.h1`
  font-size: ${theme.typography.fontSize.fxl};
  font-weight: ${theme.typography.fontWeight.semiBold};
  margin: 0;
  padding: 0;
  line-height: ${theme.typography.lineHeight.l2};
`;

export const ProfileInfoContainer = styled.div`
  display: flex;
  gap: ${theme.layout.spacing.large};
`;

export const ProfileIAvatar = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 125px;
  height: 125px;
  border-radius: 50%;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const RepoInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: ${theme.layout.spacing.large};
`;

export const RepoName = styled.h2`
  font-size: ${theme.typography.fontSize.fl};
  font-weight: ${theme.typography.fontWeight.semiBold};
  margin: 0;
  padding: 0;
  line-height: ${theme.typography.lineHeight.l2};
`;

export const RepoText = styled.p`
  font-size: ${theme.typography.fontSize.fxm};
  margin: 0;
  padding: 0;
  line-height: ${theme.typography.lineHeight.l4};
`;

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${theme.layout.spacing.large};
`;

export const Line = styled.div`
  border-bottom: 1px solid rgba(33, 34, 35, 0.08);
`;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CustomButtonsContainer = styled.div`
  display: flex;
  gap: ${theme.layout.spacing.great};
`;

export const DetailCustomButton = styled(CustomButton)`
  width: 40px;
  height: 40px;
`;

export const DetailCustomButtonLink = styled(DetailCustomButton)<{
  $isCopied: boolean;
}>`
  background-color: ${({ $isCopied }) =>
    $isCopied ? 'rgba(58, 58, 58, 0.12)' : 'transparent'};
`;
