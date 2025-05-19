import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'mineral-fertilizers',
    name: {
      ru: 'Минеральные удобрения',
      en: 'Mineral Fertilizers',
      cn: '矿物肥料',
    },
    description: {
      ru: 'Широкий ассортимент минеральных удобрений для различных сельскохозяйственных культур',
      en: 'Wide range of mineral fertilizers for various agricultural crops',
      cn: '各种农作物的矿物肥料系列',
    },
    imageUrl: 'https://images.pexels.com/photos/4913751/pexels-photo-4913751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: {
      ru: 'Минеральные удобрения',
      en: 'Mineral Fertilizers',
      cn: '矿物肥料',
    },
    subcategories: [
      {
        name: {
          ru: 'Азотные',
          en: 'Nitrogen',
          cn: '氮肥',
        },
        products: [
          'Аммиачная селитра (N34)',
          'Удобрение азотно-известняковое (27N5Сa4Mg)',
          'Сульфат аммония (21N24S)',
          'Карбамид (N46)',
          'Сульфонитрат (30N7S)',
          'Сульфонитрат (26N13S)',
          'КАС (N32)',
          'Нитроаммофоска (27.6.6.+3S)',
        ],
      },
      {
        name: {
          ru: 'Удобрения с дисконтом Комплексные (NPK)',
          en: 'Discounted Complex Fertilizers (NPK)',
          cn: '折扣复合肥料 (NPK)',
        },
        products: [
          'Нитроаммофоска (16.16.16)',
          'Нитроаммофоска (16.16.8)',
          'Нитроаммофоска (13.13.24)',
          'Нитроаммофоска (20.10.10+4S)',
          'Нитроаммофоска (27.6.6+3S)',
          'Диаммофоска (10.26.26)',
          '8.20.30+2S',
          '10.20.20+S',
          '15.15.15+10S',
          '13.19.19+6S',
          '5.15.30+5S+7Сa',
          '0.20.20+20Ca+5S',
        ],
      },
    ],
    chemicalProperties: {
      composition: [
        {
          name: {
            ru: 'Различные минеральные компоненты',
            en: 'Various mineral components',
            cn: '各种矿物成分',
          },
          percentage: 'N/A',
        },
      ],
    },
    physicalProperties: {
      appearance: {
        ru: 'Гранулы различных размеров и цветов',
        en: 'Granules of various sizes and colors',
        cn: '不同大小和颜色的颗粒',
      },
    },
    applications: {
      ru: ['Применяется в различных видах сельского хозяйства'],
      en: ['Used in various types of agriculture'],
      cn: ['用于各种类型的农业'],
    },
  },
  {
    id: 'organic-fertilizers',
    name: {
      ru: 'Органические удобрения',
      en: 'Organic Fertilizers',
      cn: '有机肥料',
    },
    description: {
      ru: 'Натуральные органические удобрения для экологически чистого земледелия',
      en: 'Natural organic fertilizers for environmentally friendly farming',
      cn: '用于环保农业的天然有机肥料',
    },
    imageUrl: 'https://images.pexels.com/photos/4505731/pexels-photo-4505731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: {
      ru: 'Органические удобрения',
      en: 'Organic Fertilizers',
      cn: '有机肥料',
    },
    subcategories: [
      {
        name: {
          ru: 'Компосты',
          en: 'Composts',
          cn: '堆肥',
        },
        products: [
          'Биокомпост',
          'Вермикомпост',
          'Компост из листьев',
          'Компост из травы',
        ],
      },
      {
        name: {
          ru: 'Навоз',
          en: 'Manure',
          cn: '粪肥',
        },
        products: [
          'Коровий навоз',
          'Конский навоз',
          'Куриный помет',
          'Свиной навоз',
        ],
      },
    ],
    chemicalProperties: {
      composition: [
        {
          name: {
            ru: 'Органические вещества',
            en: 'Organic matter',
            cn: '有机物质',
          },
          percentage: '40-60%',
        },
        {
          name: {
            ru: 'Азот',
            en: 'Nitrogen',
            cn: '氮',
          },
          percentage: '0.5-2.5%',
        },
        {
          name: {
            ru: 'Фосфор',
            en: 'Phosphorus',
            cn: '磷',
          },
          percentage: '0.2-1.5%',
        },
        {
          name: {
            ru: 'Калий',
            en: 'Potassium',
            cn: '钾',
          },
          percentage: '0.5-1.8%',
        },
      ],
    },
    physicalProperties: {
      appearance: {
        ru: 'Темно-коричневая рассыпчатая масса',
        en: 'Dark brown loose mass',
        cn: '深褐色疏松物质',
      },
    },
    applications: {
      ru: [
        'Улучшение структуры почвы',
        'Повышение плодородия',
        'Органическое земледелие',
      ],
      en: [
        'Soil structure improvement',
        'Fertility enhancement',
        'Organic farming',
      ],
      cn: [
        '改善土壤结构',
        '提高肥力',
        '有机农业',
      ],
    },
  },
  {
    id: 'plant-protection',
    name: {
      ru: 'Средства защиты растений',
      en: 'Plant Protection Products',
      cn: '植物保护产品',
    },
    description: {
      ru: 'Эффективные средства для защиты растений от вредителей и болезней',
      en: 'Effective products for protecting plants from pests and diseases',
      cn: '有效的植物病虫害防治产品',
    },
    imageUrl: 'https://images.pexels.com/photos/2132171/pexels-photo-2132171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: {
      ru: 'Средства защиты растений',
      en: 'Plant Protection',
      cn: '植物保护',
    },
    subcategories: [
      {
        name: {
          ru: 'Гербициды',
          en: 'Herbicides',
          cn: '除草剂',
        },
        products: [
          'Глифосат',
          '2,4-Д',
          'Дикамба',
          'Метрибузин',
        ],
      },
      {
        name: {
          ru: 'Инсектициды',
          en: 'Insecticides',
          cn: '杀虫剂',
        },
        products: [
          'Хлорпирифос',
          'Имидаклоприд',
          'Лямбда-цигалотрин',
          'Ацетамиприд',
        ],
      },
      {
        name: {
          ru: 'Фунгициды',
          en: 'Fungicides',
          cn: '杀菌剂',
        },
        products: [
          'Пропиконазол',
          'Тебуконазол',
          'Манкоцеб',
          'Беномил',
        ],
      },
    ],
    chemicalProperties: {
      composition: [
        {
          name: {
            ru: 'Действующие вещества',
            en: 'Active ingredients',
            cn: '有效成分',
          },
          percentage: '1-50%',
        },
      ],
    },
    physicalProperties: {
      appearance: {
        ru: 'Жидкости или порошки различных цветов',
        en: 'Liquids or powders of various colors',
        cn: '不同颜色的液体或粉末',
      },
    },
    applications: {
      ru: [
        'Защита от сорняков',
        'Борьба с вредителями',
        'Профилактика болезней растений',
      ],
      en: [
        'Weed control',
        'Pest control',
        'Plant disease prevention',
      ],
      cn: [
        '除草',
        '防治害虫',
        '预防植物疾病',
      ],
    },
  },
  {
    id: 'seeds',
    name: {
      ru: 'Семена',
      en: 'Seeds',
      cn: '种子',
    },
    description: {
      ru: 'Высококачественные семена различных сельскохозяйственных культур',
      en: 'High-quality seeds of various agricultural crops',
      cn: '各种优质农作物种子',
    },
    imageUrl: 'https://images.pexels.com/photos/6087688/pexels-photo-6087688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: {
      ru: 'Семена',
      en: 'Seeds',
      cn: '种子',
    },
    subcategories: [
      {
        name: {
          ru: 'Зерновые культуры',
          en: 'Grain Crops',
          cn: '谷物作物',
        },
        products: [
          'Пшеница',
          'Ячмень',
          'Кукуруза',
          'Рожь',
          'Овес',
        ],
      },
      {
        name: {
          ru: 'Масличные культуры',
          en: 'Oilseeds',
          cn: '油料作物',
        },
        products: [
          'Подсолнечник',
          'Рапс',
          'Соя',
          'Лен',
        ],
      },
      {
        name: {
          ru: 'Кормовые культуры',
          en: 'Forage Crops',
          cn: '饲料作物',
        },
        products: [
          'Люцерна',
          'Клевер',
          'Тимофеевка',
          'Райграс',
        ],
      },
    ],
    chemicalProperties: {
      composition: [
        {
          name: {
            ru: 'Влажность',
            en: 'Moisture',
            cn: '水分',
          },
          percentage: '12-14%',
        },
      ],
    },
    physicalProperties: {
      appearance: {
        ru: 'Семена различных размеров и форм',
        en: 'Seeds of various sizes and shapes',
        cn: '不同大小和形状的种子',
      },
    },
    applications: {
      ru: [
        'Посев сельскохозяйственных культур',
        'Производство продуктов питания',
        'Кормопроизводство',
      ],
      en: [
        'Agricultural crop sowing',
        'Food production',
        'Feed production',
      ],
      cn: [
        '农作物播种',
        '食品生产',
        '饲料生产',
      ],
    },
  },
];