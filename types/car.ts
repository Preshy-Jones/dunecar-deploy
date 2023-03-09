export interface Car {
  _id: string;
  year: string;
  images: string[];
  createdAt: Date;
  name: string;
  title: string;
  description: string;
  model: CarModel;
  make: CarMake;
  milleage: number;
  price: number;
  installment: number;
  carFeatures: {
    feature: {
      title: string;
      category: string;
    };
    installedUpgrade: boolean;
  }[];
}

export interface CarModels {
  _id: string;
  make_name: string;
  models: CarModel[];
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
export type CarModel = {
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
