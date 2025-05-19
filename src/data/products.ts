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
      ru: 'Аммиачная селитра',
      en: 'Ammonium Nitrate',
      cn: '硝酸铵'
    },
    description: {
      ru: 'Универсальное азотное удобрение, подходящее для всех типов почв и сельскохозяйственных культур.',
      en: 'Universal nitrogen fertilizer suitable for all soil types and agricultural crops.',
      cn: '通用氮肥，适用于各种土壤类型和农作物。'
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
          percentage: '34.4%'
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
  }
];