import styled from 'styled-components';
import { theme } from '../../styles';

export const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: ${theme.colors.backgroundIcon};
  border-radius: ${theme.layout.radius.small};
  font-size: ${theme.typography.fontSize.fm};
  font-weight: ${theme.typography.fontWeight.bold};
`;
