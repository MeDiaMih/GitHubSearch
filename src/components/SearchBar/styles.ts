import styled from 'styled-components';
import { theme } from '../../styles';

export const InputContainer = styled.div`
  position: relative;
`;

export const Input = styled.input.attrs({
  type: 'text',
  placeholder: 'Search',
})`
  box-sizing: border-box;
  width: 100%;
  height: 48px;
  border: none;
  border-radius: ${theme.layout.radius.medium};
  background-color: ${theme.colors.white};
  padding: 0 20px;
  font-size: ${theme.typography.fontSize.fm};

  &::placeholder {
    color: rgba(58, 58, 58, 0.32);
  }

  &:focus {
    border: 1px solid rgba(58, 58, 58, 0.32);
    outline: none;
  }
`;

export const SuggestionsContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${theme.colors.white};
  border: 1px solid rgba(58, 58, 58, 0.32);
  border-radius: ${theme.layout.radius.medium};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 2;
  overflow-y: auto;
`;

export const SuggestionItem = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.focus};
  }
`;
