import { Product } from '../types';

const products: Product[] = [
  {
    id: 'ammophos',
    name: {
      ru: 'Аммофос',
      en: 'Ammophos',
      cn: '磷酸铵'
    },
    description: {
      ru: 'Высокоэффективное гранулированное азотно-фосфорное удобрение, содержащее два основных питательных элемента: фосфор и азот.',
      en: 'Highly effective granulated nitrogen-phosphorus fertilizer containing two main nutrients: phosphorus and nitrogen.',
      cn: '高效颗粒状氮磷肥料，含有两种主要营养元素：磷和氮。'
    },
    imageUrl: 'https://images.pexels.com/photos/6320076/pexels-photo-6320076.jpeg',
    chemicalProperties: {
      formula: 'NH4H2PO4',
      composition: [
        {
          name: {
            ru: 'Фосфор (P₂O₅)',
            en: 'Phosphorus (P₂O₅)',
            cn: '磷 (P₂O₅)'
          },
          percentage: '52%'
        },
        {
          name: {
            ru: 'Азот (N)',
            en: 'Nitrogen (N)',
            cn: '氮 (N)'
          },
          percentage: '12%'
        }
      ]
    },
    physicalProperties: {
      appearance: {
        ru: 'Гранулы серого или светло-серого цвета',
        en: 'Gray or light gray granules',
        cn: '灰色或浅灰色颗粒'
      },
      solubility: {
        ru: 'Хорошо растворим в воде',
        en: 'Highly soluble in water',
        cn: '易溶于水'
      }
    },
    applications: {
      ru: [
        'Основное внесение под все сельскохозяйственные культуры',
        'Припосевное внесение',
        'Подкормка в период вегетации',
        'Особенно эффективен для зерновых культур'
      ],
      en: [
        'Basic application for all agricultural crops',
        'Application during sowing',
        'Feeding during vegetation period',
        'Especially effective for grain crops'
      ],
      cn: [
        '适用于所有农作物的基础施肥',
        '播种时施用',
        '生长期追肥',
        '特别适用于谷物作物'
      ]
    },
    category: {
      ru: 'Фосфорные удобрения',
      en: 'Phosphate fertilizers',
      cn: '磷肥'
    }
  },
  {
    id: 'diammonium-phosphate',
    name: {
      ru: 'Диаммонийфосфат',
      en: 'Diammonium Phosphate',
      cn: '磷酸二铵'
    },
    description: {
      ru: 'Концентрированное азотно-фосфорное удобрение с высоким содержанием питательных веществ.',
      en: 'Concentrated nitrogen-phosphorus fertilizer with high nutrient content.',
      cn: '高浓度氮磷肥料，养分含量高。'
    },
    imageUrl: 'https://images.pexels.com/photos/5560026/pexels-photo-5560026.jpeg',
    chemicalProperties: {
      formula: '(NH4)2HPO4',
      composition: [
        {
          name: {
            ru: 'Фосфор (P₂O₅)',
            en: 'Phosphorus (P₂O₅)',
            cn: '磷 (P₂O₅)'
          },
          percentage: '46%'
        },
        {
          name: {
            ru: 'Азот (N)',
            en: 'Nitrogen (N)',
            cn: '氮 (N)'
          },
          percentage: '18%'
        }
      ]
    },
    physicalProperties: {
      appearance: {
        ru: 'Гранулы от светло-серого до темно-серого цвета',
        en: 'Light gray to dark gray granules',
        cn: '浅灰色至深灰色颗粒'
      },
      solubility: {
        ru: 'Хорошо растворим в воде',
        en: 'Highly soluble in water',
        cn: '易溶于水'
      }
    },
    applications: {
      ru: [
        'Основное внесение под все сельскохозяйственные культуры',
        'Особенно эффективен для технических культур',
        'Применяется для корневой и внекорневой подкормки'
      ],
      en: [
        'Basic application for all agricultural crops',
        'Especially effective for industrial crops',
        'Used for root and foliar feeding'
      ],
      cn: [
        '适用于所有农作物的基础施肥',
        '特别适用于工业作物',
        '用于根部和叶面施肥'
      ]
    },
    category: {
      ru: 'Фосфорные удобрения',
      en: 'Phosphate fertilizers',
      cn: '磷肥'
    }
  },
  {
    id: 'ammonium-nitrate',
    name: {
      ru: 'Аммиачная селитра (N34)',
      en: 'Ammonium Nitrate (N34)',
      cn: '硝酸铵 (N34)'
    },
    description: {
      ru: 'Универсальное азотное удобрение с содержанием азота 34%, подходящее для всех типов почв и сельскохозяйственных культур.',
      en: 'Universal nitrogen fertilizer with 34% nitrogen content, suitable for all soil types and agricultural crops.',
      cn: '含氮量34%的通用氮肥，适用于各种土壤类型和农作物。'
    },
    imageUrl: 'https://images.pexels.com/photos/5560027/pexels-photo-5560027.jpeg',
    chemicalProperties: {
      formula: 'NH4NO3',
      composition: [
        {
          name: {
            ru: 'Азот (N)',
            en: 'Nitrogen (N)',
            cn: '氮 (N)'
          },
          percentage: '34%'
        }
      ]
    },
    physicalProperties: {
      appearance: {
        ru: 'Белые или слегка окрашенные гранулы',
        en: 'White or slightly colored granules',
        cn: '白色或略带色彩的颗粒'
      },
      solubility: {
        ru: 'Легко растворим в воде',
        en: 'Easily soluble in water',
        cn: '易溶于水'
      }
    },
    applications: {
      ru: [
        'Предпосевное внесение',
        'Подкормка в период вегетации',
        'Применяется для всех сельскохозяйственных культур'
      ],
      en: [
        'Pre-sowing application',
        'Feeding during vegetation period',
        'Applied to all agricultural crops'
      ],
      cn: [
        '播种前施用',
        '生长期追肥',
        '适用于所有农作物'
      ]
    },
    category: {
      ru: 'Азотные удобрения',
      en: 'Nitrogen fertilizers',
      cn: '氮肥'
    }
  },
  {
    id: 'calcium-ammonium-nitrate',
    name: {
      ru: 'Удобрение азотно-известняковое (27N5Ca4Mg)',
      en: 'Calcium Ammonium Nitrate (27N5Ca4Mg)',
      cn: '硝酸铵钙 (27N5Ca4Mg)'
    },
    description: {
      ru: 'Комплексное азотное удобрение с добавлением кальция и магния, обеспечивающее сбалансированное питание растений.',
      en: 'Complex nitrogen fertilizer with added calcium and magnesium, providing balanced plant nutrition.',
      cn: '添加钙和镁的复合氮肥，提供平衡的植物营养。'
    },
    imageUrl: 'https://images.pexels.com/photos/6320076/pexels-photo-6320076.jpeg',
    chemicalProperties: {
      composition: [
        {
          name: {
            ru: 'Азот (N)',
            en: 'Nitrogen (N)',
            cn: '氮 (N)'
          },
          percentage: '27%'
        },
        {
          name: {
            ru: 'Кальций (Ca)',
            en: 'Calcium (Ca)',
            cn: '钙 (Ca)'
          },
          percentage: '5%'
        },
        {
          name: {
            ru: 'Магний (Mg)',
            en: 'Magnesium (Mg)',
            cn: '镁 (Mg)'
          },
          percentage: '4%'
        }
      ]
    },
    physicalProperties: {
      appearance: {
        ru: 'Гранулы белого или светло-серого цвета',
        en: 'White or light gray granules',
        cn: '白色或浅灰色颗粒'
      },
      solubility: {
        ru: 'Хорошо растворим в воде',
        en: 'Highly soluble in water',
        cn: '易溶于水'
      }
    },
    applications: {
      ru: [
        'Основное внесение под все культуры',
        'Подходит для почв с недостатком кальция и магния',
        'Эффективно для овощных и плодовых культур'
      ],
      en: [
        'Basic application for all crops',
        'Suitable for soils lacking calcium and magnesium',
        'Effective for vegetable and fruit crops'
      ],
      cn: [
        '适用于所有作物的基础施肥',
        '适用于缺钙和缺镁的土壤',
        '对蔬菜和水果作物效果好'
      ]
    },
    category: {
      ru: 'Азотные удобрения',
      en: 'Nitrogen fertilizers',
      cn: '氮肥'
    }
  },
  {
    id: 'ammonium-sulfate',
    name: {
      ru: 'Сульфат аммония (21N24S)',
      en: 'Ammonium Sulfate (21N24S)',
      cn: '硫酸铵 (21N24S)'
    },
    description: {
      ru: 'Азотно-серное удобрение, особенно эффективное для культур, требовательных к сере.',
      en: 'Nitrogen-sulfur fertilizer, particularly effective for sulfur-demanding crops.',
      cn: '氮硫肥料，特别适用于需硫量大的作物。'
    },
    imageUrl: 'https://images.pexels.com/photos/5560028/pexels-photo-5560028.jpeg',
    chemicalProperties: {
      formula: '(NH4)2SO4',
      composition: [
        {
          name: {
            ru: 'Азот (N)',
            en: 'Nitrogen (N)',
            cn: '氮 (N)'
          },
          percentage: '21%'
        },
        {
          name: {
            ru: 'Сера (S)',
            en: 'Sulfur (S)',
            cn: '硫 (S)'
          },
          percentage: '24%'
        }
      ]
    },
    physicalProperties: {
      appearance: {
        ru: 'Кристаллический порошок или гранулы белого цвета',
        en: 'Crystalline powder or white granules',
        cn: '结晶粉末或白色颗粒'
      },
      solubility: {
        ru: 'Хорошо растворим в воде',
        en: 'Highly soluble in water',
        cn: '易溶于水'
      }
    },
    applications: {
      ru: [
        'Основное внесение и подкормка',
        'Особенно эффективен для крестоцветных культур',
        'Применяется на щелочных и карбонатных почвах'
      ],
      en: [
        'Basic application and feeding',
        'Especially effective for cruciferous crops',
        'Used on alkaline and carbonate soils'
      ],
      cn: [
        '基础施肥和追肥',
        '特别适用于十字花科作物',
        '用于碱性和碳酸盐土壤'
      ]
    },
    category: {
      ru: 'Азотные удобрения',
      en: 'Nitrogen fertilizers',
      cn: '氮肥'
    }
  },
  {
    id: 'urea-n46',
    name: {
      ru: 'Карбамид (N46)',
      en: 'Urea (N46)',
      cn: '尿素 (N46)'
    },
    description: {
      ru: 'Высококонцентрированное азотное удобрение с содержанием азота 46%, наиболее концентрированное из твердых азотных удобрений.',
      en: 'Highly concentrated nitrogen fertilizer with 46% nitrogen content, the most concentrated solid nitrogen fertilizer.',
      cn: '含氮量46%的高浓度氮肥，是固体氮肥中浓度最高的。'
    },
    imageUrl: 'https://images.pexels.com/photos/5560029/pexels-photo-5560029.jpeg',
    chemicalProperties: {
      formula: 'CO(NH2)2',
      composition: [
        {
          name: {
            ru: 'Азот (N)',
            en: 'Nitrogen (N)',
            cn: '氮 (N)'
          },
          percentage: '46%'
        }
      ]
    },
    physicalProperties: {
      appearance: {
        ru: 'Белые гранулы или кристаллы',
        en: 'White granules or crystals',
        cn: '白色颗粒或晶体'
      },
      solubility: {
        ru: 'Хорошо растворим в воде',
        en: 'Highly soluble in water',
        cn: '易溶于水'
      }
    },
    applications: {
      ru: [
        'Основное внесение под все культуры',
        'Припосевное внесение',
        'Корневая и внекорневая подкормка'
      ],
      en: [
        'Basic application for all crops',
        'Application during sowing',
        'Root and foliar feeding'
      ],
      cn: [
        '适用于所有作物的基础施肥',
        '播种时施用',
        '根部和叶面施肥'
      ]
    },
    category: {
      ru: 'Азотные удобрения',
      en: 'Nitrogen fertilizers',
      cn: '氮肥'
    }
  },
  {
    id: 'sulfonitrate-30n7s',
    name: {
      ru: 'Сульфонитрат (30N7S)',
      en: 'Sulfonitrate (30N7S)',
      cn: '硫硝酸盐 (30N7S)'
    },
    description: {
      ru: 'Комплексное азотно-серное удобрение с оптимальным соотношением питательных элементов.',
      en: 'Complex nitrogen-sulfur fertilizer with optimal nutrient ratio.',
      cn: '养分比例最优的复合氮硫肥料。'
    },
    imageUrl: 'https://images.pexels.com/photos/5560030/pexels-photo-5560030.jpeg',
    chemicalProperties: {
      composition: [
        {
          name: {
            ru: 'Азот (N)',
            en: 'Nitrogen (N)',
            cn: '氮 (N)'
          },
          percentage: '30%'
        },
        {
          name: {
            ru: 'Сера (S)',
            en: 'Sulfur (S)',
            cn: '硫 (S)'
          },
          percentage: '7%'
        }
      ]
    },
    physicalProperties: {
      appearance: {
        ru: 'Гранулы светло-серого цвета',
        en: 'Light gray granules',
        cn: '浅灰色颗粒'
      },
      solubility: {
        ru: 'Хорошо растворим в воде',
        en: 'Highly soluble in water',
        cn: '易溶于水'
      }
    },
    applications: {
      ru: [
        'Основное внесение под все культуры',
        'Подкормка серосодержащих культур',
        'Эффективен для масличных культур'
      ],
      en: [
        'Basic application for all crops',
        'Feeding sulfur-containing crops',
        'Effective for oilseed crops'
      ],
      cn: [
        '适用于所有作物的基础施肥',
        '含硫作物追肥',
        '对油料作物效果好'
      ]
    },
    category: {
      ru: 'Азотные удобрения',
      en: 'Nitrogen fertilizers',
      cn: '氮肥'
    }
  },
  {
    id: 'sulfonitrate-26n13s',
    name: {
      ru: 'Сульфонитрат (26N13S)',
      en: 'Sulfonitrate (26N13S)',
      cn: '硫硝酸盐 (26N13S)'
    },
    description: {
      ru: 'Азотно-серное удобрение с повышенным содержанием серы для культур с высокой потребностью в сере.',
      en: 'Nitrogen-sulfur fertilizer with increased sulfur content for crops with high sulfur demand.',
      cn: '含硫量高的氮硫肥料，适用于高需硫作物。'
    },
    imageUrl: 'https://images.pexels.com/photos/5560031/pexels-photo-5560031.jpeg',
    chemicalProperties: {
      composition: [
        {
          name: {
            ru: 'Азот (N)',
            en: 'Nitrogen (N)',
            cn: '氮 (N)'
          },
          percentage: '26%'
        },
        {
          name: {
            ru: 'Сера (S)',
            en: 'Sulfur (S)',
            cn: '硫 (S)'
          },
          percentage: '13%'
        }
      ]
    },
    physicalProperties: {
      appearance: {
        ru: 'Гранулы светло-серого цвета',
        en: 'Light gray granules',
        cn: '浅灰色颗粒'
      },
      solubility: {
        ru: 'Хорошо растворим в воде',
        en: 'Highly soluble in water',
        cn: '易溶于水'
      }
    },
    applications: {
      ru: [
        'Основное внесение под все культуры',
        'Особенно эффективен для рапса и горчицы',
        'Подкормка овощных культур'
      ],
      en: [
        'Basic application for all crops',
        'Especially effective for rapeseed and mustard',
        'Feeding vegetable crops'
      ],
      cn: [
        '适用于所有作物的基础施肥',
        '特别适用于油菜和芥菜',
        '蔬菜作物追肥'
      ]
    },
    category: {
      ru: 'Азотные удобрения',
      en: 'Nitrogen fertilizers',
      cn: '氮肥'
    }
  },
  {
    id: 'uan-n32',
    name: {
      ru: 'КАС (N32)',
      en: 'UAN (N32)',
      cn: '碳铵溶液 (N32)'
    },
    description: {
      ru: 'Жидкое азотное удобрение, содержащее три формы азота: нитратную, аммонийную и амидную.',
      en: 'Liquid nitrogen fertilizer containing three forms of nitrogen: nitrate, ammonium, and amide.',
      cn: '含硝态氮、铵态氮和酰胺态氮三种形态的液体氮肥。'
    },
    imageUrl: 'https://images.pexels.com/photos/5560032/pexels-photo-5560032.jpeg',
    chemicalProperties: {
      composition: [
        {
          name: {
            ru: 'Азот (N)',
            en: 'Nitrogen (N)',
            cn: '氮 (N)'
          },
          percentage: '32%'
        }
      ]
    },
    physicalProperties: {
      appearance: {
        ru: 'Прозрачная бесцветная жидкость',
        en: 'Clear colorless liquid',
        cn: '清澈无色液体'
      },
      solubility: {
        ru: 'Жидкая форма',
        en: 'Liquid form',
        cn: '液体形态'
      }
    },
    applications: {
      ru: [
        'Основное внесение под все культуры',
        'Корневая подкормка в период вегетации',
        'Внекорневая подкормка'
      ],
      en: [
        'Basic application for all crops',
        'Root feeding during vegetation',
        'Foliar feeding'
      ],
      cn: [
        '适用于所有作物的基础施肥',
        '生长期根部追肥',
        '叶面施肥'
      ]
    },
    category: {
      ru: 'Азотные удобрения',
      en: 'Nitrogen fertilizers',
      cn: '氮肥'
    }
  },
  {
    id: 'nitroammophoska-27-6-6-3s',
    name: {
      ru: 'Нитроаммофоска (27.6.6.+3S)',
      en: 'Nitroammophoska (27.6.6.+3S)',
      cn: '硝铵磷钾 (27.6.6.+3S)'
    },
    description: {
      ru: 'Комплексное удобрение с высоким содержанием азота и сбалансированным содержанием фосфора, калия и серы.',
      en: 'Complex fertilizer with high nitrogen content and balanced content of phosphorus, potassium, and sulfur.',
      cn: '高氮含量，磷、钾、硫含量均衡的复合肥料。'
    },
    imageUrl: 'https://images.pexels.com/photos/5560033/pexels-photo-5560033.jpeg',
    chemicalProperties: {
      composition: [
        {
          name: {
            ru: 'Азот (N)',
            en: 'Nitrogen (N)',
            cn: '氮 (N)'
          },
          percentage: '27%'
        },
        {
          name: {
            ru: 'Фосфор (P₂O₅)',
            en: 'Phosphorus (P₂O₅)',
            cn: '磷 (P₂O₅)'
          },
          percentage: '6%'
        },
        {
          name: {
            ru: 'Калий (K₂O)',
            en: 'Potassium (K₂O)',
            cn: '钾 (K₂O)'
          },
          percentage: '6%'
        },
        {
          name: {
            ru: 'Сера (S)',
            en: 'Sulfur (S)',
            cn: '硫 (S)'
          },
          percentage: '3%'
        }
      ]
    },
    physicalProperties: {
      appearance: {
        ru: 'Гранулы светло-розового или серого цвета',
        en: 'Light pink or gray granules',
        cn: '浅粉色或灰色颗粒'
      },
      solubility: {
        ru: 'Хорошо растворим в воде',
        en: 'Highly soluble in water',
        cn: '易溶于水'
      }
    },
    applications: {
      ru: [
        'Основное внесение под все культуры',
        'Припосевное внесение',
        'Подкормка в период вегетации'
      ],
      en: [
        'Basic application for all crops',
        'Application during sowing',
        'Feeding during vegetation'
      ],
      cn: [
        '适用于所有作物的基础施肥',
        '播种时施用',
        '生长期追肥'
      ]
    },
    category: {
      ru: 'Азотные удобрения',
      en: 'Nitrogen fertilizers',
      cn: '氮肥'
    }
  },
  {
    id: 'urea',
    name: {
      ru: 'Карбамид (Мочевина)',
      en: 'Urea',
      cn: '尿素'
    },
    description: {
      ru: 'Высококонцентрированное азотное удобрение с максимальным содержанием азота среди твердых азотных удобрений.',
      en: 'Highly concentrated nitrogen fertilizer with the highest nitrogen content among solid nitrogen fertilizers.',
      cn: '高浓度氮肥，在固体氮肥中氮含量最高。'
    },
    imageUrl: 'https://images.pexels.com/photos/5560028/pexels-photo-5560028.jpeg',
    chemicalProperties: {
      formula: 'CO(NH2)2',
      composition: [
        {
          name: {
            ru: 'Азот (N)',
            en: 'Nitrogen (N)',
            cn: '氮 (N)'
          },
          percentage: '46.2%'
        }
      ]
    },
    physicalProperties: {
      appearance: {
        ru: 'Белые кристаллические гранулы',
        en: 'White crystalline granules',
        cn: '白色结晶颗粒'
      },
      solubility: {
        ru: 'Хорошо растворим в воде',
        en: 'Highly soluble in water',
        cn: '易溶于水'
      }
    },
    applications: {
      ru: [
        'Основное внесение под все культуры',
        'Корневая и внекорневая подкормка',
        'Особенно эффективен для зерновых культур'
      ],
      en: [
        'Basic application for all crops',
        'Root and foliar feeding',
        'Especially effective for grain crops'
      ],
      cn: [
        '适用于所有作物的基础施肥',
        '根部和叶面施肥',
        '特别适用于谷物作物'
      ]
    },
    category: {
      ru: 'Азотные удобрения',
      en: 'Nitrogen fertilizers',
      cn: '氮肥'
    }
  },
  {
    id: 'potassium-chloride',
    name: {
      ru: 'Калий хлористый гранулированный',
      en: 'Granular Potassium Chloride',
      cn: '氯化钾颗粒'
    },
    description: {
      ru: 'Концентрированное калийное удобрение с содержанием 60% хлористого калия, применяемое на всех типах почв под различные сельскохозяйственные культуры.',
      en: 'Concentrated potassium fertilizer containing 60% potassium chloride, used on all soil types for various agricultural crops.',
      cn: '含60%氯化钾的浓缩钾肥，适用于各种土壤类型和农作物。'
    },
    imageUrl: 'https://images.pexels.com/photos/5560029/pexels-photo-5560029.jpeg',
    chemicalProperties: {
      formula: 'KCl',
      composition: [
        {
          name: {
            ru: 'Калий (K₂O)',
            en: 'Potassium (K₂O)',
            cn: '钾 (K₂O)'
          },
          percentage: '60%'
        }
      ]
    },
    physicalProperties: {
      appearance: {
        ru: 'Гранулы розового или белого цвета',
        en: 'Pink or white granules',
        cn: '粉红色或白色颗粒'
      },
      solubility: {
        ru: 'Хорошо растворим в воде',
        en: 'Highly soluble in water',
        cn: '易溶于水'
      }
    },
    applications: {
      ru: [
        'Основное внесение под все культуры',
        'Подкормка в период вегетации',
        'Особенно эффективен для корнеплодов'
      ],
      en: [
        'Basic application for all crops',
        'Feeding during vegetation period',
        'Especially effective for root crops'
      ],
      cn: [
        '适用于所有作物的基础施肥',
        '生长期追肥',
        '特别适用于根茎作物'

      ]
    },
    category: {
      ru: 'Калийные удобрения',
      en: 'Potassium fertilizers',
      cn: '钾肥'
    }
  },
  {
    id: 'pk-5-55',
    name: {
      ru: 'PK 5:55 (KCL.P)',
      en: 'PK 5:55 (KCL.P)',
      cn: 'PK 5:55 (KCL.P)'
    },
    description: {
      ru: 'Комплексное фосфорно-калийное удобрение с высоким содержанием калия, идеально подходящее для культур с повышенной потребностью в калии.',
      en: 'Complex phosphorus-potassium fertilizer with high potassium content, ideal for crops with increased potassium demand.',
      cn: '高钾含量的复合磷钾肥料，特别适用于需钾量大的作物。'
    },
    imageUrl: 'https://images.pexels.com/photos/5560034/pexels-photo-5560034.jpeg',
    chemicalProperties: {
      composition: [
        {
          name: {
            ru: 'Фосфор (P₂O₅)',
            en: 'Phosphorus (P₂O₅)',
            cn: '磷 (P₂O₅)'
          },
          percentage: '5%'
        },
        {
          name: {
            ru: 'Калий (K₂O)',
            en: 'Potassium (K₂O)',
            cn: '钾 (K₂O)'
          },
          percentage: '55%'
        }
      ]
    },
    physicalProperties: {
      appearance: {
        ru: 'Гранулы серого цвета',
        en: 'Gray granules',
        cn: '灰色颗粒'
      },
      solubility: {
        ru: 'Хорошо растворим в воде',
        en: 'Highly soluble in water',
        cn: '易溶于水'
      }
    },
    applications: {
      ru: [
        'Основное внесение под овощные культуры',
        'Подкормка плодовых деревьев',
        'Применение на почвах с дефицитом калия'
      ],
      en: [
        'Basic application for vegetable crops',
        'Feeding fruit trees',
        'Application on potassium-deficient soils'
      ],
      cn: [
        '蔬菜作物基础施肥',
        '果树追肥',
        '缺钾土壤施用'
      ]
    },
    category: {
      ru: 'Калийные удобрения',
      en: 'Potassium fertilizers',
      cn: '钾肥'
    }
  },
  {
    id: 'kalimag',
    name: {
      ru: 'Калиймаг (46K5Mg)',
      en: 'Kalimag (46K5Mg)',
      cn: '钾镁肥 (46K5Mg)'
    },
    description: {
      ru: 'Комплексное калийно-магниевое удобрение, обеспечивающее растения необходимыми элементами питания для оптимального роста и развития.',
      en: 'Complex potassium-magnesium fertilizer providing plants with necessary nutrients for optimal growth and development.',
      cn: '复合钾镁肥料，为植物提供最佳生长和发育所需的营养元素。'
    },
    imageUrl: 'https://images.pexels.com/photos/5560035/pexels-photo-5560035.jpeg',
    chemicalProperties: {
      composition: [
        {
          name: {
            ru: 'Калий (K₂O)',
            en: 'Potassium (K₂O)',
            cn: '钾 (K₂O)'
          },
          percentage: '46%'
        },
        {
          name: {
            ru: 'Магний (MgO)',
            en: 'Magnesium (MgO)',
            cn: '镁 (MgO)'
          },
          percentage: '5%'
        }
      ]
    },
    physicalProperties: {
      appearance: {
        ru: 'Гранулы светло-серого цвета',
        en: 'Light gray granules',
        cn: '浅灰色颗粒'
      },
      solubility: {
        ru: 'Хорошо растворим в воде',
        en: 'Highly soluble in water',
        cn: '易溶于水'
      }
    },
    applications: {
      ru: [
        'Основное внесение под все культуры',
        'Особенно эффективен для магниелюбивых культур',
        'Применение на почвах с дефицитом магния'
      ],
      en: [
        'Basic application for all crops',
        'Especially effective for magnesium-loving crops',
        'Application on magnesium-deficient soils'
      ],
      cn: [
        '适用于所有作物的基础施肥',
        '特别适用于喜镁作物',
        '缺镁土壤施用'
      ]
    },
    category: {
      ru: 'Калийные удобрения',
      en: 'Potassium fertilizers',
      cn: '钾肥'
    }
  },
  {
    id: 'potassium-sulfate',
    name: {
      ru: 'Калий сернокислый гранулированный',
      en: 'Granular Potassium Sulfate',
      cn: '硫酸钾颗粒'
    },
    description: {
      ru: 'Концентрированное бесхлорное калийное удобрение, содержащее также серу в сульфатной форме.',
      en: 'Concentrated chlorine-free potassium fertilizer that also contains sulfur in sulfate form.',
      cn: '浓缩无氯钾肥，同时含有硫酸态硫。'
    },
    imageUrl: 'https://images.pexels.com/photos/5560030/pexels-photo-5560030.jpeg',
    chemicalProperties: {
      formula: 'K2SO4',
      composition: [
        {
          name: {
            ru: 'Калий (K₂O)',
            en: 'Potassium (K₂O)',
            cn: '钾 (K₂O)'
          },
          percentage: '50%'
        },
        {
          name: {
            ru: 'Сера (S)',
            en: 'Sulfur (S)',
            cn: '硫 (S)'
          },
          percentage: '18%'
        }
      ]
    },
    physicalProperties: {
      appearance: {
        ru: 'Белые кристаллические гранулы',
        en: 'White crystalline granules',
        cn: '白色结晶颗粒'
      },
      solubility: {
        ru: 'Умеренно растворим в воде',
        en: 'Moderately soluble in water',
        cn: '中等溶解度'
      }
    },
    applications: {
      ru: [
        'Для культур, чувствительных к хлору',
        'Особенно эффективен для картофеля и овощных культур',
        'Применяется в защищенном грунте'
      ],
      en: [
        'For chlorine-sensitive crops',
        'Especially effective for potatoes and vegetable crops',
        'Used in protected soil'
      ],
      cn: [
        '适用于氯敏感作物',
        '特别适用于马铃薯和蔬菜作物',
        '用于保护地栽培'
      ]
    },
    category: {
      ru: 'Калийные удобрения',
      en: 'Potassium fertilizers',
      cn: '钾肥'
    }
  },
  {
    id: 'potassium-carbonate',
    name: {
      ru: 'Поташ (Карбонат калия)',
      en: 'Potash (Potassium Carbonate)',
      cn: '碳酸钾'
    },
    description: {
      ru: 'Высококонцентрированное калийное удобрение без хлора и серы, идеально подходящее для культур, чувствительных к этим элементам.',
      en: 'Highly concentrated potassium fertilizer without chlorine and sulfur, ideal for crops sensitive to these elements.',
      cn: '高浓度无氯无硫钾肥，特别适用于对这些元素敏感的作物。'
    },
    imageUrl: 'https://images.pexels.com/photos/5560036/pexels-photo-5560036.jpeg',
    chemicalProperties: {
      formula: 'K2CO3',
      composition: [
        {
          name: {
            ru: 'Калий (K₂O)',
            en: 'Potassium (K₂O)',
            cn: '钾 (K₂O)'
          },
          percentage: '68%'
        }
      ]
    },
    physicalProperties: {
      appearance: {
        ru: 'Белый кристаллический порошок',
        en: 'White crystalline powder',
        cn: '白色结晶粉末'
      },
      solubility: {
        ru: 'Легко растворим в воде',
        en: 'Easily soluble in water',
        cn: '易溶于水'
      }
    },
    applications: {
      ru: [
        'Для культур с высокой чувствительностью к хлору и сере',
        'Применение в органическом земледелии',
        'Подкормка декоративных и комнатных растений'
      ],
      en: [
        'For crops highly sensitive to chlorine and sulfur',
        'Application in organic farming',
        'Feeding ornamental and indoor plants'
      ],
      cn: [
        '适用于对氯和硫高度敏感的作物',
        '用于有机农业',
        '观赏植物和室内植物施肥'
      ]
    },
    category: {
      ru: 'Калийные удобрения',
      en: 'Potassium fertilizers',
      cn: '钾肥'
    }
  },
  {
    id: 'ammophos-np-12-52',
    name: {
      ru: 'Аммофос (NP 12:52)',
      en: 'Ammophos (NP 12:52)',
      cn: '磷酸铵 (NP 12:52)'
    },
    description: {
      ru: 'Высококонцентрированное азотно-фосфорное удобрение с максимальным содержанием фосфора.',
      en: 'Highly concentrated nitrogen-phosphorus fertilizer with maximum phosphorus content.',
      cn: '高浓度氮磷肥料，磷含量最高。'
    },
    imageUrl: 'https://images.pexels.com/photos/5560037/pexels-photo-5560037.jpeg',
    chemicalProperties: {
      composition: [
        {
          name: {
            ru: 'Азот (N)',
            en: 'Nitrogen (N)',
            cn: '氮 (N)'
          },
          percentage: '12%'
        },
        {
          name: {
            ru: 'Фосфор (P₂O₅)',
            en: 'Phosphorus (P₂O₅)',
            cn: '磷 (P₂O₅)'
          },
          percentage: '52%'
        }
      ]
    },
    physicalProperties: {
      appearance: {
        ru: 'Гранулы серого цвета',
        en: 'Gray granules',
        cn: '灰色颗粒'
      },
      solubility: {
        ru: 'Хорошо растворим в воде',
        en: 'Highly soluble in water',
        cn: '易溶于水'
      }
    },
    applications: {
      ru: [
        'Основное внесение под все культуры',
        'Особенно эффективен для зерновых',
        'Припосевное внесение'
      ],
      en: [
        'Basic application for all crops',
        'Especially effective for cereals',
        'Application during sowing'
      ],
      cn: [
        '适用于所有作物的基础施肥',
        '特别适用于谷物',
        '播种时施用'
      ]
    },
    category: {
      ru: 'Фосфорные удобрения',
      en: 'Phosphate fertilizers',
      cn: '磷肥'
    }
  },
  {
    id: 'ammophos-np-10-46',
    name: {
      ru: 'Аммофос (NP 10:46)',
      en: 'Ammophos (NP 10:46)',
      cn: '磷酸铵 (NP 10:46)'
    },
    description: {
      ru: 'Концентрированное азотно-фосфорное удобрение с оптимальным соотношением элементов питания.',
      en: 'Concentrated nitrogen-phosphorus fertilizer with optimal nutrient ratio.',
      cn: '养分比例最优的浓缩氮磷肥料。'
    },
    imageUrl: 'https://images.pexels.com/photos/5560038/pexels-photo-5560038.jpeg',
    chemicalProperties: {
      composition: [
        {
          name: {
            ru: 'Азот (N)',
            en: 'Nitrogen (N)',
            cn: '氮 (N)'
          },
          percentage: '10%'
        },
        {
          name: {
            ru: 'Фосфор (P₂O₅)',
            en: 'Phosphorus (P₂O₅)',
            cn: '磷 (P₂O₅)'
          },
          percentage: '46%'
        }
      ]
    },
    physicalProperties: {
      appearance: {
        ru: 'Гранулы светло-серого цвета',
        en: 'Light gray granules',
        cn: '浅灰色颗粒'
      },
      solubility: {
        ru: 'Хорошо растворим в воде',
        en: 'Highly soluble in water',
        cn: '易溶于水'
      }
    },
    applications: {
      ru: [
        'Основное внесение под все культуры',
        'Припосевное внесение',
        'Подходит для всех типов почв'
      ],
      en: [
        'Basic application for all crops',
        'Application during sowing',
        'Suitable for all soil types'
      ],
      cn: [
        '适用于所有作物的基础施肥',
        '播种时施用',
        '适用于各种土壤类型'
      ]
    },
    category: {
      ru: 'Фосфорные удобрения',
      en: 'Phosphate fertilizers',
      cn: '磷肥'
    }
  },
  {
    id: 'dap-np-18-46',
    name: {
      ru: 'Диаммоний фосфат (NP 18:46)',
      en: 'Diammonium Phosphate (NP 18:46)',
      cn: '磷酸二铵 (NP 18:46)'
    },
    description: {
      ru: 'Высококонцентрированное комплексное удобрение с повышенным содержанием азота и фосфора.',
      en: 'Highly concentrated complex fertilizer with increased nitrogen and phosphorus content.',
      cn: '高浓度氮磷复合肥料。'
    },
    imageUrl: 'https://images.pexels.com/photos/5560039/pexels-photo-5560039.jpeg',
    chemicalProperties: {
      composition: [
        {
          name: {
            ru: 'Азот (N)',
            en: 'Nitrogen (N)',
            cn: '氮 (N)'
          },
          percentage: '18%'
        },
        {
          name: {
            ru: 'Фосфор (P₂O₅)',
            en: 'Phosphorus (P₂O₅)',
            cn: '磷 (P₂O₅)'
          },
          percentage: '46%'
        }
      ]
    },
    physicalProperties: {
      appearance: {
        ru: 'Гранулы серого цвета',
        en: 'Gray granules',
        cn: '灰色颗粒'
      },
      solubility: {
        ru: 'Хорошо растворим в воде',
        en: 'Highly soluble in water',
        cn: '易溶于水'
      }
    },
    applications: {
      ru: [
        'Основное внесение под все культуры',
        'Особенно эффективен для технических культур',
        'Подкормка в период вегетации'
      ],
      en: [
        'Basic application for all crops',
        'Especially effective for industrial crops',
        'Feeding during vegetation'
      ],
      cn: [
        '适用于所有作物的基础施肥',
        '特别适用于工业作物',
        '生长期追肥'
      ]
    },
    category: {
      ru: 'Фосфорные удобрения',
      en: 'Phosphate fertilizers',
      cn: '磷肥'
    }
  },
  {
    id: 'sulfoammophos-20-20-14',
    name: {
      ru: 'Сульфоаммофос NP(S) 20:20(14)',
      en: 'Sulfoammophos NP(S) 20:20(14)',
      cn: '硫磷铵 NP(S) 20:20(14)'
    },
    description: {
      ru: 'Комплексное удобрение, содержащее азот, фосфор и серу в оптимальном соотношении.',
      en: 'Complex fertilizer containing nitrogen, phosphorus, and sulfur in optimal ratio.',
      cn: '含氮、磷、硫的最佳比例复合肥料。'
    },
    imageUrl: 'https://images.pexels.com/photos/5560040/pexels-photo-5560040.jpeg',
    chemicalProperties: {
      composition: [
        {
          name: {
            ru: 'Азот (N)',
            en: 'Nitrogen (N)',
            cn: '氮 (N)'
          },
          percentage: '20%'
        },
        {
          name: {
            ru: 'Фосфор (P₂O₅)',
            en: 'Phosphorus (P₂O₅)',
            cn: '磷 (P₂O₅)'
          },
          percentage: '20%'
        },
        {
          name: {
            ru: 'Сера (S)',
            en: 'Sulfur (S)',
            cn: '硫 (S)'
          },
          percentage: '14%'
        }
      ]
    },
    physicalProperties: {
      appearance: {
        ru: 'Гранулы светло-серого цвета',
        en: 'Light gray granules',
        cn: '浅灰色颗粒'
      },
      solubility: {
        ru: 'Хорошо растворим в воде',
        en: 'Highly soluble in water',
        cn: '易溶于水'
      }
    },
    applications: {
      ru: [
        'Основное внесение под все культуры',
        'Особенно эффективен для масличных культур',
        'Применение на почвах с дефицитом серы'
      ],
      en: [
        'Basic application for all crops',
        'Especially effective for oilseed crops',
        'Application on sulfur-deficient soils'
      ],
      cn: [
        '适用于所有作物的基础施肥',
        '特别适用于油料作物',
        '缺硫土壤施用'
      ]
    },
    category: {
      ru: 'Фосфорные удобрения',
      en: 'Phosphate fertilizers',
      cn: '磷肥'
    }
  },
  {
    id: 'sulfoammophos-16-20-12',
    name: {
      ru: 'Сульфоаммофос NP(S) 16:20(12)',
      en: 'Sulfoammophos NP(S) 16:20(12)',
      cn: '硫磷铵 NP(S) 16:20(12)'
    },
    description: {
      ru: 'Комплексное удобрение с пониженным содержанием азота и повышенным содержанием фосфора и серы.',
      en: 'Complex fertilizer with reduced nitrogen content and increased phosphorus and sulfur content.',
      cn: '低氮高磷硫复合肥料。'
    },
    imageUrl: 'https://images.pexels.com/photos/5560041/pexels-photo-5560041.jpeg',
    chemicalProperties: {
      composition: [
        {
          name: {
            ru: 'Азот (N)',
            en: 'Nitrogen (N)',
            cn: '氮 (N)'
          },
          percentage: '16%'
        },
        {
          name: {
            ru: 'Фосфор (P₂O₅)',
            en: 'Phosphorus (P₂O₅)',
            cn: '磷 (P₂O₅)'
          },
          percentage: '20%'
        },
        {
          name: {
            ru: 'Сера (S)',
            en: 'Sulfur (S)',
            cn: '硫 (S)'
          },
          percentage: '12%'
        }
      ]
    },
    physicalProperties: {
      appearance: {
        ru: 'Гранулы серого цвета',
        en: 'Gray granules',
        cn: '灰色颗粒'
      },
      solubility: {
        ru: 'Хорошо растворим в воде',
        en: 'Highly soluble in water',
        cn: '易溶于水'
      }
    },
    applications: {
      ru: [
        'Основное внесение под все культуры',
        'Эффективен для зерновых культур',
        'Применение на серосодержащих почвах'
      ],
      en: [
        'Basic application for all crops',
        'Effective for grain crops',
        'Application on sulfur-containing soils'
      ],
      cn: [
        '适用于所有作物的基础施肥',
        '适用于谷物作物',
        '含硫土壤施用'
      ]
    },
    category: {
      ru: 'Фосфорные удобрения',
      en: 'Phosphate fertilizers',
      cn: '磷肥'
    }
  },
  {
    id: 'liquid-fertilizer-n32',
    name: {
      ru: 'КАС (N32)',
      en: 'UAN (N32)',
      cn: '碳铵溶液 (N32)'
    },
    description: {
      ru: 'Жидкое азотное удобрение с тремя формами азота для эффективного питания растений.',
      en: 'Liquid nitrogen fertilizer with three forms of nitrogen for effective plant nutrition.',
      cn: '含三种形态氮的液体氮肥，用于有效的植物营养。'
    },
    imageUrl: 'https://images.pexels.com/photos/5560042/pexels-photo-5560042.jpeg',
    chemicalProperties: {
      composition: [
        {
          name: {
            ru: 'Азот (N)',
            en: 'Nitrogen (N)',
            cn: '氮 (N)'
          },
          percentage: '32%'
        }
      ]
    },
    physicalProperties: {
      appearance: {
        ru: 'Прозрачная жидкость',
        en: 'Clear liquid',
        cn: '透明液体'
      },
      solubility: {
        ru: 'Жидкая форма',
        en: 'Liquid form',
        cn: '液体形态'
      }
    },
    applications: {
      ru: [
        'Корневая подкормка',
        'Внекорневая подкормка',
        'Применение через системы орошения'
      ],
      en: [
        'Root feeding',
        'Foliar feeding',
        'Application through irrigation systems'
      ],
      cn: [
        '根部追肥',
        '叶面施肥',
        '通过灌溉系统施用'
      ]
    },
    category: {
      ru: 'Жидкие удобрения',
      en: 'Liquid fertilizers',
      cn: '液体肥料'
    }
  },
  {
    id: 'liquid-fertilizer-n11p37',
    name: {
      ru: 'ЖКУ (N11P37)',
      en: 'Liquid Complex Fertilizer (N11P37)',
      cn: '液体复合肥料 (N11P37)'
    },
    description: {
      ru: 'Жидкое комплексное удобрение с высоким содержанием фосфора для эффективного питания растений.',
      en: 'Liquid complex fertilizer with high phosphorus content for effective plant nutrition.',
      cn: '高磷含量的液体复合肥料，用于有效的植物营养。'
    },
    imageUrl: 'https://images.pexels.com/photos/5560043/pexels-photo-5560043.jpeg',
    chemicalProperties: {
      composition: [
        {
          name: {
            ru: 'Азот (N)',
            en: 'Nitrogen (N)',
            cn: '氮 (N)'
          },
          percentage: '11%'
        },
        {
          name: {
            ru: 'Фосфор (P₂O₅)',
            en: 'Phosphorus (P₂O₅)',
            cn: '磷 (P₂O₅)'
          },
          percentage: '37%'
        }
      ]
    },
    physicalProperties: {
      appearance: {
        ru: 'Прозрачная жидкость',
        en: 'Clear liquid',
        cn: '透明液体'
      },
      solubility: {
        ru: 'Жидкая форма',
        en: 'Liquid form',
        cn: '液体形态'
      }
    },
    applications: {
      ru: [
        'Корневая подкормка',
        'Внекорневая подкормка',
        'Капельное орошение'
      ],
      en: [
        'Root feeding',
        'Foliar feeding',
        'Drip irrigation'
      ],
      cn: [
        '根部追肥',
        '叶面施肥',
        '滴灌'
      ]
    },
    category: {
      ru: 'Жидкие удобрения',
      en: 'Liquid fertilizers',
      cn: '液体肥料'
    }
  },
  {
    id: 'mixed-fertilizers',
    name: {
      ru: 'Смешанные удобрения (тукосмеси)',
      en: 'Mixed Fertilizers',
      cn: '混合肥料'
    },
    description: {
      ru: 'Индивидуально подобранные смеси различных видов удобрений для конкретных культур и почвенных условий.',
      en: 'Individually selected mixtures of various fertilizer types for specific crops and soil conditions.',
      cn: '针对特定作物和土壤条件的个性化肥料混合物。'
    },
    imageUrl: 'https://images.pexels.com/photos/5560044/pexels-photo-5560044.jpeg',
    chemicalProperties: {
      composition: [
        {
          name: {
            ru: 'Состав варьируется',
            en: 'Composition varies',
            cn: '成分可变'
          },
          percentage: '100%'
        }
      ]
    },
    physicalProperties: {
      appearance: {
        ru: 'Смесь гранул различного цвета',
        en: 'Mixture of granules of various colors',
        cn: '不同颜色的颗粒混合物'
      },
      solubility: {
        ru: 'Зависит от состава',
        en: 'Depends on composition',
        cn: '取决于成分'
      }
    },
    applications: {
      ru: [
        'Индивидуальное применение',
        'Основное внесение',
        'Подкормка растений'
      ],
      en: [
        'Individual application',
        'Basic application',
        'Plant feeding'
      ],
      cn: [
        '个性化施用',
        '基础施肥',
        '植物追肥'
      ]
    },
    category: {
      ru: 'Тукосмеси',
      en: 'Fertilizer mixtures',
      cn: '肥料混合物'
    }
  },
  {
    id: 'magnesium-sulfate',
    name: {
      ru: 'Сульфат магния',
      en: 'Magnesium Sulfate',
      cn: '硫酸镁'
    },
    description: {
      ru: 'Водорастворимое удобрение, содержащее магний и серу в легкоусвояемой форме.',
      en: 'Water-soluble fertilizer containing magnesium and sulfur in easily absorbable form.',
      cn: '含易吸收形态镁和硫的水溶性肥料。'
    },
    imageUrl: 'https://images.pexels.com/photos/5560045/pexels-photo-5560045.jpeg',
    chemicalProperties: {
      formula: 'MgSO4·7H2O',
      composition: [
        {
          name: {
            ru: 'Магний (MgO)',
            en: 'Magnesium (MgO)',
            cn: '镁 (MgO)'
          },
          percentage: '16%'
        },
        {
          name: {
            ru: 'Сера (S)',
            en: 'Sulfur (S)',
            cn: '硫 (S)'
          },
          percentage: '13%'
        }
      ]
    },
    physicalProperties: {
      appearance: {
        ru: 'Белые кристаллы',
        en: 'White crystals',
        cn: '白色晶体'
      },
      solubility: {
        ru: 'Хорошо растворим в воде',
        en: 'Highly soluble in water',
        cn: '易溶于水'
      }
    },
    applications: {
      ru: [
        'Внекорневая подкормка',
        'Корневая подкормка',
        'Применение в защищенном грунте'
      ],
      en: [
        'Foliar feeding',
        'Root feeding',
        'Application in protected soil'
      ],
      cn: [
        '叶面施肥',
        '根部追肥',
        '保护地栽培施用'
      ]
    },
    category: {
      ru: 'Мезо- и микроэлементы',
      en: 'Meso and microelements',
      cn: '中量元素和微量元素'
    }
  },
  {
    id: 'magnesium-oxide',
    name: {
      ru: 'Оксид магния',
      en: 'Magnesium Oxide',
      cn: '氧化镁'
    },
    description: {
      ru: 'Магниевое удобрение с высокой концентрацией магния для длительного действия.',
      en: 'Magnesium fertilizer with high magnesium concentration for long-lasting effect.',
      cn: '高镁含量的长效镁肥。'
    },
    imageUrl: 'https://images.pexels.com/photos/5560046/pexels-photo-5560046.jpeg',
    chemicalProperties: {
      formula: 'MgO',
      composition: [
        {
          name: {
            ru: 'Магний (MgO)',
            en: 'Magnesium (MgO)',
            cn: '镁 (MgO)'
          },
          percentage: '85%'
        }
      ]
    },
    physicalProperties: {
      appearance: {
        ru: 'Белый порошок',
        en: 'White powder',
        cn: '白色粉末'
      },
      solubility: {
        ru: 'Слабо растворим в воде',
        en: 'Slightly soluble in water',
        cn: '微溶于水'
      }
    },
    applications: {
      ru: [
        'Основное внесение',
        'Известкование кислых почв',
        'Длительное действие'
      ],
      en: [
        'Basic application',
        'Liming of acidic soils',
        'Long-term effect'
      ],
      cn: [
        '基础施肥',
        '酸性土壤石灰化',
        '长效作用'
      ]
    },
    category: {
      ru: 'Мезо- и микроэлементы',
      en: 'Meso and microelements',
      cn: '中量元素和微量元素'
    }
  },
  {
    id: 'agromag',
    name: {
      ru: 'Агромаг',
      en: 'Agromag',
      cn: '农用镁肥'
    },
    description: {
      ru: 'Комплексное магниевое удобрение для профилактики и устранения дефицита магния у растений.',
      en: 'Complex magnesium fertilizer for prevention and elimination of magnesium deficiency in plants.',
      cn: '用于预防和消除植物缺镁的复合镁肥。'
    },
    imageUrl: 'https://images.pexels.com/photos/5560047/pexels-photo-5560047.jpeg',
    chemicalProperties: {
      composition: [
        {
          name: {
            ru: 'Магний (MgO)',
            en: 'Magnesium (MgO)',
            cn: '镁 (MgO)'
          },
          percentage: '35%'
        }
      ]
    },
    physicalProperties: {
      appearance: {
        ru: 'Гранулы светло-серого цвета',
        en: 'Light gray granules',
        cn: '浅灰色颗粒'
      },
      solubility: {
        ru: 'Умеренно растворим в воде',
        en: 'Moderately soluble in water',
        cn: '中等溶解度'
      }
    },
    applications: {
      ru: [
        'Основное внесение',
        'Корневая подкормка',
        'Профилактика дефицита магния'
      ],
      en: [
        'Basic application',
        'Root feeding',
        'Prevention of magnesium deficiency'
      ],
      cn: [
        '基础施肥',
        '根部追肥',
        '预防缺镁'
      ]
    },
    category: {
      ru: 'Мезо- и микроэлементы',
      en: 'Meso and microelements',
      cn: '中量元素和微量元素'
    }
  }
];

export { products }