import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { partners } from '../data/partners';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const { language, t } = useLanguage();

  const content = {
    history: {
      ru: 'Компания QAZ была основана в 2002 году группой казахстанских ученых и промышленников с целью производства высококачественных удобрений для сельского хозяйства. За более чем 20 лет работы компания выросла из небольшого производства в крупного игрока на рынке агрохимической продукции в Центральной Азии. Первая производственная линия была запущена в 2003 году с мощностью 5000 тонн в месяц. В 2010 году была проведена крупная модернизация, которая позволила увеличить производство до 15000 тонн в месяц. В 2018 году компания завершила строительство второй производственной площадки, что привело к увеличению общей мощности до 25000 тонн в месяц. На конец 2024 года суммарная мощность производства составляет 32813 тонн в месяц, что делает QAZ одним из крупнейших производителей удобрений в регионе.',
      en: 'QAZ was founded in 2002 by a group of Kazakh scientists and industrialists with the aim of producing high-quality fertilizers for agriculture. Over more than 20 years of operation, the company has grown from a small production facility to a major player in the agrochemical market in Central Asia. The first production line was launched in 2003 with a capacity of 5,000 tons per month. In 2010, a major modernization was carried out, which allowed increasing production to 15,000 tons per month. In 2018, the company completed the construction of a second production site, which led to an increase in total capacity to 25,000 tons per month. At the end of 2024, the total production capacity is 32,813 tons per month, making QAZ one of the largest fertilizer producers in the region.',
      cn: 'QAZ成立于2002年，由一群哈萨克科学家和实业家创立，旨在为农业生产高品质肥料。在20多年的运营中，公司已从小型生产设施发展成为中亚农化市场的主要参与者。第一条生产线于2003年投产，月产能为5,000吨。2010年进行了重大现代化改造，使产量增加到每月15,000吨。2018年，公司完成了第二个生产基地的建设，使总产能增加到每月25,000吨。截至2024年底，总产能为每月32,813吨，使QAZ成为该地区最大的肥料生产商之一。',
    },
    mission: {
      ru: 'Наша миссия - обеспечивать сельскохозяйственных производителей высококачественными удобрениями, способствуя устойчивому развитию сельского хозяйства и продовольственной безопасности в регионе и за его пределами. Мы стремимся к инновациям и постоянному совершенствованию наших продуктов и процессов, чтобы повышать урожайность и качество сельскохозяйственных культур при минимальном воздействии на окружающую среду.',
      en: 'Our mission is to provide agricultural producers with high-quality fertilizers, contributing to the sustainable development of agriculture and food security in the region and beyond. We strive for innovation and continuous improvement of our products and processes to increase crop yields and quality with minimal environmental impact.',
      cn: '我们的使命是为农业生产者提供高品质的肥料，促进该地区及其他地区农业的可持续发展和粮食安全。我们力求创新并不断改进我们的产品和流程，以在最小的环境影响下提高作物产量和质量。',
    },
    values: {
      ru: [
        'Качество и инновации - мы постоянно стремимся к совершенствованию наших продуктов и внедрению новейших технологий.',
        'Устойчивое развитие - мы ведем бизнес ответственно, заботясь об окружающей среде и будущих поколениях.',
        'Клиентоориентированность - потребности наших клиентов всегда в центре нашего внимания.',
        'Честность и этика - мы ведем бизнес с высочайшими стандартами этики и прозрачности.',
        'Командная работа - мы ценим вклад каждого сотрудника и верим в силу совместной работы.'
      ],
      en: [
        'Quality and innovation - we constantly strive to improve our products and implement the latest technologies.',
        'Sustainable development - we conduct business responsibly, caring for the environment and future generations.',
        'Customer orientation - the needs of our customers are always at the center of our attention.',
        'Honesty and ethics - we conduct business with the highest standards of ethics and transparency.',
        'Teamwork - we value the contribution of each employee and believe in the power of working together.'
      ],
      cn: [
        '质量和创新 - 我们不断努力改进我们的产品并实施最新技术。',
        '可持续发展 - 我们负责任地开展业务，关注环境和未来几代人。',
        '客户导向 - 我们始终关注客户的需求。',
        '诚实和道德 - 我们以最高的道德和透明度标准开展业务。',
        '团队合作 - 我们重视每位员工的贡献，相信共同工作的力量。'
      ],
    },
    eco: {
      ru: 'QAZ уделяет особое внимание экологической устойчивости своего производства. Мы внедрили современные системы очистки воздуха и воды, которые минимизируют выбросы и сбросы загрязняющих веществ. Наше производство сертифицировано по международным экологическим стандартам ISO 14001. Компания также инвестирует в технологии энергосбережения, что позволило снизить энергопотребление на единицу продукции на 30% за последние 5 лет. Более 40% используемой нами электроэнергии поступает из возобновляемых источников. Мы постоянно работаем над сокращением углеродного следа нашей продукции и стремимся к полной углеродной нейтральности к 2050 году. Наша стратегия включает план по сокращению выбросов парниковых газов на 40% к 2030 году по сравнению с уровнем 2020 года.',
      en: 'QAZ pays special attention to the environmental sustainability of its production. We have implemented modern air and water treatment systems that minimize emissions and discharges of pollutants. Our production is certified according to international environmental standards ISO 14001. The company also invests in energy-saving technologies, which has reduced energy consumption per unit of production by 30% over the past 5 years. More than 40% of the electricity we use comes from renewable sources. We are constantly working to reduce the carbon footprint of our products and strive for complete carbon neutrality by 2050. Our strategy includes a plan to reduce greenhouse gas emissions by 40% by 2030 compared to the 2020 level.',
      cn: 'QAZ特别注重其生产的环境可持续性。我们实施了现代化的空气和水处理系统，最大限度地减少污染物的排放和排放。我们的生产已通过国际环境标准ISO 14001认证。公司还投资节能技术，这使得过去5年每单位产品的能耗减少了30%。我们使用的电力中超过40%来自可再生能源。我们不断努力减少我们产品的碳足迹，并力争到2050年实现完全碳中和。我们的战略包括到2030年与2020年水平相比减少温室气体排放40%的计划。',
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-neutral-50 pt-20 pb-16"
    >
      {/* Hero Section */}
      <div className="relative bg-primary-900 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/36717/amazing-beautiful-beauty-blue.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
          }}
        ></div>
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold mb-6 text-center"
          >
            {language === 'ru' ? 'О компании QAZ' : language === 'en' ? 'About QAZ' : '关于QAZ'}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-center text-lg md:text-xl"
          >
            {language === 'ru' 
              ? 'Ведущий производитель удобрений в Казахстане, обеспечивающий высококачественной продукцией сельхозпроизводителей с 2002 года.'
              : language === 'en'
                ? 'A leading fertilizer manufacturer in Kazakhstan, providing high-quality products to agricultural producers since 2002.'
                : '哈萨克斯坦领先的肥料制造商，自2002年以来为农业生产者提供高品质产品。'
            }
          </motion.p>
        </div>
      </div>

      {/* History Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-neutral-800 mb-4"
          >
            {t('about.history.title')}
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '6rem' }}
            viewport={{ once: true }}
            className="h-1 bg-primary-600 mb-8"
          ></motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose max-w-none text-neutral-700"
            >
              <p>{content.history[language]}</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="QAZ history" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="QAZ factory" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="QAZ production" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.pexels.com/photos/69903/pexels-photo-69903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="QAZ growth" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission and Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-neutral-800 mb-4"
          >
            {t('about.mission.title')}
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '6rem' }}
            viewport={{ once: true }}
            className="h-1 bg-primary-600 mb-8"
          ></motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-neutral-800">
                {language === 'ru' ? 'Наша миссия' : language === 'en' ? 'Our Mission' : '我们的使命'}
              </h3>
              <p className="text-neutral-700">{content.mission[language]}</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-neutral-800">
                {language === 'ru' ? 'Наши ценности' : language === 'en' ? 'Our Values' : '我们的价值观'}
              </h3>
              <ul className="space-y-4">
                {content.values[language].map((value, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mt-1 mr-3 h-5 w-5 flex-shrink-0 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 font-bold text-sm">
                      {index + 1}
                    </div>
                    <span className="text-neutral-700">{value}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Eco & Technology Section */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-neutral-800 mb-4"
          >
            {t('about.eco.title')}
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '6rem' }}
            viewport={{ once: true }}
            className="h-1 bg-primary-600 mb-8"
          ></motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 prose max-w-none text-neutral-700"
            >
              <p>{content.eco[language]}</p>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-4xl font-bold text-primary-600 mb-2">30%</p>
                  <p className="text-neutral-600">
                    {language === 'ru' ? 'Сокращение энергопотребления' : 
                     language === 'en' ? 'Reduction in energy consumption' : 
                     '能耗减少'}
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-4xl font-bold text-primary-600 mb-2">40%</p>
                  <p className="text-neutral-600">
                    {language === 'ru' ? 'Энергии из возобновляемых источников' : 
                     language === 'en' ? 'Energy from renewable sources' : 
                     '可再生能源'}
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-4xl font-bold text-primary-600 mb-2">2050</p>
                  <p className="text-neutral-600">
                    {language === 'ru' ? 'Цель углеродной нейтральности' : 
                     language === 'en' ? 'Carbon neutrality goal' : 
                     '碳中和目标'}
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="rounded-lg overflow-hidden shadow-lg h-full">
                <img 
                  src="https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Sustainable technology" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-neutral-800 mb-4"
          >
            {t('about.partners.title')}
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '6rem' }}
            viewport={{ once: true }}
            className="h-1 bg-primary-600 mb-8"
          ></motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-8 text-neutral-700"
          >
            {language === 'ru' 
              ? 'QAZ гордится сотрудничеством с ведущими сельскохозяйственными предприятиями и организациями. Наши партнерские отношения основаны на взаимном доверии, качестве и инновациях.'
              : language === 'en'
                ? 'QAZ is proud to collaborate with leading agricultural enterprises and organizations. Our partnerships are based on mutual trust, quality, and innovation.'
                : 'QAZ很荣幸能与领先的农业企业和组织合作。我们的合作关系建立在相互信任、质量和创新的基础上。'
            }
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {partners.map((partner, index) => (
              <motion.a
                key={partner.id}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-4 flex items-center justify-center h-40 hover:shadow-lg transition-shadow duration-300"
              >
                <img 
                  src={partner.logoUrl} 
                  alt={partner.name[language]} 
                  className="max-h-full max-w-full object-contain"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;