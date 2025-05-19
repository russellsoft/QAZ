import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  'nav.home': {
    ru: 'Главная',
    en: 'Home',
    cn: '首页',
  },
  'nav.products': {
    ru: 'Продукция',
    en: 'Products',
    cn: '产品',
  },
  'nav.about': {
    ru: 'О компании',
    en: 'About Us',
    cn: '关于我们',
  },
  'nav.contacts': {
    ru: 'Контакты',
    en: 'Contacts',
    cn: '联系我们',
  },
  'nav.news': {
    ru: 'Новости',
    en: 'News',
    cn: '新闻',
  },
  'home.hero.title': {
    ru: 'Удобрения высшего качества для сельского хозяйства',
    en: 'Premium Quality Fertilizers for Agriculture',
    cn: '农业优质肥料',
  },
  'home.hero.subtitle': {
    ru: 'Инновационные решения для повышения урожайности и устойчивого развития',
    en: 'Innovative solutions for yield improvement and sustainable development',
    cn: '用于提高产量和可持续发展的创新解决方案',
  },
  'home.advantages.title': {
    ru: 'Наши преимущества',
    en: 'Our Advantages',
    cn: '我们的优势',
  },
  'home.products.title': {
    ru: 'Наша продукция',
    en: 'Our Products',
    cn: '我们的产品',
  },
  'home.products.viewAll': {
    ru: 'Смотреть все',
    en: 'View all',
    cn: '查看全部',
  },
  'home.news.title': {
    ru: 'Последние новости',
    en: 'Latest News',
    cn: '最新消息',
  },
  'home.news.readMore': {
    ru: 'Читать далее',
    en: 'Read more',
    cn: '阅读更多',
  },
  'home.social.title': {
    ru: 'Социальная ответственность',
    en: 'Social Responsibility',
    cn: '社会责任',
  },
  'home.development.title': {
    ru: 'Планы развития',
    en: 'Development Plans',
    cn: '发展计划',
  },
  'products.title': {
    ru: 'Каталог продукции',
    en: 'Product Catalog',
    cn: '产品目录',
  },
  'products.filter.all': {
    ru: 'Все категории',
    en: 'All Categories',
    cn: '所有类别',
  },
  'products.chemical': {
    ru: 'Химические свойства',
    en: 'Chemical Properties',
    cn: '化学特性',
  },
  'products.physical': {
    ru: 'Физические свойства',
    en: 'Physical Properties',
    cn: '物理特性',
  },
  'products.applications': {
    ru: 'Применение',
    en: 'Applications',
    cn: '应用',
  },
  'about.history.title': {
    ru: 'История компании',
    en: 'Company History',
    cn: '公司历史',
  },
  'about.mission.title': {
    ru: 'Миссия и ценности',
    en: 'Mission and Values',
    cn: '使命和价值观',
  },
  'about.eco.title': {
    ru: 'Экологичность и технологии',
    en: 'Environmental Sustainability and Technologies',
    cn: '环境可持续性和技术',
  },
  'about.partners.title': {
    ru: 'Наши партнеры',
    en: 'Our Partners',
    cn: '我们的合作伙伴',
  },
  'contacts.offices.title': {
    ru: 'Офисы',
    en: 'Offices',
    cn: '办公室',
  },
  'contacts.production.title': {
    ru: 'Производство',
    en: 'Production Facility',
    cn: '生产设施',
  },
  'contacts.form.title': {
    ru: 'Свяжитесь с нами',
    en: 'Contact Us',
    cn: '联系我们',
  },
  'contacts.form.name': {
    ru: 'Имя',
    en: 'Name',
    cn: '姓名',
  },
  'contacts.form.email': {
    ru: 'Электронная почта',
    en: 'Email',
    cn: '电子邮件',
  },
  'contacts.form.message': {
    ru: 'Сообщение',
    en: 'Message',
    cn: '留言',
  },
  'contacts.form.send': {
    ru: 'Отправить',
    en: 'Send',
    cn: '发送',
  },
  'news.title': {
    ru: 'Новости и события',
    en: 'News and Events',
    cn: '新闻与活动',
  },
  'news.readMore': {
    ru: 'Читать полностью',
    en: 'Read full article',
    cn: '阅读全文',
  },
  'footer.rights': {
    ru: 'Все права защищены',
    en: 'All rights reserved',
    cn: '版权所有',
  },
  'footer.privacy': {
    ru: 'Политика конфиденциальности',
    en: 'Privacy Policy',
    cn: '隐私政策',
  },
  'footer.terms': {
    ru: 'Условия использования',
    en: 'Terms of Use',
    cn: '使用条款',
  },
};

// Initial language value
const initialLanguage: Language = 'ru';

// Create context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: initialLanguage,
  setLanguage: () => {},
  t: () => '',
});

// Create Provider component
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(initialLanguage);

  // Translation function
  const t = (key: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Create hook for using the language context
export const useLanguage = () => useContext(LanguageContext);