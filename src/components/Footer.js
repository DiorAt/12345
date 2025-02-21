import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>О нас</h3>
          <p>Мы создаем комфортную мебель для вашего дома</p>
        </div>
        <div className="footer-section">
          <h3>Контакты</h3>
          <p>Телефон: +7 (999) 123-45-67</p>
          <p>Email: info@furniture.ru</p>
        </div>
        <div className="footer-section">
          <h3>Адрес</h3>
          <p>г. Москва, ул. Примерная, д. 123</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;