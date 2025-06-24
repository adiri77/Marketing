import { useState, useEffect } from 'react';
import type { UseDebounceReturn } from '../types';

/**
 * Custom hook for debouncing values
 * Useful for search inputs, form validation, and API calls
 */
export function useDebounce<T>(value: T, delay: number): UseDebounceReturn<T> {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  const [isDebouncing, setIsDebouncing] = useState<boolean>(false);

  useEffect(() => {
    setIsDebouncing(true);
    
    const handler = setTimeout(() => {
      setDebouncedValue(value);
      setIsDebouncing(false);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return { debouncedValue, isDebouncing };
}

/**
 * Hook for debounced search functionality
 */
export function useSearch(initialValue: string = '', delay: number = 300) {
  const [searchTerm, setSearchTerm] = useState(initialValue);
  const { debouncedValue: debouncedSearchTerm, isDebouncing } = useDebounce(searchTerm, delay);

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  return {
    searchTerm,
    debouncedSearchTerm,
    isSearching: isDebouncing,
    handleSearchChange,
    clearSearch,
  };
}
