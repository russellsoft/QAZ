import React from 'react';
import { ArrowLeft, FileText, Leaf, BarChart3 } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { products } from '../../data/products';
import { Product } from '../../types';
import { motion } from 'framer-motion';

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  // Find the product
  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-neutral-800 mb-4">
          {language === 'ru' ? 'Продукт не найден' : 
           language === 'en' ? 'Product not found' : 
           '未找到产品'}
        </h2>
        <button
          onClick={() => navigate(`/${language}/products`)}
          className="text-primary-600 hover:text-primary-700 flex items-center justify-center mx-auto mt-4"
        >
          <ArrowLeft size={18} className="mr-2" />
          {language === 'ru' ? 'Вернуться к списку продуктов' : 
           language === 'en' ? 'Back to product list' : 
           '返回产品列表'}
        </button>
      </div>
    );
  }

  const renderPropertyCard = (
    title: string,
    icon: React.ReactNode,
    content: React.ReactNode,
    delay: number
  ) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-lg shadow-md p-6"
    >
      <div className="flex items-center mb-4">
        <div className="mr-3 w-10 h-10 flex items-center justify-center bg-primary-100 text-primary-600 rounded-full">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-neutral-800">{title}</h3>
      </div>
      {content}
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-neutral-50 pt-20 pb-16"
    >
      {/* Product Hero Section */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-8">
          <button
            onClick={() => navigate(`/${language}/products`)}
            className="text-primary-600 hover:text-primary-700 flex items-center mb-6"
          >
            <ArrowLeft size={18} className="mr-2" />
            {language === 'ru' ? 'Вернуться к списку продуктов' : 
             language === 'en' ? 'Back to product list' : 
             '返回产品列表'}
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4"
              >
                {product.name[language]}
              </motion.h1>
              <motion.div 
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: '6rem' }}
                className="h-1 bg-primary-600 mb-6"
              ></motion.div>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-neutral-600 mb-6"
              >
                {product.description[language]}
              </motion.p>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-2"
              >
                <span className="inline-block bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full">
                  {product.category[language]}
                </span>
                {product.chemicalProperties.formula && (
                  <span className="inline-block bg-secondary-100 text-secondary-800 text-sm font-medium px-3 py-1 rounded-full">
                    {product.chemicalProperties.formula}
                  </span>
                )}
              </motion.div>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <img 
                src={product.imageUrl} 
                alt={product.name[language]} 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Chemical Properties */}
          {renderPropertyCard(
            t('products.chemical'),
            <FileText size={20} />,
            (
              <div>
                {product.chemicalProperties.formula && (
                  <div className="mb-4">
                    <p className="text-neutral-500 mb-1 text-sm">
                      {language === 'ru' ? 'Химическая формула:' : 
                       language === 'en' ? 'Chemical Formula:' : 
                       '化学式:'}
                    </p>
                    <p className="text-lg font-medium text-neutral-800">{product.chemicalProperties.formula}</p>
                  </div>
                )}
                <p className="text-neutral-500 mb-2 text-sm">
                  {language === 'ru' ? 'Состав:' : 
                   language === 'en' ? 'Composition:' : 
                   '成分:'}
                </p>
                <ul className="space-y-2">
                  {product.chemicalProperties.composition.map((comp, index) => (
                    <li key={index} className="flex justify-between">
                      <span className="text-neutral-700">{comp.name[language]}</span>
                      <span className="font-semibold text-neutral-800">{comp.percentage}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ),
            0.1
          )}

          {/* Physical Properties */}
          {renderPropertyCard(
            t('products.physical'),
            <Leaf size={20} />,
            (
              <div>
                <div className="mb-4">
                  <p className="text-neutral-500 mb-1 text-sm">
                    {language === 'ru' ? 'Внешний вид:' : 
                     language === 'en' ? 'Appearance:' : 
                     '外观:'}
                  </p>
                  <p className="text-neutral-700">{product.physicalProperties.appearance[language]}</p>
                </div>
                {product.physicalProperties.density && (
                  <div className="mb-4">
                    <p className="text-neutral-500 mb-1 text-sm">
                      {language === 'ru' ? 'Плотность:' : 
                       language === 'en' ? 'Density:' : 
                       '密度:'}
                    </p>
                    <p className="text-neutral-700">{product.physicalProperties.density}</p>
                  </div>
                )}
                {product.physicalProperties.solubility && (
                  <div>
                    <p className="text-neutral-500 mb-1 text-sm">
                      {language === 'ru' ? 'Растворимость:' : 
                       language === 'en' ? 'Solubility:' : 
                       '溶解度:'}
                    </p>
                    <p className="text-neutral-700">{product.physicalProperties.solubility[language]}</p>
                  </div>
                )}
              </div>
            ),
            0.2
          )}

          {/* Applications */}
          {renderPropertyCard(
            t('products.applications'),
            <BarChart3 size={20} />,
            (
              <div>
                <ul className="space-y-2">
                  {product.applications[language].map((app, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 mt-2 mr-2 bg-primary-500 rounded-full"></div>
                      <span className="text-neutral-700">{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ),
            0.3
          )}
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-white rounded-lg shadow-md p-6 md:p-8"
        >
          <h3 className="text-xl font-semibold mb-6 text-neutral-800">
            {language === 'ru' ? 'Рекомендации по применению' : 
             language === 'en' ? 'Application Recommendations' : 
             '应用建议'}
          </h3>
          <div className="prose max-w-none text-neutral-700">
            <p>
              {language === 'ru' ? 
                `Для достижения оптимальных результатов рекомендуется учитывать тип почвы, фазу развития растения и конкретные потребности культуры. ${product.name.ru} следует применять в соответствии с результатами анализа почвы и рекомендациями агрономов. Точная дозировка должна определяться в зависимости от конкретных условий и требований культуры.` : 
               language === 'en' ? 
                `To achieve optimal results, it is recommended to consider soil type, plant development phase, and specific crop requirements. ${product.name.en} should be applied in accordance with soil analysis results and recommendations from agronomists. The exact dosage should be determined based on specific conditions and crop requirements.` : 
                `为了取得最佳效果，建议考虑土壤类型、植物发育阶段和特定作物需求。${product.name.cn}应根据土壤分析结果和农艺师的建议进行施用。确切的剂量应根据具体条件和作物需求来确定。`
              }
            </p>
            <p className="mt-4">
              {language === 'ru' ? 
                `Для получения дополнительной информации о применении данного удобрения, пожалуйста, свяжитесь с нашими специалистами через форму обратной связи или по указанным контактным данным.` : 
               language === 'en' ? 
                `For additional information on the application of this fertilizer, please contact our specialists through the feedback form or using the specified contact details.` : 
                `有关该肥料应用的更多信息，请通过反馈表单或使用指定的联系方式联系我们的专家。`
              }
            </p>
          </div>
        </motion.div>

        {/* Related Products */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-neutral-800">
            {language === 'ru' ? 'Похожие продукты' : 
             language === 'en' ? 'Related Products' : 
             '相关产品'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products
              .filter(p => p.category[language] === product.category[language] && p.id !== product.id)
              .slice(0, 3)
              .map((relatedProduct, index) => (
                <motion.div
                  key={relatedProduct.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  onClick={() => navigate(`/${language}/products/${relatedProduct.id}`)}
                >
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={relatedProduct.imageUrl} 
                      alt={relatedProduct.name[language]}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-medium mb-1 text-neutral-800">{relatedProduct.name[language]}</h4>
                    <p className="text-neutral-600 text-sm line-clamp-2">{relatedProduct.description[language]}</p>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetail;