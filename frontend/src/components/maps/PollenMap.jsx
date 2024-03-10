import { useMap } from '@vis.gl/react-google-maps';
import { useEffect } from 'react';

import Map from './Map';

export default function PollenMap() {
  const map = useMap();
  useEffect(() => {
    if (map) {
      const pollenHeatmap = new window.google.maps.ImageMapType({
        name: 'Pollen Heatmap',
        opacity: 0.25,
        tileSize: new window.google.maps.Size(256, 256),
        getTileUrl: (coord, zoom) =>
          `https://pollen.googleapis.com/v1/mapTypes/TREE_UPI/heatmapTiles/${zoom}/${coord.x}/${coord.y}?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`
      });

      map.overlayMapTypes.push(pollenHeatmap);
    }
  }, [map]);
  return <Map />;
}
