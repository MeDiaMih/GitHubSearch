import { FC } from 'react';
import { OptionType, SortSelectProps } from '../../types';
import Select from 'react-select';
import { customStyles } from './styles';
import { repositoryStore } from '../../stores/RepositoryStore';

const options: OptionType[] = [
  { value: 'stars', label: 'Most stars' },
  { value: 'forks', label: 'Most forks' },
];

const SortSelect: FC<SortSelectProps> = ({ value, onChange }) => {
  const selectedOption = options.find((option) => option.value === value);

  const handleChange = (option: { value: string; label: string } | null) => {
    if (option) {
      repositoryStore.setFilters({ sort: option.value });
      onChange(option);
    }
  };

  return (
    <Select
      options={options}
      value={selectedOption}
      onChange={handleChange}
      styles={customStyles}
      isSearchable={false}
    />
  );
};

export default SortSelect;
