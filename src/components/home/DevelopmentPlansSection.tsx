import React from 'react';
import { LucideCalendarCheck, TrendingUp, Factory, Microscope } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';

const DevelopmentPlansSection: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    title: {
      ru: 'Планы развития до 2030 года',
      en: 'Development Plans until 2030',
      cn: '2030年前的发展计划',
    },
    description: {
      ru: 'Стратегия долгосрочного развития компании QAZ включает амбициозные планы расширения производства, внедрения инновационных технологий и запуска новых продуктов.',
      en: 'QAZ\'s long-term development strategy includes ambitious plans for production expansion, implementation of innovative technologies, and launching new products.',
      cn: 'QAZ的长期发展战略包括生产扩展、实施创新技术和推出新产品的宏伟计划。',
    },
    timeline: [
      {
        year: '2025',
        icon: <Factory size={24} />,
        title: {
          ru: 'Расширение производственных мощностей',
          en: 'Production Capacity Expansion',
          cn: '生产能力扩张',
        },
        description: {
          ru: 'Увеличение производства на 25% до более чем 40 000 тонн в месяц за счет строительства новой производственной линии.',
          en: 'Increasing production by 25% to more than 40,000 tons per month through the construction of a new production line.',
          cn: '通过建设新的生产线，将产量提高25%至每月超过40,000吨。',
        },
      },
      {
        year: '2027',
        icon: <Microscope size={24} />,
        title: {
          ru: 'Запуск новой линейки продуктов',
          en: 'Launch of New Product Line',
          cn: '推出新产品线',
        },
        description: {
          ru: 'Разработка и производство серии инновационных удобрений с контролируемым высвобождением для специальных сельскохозяйственных культур.',
          en: 'Development and production of a series of innovative controlled-release fertilizers for special agricultural crops.',
          cn: '开发和生产一系列用于特殊农作物的创新控释肥料。',
        },
      },
      {
        year: '2028',
        icon: <LucideCalendarCheck size={24} />,
        title: {
          ru: 'Достижение экологических целей',
          en: 'Achievement of Environmental Goals',
          cn: '实现环境目标',
        },
        description: {
          ru: 'Сокращение углеродного следа производства на 30% за счет внедрения энергоэффективных технологий и использования возобновляемых источников энергии.',
          en: 'Reducing the carbon footprint of production by 30% through the implementation of energy-efficient technologies and the use of renewable energy sources.',
          cn: '通过实施节能技术和使用可再生能源，将生产的碳足迹减少30%。',
        },
      },
      {
        year: '2030',
        icon: <TrendingUp size={24} />,
        title: {
          ru: 'Международная экспансия',
          en: 'International Expansion',
          cn: '国际扩张',
        },
        description: {
          ru: 'Увеличение экспорта на 50% и выход на новые международные рынки в Юго-Восточной Азии и Европе.',
          en: 'Increasing exports by 50% and entering new international markets in Southeast Asia and Europe.',
          cn: '增加50%的出口并进入东南亚和欧洲的新国际市场。',
        },
      },
    ],
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4"
          >
            {content.title[language]}
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-primary-600 mx-auto mb-6"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-lg text-neutral-600"
          >
            {content.description[language]}
          </motion.p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200"></div>
          
          <div className="space-y-12 md:space-y-0">
            {content.timeline.map((item, index) => (
              <div key={index} className="relative">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Year marker for desktop */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary-600 text-white items-center justify-center font-bold z-10">
                    {item.year}
                  </div>
                  
                  {/* Content block */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                    <div className="bg-white rounded-lg shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
                      {/* Year marker for mobile */}
                      <div className="md:hidden flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold mr-3">
                          {item.year}
                        </div>
                        <h3 className="text-xl font-semibold text-neutral-800">{item.title[language]}</h3>
                      </div>
                      
                      {/* Desktop title */}
                      <div className="hidden md:flex items-center mb-4">
                        <div className="w-10 h-10 flex items-center justify-center bg-primary-100 text-primary-600 rounded-full mr-3">
                          {item.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-neutral-800">{item.title[language]}</h3>
                      </div>
                      
                      <p className="text-neutral-600">{item.description[language]}</p>
                    </div>
                  </div>
                  
                  {/* Empty div for layout on desktop */}
                  <div className="hidden md:block md:w-1/2"></div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-primary-600 text-white rounded-lg p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            {language === 'ru' ? 'Вместе к устойчивому будущему' : 
             language === 'en' ? 'Together towards a sustainable future' : 
             '共同迈向可持续的未来'}
          </h3>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            {language === 'ru' ? 'Наши планы развития направлены на создание ценности для наших клиентов, сотрудников и общества, обеспечивая при этом ответственное отношение к окружающей среде.' : 
             language === 'en' ? 'Our development plans are aimed at creating value for our customers, employees, and society, while ensuring responsible environmental stewardship.' : 
             '我们的发展计划旨在为我们的客户、员工和社会创造价值，同时确保对环境负责任的管理。'}
          </p>
          <button className="bg-white text-primary-700 hover:bg-primary-50 px-8 py-3 rounded-md font-medium transition-colors duration-300">
            {language === 'ru' ? 'Узнать больше' : 
             language === 'en' ? 'Learn more' : 
             '了解更多'}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default DevelopmentPlansSection;