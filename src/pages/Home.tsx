import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AdvantagesSection from '../components/home/AdvantagesSection';
import ProductsSection from '../components/home/ProductsSection';
import NewsSection from '../components/home/NewsSection';
import SocialResponsibilitySection from '../components/home/SocialResponsibilitySection';
import DevelopmentPlansSection from '../components/home/DevelopmentPlansSection';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HeroSection />
      <AdvantagesSection />
      <ProductsSection />
      <NewsSection />
      <SocialResponsibilitySection />
      <DevelopmentPlansSection />
    </motion.div>
  );
};

export default Home;