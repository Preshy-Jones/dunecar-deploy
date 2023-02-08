export interface Car {
  _id: string;
  year: string;
  images: string[];
  createdAt: Date;
  name: string;
  title: string;
  description: string;
  model: string;
  make: string;
  milleage: number;
  price: number;
  installment: number;
}

export interface CarModel {
  _id: string;
  title: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CarMake {
  _id: string;
  title: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}
