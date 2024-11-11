import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

/**
 * 구글 지도에 마커를 표시하는 컴포넌트
 * @param mapStyles
 * @param zoom {number}
 * @param center { {lat: number, lng: number} }
 * @param markers {Array<{lat: number, lng: number, label: string | undefined}>}
 */
export const GoogleMarkerMap = ({ mapStyles, zoom = 15, center, markers }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAxIUPQ0MCsIeMXq3z4ZAGG9QQURAOyy_Y',
  });

  if (!isLoaded) return null;

  return (
    <GoogleMap mapContainerStyle={mapStyles} center={center} zoom={zoom}>
      {markers.map((marker) => (
        <Marker
          key={`${marker.lat}${marker.lng}`}
          position={marker}
          label={marker.label}
        />
      ))}
    </GoogleMap>
  );
};
