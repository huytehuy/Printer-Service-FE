import { Vehicle } from '~/features/monitor/types';

enum VehicleStatus {
  Running = 0,
  Shutdown = 1,
  Stop = 2,
  OverSpeed = 3,
  Warning = 4,
  LostGPRS = 5,
  LostGPS = 6,
}

export const ConvertVehicleStatus = (vehicle: Vehicle) => {
  const {
    acc,
    speed,
    satellite: GPS,
    x,
    y,
    roadSpeed,
    maxSpeed,
    gpsTime,
  } = vehicle;
  const currentTime = Date.parse(new Date().toString()) / 1000;
  let status;

  if (acc === 1 && speed > 2) {
    status = VehicleStatus.Running;
    //shut down lack stopTime
  } else if (acc === 1 && speed === 0) {
    status = VehicleStatus.Stop;
  } else if (
    acc === 1 &&
    speed > 0 &&
    (speed >= maxSpeed || speed >= roadSpeed)
  ) {
    status = VehicleStatus.OverSpeed;
    // warning lack SOS
  } else if (currentTime - gpsTime >= 900) {
    status = VehicleStatus.LostGPRS;
  } else if (GPS === 0 && x === 0 && y === 0) {
    status = VehicleStatus.LostGPS;
  } else {
    status = VehicleStatus.LostGPRS;
  }

  return { ...vehicle, status };
};
