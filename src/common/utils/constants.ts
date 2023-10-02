import { LatLngExpression } from 'leaflet';

export const DEFAULT_CENTER: LatLngExpression = {
  lat: 10.757472,
  lng: 106.671611,
};

export const MAX_INT = 2147483647;

export enum TitleTab {
  Info = 'Info',
  Gallery = 'Gallery',
  Chart = 'Chart',
  List = 'List',
  Warning = 'Warning',
  Routing = 'Routing',
  Share = 'Share',
  Map = 'Map',
}
export enum CheckboxFilter {
  DriverName = 'driverName',
  Fuel = 'fuel',
  Temperature = 'temperature',
  Humidity = 'humidity',
  AirCondition = 'airCondition',
  Door = 'door',
  Collision = 'collision',
}
export enum ActionControlKey {
  VehicleGroup = 'VEHICLE-GROUP',
  StopOver2Hours = 'STOPOVER2HOURS',
  DriverUnlogin = 'DRIVER-UNLOGIN',
  VehicleOveSpeed = 'VEHICLE-OVER-SPEED',
  RoadOverSpeed = 'ROAD-OVER-SPEED',
  Driving4HConitnuous = 'DRIVING4H-CONTINUOUS',
  Driving10H = 'DRIVING10H',
  ListPoint = 'LIST-POINT',
  ListAreaRoad = 'LIST-AREA-ROAD',
  PointCenter = 'POINT-CENTER',
  Area = 'AREA',
  PointStation = 'POINT-STATION',
  Toll = 'TOLL',
}
