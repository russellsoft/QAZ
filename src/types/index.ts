export interface Product {
  id: string;
  name: {
    ru: string;
    en: string;
    cn: string;
  };
  description: {
    ru: string;
    en: string;
    cn: string;
  };
  imageUrl: string;
  chemicalProperties: {
    formula?: string;
    composition: {
      name: {
        ru: string;
        en: string;
        cn: string;
      };
      percentage: string;
    }[];
  };
  physicalProperties: {
    appearance: {
      ru: string;
      en: string;
      cn: string;
    };
    density?: string;
    solubility?: {
      ru: string;
      en: string;
      cn: string;
    };
  };
  applications: {
    ru: string[];
    en: string[];
    cn: string[];
  };
  category: {
    ru: string;
    en: string;
    cn: string;
  };
  subcategories?: {
    name: {
      ru: string;
      en: string;
      cn: string;
    };
    products: string[];
  }[];
}

export interface NewsItem {
  id: string;
  title: {
    ru: string;
    en: string;
    cn: string;
  };
  summary: {
    ru: string;
    en: string;
    cn: string;
  };
  content: {
    ru: string;
    en: string;
    cn: string;
  };
  imageUrl: string;
  date: string;
}

export interface Partner {
  id: string;
  name: {
    ru: string;
    en: string;
    cn: string;
  };
  logoUrl: string;
  website: string;
}

export type Language = 'ru' | 'en' | 'cn';