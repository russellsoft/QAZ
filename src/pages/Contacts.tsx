import React, { useState } from 'react';
import { PhoneCall, Mail, MapPin, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Contacts: React.FC = () => {
  const { language, t } = useLanguage();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    submitted: false,
    loading: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, loading: true }));
    
    // Simulate form submission
    setTimeout(() => {
      setFormState({
        name: '',
        email: '',
        message: '',
        submitted: true,
        loading: false,
      });
    }, 1500);
  };

  const contactInfo = {
    offices: [
      {
        title: {
          ru: 'Головной офис (Алматы)',
          en: 'Head Office (Almaty)',
          cn: '总部（阿拉木图）',
        },
        address: {
          ru: 'Республика Казахстан, Мангистауская область, город Актау, промышленная зона 6, здание 150',
          en: 'Republic of Kazakhstan, Mangystau region, Aktau city, industrial zone 6, building 150',
          cn: '哈萨克斯坦共和国，Mangystau地区，阿克套市，工业区6，150栋',
        },
        phone: '+ 7 778 587 96 48',
        email: 'info@qaz.kz',
        mapPosition: { lat: 43.238949, lng: 76.889709 },
      },
      {
        title: {
          ru: 'Офис в Астане',
          en: 'Astana Office',
          cn: '阿斯塔纳办事处',
        },
        address: {
          ru: 'ул. Кунаева 12/1, Астана, Казахстан, 010000',
          en: '12/1 Kunaev Street, Astana, Kazakhstan, 010000',
          cn: '哈萨克斯坦阿斯塔纳库纳耶夫街12/1号，010000',
        },
        phone: '+7 (717) 234-56-78',
        email: 'astana@qaz.kz',
        mapPosition: { lat: 51.128207, lng: 71.430420 },
      },
    ],
    production: {
      title: {
        ru: 'Производственный комплекс',
        en: 'Production Complex',
        cn: '生产综合体',
      },
      address: {
        ru: 'Промышленная зона, г. Караганда, Карагандинская область, Казахстан, 100000',
        en: 'Industrial Zone, Karaganda, Karaganda Region, Kazakhstan, 100000',
        cn: '哈萨克斯坦卡拉干达地区卡拉干达工业区，100000',
      },
      phone: '+7 (721) 345-67-89',
      email: 'factory@qaz.kz',
      mapPosition: { lat: 49.801536, lng: 73.107207 },
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
      <div className="bg-primary-900 text-white">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-center"
          >
            {language === 'ru' ? 'Контакты' : language === 'en' ? 'Contacts' : '联系我们'}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-center text-lg"
          >
            {language === 'ru' 
              ? 'Свяжитесь с нами для получения дополнительной информации о наших продуктах и услугах.'
              : language === 'en'
                ? 'Contact us for more information about our products and services.'
                : '联系我们获取有关我们产品和服务的更多信息。'
            }
          </motion.p>
        </div>
      </div>

      {/* Offices Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-neutral-800 mb-4"
          >
            {t('contacts.offices.title')}
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '6rem' }}
            viewport={{ once: true }}
            className="h-1 bg-primary-600 mb-8"
          ></motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactInfo.offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-64 bg-neutral-200">
                  {/* This would be replaced with an actual Google Maps component */}
                  <div className="bg-neutral-200 h-full flex items-center justify-center">
                    <MapPin size={48} className="text-neutral-400" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-neutral-800">{office.title[language]}</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <MapPin size={18} className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-neutral-700">{office.address[language]}</span>
                    </li>
                    <li className="flex items-start">
                      <PhoneCall size={18} className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-neutral-700">{office.phone}</span>
                    </li>
                    <li className="flex items-start">
                      <Mail size={18} className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                      <a href={`mailto:${office.email}`} className="text-primary-600 hover:underline">
                        {office.email}
                      </a>
                    </li>
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Facility Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-neutral-800 mb-4"
          >
            {t('contacts.production.title')}
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
              className="lg:col-span-3 bg-neutral-200 h-96 rounded-lg overflow-hidden"
            >
              {/* This would be replaced with an actual Google Maps component */}
              <div className="bg-neutral-200 h-full flex items-center justify-center">
                <MapPin size={64} className="text-neutral-400" />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-neutral-800">{contactInfo.production.title[language]}</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin size={18} className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-neutral-700">{contactInfo.production.address[language]}</span>
                </li>
                <li className="flex items-start">
                  <PhoneCall size={18} className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-neutral-700">{contactInfo.production.phone}</span>
                </li>
                <li className="flex items-start">
                  <Mail size={18} className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <a href={`mailto:${contactInfo.production.email}`} className="text-primary-600 hover:underline">
                    {contactInfo.production.email}
                  </a>
                </li>
              </ul>
              
              <div className="mt-8">
                <p className="text-neutral-700 mb-4">
                  {language === 'ru' 
                    ? 'Для посещения производственного комплекса необходима предварительная договоренность.'
                    : language === 'en'
                      ? 'To visit the production complex, prior arrangement is required.'
                      : '参观生产综合体需要提前安排。'
                  }
                </p>
                <button className="flex items-center font-medium text-primary-600 hover:text-primary-700 transition-colors">
                  {language === 'ru' 
                    ? 'Заказать экскурсию'
                    : language === 'en'
                      ? 'Schedule a tour'
                      : '预约参观'
                  }
                  <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-neutral-800 mb-4"
          >
            {t('contacts.form.title')}
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '6rem' }}
            viewport={{ once: true }}
            className="h-1 bg-primary-600 mb-8"
          ></motion.div>

          <div className="max-w-3xl mx-auto">
            {formState.submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-success-50 rounded-lg p-8 text-center"
              >
                <div className="w-16 h-16 bg-success-100 text-success-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-success-800">
                  {language === 'ru' 
                    ? 'Сообщение отправлено!'
                    : language === 'en'
                      ? 'Message sent!'
                      : '消息已发送！'
                  }
                </h3>
                <p className="text-success-700 mb-6">
                  {language === 'ru' 
                    ? 'Спасибо за ваше сообщение. Мы свяжемся с вами в ближайшее время.'
                    : language === 'en'
                      ? 'Thank you for your message. We will contact you soon.'
                      : '感谢您的留言。我们将尽快与您联系。'
                  }
                </p>
                <button 
                  onClick={() => setFormState(prev => ({ ...prev, submitted: false }))}
                  className="text-success-600 font-medium hover:text-success-700 transition-colors"
                >
                  {language === 'ru' 
                    ? 'Отправить еще сообщение'
                    : language === 'en'
                      ? 'Send another message'
                      : '发送另一条消息'
                  }
                </button>
              </motion.div>
            ) : (
              <motion.form 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                className="bg-white rounded-lg shadow-md p-8"
              >
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                    {t('contacts.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                    {t('contacts.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    {t('contacts.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={formState.loading}
                  className={`w-full bg-primary-600 text-white py-3 rounded-md font-medium transition-colors duration-300 ${
                    formState.loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary-700'
                  }`}
                >
                  {formState.loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {language === 'ru' 
                        ? 'Отправка...'
                        : language === 'en'
                          ? 'Sending...'
                          : '发送中...'
                      }
                    </span>
                  ) : (
                    t('contacts.form.send')
                  )}
                </button>
              </motion.form>
            )}
          </div>
        </div>
      </section>

      {/* Business Details Section */}
      <section className="py-16 bg-neutral-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold mb-8 text-center"
            >
              {language === 'ru' 
                ? 'Реквизиты компании'
                : language === 'en'
                  ? 'Company Details'
                  : '公司详情'
              }
            </motion.h3>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div>
                <h4 className="text-lg font-medium mb-4 text-primary-400">
                  {language === 'ru' 
                    ? 'Юридическая информация'
                    : language === 'en'
                      ? 'Legal Information'
                      : '法律信息'
                  }
                </h4>
                <ul className="space-y-2 text-neutral-300">
                  <li>
                    <span className="text-neutral-500">
                      {language === 'ru' ? 'Полное наименование:' : 
                       language === 'en' ? 'Full name:' : 
                       '全名：'}
                    </span>
                    <span className="block">
                      {language === 'ru' ? 'Товарищество с ограниченной ответственностью "QAZ"' : 
                       language === 'en' ? 'Limited Liability Partnership "QAZ"' : 
                       '"QAZ"有限责任合伙企业'}
                    </span>
                  </li>
                  <li>
                    <span className="text-neutral-500">
                      {language === 'ru' ? 'Юридический адрес:' : 
                       language === 'en' ? 'Legal address:' : 
                       '法定地址：'}
                    </span>
                    <span className="block">
                      {language === 'ru' ? 'Казахстан, город Алматы, Бостандыкский район, Площадь Республики, дом 15, почтовый индекс 050013' :
                       language === 'en' ? 'Kazakhstan, Almaty city, Bostandyk district, Republic Square, house 15, postal code 050013' :
                       '哈萨克斯坦，阿拉木图市，Bostandyk区，共和国广场，house15，邮政编码050013'}
                    </span>
                  </li>
                  <li>
                    <span className="text-neutral-500">
                      {language === 'ru' ? 'БИН:' : 
                       language === 'en' ? 'Business ID:' : 
                       '营业执照号：'}
                    </span>
                    <span className="block">123456789012</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-4 text-primary-400">
                  {language === 'ru' 
                    ? 'Банковские реквизиты'
                    : language === 'en'
                      ? 'Banking Details'
                      : '银行详情'
                  }
                </h4>
                <ul className="space-y-2 text-neutral-300">
                  <li>
                    <span className="text-neutral-500">
                      {language === 'ru' ? 'Банк:' : 
                       language === 'en' ? 'Bank:' : 
                       '银行：'}
                    </span>
                    <span className="block">АО "Казкоммерцбанк"</span>
                  </li>
                  <li>
                    <span className="text-neutral-500">
                      {language === 'ru' ? 'ИИК:' : 
                       language === 'en' ? 'Account:' : 
                       '账号：'}
                    </span>
                    <span className="block">KZ123456789012345678</span>
                  </li>
                  <li>
                    <span className="text-neutral-500">
                      {language === 'ru' ? 'БИК:' : 
                       language === 'en' ? 'BIC:' : 
                       'BIC：'}
                    </span>
                    <span className="block">KZKOKZKX</span>
                  </li>
                  <li>
                    <span className="text-neutral-500">
                      {language === 'ru' ? 'Кбе:' : 
                       language === 'en' ? 'Kbe:' : 
                       'Kbe：'}
                    </span>
                    <span className="block">17</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contacts;