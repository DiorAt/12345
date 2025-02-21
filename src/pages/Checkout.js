import { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../contexts/CartContext';
import '../styles/Checkout.css';

const Checkout = () => {
  const { items } = useCart();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    paymentMethod: 'card'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Логика отправки заказа
  };

  return (
    <motion.div 
      className="checkout"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="checkout-container">
        <div className="checkout-form">
          <h2>Оформление заказа</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                placeholder="Имя"
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                required
              />
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                placeholder="Фамилия"
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                required
              />
            </div>

            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />

            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="tel"
              placeholder="Телефон"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              required
            />

            <motion.textarea
              whileFocus={{ scale: 1.02 }}
              placeholder="Адрес доставки"
              value={formData.address}
              onChange={(e) => setFormData({...formData, address: e.target.value})}
              required
            />

            <div className="payment-methods">
              <h3>Способ оплаты</h3>
              <div className="payment-options">
                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={formData.paymentMethod === 'card'}
                    onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                  />
                  Банковская карта
                </label>
                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="cash"
                    checked={formData.paymentMethod === 'cash'}
                    onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                  />
                  Наличные при получении
                </label>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="submit-order"
            >
              Подтвердить заказ
            </motion.button>
          </form>
        </div>

        <div className="order-summary">
          <h3>Ваш заказ</h3>
          {items.map(item => (
            <div key={item.id} className="summary-item">
              <img src={item.image} alt={item.name} />
              <div className="summary-item-details">
                <h4>{item.name}</h4>
                <p>Количество: {item.quantity}</p>
                <p className="price">{item.price * item.quantity} ₽</p>
              </div>
            </div>
          ))}
          <div className="total">
            <span>Итого:</span>
            <span>{items.reduce((sum, item) => sum + item.price * item.quantity, 0)} ₽</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Checkout;