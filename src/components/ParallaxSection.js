import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../styles/ParallaxSection.css';

const ParallaxSection = () => {
  const [windowHeight, setWindowHeight] = useState(0);
  const { scrollY } = useScroll();

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  const y = useTransform(scrollY, [0, windowHeight], [0, 300]);
  const opacity = useTransform(scrollY, [0, windowHeight / 2], [1, 0]);

  return (
    <section className="parallax-section">
      <motion.div 
        className="parallax-background"
        style={{ y, opacity }}
      >
        <div className="content">
          <h2>Создайте уютное пространство</h2>
          <p>Мебель, которая превращает дом в место, куда хочется возвращаться</p>
        </div>
      </motion.div>
    </section>
  );
};

export default ParallaxSection;