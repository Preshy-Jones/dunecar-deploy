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
  make_name: string;
  models: {
    title: string;
    slug: string;
  }[];
  createdAt: Date;
  updatedAt: Date;
}

export type CarMake = {
  _id: string;
  title: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
};

export type CarBodyType = {
  _id: string;
  title: string;
  slug: string;
};

export type CarPayload = {
  models?: string[];
  makes?: string[];
  body_types?: string[];
  limit?: string;
};

export type BodyTypesPayload = {
  makes?: string[];
  models?: string[];
};
