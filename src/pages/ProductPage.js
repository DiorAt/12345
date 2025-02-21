import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../contexts/CartContext';
import ScrollAnimation from '../components/ScrollAnimation';
import '../styles/ProductPage.css';
import { products } from '../data/products';

const ProductPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
  
    useEffect(() => {
      // Находим продукт по id из массива products
      const foundProduct = products.find(p => p.id === parseInt(id));
      setProduct(foundProduct);
    }, [id]);
  
    // ... остальной код ...
  };
  if (!product) return <div>Загрузка...</div>;

  return (
    <div className="product-page">
      <motion.div 
        className="product-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="product-images">
          <motion.div 
            className="main-image"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
          >
            <img 
              src={product.images[selectedImage]} 
              alt={product.name} 
            />
          </motion.div>
          <div className="image-thumbnails">
            {product.images.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`${product.name} ${index + 1}`}
                className={selectedImage === index ? 'active' : ''}
                onClick={() => setSelectedImage(index)}
                whileHover={{ scale: 1.1 }}
              />
            ))}
          </div>
        </div>

        <div className="product-info">
          <ScrollAnimation>
            <h1>{product.name}</h1>
            <p className="price">{product.price} ₽</p>
            <div className="description">
              <h2>Описание</h2>
              <p>{product.description}</p>
            </div>

            <div className="specifications">
              <h2>Характеристики</h2>
              <ul>
                {product.specifications.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>

            <div className="quantity-selector">
              <button 
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                disabled={quantity === 1}
              >
                -
              </button>
              <span>{quantity}</span>
              <button 
                onClick={() => setQuantity(q => q + 1)}
              >
                +
              </button>
            </div>

            <motion.button
              className="add-to-cart"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => addToCart({ ...product, quantity })}
            >
              Добавить в корзину
            </motion.button>
          </ScrollAnimation>
        </div>
      </motion.div>

      <ScrollAnimation delay={0.2}>
        <div className="related-products">
          <h2>Похожие товары</h2>
          <div className="related-grid">
            {product.related.map(item => (
              <motion.div
                key={item.id}
                className="related-item"
                whileHover={{ y: -10 }}
              >
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.price} ₽</p>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default ProductPage;