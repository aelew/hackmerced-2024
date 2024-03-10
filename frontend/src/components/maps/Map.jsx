import {
  AdvancedMarker,
  ControlPosition,
  Map as GoogleMap,
  InfoWindow,
  MapControl,
  Marker,
  useAdvancedMarkerRef
} from '@vis.gl/react-google-maps';
import { useState } from 'react';

import PlaceCard from '../PlaceCard';

const defaultPosition = {
  lat: 37.3647,
  lng: -120.4241
};

export default function Map() {
  const [infowindowOpen, setInfowindowOpen] = useState(true);
  const [markerRef, marker] = useAdvancedMarkerRef();
  return (
    <div className="map-container">
      <GoogleMap
        mapId="e539c9b65757ae2"
        className="map"
        defaultZoom={10}
        fullscreenControl={false}
        streetViewControl={false}
        defaultCenter={defaultPosition}
      >
        {/* Child components, such as markers, info windows, etc. go in here */}
        <Marker position={defaultPosition} />
        <MapControl position={ControlPosition.TOP_RIGHT}>
          <PlaceCard />
        </MapControl>
        <AdvancedMarker
          ref={markerRef}
          position={defaultPosition}
          onClick={() => setInfowindowOpen(true)}
        />
        {infowindowOpen && (
          <InfoWindow
            anchor={marker}
            onCloseClick={() => setInfowindowOpen(false)}
          >
            UC Merced
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
}
