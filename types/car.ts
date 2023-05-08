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
  mileage: number;
  price: number;
  installment: number;
  performance: any;
  measurement: any;
  carFeatures: {
    feature: {
      title: string;
      category: string;
    };
    installedUpgrade: boolean;
  }[];
  vehicle_condition: string;
  media: {
    gallery: {
      frontPassenger: string;
      front: string;
      frontDriver: string;
      driverProfile: string;
      rearDriver: string;
      rear: string;
      rearPassenger: string;
      passengerProfile: string;
      dashBoard: string;
      frontDriverCompartment: string;
      steeringWheelAndInstrumentCluster: string;
      keys: string;
      trunkCargo: string;
      radio: string;
      driverRearCompartment: string;
      shifter: string;
      climateControls: string;
      driverAccessControls: string;
      driverDoorPanel: string;
      usbAuxPorts: string;
    };
    exterior360: string;
    interior360: string;
    openDoor360: string;
  };
}

export type FieldData = {
  _id: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
};

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
  // slug: string;
  createdAt: Date;
  updatedAt: Date;
};

export type CarModel = {
  _id: string;
  title: string;
  // slug: string;
  createdAt: Date;
  updatedAt: Date;
};

export type CarBodyType = {
  _id: string;
  title: string;
  slug: string;
};

export type CarPayload = {
  page: string;
  perPage: string;
  filters: FilterOptionsInterface;
};

export type BodyTypesPayload = {
  makes?: string[];
  models?: string[];
};

export type Feature = {
  _id: string;
  title: string;
  category: string;
  slug: string;
};

export type FilterOptionsInterface = {
  make?: string[];
  model?: string[];
  body_type?: string[];
  body_style?: string[];
  fuel_type?: string[];
  year_from?: number;
  year_to?: number;
  price_from?: number;
  price_to?: number;
  milleage?: number;
  exterior_color?: string[];
  interior_color?: string[];
  features?: string[];
  transmission?: string[];
  trim?: String[];
  series?: String[];
  packages?: String[];
  location?: string[];
  vehicle_condition?: string[];
  cylinder_count?: string[];
  mpg_highway?: string;
};

export type FilterPayload = {
  key?: string;
  group_by: string;
  filters: FilterOptionsInterface;
};
