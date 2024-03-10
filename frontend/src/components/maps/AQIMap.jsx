import { useMap } from '@vis.gl/react-google-maps';
import { useEffect } from 'react';

import Map from './Map';

export default function AQIMap() {
  const map = useMap();
  useEffect(() => {
    if (map) {
      const AQIHeatmap = new window.google.maps.ImageMapType({
        name: 'Air Quality Index Heat Map',
        opacity: 0.5,
        tileSize: new window.google.maps.Size(256, 256),
        getTileUrl: (coord, zoom) =>
          `https://airquality.googleapis.com/v1/mapTypes/US_AQI/heatmapTiles/${zoom}/${coord.x}/${coord.y}?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`
      });

      map.overlayMapTypes.push(AQIHeatmap);
    }
  }, [map]);
  return <Map />;
}
