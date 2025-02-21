import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../contexts/CartContext';
import '../styles/QuickView.css';

const QuickView = ({ product, isOpen, onClose }) => {
  const { addToCart } = useCart();
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="quick-view-modal"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
          >
            <button className="close-button" onClick={onClose}>×</button>
            <div className="modal-content">
              <div className="product-gallery">
                <motion.img 
                  src={product.image} 
                  alt={product.name}
                  whileHover={{ scale: 1.05 }}
                />
                <div className="thumbnail-list">
                  {product.gallery?.map((img, index) => (
                    <img key={index} src={img} alt={`${product.name} ${index + 1}`} />
                  ))}
                </div>
              </div>
              <div className="product-details">
                <h2>{product.name}</h2>
                <p className="price">{product.price} ₽</p>
                <p className="description">{product.description}</p>
                <div className="specifications">
                  <h3>Характеристики:</h3>
                  <ul>
                    {product.specifications?.map((spec, index) => (
                      <li key={index}>{spec}</li>
                    ))}
                  </ul>
                </div>
                <motion.button
                  className="add-to-cart"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => addToCart(product)}
                >
                  Добавить в корзину
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default QuickView;