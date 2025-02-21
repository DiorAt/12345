import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDebounce } from '../hooks/useDebounce';
import '../styles/SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      // Здесь должен быть API запрос для получения подсказок
      fetchSuggestions(debouncedSearchTerm)
        .then(results => {
          setSuggestions(results);
          setIsSearching(false);
        });
    } else {
      setSuggestions([]);
    }
  }, [debouncedSearchTerm]);

  return (
    <div className="search-container">
      <motion.div 
        className="search-bar"
        initial={{ scale: 1 }}
        whileFocus={{ scale: 1.02 }}
      >
        <input
          type="text"
          placeholder="Поиск мебели..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={() => onSearch(searchTerm)}>
          <i className="fas fa-search"></i>
        </button>
      </motion.div>

      <AnimatePresence>
        {suggestions.length > 0 && (
          <motion.div
            className="suggestions"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {suggestions.map((suggestion, index) => (
              <motion.div
                key={index}
                className="suggestion-item"
                whileHover={{ backgroundColor: '#f0f0f0' }}
                onClick={() => {
                  setSearchTerm(suggestion);
                  onSearch(suggestion);
                  setSuggestions([]);
                }}
              >
                {suggestion}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;