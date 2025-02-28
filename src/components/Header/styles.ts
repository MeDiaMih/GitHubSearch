import styled from 'styled-components';
import { theme } from '../../styles';

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 3;
  padding: 16px 80px;
  height: 72px;
  width: 100%;
  box-sizing: border-box;
  background-color: ${theme.colors.darkGrey};
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.layout.spacing.small};
  cursor: pointer;
`;

export const Logo = styled.div`
  font-size: ${theme.typography.fontSize.fs};
  line-height: ${theme.typography.lineHeight.l3};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.white};
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.layout.spacing.great};
`;

export const FavoriteWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AccountWrapper2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${theme.layout.radius.small};
  background: rgba(255, 255, 255, 0.08);
  cursor: pointer;
`;

export const AccountWrapper1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: ${theme.layout.radius.small};
  background: rgba(255, 255, 255, 0.36);
`;
