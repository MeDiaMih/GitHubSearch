import styled from 'styled-components';
import { theme } from '../../../styles';

export const RedButton = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  border: none;
  background-color: ${theme.colors.red};
  color: ${theme.colors.white};
  border-radius: ${theme.layout.radius.small};
  font-size: ${theme.typography.fontSize.fs};
  font-weight: ${theme.typography.fontWeight.semiBold};
  padding: 8px 16px;
`;
