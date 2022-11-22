import React from 'react';
import { FilterLabel, FilterInput } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <FilterLabel>
      Magic Finder
      <FilterInput
        type="text"
        value={value}
        onChange={onChange}
        name="filter"
      />
    </FilterLabel>
  );
};

export default Filter;
