import styled from 'styled-components';
import { theme } from '../../../../styles';

export const CustomButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: ${theme.layout.radius.small};
  border: 1px solid rgba(58, 58, 58, 0.12);
  cursor: pointer;
  box-sizing: border-box;
`;

export const CustomButtonLink = styled(CustomButton)<{ $isCopied: boolean }>`
  background-color: ${({ $isCopied }) =>
    $isCopied ? 'rgba(58, 58, 58, 0.12)' : 'transparent'};
`;
