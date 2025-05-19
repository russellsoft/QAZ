import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Product, Language } from '../../types';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
  language: Language;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, language }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
      onClick={() => navigate(`/${language}/products/${product.id}`)}
    >
      <div className="h-56 overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name[language]}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-neutral-800">{product.name[language]}</h3>
        <p className="text-neutral-600 mb-4 line-clamp-3">{product.description[language]}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-block bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded">
            {product.category[language]}
          </span>
          {product.chemicalProperties.formula && (
            <span className="inline-block bg-secondary-100 text-secondary-800 text-xs font-medium px-2.5 py-0.5 rounded">
              {product.chemicalProperties.formula}
            </span>
          )}
        </div>

        {/* Key property glimpse */}
        <div className="pt-4 border-t border-neutral-100">
          <div className="flex justify-between text-sm">
            <span className="text-neutral-500">
              {language === 'ru' ? 'Основной компонент:' : 
               language === 'en' ? 'Main component:' : 
               '主要成分:'}
            </span>
            <span className="font-medium text-neutral-800">
              {product.chemicalProperties.composition[0].name[language]}: {product.chemicalProperties.composition[0].percentage}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;