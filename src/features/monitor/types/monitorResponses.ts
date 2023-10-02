// import { CarStatus } from '.';

export interface Vehicle {
  id: string;
  customerId: string;
  customerName: string;
  vehicleGroupId: string;
  vehicleGroup: string;
  vehicleTypeId: string;
  vehicleType: string;
  plate: string;
  icon: string;
  maxSpeed: number;
  isLocked: boolean;
  gpsTime: number;
  x: number;
  y: number;
  heading: number;
  satellite: number;
  status: number;
  speed: number;
  averageSpeed: number;
  roadSpeed: number;
  speedometer: number;
  door: number;
  doorTime: number;
  airCondition: number;
  airConditionTime: number;
  collision: number;
  collisionTime: number;
  location: string;
  address: string;
  locationShareUrl: string;
  driver: Driver | null;
  sensors: any[];
  fuel: number;
  temperature: number;
  humidity: number;
  acc: number;
}

export interface Driver {
  driverId: string;
  driverName: null;
  driverPhone: string;
  license: null;
  licenseExpiration: number;
}

export type Sensor = {
  sensorId: string;
  sensorName: string;
  sensorType: number;
  sensorTypeName: string;
  sensorValue: number;
  time: number;
};

export type VehicleGroupTree = {
  vehicleGroupId: string;
  vehicleGroup: string;
  vehicles: Vehicle[];
};

export type VehicleGroup = {
  id: string;
  name: string;
  checked?: boolean;
};

export type LanguageResponse = {
  culture: string;
  translation: translation;
};

export type translation = {
  [key: string]: string;
};
