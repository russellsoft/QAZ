import { Product } from '../types';

export const products: Product[] = [
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
      ru: 'Хлористый калий',
      en: 'Potassium Chloride',
      cn: '氯化钾'
    },
    description: {
      ru: 'Концентрированное калийное удобрение, применяемое на всех типах почв под различные сельскохозяйственные культуры.',
      en: 'Concentrated potassium fertilizer used on all soil types for various agricultural crops.',
      cn: '浓缩钾肥，适用于各种土壤类型和农作物。'
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
        ru: 'Кристаллы розового или белого цвета',
        en: 'Pink or white crystals',
        cn: '粉红色或白色晶体'
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
    id: 'potassium-sulfate',
    name: {
      ru: 'Сульфат калия',
      en: 'Potassium Sulfate',
      cn: '硫酸钾'
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
    id: 'npk-complex',
    name: {
      ru: 'NPK комплексное',
      en: 'NPK Complex',
      cn: 'NPK复合肥'
    },
    description: {
      ru: 'Комплексное минеральное удобрение, содержащее три основных элемента питания: азот, фосфор и калий.',
      en: 'Complex mineral fertilizer containing three main nutrients: nitrogen, phosphorus, and potassium.',
      cn: '含氮、磷、钾三种主要营养元素的复合矿物肥料。'
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
          percentage: '16%'
        },
        {
          name: {
            ru: 'Фосфор (P₂O₅)',
            en: 'Phosphorus (P₂O₅)',
            cn: '磷 (P₂O₅)'
          },
          percentage: '16%'
        },
        {
          name: {
            ru: 'Калий (K₂O)',
            en: 'Potassium (K₂O)',
            cn: '钾 (K₂O)'
          },
          percentage: '16%'
        }
      ]
    },
    physicalProperties: {
      appearance: {
        ru: 'Гранулы различных цветов',
        en: 'Granules of various colors',
        cn: '不同颜色的颗粒'
      },
      solubility: {
        ru: 'Хорошо растворим в воде',
        en: 'Highly soluble in water',
        cn: '易溶于水'
      }
    },
    applications: {
      ru: [
        'Универсальное применение для всех культур',
        'Основное внесение и подкормка',
        'Особенно эффективно для овощных культур'
      ],
      en: [
        'Universal application for all crops',
        'Basic application and feeding',
        'Especially effective for vegetable crops'
      ],
      cn: [
        '适用于所有作物的通用肥料',
        '基础施肥和追肥',
        '特别适用于蔬菜作物'
      ]
    },
    category: {
      ru: 'Комплексные удобрения',
      en: 'Complex fertilizers',
      cn: '复合肥料'
    }
  },
  {
    id: 'superphosphate',
    name: {
      ru: 'Суперфосфат',
      en: 'Superphosphate',
      cn: '过磷酸钙'
    },
    description: {
      ru: 'Фосфорное удобрение, содержащее также серу и кальций в доступной для растений форме.',
      en: 'Phosphate fertilizer that also contains sulfur and calcium in a plant-available form.',
      cn: '含有植物可利用形态硫和钙的磷肥。'
    },
    imageUrl: 'https://images.pexels.com/photos/5560032/pexels-photo-5560032.jpeg',
    chemicalProperties: {
      formula: 'Ca(H2PO4)2',
      composition: [
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
            ru: 'Кальций (CaO)',
            en: 'Calcium (CaO)',
            cn: '钙 (CaO)'
          },
          percentage: '25%'
        }
      ]
    },
    physicalProperties: {
      appearance: {
        ru: 'Серые гранулы или порошок',
        en: 'Gray granules or powder',
        cn: '灰色颗粒或粉末'
      },
      solubility: {
        ru: 'Частично растворим в воде',
        en: 'Partially soluble in water',
        cn: '部分溶于水'
      }
    },
    applications: {
      ru: [
        'Основное внесение под все культуры',
        'Особенно эффективен на кислых почвах',
        'Применяется для корневой подкормки'
      ],
      en: [
        'Basic application for all crops',
        'Especially effective on acidic soils',
        'Used for root feeding'
      ],
      cn: [
        '适用于所有作物的基础施肥',
        '特别适用于酸性土壤',
        '用于根部施肥'
      ]
    },
    category: {
      ru: 'Фосфорные удобрения',
      en: 'Phosphate fertilizers',
      cn: '磷肥'
    }
  },
  {
    id: 'calcium-nitrate',
    name: {
      ru: 'Кальциевая селитра',
      en: 'Calcium Nitrate',
      cn: '硝酸钙'
    },
    description: {
      ru: 'Азотно-кальциевое удобрение, особенно эффективное для культур, требовательных к кальцию.',
      en: 'Nitrogen-calcium fertilizer, especially effective for calcium-demanding crops.',
      cn: '氮钙肥料，特别适用于需钙量大的作物。'
    },
    imageUrl: 'https://images.pexels.com/photos/5560033/pexels-photo-5560033.jpeg',
    chemicalProperties: {
      formula: 'Ca(NO3)2',
      composition: [
        {
          name: {
            ru: 'Азот (N)',
            en: 'Nitrogen (N)',
            cn: '氮 (N)'
          },
          percentage: '15.5%'
        },
        {
          name: {
            ru: 'Кальций (CaO)',
            en: 'Calcium (CaO)',
            cn: '钙 (CaO)'
          },
          percentage: '26%'
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
        ru: 'Легко растворим в воде',
        en: 'Easily soluble in water',
        cn: '易溶于水'
      }
    },
    applications: {
      ru: [
        'Подкормка овощных и плодовых культур',
        'Применение в защищенном грунте',
        'Внекорневая подкормка'
      ],
      en: [
        'Feeding vegetable and fruit crops',
        'Application in protected soil',
        'Foliar feeding'
      ],
      cn: [
        '蔬菜和水果作物施肥',
        '保护地栽培施用',
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
    id: 'npk-16-16-16',
    name: {
      ru: 'Нитроаммофоска (16.16.16)',
      en: 'NPK Fertilizer (16.16.16)',
      cn: '复合肥 (16.16.16)'
    },
    description: {
      ru: 'Сбалансированное комплексное удобрение с равным содержанием азота, фосфора и калия.',
      en: 'Balanced complex fertilizer with equal content of nitrogen, phosphorus, and potassium.',
      cn: '氮、磷、钾含量均衡的复合肥料。'
    },
    imageUrl: 'https://images.pexels.com/photos/5560034/pexels-photo-5560034.jpeg',
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
          percentage: '16%'
        },
        {
          name: {
            ru: 'Калий (K₂O)',
            en: 'Potassium (K₂O)',
            cn: '钾 (K₂O)'
          },
          percentage: '16%'
        }
      ]
    },
    physicalProperties: {
      appearance: {
        ru: 'Гранулы серого или светло-розового цвета',
        en: 'Gray or light pink granules',
        cn: '灰色或浅粉色颗粒'
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
      ru: 'Комплексные удобрения',
      en: 'Complex fertilizers',
      cn: '复合肥料'
    }
  },
  {
    id: 'npk-16-16-8',
    name: {
      ru: 'Нитроаммофоска (16.16.8)',
      en: 'NPK Fertilizer (16.16.8)',
      cn: '复合肥 (16.16.8)'
    },
    description: {
      ru: 'Комплексное удобрение с повышенным содержанием азота и фосфора относительно калия.',
      en: 'Complex fertilizer with increased nitrogen and phosphorus content relative to potassium.',
      cn: '相对于钾含量，氮和磷含量较高的复合肥料。'
    },
    imageUrl: 'https://images.pexels.com/photos/5560035/pexels-photo-5560035.jpeg',
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
          percentage: '16%'
        },
        {
          name: {
            ru: 'Калий (K₂O)',
            en: 'Potassium (K₂O)',
            cn: '钾 (K₂O)'
          },
          percentage: '8%'
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
        'Особенно эффективно для зерновых культур',
        'Подкормка в начальные фазы роста'
      ],
      en: [
        'Basic application for all crops',
        'Especially effective for grain crops',
        'Feeding in initial growth phases'
      ],
      cn: [
        '适用于所有作物的基础施肥',
        '特别适用于谷物作物',
        '生长初期追肥'
      ]
    },
    category: {
      ru: 'Комплексные удобрения',
      en: 'Complex fertilizers',
      cn: '复合肥料'
    }
  },
  {
    id: 'npk-13-13-24',
    name: {
      ru: 'Нитроаммофоска (13.13.24)',
      en: 'NPK Fertilizer (13.13.24)',
      cn: '复合肥 (13.13.24)'
    },
    description: {
      ru: 'Комплексное удобрение с повышенным содержанием калия для культур, требовательных к калийному питанию.',
      en: 'Complex fertilizer with increased potassium content for crops demanding in potassium nutrition.',
      cn: '适用于需钾量大的作物的高钾复合肥料。'
    },
    imageUrl: 'https://images.pexels.com/photos/5560036/pexels-photo-5560036.jpeg',
    chemicalProperties: {
      composition: [
        {
          name: {
            ru: 'Азот (N)',
            en: 'Nitrogen (N)',
            cn: '氮 (N)'
          },
          percentage: '13%'
        },
        {
          name: {
            ru: 'Фосфор (P₂O₅)',
            en: 'Phosphorus (P₂O₅)',
            cn: '磷 (P₂O₅)'
          },
          percentage: '13%'
        },
        {
          name: {
            ru: 'Калий (K₂O)',
            en: 'Potassium (K₂O)',
            cn: '钾 (K₂O)'
          },
          percentage: '24%'
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
        'Основное внесение под картофель и овощные культуры',
        'Подкормка плодовых культур',
        'Применение на легких почвах'
      ],
      en: [
        'Basic application for potatoes and vegetable crops',
        'Feeding fruit crops',
        'Application on light soils'
      ],
      cn: [
        '马铃薯和蔬菜作物基础施肥',
        '果树追肥',
        '轻质土壤施用'
      ]
    },
    category: {
      ru: 'Комплексные удобрения',
      en: 'Complex fertilizers',
      cn: '复合肥料'
    }
  },
  {
    id: 'npk-20-10-10-4s',
    name: {
      ru: 'Нитроаммофоска (20.10.10+4S)',
      en: 'NPK Fertilizer (20.10.10+4S)',
      cn: '复合肥 (20.10.10+4S)'
    },
    description: {
      ru: 'Комплексное удобрение с повышенным содержанием азота и добавлением серы.',
      en: 'Complex fertilizer with increased nitrogen content and added sulfur.',
      cn: '高氮含量并添加硫的复合肥料。'
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
          percentage: '20%'
        },
        {
          name: {
            ru: 'Фосфор (P₂O₅)',
            en: 'Phosphorus (P₂O₅)',
            cn: '磷 (P₂O₅)'
          },
          percentage: '10%'
        },
        {
          name: {
            ru: 'Калий (K₂O)',
            en: 'Potassium (K₂O)',
            cn: '钾 (K₂O)'
          },
          percentage: '10%'
        },
        {
          name: {
            ru: 'Сера (S)',
            en: 'Sulfur (S)',
            cn: '硫 (S)'
          },
          percentage: '4%'
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
        'Основное внесение под зерновые культуры',
        'Подкормка технических культур',
        'Применение на почвах с дефицитом серы'
      ],
      en: [
        'Basic application for grain crops',
        'Feeding industrial crops',
        'Application on sulfur-deficient soils'
      ],
      cn: [
        '谷物作物基础施肥',
        '工业作物追肥',
        '缺硫土壤施用'
      ]
    },
    category: {
      ru: 'Комплексные удобрения',
      en: 'Complex fertilizers',
      cn: '复合肥料'
    }
  },
  {
    id: 'dap-10-26-26',
    name: {
      ru: 'Диаммофоска (10.26.26)',
      en: 'Diammonium Phosphate (10.26.26)',
      cn: '磷酸二铵 (10.26.26)'
    },
    description: {
      ru: 'Комплексное удобрение с высоким содержанием фосфора и калия для интенсивного питания растений.',
      en: 'Complex fertilizer with high phosphorus and potassium content for intensive plant nutrition.',
      cn: '高磷高钾复合肥料，用于作物集约营养。'
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
          percentage: '26%'
        },
        {
          name: {
            ru: 'Калий (K₂O)',
            en: 'Potassium (K₂O)',
            cn: '钾 (K₂O)'
          },
          percentage: '26%'
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
        'Особенно эффективно для корнеплодов',
        'Подкормка плодовых культур'
      ],
      en: [
        'Basic application for all crops',
        'Especially effective for root crops',
        'Feeding fruit crops'
      ],
      cn: [
        '适用于所有作物的基础施肥',
        '特别适用于根茎作物',
        '果树追肥'
      ]
    },
    category: {
      ru: 'Комплексные удобрения',
      en: 'Complex fertilizers',
      cn: '复合肥料'
    }
  },
  {
    id: 'npk-8-20-30-2s',
    name: {
      ru: '8.20.30+2S',
      en: '8.20.30+2S',
      cn: '8.20.30+2S'
    },
    description: {
      ru: 'Комплексное удобрение с высоким содержанием калия и фосфора, дополненное серой.',
      en: 'Complex fertilizer with high potassium and phosphorus content, supplemented with sulfur.',
      cn: '高钾高磷复合肥料，添加硫。'
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
          percentage: '8%'
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
            ru: 'Калий (K₂O)',
            en: 'Potassium (K₂O)',
            cn: '钾 (K₂O)'
          },
          percentage: '30%'
        },
        {
          name: {
            ru: 'Сера (S)',
            en: 'Sulfur (S)',
            cn: '硫 (S)'
          },
          percentage: '2%'
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
      ru: 'Комплексные удобрения',
      en: 'Complex fertilizers',
      cn: '复合肥料'
    }
  },
  {
    id: 'npk-10-20-20-s',
    name: {
      ru: '10.20.20+S',
      en: '10.20.20+S',
      cn: '10.20.20+S'
    },
    description: {
      ru: 'Сбалансированное комплексное удобрение с повышенным содержанием фосфора и калия, обогащенное серой.',
      en: 'Balanced complex fertilizer with increased phosphorus and potassium content, enriched with sulfur.',
      cn: '磷钾含量较高的均衡复合肥料，富含硫。'
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
          percentage: '10%'
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
            ru: 'Калий (K₂O)',
            en: 'Potassium (K₂O)',
            cn: '钾 (K₂O)'
          },
          percentage: '20%'
        },
        {
          name: {
            ru: 'Сера (S)',
            en: 'Sulfur (S)',
            cn: '硫 (S)'
          },
          percentage: '5%'
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
        'Основное внесение под технические культуры',
        'Подкормка овощных культур',
        'Применение на серосодержащих почвах'
      ],
      en: [
        'Basic application for industrial crops',
        'Feeding vegetable crops',
        'Application on sulfur-containing soils'
      ],
      cn: [
        '工业作物基础施肥',
        '蔬菜作物追肥',
        '含硫土壤施用'
      ]
    },
    category: {
      ru: 'Комплексные удобрения',
      en: 'Complex fertilizers',
      cn: '复合肥料'
    }
  },
  {
    id: 'npk-15-15-15-10s',
    name: {
      ru: '15.15.15+10S',
      en: '15.15.15+10S',
      cn: '15.15.15+10S'
    },
    description: {
      ru: 'Сбалансированное комплексное удобрение с высоким содержанием серы для интенсивного питания растений.',
      en: 'Balanced complex fertilizer with high sulfur content for intensive plant nutrition.',
      cn: '高硫含量的均衡复合肥料，用于作物集约营养。'
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
          percentage: '15%'
        },
        {
          name: {
            ru: 'Фосфор (P₂O₅)',
            en: 'Phosphorus (P₂O₅)',
            cn: '磷 (P₂O₅)'
          },
          percentage: '15%'
        },
        {
          name: {
            ru: 'Калий (K₂O)',
            en: 'Potassium (K₂O)',
            cn: '钾 (K₂O)'
          },
          percentage: '15%'
        },
        {
          name: {
            ru: 'Сера (S)',
            en: 'Sulfur (S)',
            cn: '硫 (S)'
          },
          percentage: '10%'
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
        'Основное внесение под масличные культуры',
        'Подкормка крестоцветных культур',
        'Применение на почвах с дефицитом серы'
      ],
      en: [
        'Basic application for oilseed crops',
        'Feeding cruciferous crops',
        'Application on sulfur-deficient soils'
      ],
      cn: [
        '油料作物基础施肥',
        '十字花科作物追肥',
        '缺硫土壤施用'
      ]
    },
    category: {
      ru: 'Комплексные удобрения',
      en: 'Complex fertilizers',
      cn: '复合肥料'
    }
  },
  {
    id: 'npk-13-19-19-6s',
    name: {
      ru: '13.19.19+6S',
      en: '13.19.19+6S',
      cn: '13.19.19+6S'
    },
    description: {
      ru: 'Комплексное удобрение с повышенным содержанием фосфора и калия, дополненное серой.',
      en: 'Complex fertilizer with increased phosphorus and potassium content, supplemented with sulfur.',
      cn: '高磷高钾复合肥料，添加硫。'
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
          percentage: '13%'
        },
        {
          name: {
            ru: 'Фосфор (P₂O₅)',
            en: 'Phosphorus (P₂O₅)',
            cn: '磷 (P₂O₅)'
          },
          percentage: '19%'
        },
        {
          name: {
            ru: 'Калий (K₂O)',
            en: 'Potassium (K₂O)',
            cn: '钾 (K₂O)'
          },
          percentage: '19%'
        },
        {
          name: {
            ru: 'Сера (S)',
            en: 'Sulfur (S)',
            cn: '硫 (S)'
          },
          percentage: '6%'
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
        'Основное внесение под технические культуры',
        'Подкормка овощных культур',
        'Применение на почвах с дефицитом фосфора и калия'
      ],
      en: [
        'Basic application for industrial crops',
        'Feeding vegetable crops',
        'Application on phosphorus and potassium deficient soils'
      ],
      cn: [
        '工业作物基础施肥',
        '蔬菜作物追肥',
        '缺磷缺钾土壤施用'
      ]
    },
    category: {
      ru: 'Комплексные удобрения',
      en: 'Complex fertilizers',
      cn: '复合肥料'
    }
  },
  {
    id: 'npk-5-15-30-5s-7ca',
    name: {
      ru: '5.15.30+5S+7Ca',
      en: '5.15.30+5S+7Ca',
      cn: '5.15.30+5S+7Ca'
    },
    description: {
      ru: 'Комплексное удобрение с высоким содержанием калия, обогащенное серой и кальцием.',
      en: 'Complex fertilizer with high potassium content, enriched with sulfur and calcium.',
      cn: '高钾复合肥料，富含硫和钙。'
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
          percentage: '5%'
        },
        {
          name: {
            ru: 'Фосфор (P₂O₅)',
            en: 'Phosphorus (P₂O₅)',
            cn: '磷 (P₂O₅)'
          },
          percentage: '15%'
        },
        {
          name: {
            ru: 'Калий (K₂O)',
            en: 'Potassium (K₂O)',
            cn: '钾 (K₂O)'
          },
          percentage: '30%'
        },
        {
          name: {
            ru: 'Сера (S)',
            en: 'Sulfur (S)',
            cn: '硫 (S)'
          },
          percentage: '5%'
        },
        {
          name: {
            ru: 'Кальций (Ca)',
            en: 'Calcium (Ca)',
            cn: '钙 (Ca)'
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
        'Основное внесение под плодовые культуры',
        'Подкормка овощных культур',
        'Применение на кислых почвах'
      ],
      en: [
        'Basic application for fruit crops',
        'Feeding vegetable crops',
        'Application on acidic soils'
      ],
      cn: [
        '果树基础施肥',
        '蔬菜作物追肥',
        '酸性土壤施用'
      ]
    },
    category: {
      ru: 'Комплексные удобрения',
      en: 'Complex fertilizers',
      cn: '复合肥料'
    }
  },
  {
    id: 'npk-0-20-20-20ca-5s',
    name: {
      ru: '0.20.20+20Ca+5S',
      en: '0.20.20+20Ca+5S',
      cn: '0.20.20+20Ca+5S'
    },
    description: {
      ru: 'Бесазотное комплексное удобрение с высоким содержанием фосфора, калия и кальция.',
      en: 'Nitrogen-free complex fertilizer with high content of phosphorus, potassium, and calcium.',
      cn: '无氮复合肥料，高磷、钾、钙含量。'
    },
    imageUrl: 'https://images.pexels.com/photos/5560044/pexels-photo-5560044.jpeg',
    chemicalProperties: {
      composition: [
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
            ru: 'Калий (K₂O)',
            en: 'Potassium (K₂O)',
            cn: '钾 (K₂O)'
          },
          percentage: '20%'
        },
        {
          name: {
            ru: 'Кальций (Ca)',
            en: 'Calcium (Ca)',
            cn: '钙 (Ca)'
          },
          percentage: '20%'
        },
        {
          name: {
            ru: 'Сера (S)',
            en: 'Sulfur (S)',
            cn: '硫 (S)'
          },
          percentage: '5%'
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
        'Основное внесение под плодовые культуры',
        'Подкормка овощных культур',
        'Применение на кислых почвах с высоким содержанием азота'
      ],
      en: [
        'Basic application for fruit crops',
        'Feeding vegetable crops',
        'Application on acidic soils with high nitrogen content'
      ],
      cn: [
        '果树基础施肥',
        '蔬菜作物追肥',
        '高氮酸性土壤施用'
      ]
    },
    category: {
      ru: 'Комплексные удобрения',
      en: 'Complex fertilizers',
      cn: '复合肥料'
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
      ru: 'Комплексное калийно-фосфорное удобрение с высоким содержанием калия, особенно эффективное для культур с повышенной потребностью в калии.',
      en: 'Complex potassium-phosphorus fertilizer with high potassium content, especially effective for crops with increased potassium demand.',
      cn: '高钾含量的钾磷复合肥料，特别适用于高需钾作物。'
    },
    imageUrl: 'https://images.pexels.com/photos/5560045/pexels-photo-5560045.jpeg',
    chemicalProperties: {
      composition: [
        {
          name: {
            ru: 'Калий (K₂O)',
            en: 'Potassium (K₂O)',
            cn: '钾 (K₂O)'
          },
          percentage: '55%'
        },
        {
          name: {
            ru: 'Фосфор (P₂O₅)',
            en: 'Phosphorus (P₂O₅)',
            cn: '磷 (P₂O₅)'
          },
          percentage: '5%'
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
        'Особенно эффективно для корнеплодов и бахчевых культур',
        'Применение на почвах с дефицитом калия'
      ],
      en: [
        'Basic application for all crops',
        'Especially effective for root crops and melons',
        'Application on potassium-deficient soils'
      ],
      cn: [
        '适用于所有作物的基础施肥',
        '特别适用于根茎作物和甜瓜类',
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
      ru: 'Комплексное калийно-магниевое удобрение для культур с повышенной потребностью в калии и магнии.',
      en: 'Complex potassium-magnesium fertilizer for crops with increased demand for potassium and magnesium.',
      cn: '适用于高需钾和镁作物的钾镁复合肥料。'
    },
    imageUrl: 'https://images.pexels.com/photos/5560046/pexels-photo-5560046.jpeg',
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
        'Особенно эффективно для картофеля и овощных культур',
        'Применение на почвах с дефицитом магния'
      ],
      en: [
        'Basic application for all crops',
        'Especially effective for potatoes and vegetable crops',
        'Application on magnesium-deficient soils'
      ],
      cn: [
        '适用于所有作物的基础施肥',
        '特别适用于马铃薯和蔬菜作物',
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
    id: 'potassium-sulfate-granular',
    name: {
      ru: 'Калий сернокислый гранулированный',
      en: 'Granular Potassium Sulfate',
      cn: '颗粒硫酸钾'
    },
    description: {
      ru: 'Высококонцентрированное бесхлорное калийное удобрение с содержанием серы, особенно эффективное для культур, чувствительных к хлору.',
      en: 'Highly concentrated chlorine-free potassium fertilizer containing sulfur, especially effective for chlorine-sensitive crops.',
      cn: '高浓度无氯钾肥，含硫，特别适用于氯敏感作物。'
    },
    imageUrl: 'https://images.pexels.com/photos/5560047/pexels-photo-5560047.jpeg',
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
        'Основное внесение под чувствительные к хлору культуры',
        'Подкормка овощных и плодовых культур',
        'Применение в защищенном грунте'
      ],
      en: [
        'Basic application for chlorine-sensitive crops',
        'Feeding vegetable and fruit crops',
        'Application in protected soil'
      ],
      cn: [
        '氯敏感作物基础施肥',
        '蔬菜和水果作物追肥',
        '保护地栽培施用'
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
      ru: 'Высококонцентрированное калийное удобрение без хлора и серы, с щелочной реакцией.',
      en: 'Highly concentrated potassium fertilizer without chlorine and sulfur, with alkaline reaction.',
      cn: '高浓度无氯无硫钾肥，碱性反应。'
    },
    imageUrl: 'https://images.pexels.com/photos/5560048/pexels-photo-5560048.jpeg',
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
        ru: 'Белые кристаллы или гранулы',
        en: 'White crystals or granules',
        cn: '白色晶体或颗粒'
      },
      solubility: {
        ru: 'Очень хорошо растворим в воде',
        en: 'Very highly soluble in water',
        cn: '极易溶于水'
      }
    },
    applications: {
      ru: [
        'Применение на кислых почвах',
        'Подкормка овощных культур',
        'Особенно эффективен для культур, чувствительных к хлору и сере'
      ],
      en: [
        'Application on acidic soils',
        'Feeding vegetable crops',
        'Especially effective for crops sensitive to chlorine and sulfur'
      ],
      cn: [
        '酸性土壤施用',
        '蔬菜作物追肥',
        '特别适用于氯和硫敏感作物'
      ]
    },
    category: {
      ru: 'Калийные удобрения',
      en: 'Potassium fertilizers',
      cn: '钾肥'
    }
  }
];