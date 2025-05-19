import React from 'react';
import { Heart, Globe, Sprout } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';

const SocialResponsibilitySection: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    title: {
      ru: 'Социальная ответственность',
      en: 'Social Responsibility',
      cn: '社会责任',
    },
    description: {
      ru: 'Компания QAZ стремится внести позитивный вклад в общество и окружающую среду через различные инициативы социальной ответственности.',
      en: 'QAZ aims to make a positive contribution to society and the environment through various social responsibility initiatives.',
      cn: 'QAZ旨在通过各种社会责任倡议为社会和环境做出积极贡献。',
    },
    initiatives: [
      {
        icon: <Globe size={28} />,
        title: {
          ru: 'Защита окружающей среды',
          en: 'Environmental Protection',
          cn: '环境保护',
        },
        description: {
          ru: 'Мы инвестируем в современные очистные сооружения и технологии переработки отходов, минимизируя воздействие нашего производства на окружающую среду.',
          en: 'We invest in modern treatment facilities and waste recycling technologies, minimizing the environmental impact of our production.',
          cn: '我们投资于现代化处理设施和废物回收技术，最大限度地减少我们生产对环境的影响。',
        },
      },
      {
        icon: <Sprout size={28} />,
        title: {
          ru: 'Устойчивое сельское хозяйство',
          en: 'Sustainable Agriculture',
          cn: '可持续农业',
        },
        description: {
          ru: 'Мы сотрудничаем с фермерами, чтобы продвигать методы устойчивого земледелия, которые сохраняют плодородие почвы и защищают природные ресурсы.',
          en: 'We collaborate with farmers to promote sustainable farming methods that preserve soil fertility and protect natural resources.',
          cn: '我们与农民合作，推广保持土壤肥力和保护自然资源的可持续耕作方法。',
        },
      },
      {
        icon: <Heart size={28} />,
        title: {
          ru: 'Поддержка местных сообществ',
          en: 'Supporting Local Communities',
          cn: '支持当地社区',
        },
        description: {
          ru: 'Мы реализуем образовательные программы и предоставляем стипендии, а также поддерживаем местные инициативы, направленные на улучшение качества жизни в регионе.',
          en: 'We implement educational programs and provide scholarships, as well as support local initiatives aimed at improving the quality of life in the region.',
          cn: '我们实施教育计划并提供奖学金，并支持旨在改善该地区生活质量的当地倡议。',
        },
      },
    ],
  };

  return (
    <section className="py-20 bg-primary-50">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.initiatives.map((initiative, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-primary-100 text-primary-600 rounded-full mb-4">
                {initiative.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-800">{initiative.title[language]}</h3>
              <p className="text-neutral-600">{initiative.description[language]}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 flex flex-col justify-center"
            >
              <h3 className="text-2xl font-semibold mb-4 text-neutral-800">
                {language === 'ru' ? 'Наша миссия в области устойчивого развития' : 
                 language === 'en' ? 'Our Sustainable Development Mission' : 
                 '我们的可持续发展使命'}
              </h3>
              <p className="text-neutral-600 mb-6">
                {language === 'ru' ? 'К 2030 году мы стремимся сократить углеродный след нашего производства на 40% и достичь углеродной нейтральности к 2050 году. Наши инвестиции в энергоэффективные технологии и возобновляемые источники энергии являются ключевой частью этой стратегии.' : 
                 language === 'en' ? 'By 2030, we aim to reduce the carbon footprint of our production by 40% and achieve carbon neutrality by 2050. Our investments in energy-efficient technologies and renewable energy sources are a key part of this strategy.' : 
                 '到2030年，我们的目标是将我们生产的碳足迹减少40%，并在2050年前实现碳中和。我们对节能技术和可再生能源的投资是这一战略的关键部分。'}
              </p>
              <div className="bg-primary-50 p-4 rounded-lg">
                <p className="text-primary-700 italic">
                  {language === 'ru' ? '"Мы верим, что бизнес должен быть силой добра в мире. Мы стремимся не только создавать экономическую ценность, но и положительно влиять на наше общество и планету."' : 
                   language === 'en' ? '"We believe business should be a force for good in the world. We strive not only to create economic value but also to positively impact our society and planet."' : 
                   '"我们相信企业应该成为世界上的善良力量。我们不仅致力于创造经济价值，还致力于积极影响我们的社会和地球。"'}
                </p>
                <p className="text-right mt-2 text-primary-700 font-medium">— 
                  {language === 'ru' ? 'Генеральный директор QAZ' : 
                   language === 'en' ? 'CEO of QAZ' : 
                   'QAZ首席执行官'}
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="h-full min-h-[300px] md:min-h-0"
            >
              <img 
                src="https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Sustainable farming" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialResponsibilitySection;