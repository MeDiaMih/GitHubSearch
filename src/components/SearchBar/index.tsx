import React, { FC, useState } from 'react';
import {
  Input,
  InputContainer,
  SuggestionItem,
  SuggestionsContainer,
} from './styles';
import SortSelect from '../SortSelect';
import { TitleContainer } from '../ui/Containers/Title';
import { Title } from '../ui/Title';
import { observer } from 'mobx-react-lite';
import { SearchBarProps } from '../../types';
import { repositoryStore } from '../../stores/RepositoryStore';

const SearchBar: FC<SearchBarProps> = observer(({ query, suggestions }) => {
  const { repositories, filters, setFilters } = repositoryStore;
  const [isFocused, setFocused] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFilters({ query: value || '' });
  };

  const handleSuggestion = (suggestion: string) => {
    if (filters.query !== suggestion) {
      setFilters({ query: suggestion });
    }
    setFocused(false);
  };

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setTimeout(() => setFocused(false), 300);
  };

  const handleSortChange = (sort: string) => {
    setFilters({ sort });
  };

  const handleSortSelect = (option: any) => {
    if (option) {
      setFilters({ sort: option.value });
      handleSortChange(option.value);
    }
  };

  return (
    <>
      <InputContainer>
        <Input
          value={query}
          onChange={handleSearch}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {isFocused && suggestions.length > 0 && (
          <SuggestionsContainer>
            {suggestions.map((suggestion, index) => (
              <SuggestionItem
                key={index}
                onClick={() => handleSuggestion(suggestion)}
              >
                {suggestion}
              </SuggestionItem>
            ))}
          </SuggestionsContainer>
        )}
      </InputContainer>
      <TitleContainer>
        <Title>Result: {repositories.length} repositories</Title>
        <SortSelect value={filters.sort} onChange={handleSortSelect} />
      </TitleContainer>
    </>
  );
});

export default SearchBar;
