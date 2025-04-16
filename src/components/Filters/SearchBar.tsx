"use client"
import { Search } from 'lucide-react'
import { useState } from 'react';
import { Form, FormControl } from '../ui/form';

interface SearchInputProps {
  onSearch: (value: string) => void;
}

const SearchInput = ({ onSearch }: SearchInputProps) => {
  const [searchTerm, setSearchTerm] = useState('');


  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value); // Pass the value to parent component
  };
  return (
    <div className="nav-item search-bar flex-nowrap align-items-center  d-md-block">
      <form>
        <FormControl onChange={handleInputChange} // Update state on change
          className="ps-5 bg-light" type="search" placeholder="Search" aria-label="Search" />
        <button title='btn' className="bg-transparent p-2 position-absolute top-50 start-0 translate-middle-y border-0 text-primary-hover text-reset icons-center" type="button">
          <Search />
        </button>
      </form>
    </div>
  )
}

export default SearchInput