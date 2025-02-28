import { StylesConfig } from 'react-select';
import { OptionType } from '../../types';
import { theme } from '../../styles';

export const customStyles: StylesConfig<OptionType, false> = {
  control: (provided) => ({
    ...provided,
    height: '48px',
    width: '286px',
    borderRadius: theme.layout.radius.medium,
    border: 'none',
    fontSize: theme.typography.fontSize.fm,
    padding: '0 10px',
    boxShadow: 'none',
    cursor: 'pointer',
    '&:hover': {
      border: '1px solid rgba(58, 58, 58, 0.32)',
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? theme.colors.focus : theme.colors.white,
    color: theme.colors.black,
    borderRadius: theme.layout.radius.small,
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: theme.layout.radius.medium,
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),
};
