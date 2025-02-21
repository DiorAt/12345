import { motion } from 'framer-motion';
import { useState } from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="product-card"
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div 
        className="product-image"
        animate={{ scale: isHovered ? 1.05 : 1 }}
      >
        <img src={product.image} alt={product.name} />
        <motion.div 
          className="quick-actions"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
        >
          <button onClick={() => product.addToCart(product)}>В корзину</button>
          <button onClick={() => product.quickView(product)}>Быстрый просмотр</button>
        </motion.div>
      </motion.div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <span className="price">{product.price} ₽</span>
      </div>
    </motion.div>
  );
};

export default ProductCard;