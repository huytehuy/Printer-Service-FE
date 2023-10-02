import { Position } from 'geojson';

export const convertCoordinatesToString = (
  coordinates: Position[] | Position[][]
) => {
  const result = coordinates
    .map((coords) => {
      if (coords[0] && Array.isArray(coords[0])) {
        // Polygon coordinates
        return (coords as Position[])
          .map(([lng, lat]) => `${lng * 10e6},${lat * 10e6}`)
          .join(';');
      } else {
        // Polyline coordinates
        const [lng, lat] = coords as Position;
        return `${lng * 10e6},${lat * 10e6}`;
      }
    })
    .join(';');
  return result;
};

export function convertStringtoCoordinates(coors: string): Position[] {
  return coors.split(';').map((coor) => {
    const [lng, lat] = coor.split(',');

    return [Number(lng) / 10e6, Number(lat) / 10e6];
  });
}
