import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { products } from '../../data/products';
import { motion } from 'framer-motion';

const ProductsSection: React.FC = () => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  
  // Only show 3 products on the home page
  const featuredProducts = products.slice(0, 3);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4"
            >
              {t('home.products.title')}
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: '6rem' }}
              viewport={{ once: true }}
              className="h-1 bg-primary-600"
            ></motion.div>
          </div>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-primary-600 hover:text-primary-700 flex items-center font-medium transition-colors"
            onClick={() => navigate(`/${language}/products`)}
          >
            {t('home.products.viewAll')}
            <ArrowRight size={16} className="ml-1" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => navigate(`/${language}/products/${product.id}`)}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.imageUrl} 
                  alt={product.name[language]}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-neutral-800">{product.name[language]}</h3>
                <p className="text-neutral-600 mb-4 line-clamp-2">{product.description[language]}</p>
                
                <div className="flex flex-wrap gap-2">
                  <span className="inline-block bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {product.category[language]}
                  </span>
                  {product.chemicalProperties.formula && (
                    <span className="inline-block bg-secondary-100 text-secondary-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {product.chemicalProperties.formula}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;