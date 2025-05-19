import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { products } from '../data/products';
import ProductCard from '../components/products/ProductCard';
import ProductDetail from '../components/products/ProductDetail';
import { motion } from 'framer-motion';

const Products: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { language, t } = useLanguage();
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  // If we have a product ID in the URL, render the product detail
  if (productId) {
    return <ProductDetail />;
  }

  // Get unique categories
  const categories = ['all', ...new Set(products.map(product => product.category[language]))];

  // Filter products by category
  const filteredProducts = categoryFilter === 'all' 
    ? products 
    : products.filter(product => product.category[language] === categoryFilter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-neutral-50 pt-20 pb-16"
    >
      <div className="container mx-auto px-4 md:px-6 py-8">
        {/* Page header */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4"
          >
            {t('products.title')}
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-24 h-1 bg-primary-600 mx-auto mb-6"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-neutral-600"
          >
            {language === 'ru' 
              ? 'Широкий ассортимент высококачественных удобрений для различных сельскохозяйственных культур и условий.'
              : language === 'en'
                ? 'A wide range of high-quality fertilizers for various crops and conditions.'
                : '各种高品质肥料，适用于不同的作物和条件。'
            }
          </motion.p>
        </div>

        {/* Category filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-2 mb-8 justify-center"
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setCategoryFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                categoryFilter === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              {category === 'all' ? t('products.filter.all') : category}
            </button>
          ))}
        </motion.div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              language={language} 
            />
          ))}
        </div>

        {/* No products message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-neutral-500">
              {language === 'ru' 
                ? 'Продукты не найдены. Пожалуйста, выберите другую категорию.'
                : language === 'en'
                  ? 'No products found. Please select a different category.'
                  : '未找到产品。请选择其他类别。'
              }
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Products;