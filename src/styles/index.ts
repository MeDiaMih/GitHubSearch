import { createGlobalStyle } from 'styled-components';
import { typography } from './typography';
import { colors } from './colors';
import { layout } from './layout';

export const GlobalStyle = createGlobalStyle`

  body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: ${typography.mainFont}, sans-serif;
    font-size: ${typography.fontSize.fm};
    line-height: ${typography.lineHeight.l1};
    font-weight: ${typography.fontWeight.regular};
    background-color: ${colors.background};
    color: ${colors.darkGrey};
  }

  a {
    text-decoration: none;
    color: ${colors.link};
    font-size: ${typography.fontSize.fs};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 240px;
    display: inline-block;
  }

`;

export const theme = {
  colors,
  typography,
  layout,
};
