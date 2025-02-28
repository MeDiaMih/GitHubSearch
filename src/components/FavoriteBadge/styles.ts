import styled from 'styled-components';
import { theme } from '../../styles';

export const BadgeContainer = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
  border-radius: ${theme.layout.radius.tiny};
  background-color: ${theme.colors.red};
  color: ${theme.colors.white};
  font-size: ${theme.typography.fontSize.fxs};
  font-weight: ${theme.typography.fontWeight.semiBold};
`;
