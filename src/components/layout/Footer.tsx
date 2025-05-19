import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PhoneCall, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Footer: React.FC = () => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  // Navigation items to render in footer
  const footerNav = [
    { name: t('nav.home'), path: `/${language}/` },
    { name: t('nav.products'), path: `/${language}/products` },
    { name: t('nav.about'), path: `/${language}/about` },
    { name: t('nav.contacts'), path: `/${language}/contacts` },
    { name: t('nav.news'), path: `/${language}/news` },
  ];

  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary-400">QAZ</h3>
            <p className="text-neutral-300 mb-4">
              {language === 'ru' && 'Ведущий производитель высококачественных удобрений в Казахстане'}
              {language === 'en' && 'Leading manufacturer of high-quality fertilizers in Kazakhstan'}
              {language === 'cn' && '哈萨克斯坦领先的高品质肥料制造商'}
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">{language === 'ru' ? 'Навигация' : language === 'en' ? 'Navigation' : '导航'}</h3>
            <ul className="space-y-3">
              {footerNav.map((item) => (
                <li key={item.path}>
                  <a 
                    href={item.path}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(item.path);
                      window.scrollTo(0, 0);
                    }}
                    className="text-neutral-400 hover:text-primary-400 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">{language === 'ru' ? 'Контакты' : language === 'en' ? 'Contact Us' : '联系我们'}</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <PhoneCall size={18} className="text-primary-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-neutral-300">+7 (727) 123-45-67</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="text-primary-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-neutral-300">info@qaz-fertilizers.kz</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-primary-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-neutral-300">
                  {language === 'ru' && 'пр. Абая 52, Алматы, Казахстан'}
                  {language === 'en' && '52 Abay Avenue, Almaty, Kazakhstan'}
                  {language === 'cn' && '哈萨克斯坦阿拉木图阿拜大道52号'}
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              {language === 'ru' && 'Подпишитесь на новости'}
              {language === 'en' && 'Subscribe to Our Newsletter'}
              {language === 'cn' && '订阅我们的新闻'}
            </h3>
            <p className="text-neutral-300 mb-4">
              {language === 'ru' && 'Будьте в курсе последних новостей и специальных предложений'}
              {language === 'en' && 'Stay updated with our latest news and special offers'}
              {language === 'cn' && '及时了解我们的最新消息和特别优惠'}
            </p>
            <form className="mt-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder={language === 'ru' ? 'Ваш email' : language === 'en' ? 'Your email' : '您的电子邮件'} 
                  className="bg-neutral-800 border border-neutral-700 text-neutral-200 px-4 py-2 rounded-l-md flex-grow focus:outline-none focus:ring-1 focus:ring-primary-500"
                />
                <button 
                  type="submit" 
                  className="bg-primary-600 text-white px-4 py-2 rounded-r-md hover:bg-primary-700 transition-colors duration-200"
                >
                  {language === 'ru' ? 'ОК' : language === 'en' ? 'OK' : '确认'}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-6 border-t border-neutral-800 text-center md:flex md:justify-between md:text-left">
          <p className="text-neutral-400 text-sm">
            © {currentYear} QAZ. {t('footer.rights')}
          </p>
          <div className="mt-4 md:mt-0 flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 justify-center">
            <a href="#" className="text-neutral-400 hover:text-primary-400 text-sm transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="text-neutral-400 hover:text-primary-400 text-sm transition-colors">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;