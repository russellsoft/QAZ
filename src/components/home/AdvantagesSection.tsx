import React from 'react';
import { Award, Leaf, TrendingUp, BarChart3 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';

interface AdvantageCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const AdvantageCard: React.FC<AdvantageCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
    >
      <div className="w-16 h-16 flex items-center justify-center bg-primary-50 text-primary-600 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-neutral-800">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </motion.div>
  );
};

const AdvantagesSection: React.FC = () => {
  const { language, t } = useLanguage();

  const advantages = [
    {
      icon: <Award size={32} />,
      title: {
        ru: 'Высокое качество',
        en: 'Premium Quality',
        cn: '优质品质',
      },
      description: {
        ru: 'Наши удобрения соответствуют самым высоким международным стандартам качества и эффективности',
        en: 'Our fertilizers meet the highest international standards of quality and effectiveness',
        cn: '我们的肥料符合最高的国际质量和效益标准',
      },
    },
    {
      icon: <Leaf size={32} />,
      title: {
        ru: 'Экологичность',
        en: 'Eco-Friendly',
        cn: '环保友好',
      },
      description: {
        ru: 'Мы используем экологически чистые технологии и стремимся минимизировать воздействие на окружающую среду',
        en: 'We use environmentally friendly technologies and strive to minimize our environmental impact',
        cn: '我们使用环保技术，努力将对环境的影响降至最低',
      },
    },
    {
      icon: <TrendingUp size={32} />,
      title: {
        ru: 'Инновации',
        en: 'Innovations',
        cn: '创新',
      },
      description: {
        ru: 'Постоянное исследование и внедрение новейших технологий для улучшения наших продуктов',
        en: 'Continuous research and implementation of the latest technologies to improve our products',
        cn: '持续研究和实施最新技术以改进我们的产品',
      },
    },
    {
      icon: <BarChart3 size={32} />,
      title: {
        ru: 'Высокая урожайность',
        en: 'High Yield',
        cn: '高产量',
      },
      description: {
        ru: 'Наши удобрения обеспечивают значительное повышение урожайности и качества сельскохозяйственных культур',
        en: 'Our fertilizers provide a significant increase in crop yield and quality',
        cn: '我们的肥料能显著提高作物产量和质量',
      },
    },
  ];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4"
          >
            {t('home.advantages.title')}
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-primary-600 mx-auto"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <AdvantageCard
              key={index}
              icon={advantage.icon}
              title={advantage.title[language]}
              description={advantage.description[language]}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;