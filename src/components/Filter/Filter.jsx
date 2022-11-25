import { Label } from '../ContactForm/ContactForm.styled';
import { Input } from './Filter.styled';
import React from 'react';
import { useFilter } from '../../hooks/filterHook';

export const Filter = () => {
  const { filter, changeFilter } = useFilter();

  const handleFilter = e => {
    const keyWord = e.target.value.toLowerCase().split(' ').join('');

    changeFilter(keyWord);
  };

  return (
    <div>
      <Label>Find contacts by name</Label>
      <Input
        type="text"
        placeholder="Enter name"
        name="name"
        value={filter}
        onChange={handleFilter}
      />
    </div>
  );
};
