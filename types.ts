
export interface Plan {
  name: string;
  price: string;
  priceDetails?: string;
  features: (string | { feature: string; tooltip: string })[];
  isPopular?: boolean;
  note?: string;
}

export interface ServiceTab {
  tabName: string;
  plans: Plan[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  tabs?: ServiceTab[];
  plans?: Plan[];
  faqs?: FAQ[];
}
