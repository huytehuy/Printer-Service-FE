import { LeafletEventHandlerFnMap, Marker as LeafletMarker } from 'leaflet';
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import { Marker, MarkerProps } from 'react-leaflet';
import 'leaflet-rotatedmarker';

export interface RotatedMarkerProps
  extends MarkerProps,
    React.RefAttributes<LeafletMarker> {
  rotationAngle?: number;
  rotationOrigin?: string;
  eventHandlers?: LeafletEventHandlerFnMap | undefined;
}

// TODO check forward ref when mount
export const RotatedMarker = forwardRef<LeafletMarker, RotatedMarkerProps>(
  ({ children, ...props }, forwardRef) => {
    const markerRef = useRef<LeafletMarker | null>(null);
    const { rotationAngle, rotationOrigin } = props;

    useImperativeHandle(
      forwardRef,
      () => markerRef.current as LeafletMarker,
      []
    );

    useEffect(() => {
      const marker = markerRef.current;
      if (marker) {
        rotationAngle && marker.setRotationAngle(rotationAngle);
        rotationOrigin && marker.setRotationOrigin(rotationOrigin);
      }
    }, [rotationAngle, rotationOrigin]);

    return (
      <Marker ref={markerRef} {...props}>
        {children}
      </Marker>
    );
  }
);
RotatedMarker.displayName = 'RotatedMarker';
