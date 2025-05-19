import { Product } from '../types';

export const products: Product[] = [
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
  {
    id: 'diammonium-phosphate',
    name: {
      ru: 'Диаммонийфосфат',
      en: 'Diammonium Phosphate (DAP)',
      cn: '磷酸二铵',
    },
    description: {
      ru: 'Высококонцентрированное комплексное удобрение, содержащее азот и фосфор, необходимые для роста и развития растений.',
      en: 'A highly concentrated complex fertilizer containing nitrogen and phosphorus, essential for plant growth and development.',
      cn: '高浓度复合肥料，含有植物生长和发育所需的氮和磷。',
    },
    imageUrl: 'https://images.pexels.com/photos/3735174/pexels-photo-3735174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    chemicalProperties: {
      formula: '(NH₄)₂HPO₄',
      composition: [
        {
          name: {
            ru: 'Азот общий (N)',
            en: 'Total Nitrogen (N)',
            cn: '总氮(N)',
          },
          percentage: '18%',
        },
        {
          name: {
            ru: 'Фосфор (P₂O₅)',
            en: 'Phosphorus (P₂O₅)',
            cn: '磷(P₂O₅)',
          },
          percentage: '46%',
        },
      ],
    },
    physicalProperties: {
      appearance: {
        ru: 'Серые или коричневатые гранулы',
        en: 'Gray or brownish granules',
        cn: '灰色或棕色颗粒',
      },
      density: '1.0-1.1 g/cm³',
      solubility: {
        ru: 'Хорошо растворим в воде',
        en: 'Highly soluble in water',
        cn: '易溶于水',
      },
    },
    applications: {
      ru: ['Зерновые культуры', 'Овощные культуры', 'Технические культуры', 'Бобовые культуры'],
      en: ['Grain crops', 'Vegetable crops', 'Industrial crops', 'Legumes'],
      cn: ['谷物作物', '蔬菜作物', '工业作物', '豆类'],
    },
    category: {
      ru: 'Фосфорные удобрения',
      en: 'Phosphorus Fertilizers',
      cn: '磷肥',
    },
  },
  {
    id: 'potassium-chloride',
    name: {
      ru: 'Хлористый калий',
      en: 'Potassium Chloride',
      cn: '氯化钾',
    },
    description: {
      ru: 'Высококонцентрированное калийное удобрение для повышения урожайности и качества сельскохозяйственных культур.',
      en: 'A highly concentrated potassium fertilizer for increasing yield and quality of agricultural crops.',
      cn: '高浓度钾肥，用于提高农作物产量和质量。',
    },
    imageUrl: 'https://images.pexels.com/photos/4507967/pexels-photo-4507967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    chemicalProperties: {
      formula: 'KCl',
      composition: [
        {
          name: {
            ru: 'Калий (K₂O)',
            en: 'Potassium (K₂O)',
            cn: '钾(K₂O)',
          },
          percentage: '60%',
        },
      ],
    },
    physicalProperties: {
      appearance: {
        ru: 'Розоватые или белые кристаллы',
        en: 'Pinkish or white crystals',
        cn: '粉红色或白色晶体',
      },
      density: '1.1-1.2 g/cm³',
      solubility: {
        ru: 'Хорошо растворим в воде',
        en: 'Highly soluble in water',
        cn: '易溶于水',
      },
    },
    applications: {
      ru: ['Зерновые культуры', 'Овощные культуры', 'Плодово-ягодные культуры', 'Картофель'],
      en: ['Grain crops', 'Vegetable crops', 'Fruit and berry crops', 'Potatoes'],
      cn: ['谷物作物', '蔬菜作物', '水果和浆果作物', '马铃薯'],
    },
    category: {
      ru: 'Калийные удобрения',
      en: 'Potassium Fertilizers',
      cn: '钾肥',
    },
  },
  {
    id: 'npk-complex',
    name: {
      ru: 'Комплексное удобрение NPK',
      en: 'NPK Complex Fertilizer',
      cn: 'NPK复合肥',
    },
    description: {
      ru: 'Универсальное комплексное удобрение, содержащее основные макроэлементы - азот, фосфор и калий в сбалансированном соотношении.',
      en: 'A universal complex fertilizer containing the main macronutrients - nitrogen, phosphorus, and potassium in a balanced ratio.',
      cn: '通用复合肥料，含有氮、磷、钾三种主要营养元素，比例均衡。',
    },
    imageUrl: 'https://images.pexels.com/photos/6100119/pexels-photo-6100119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    chemicalProperties: {
      composition: [
        {
          name: {
            ru: 'Азот (N)',
            en: 'Nitrogen (N)',
            cn: '氮(N)',
          },
          percentage: '16%',
        },
        {
          name: {
            ru: 'Фосфор (P₂O₅)',
            en: 'Phosphorus (P₂O₅)',
            cn: '磷(P₂O₅)',
          },
          percentage: '16%',
        },
        {
          name: {
            ru: 'Калий (K₂O)',
            en: 'Potassium (K₂O)',
            cn: '钾(K₂O)',
          },
          percentage: '16%',
        },
      ],
    },
    physicalProperties: {
      appearance: {
        ru: 'Гранулы различных цветов',
        en: 'Granules of various colors',
        cn: '各种颜色的颗粒',
      },
      density: '1.0-1.1 g/cm³',
      solubility: {
        ru: 'Хорошо растворим в воде',
        en: 'Highly soluble in water',
        cn: '易溶于水',
      },
    },
    applications: {
      ru: ['Все виды сельскохозяйственных культур', 'Садоводство', 'Цветоводство', 'Газоны'],
      en: ['All types of agricultural crops', 'Horticulture', 'Floriculture', 'Lawns'],
      cn: ['各类农作物', '园艺', '花卉种植', '草坪'],
    },
    category: {
      ru: 'Комплексные удобрения',
      en: 'Complex Fertilizers',
      cn: '复合肥料',
    },
  },
  {
    id: 'urea',
    name: {
      ru: 'Карбамид (Мочевина)',
      en: 'Urea',
      cn: '尿素',
    },
    description: {
      ru: 'Высококонцентрированное азотное удобрение с самым высоким содержанием азота среди твердых азотных удобрений.',
      en: 'A highly concentrated nitrogen fertilizer with the highest nitrogen content among solid nitrogen fertilizers.',
      cn: '高浓度氮肥，在固体氮肥中氮含量最高。',
    },
    imageUrl: 'https://images.pexels.com/photos/5426201/pexels-photo-5426201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    chemicalProperties: {
      formula: 'CO(NH₂)₂',
      composition: [
        {
          name: {
            ru: 'Азот (N)',
            en: 'Nitrogen (N)',
            cn: '氮(N)',
          },
          percentage: '46%',
        },
      ],
    },
    physicalProperties: {
      appearance: {
        ru: 'Белые кристаллы или гранулы',
        en: 'White crystals or granules',
        cn: '白色晶体或颗粒',
      },
      density: '0.7-0.8 g/cm³',
      solubility: {
        ru: 'Очень хорошо растворим в воде',
        en: 'Very soluble in water',
        cn: '非常易溶于水',
      },
    },
    applications: {
      ru: ['Зерновые культуры', 'Технические культуры', 'Корнеплоды', 'Внекорневая подкормка'],
      en: ['Grain crops', 'Industrial crops', 'Root crops', 'Foliar feeding'],
      cn: ['谷物作物', '工业作物', '根茎作物', '叶面施肥'],
    },
    category: {
      ru: 'Азотные удобрения',
      en: 'Nitrogen Fertilizers',
      cn: '氮肥',
    },
  },
];