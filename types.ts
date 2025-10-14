
export interface Plan {
  name: string;
  price: string;
  priceDetails?: string;
  features: string[];
  isPopular?: boolean;
  note?: string;
}

export interface ServiceTab {
  tabName: string;
  plans: Plan[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  tabs?: ServiceTab[];
  plans?: Plan[];
}
