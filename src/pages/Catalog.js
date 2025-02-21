import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import '../styles/Catalog.css';

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: 'all',
    priceRange: 'all',
    style: 'all'
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['Все', 'Диваны', 'Кровати', 'Столы', 'Стулья', 'Шкафы'];
  const priceRanges = ['Все', 'До 10000', '10000-30000', '30000-50000', 'Более 50000'];
  const styles = ['Все', 'Современный', 'Классический', 'Скандинавский', 'Лофт'];

  const filterProducts = () => {
    // Здесь логика фильтрации продуктов
  };

  return (
    <div className="catalog">
      <motion.div 
        className={`filters ${isFilterOpen ? 'open' : ''}`}
        initial={{ x: -300 }}
        animate={{ x: isFilterOpen ? 0 : -300 }}
      >
        <h2>Фильтры</h2>
        
        <div className="filter-section">
          <h3>Категории</h3>
          {categories.map(category => (
            <label key={category}>
              <input 
                type="radio" 
                name="category" 
                value={category.toLowerCase()}
                checked={filters.category === category.toLowerCase()}
                onChange={(e) => setFilters({...filters, category: e.target.value})}
              />
              {category}
            </label>
          ))}
        </div>

        {/* Аналогичные секции для цен и стилей */}
      </motion.div>

      <motion.div 
        className="products-container"
        layout
      >
        <AnimatePresence>
          {products.map(product => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Catalog;