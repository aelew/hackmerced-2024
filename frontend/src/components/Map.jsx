import {
    AdvancedMarker,
    ControlPosition,
    Map as GoogleMap,
    InfoWindow,
    MapControl,
    Marker,
    useAdvancedMarkerRef,
    useMap
  } from '@vis.gl/react-google-maps';
  import { useEffect, useState } from 'react';
  
  import { useAppContext } from '../AppContext';
  
  const defaultPosition = {
    lat: 37.3647,
    lng: -120.4241
  };
  
  export default function Map() {
    const map = useMap();
    const { place } = useAppContext();
  
    // for our UC merced marker
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
          {place && (
            <div className="place-card">
              <h1>{place.name}</h1>
              <p>{place.formatted_address}</p>
            </div>
          )}
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
