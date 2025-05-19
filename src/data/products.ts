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
      ru: 'Широкий ассортимент минеральных удобрений для различных сельскохозяйственных культур, включая азотные и комплексные удобрения.',
      en: 'A wide range of mineral fertilizers for various agricultural crops, including nitrogen and complex fertilizers.',
      cn: '各种农作物的矿物肥料，包括氮肥和复合肥料。',
    },
    imageUrl: 'https://images.pexels.com/photos/4507967/pexels-photo-4507967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    chemicalProperties: {
      composition: [
        {
          name: {
            ru: 'Различные элементы',
            en: 'Various elements',
            cn: '各种元素',
          },
          percentage: 'N, P, K, S, Ca, Mg',
        },
      ],
    },
    physicalProperties: {
      appearance: {
        ru: 'Гранулы различных цветов и размеров',
        en: 'Granules of various colors and sizes',
        cn: '不同颜色和大小的颗粒',
      },
    },
    applications: {
      ru: ['Все виды сельскохозяйственных культур'],
      en: ['All types of agricultural crops'],
      cn: ['所有类型的农作物'],
    },
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
          'Удобрения с дисконтом'
        ]
      },
      {
        name: {
          ru: 'Комплексные (NPK)',
          en: 'Complex (NPK)',
          cn: '复合肥料 (NPK)',
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
          'Удобрения с дисконтом'
        ]
      }
    ]
  },
  {
    id: 'ammonium-nitrate',
    name: {
      ru: 'Аммиачная селитра',
      en: 'Ammonium Nitrate',
      cn: '硝酸铵',
    },
    description: {
      ru: 'Универсальное азотное удобрение, применяемое на всех типах почв для различных сельскохозяйственных культур.',
      en: 'A versatile nitrogen fertilizer used on all soil types for various agricultural crops.',
      cn: '通用氮肥，适用于各种土壤类型和各种农作物。',
    },
    imageUrl: 'https://images.pexels.com/photos/14579361/pexels-photo-14579361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    chemicalProperties: {
      formula: 'NH₄NO₃',
      composition: [
        {
          name: {
            ru: 'Азот общий (N)',
            en: 'Total Nitrogen (N)',
            cn: '总氮(N)',
          },
          percentage: '34.4%',
        },
        {
          name: {
            ru: 'Азот аммонийный (NH₄)',
            en: 'Ammonium Nitrogen (NH₄)',
            cn: '铵态氮(NH₄)',
          },
          percentage: '17.2%',
        },
        {
          name: {
            ru: 'Азот нитратный (NO₃)',
            en: 'Nitrate Nitrogen (NO₃)',
            cn: '硝态氮(NO₃)',
          },
          percentage: '17.2%',
        },
      ],
    },
    physicalProperties: {
      appearance: {
        ru: 'Белые гранулы',
        en: 'White granules',
        cn: '白色颗粒',
      },
      density: '0.9-1.0 g/cm³',
      solubility: {
        ru: 'Хорошо растворим в воде',
        en: 'Highly soluble in water',
        cn: '易溶于水',
      },
    },
    applications: {
      ru: ['Зерновые культуры', 'Овощные культуры', 'Плодовые культуры', 'Технические культуры'],
      en: ['Grain crops', 'Vegetable crops', 'Fruit crops', 'Industrial crops'],
      cn: ['谷物作物', '蔬菜作物', '水果作物', '工业作物'],
    },
    category: {
      ru: 'Азотные удобрения',
      en: 'Nitrogen Fertilizers',
      cn: '氮肥',
    },
  },
  // ... (keep all other existing products)
];