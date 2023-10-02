import { Position } from '~/Context/Types/latLng';

export function convertStringtoCoordinates(coors: string): Position[] {
  return coors.split(';').map((coor) => {
    const [lng, lat] = coor.split(',');

    return [Number(lng) / 10e6, Number(lat) / 10e6];
  });
}
