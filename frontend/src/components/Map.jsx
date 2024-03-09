import {
  AdvancedMarker,
  Map as GoogleMap,
  InfoWindow,
  Marker,
  useAdvancedMarkerRef
} from '@vis.gl/react-google-maps';
import { useState } from 'react';

import { useAppContext } from '../AppContext';

const defaultPosition = {
  lat: 37.3647,
  lng: -120.4241
};

const createTileUrlFunction = () => {
  return (coord, zoom) => {
    const normalizedCoord = getNormalizedCoord(coord, zoom);
    if (!normalizedCoord) {
      return null;
    }
    const bound = Math.pow(2, zoom);
    return `https://pollen.googleapis.com/v1/mapTypes/TREE_UPI/heatmapTiles/${1}/${1}/${1}?key=AIzaSyCe5jXBDvA9rj5X-m0T11rH2rtylLRdZH0`;
  };
};

// Normalizes the coordinates for tiles that wrap around the globe
const getNormalizedCoord = (coord, zoom) => {
  const y = coord.y;
  let x = coord.x;
  const tileRange = 1 << zoom;

  // Wrap tiles horizontally
  if (x < 0 || x >= tileRange) {
    x = ((x % tileRange) + tileRange) % tileRange;
  }

  if (y < 0 || y >= tileRange) {
    return null;
  }

  return { x, y };
};

export default function Map() {
  const { place } = useAppContext();

  // for our UC merced marker
  const [infowindowOpen, setInfowindowOpen] = useState(true);
  const [markerRef, marker] = useAdvancedMarkerRef();

  // useEffect(() => {
  //   if (isLoaded && map) {
  //     const tileUrlFunction = createTileUrlFunction();
  //     const coordMapType = new window.google.maps.ImageMapType({
  //       getTileUrl: tileUrlFunction,
  //       tileSize: new window.google.maps.Size(256, 256)
  //     });

  //     map.overlayMapTypes.push(coordMapType);
  //   }
  // }, [isLoaded, map]);

  return (
    <div className="map-container">
      <GoogleMap
        mapId="e539c9b65757ae2"
        className="map"
        defaultZoom={10}
        defaultCenter={defaultPosition}
      >
        {/* Child components, such as markers, info windows, etc. go in here */}
        <Marker position={defaultPosition} />
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
      {place && (
        <div className="place-card">
          <h1>{place.name}</h1>
          <p>{place.formatted_address}</p>
        </div>
      )}
    </div>
  );
}
