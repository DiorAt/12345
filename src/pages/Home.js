import { motion } from 'framer-motion';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <motion.section 
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Создайте дом своей мечты
        </motion.h1>
        <motion.p
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Эксклюзивная мебель для вашего комфорта
        </motion.p>
      </motion.section>

      <section className="featured-products">
        <h2>Популярные товары</h2>
        <div className="products-grid">
          {/* Здесь будет grid с товарами */}
        </div>
      </section>
    </div>
  );
};

export default Home;