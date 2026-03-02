export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface GymProgram {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}
