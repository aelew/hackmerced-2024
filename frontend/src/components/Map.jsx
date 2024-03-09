import { Map as GoogleMap, Marker } from '@vis.gl/react-google-maps';

const center = {
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
  // const mapRef = useRef(null);

  // const onLoad = useCallback(
  //   (map) => {
  //     mapRef.current = map;
  //     const bounds = new window.google.maps.LatLngBounds(center);
  //     map.fitBounds(bounds);
  //     setMap(map);
  //   },
  //   [setMap]
  // );

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

  // const onUnmount = useCallback(() => {
  //   setMap(null);
  // }, [setMap]);

  // if (!isLoaded) {
  //   return <p>Loading map...</p>;
  // }

  return (
    <GoogleMap
      defaultCenter={center}
      defaultZoom={10}
      style={{
        width: '100%',
        height: '80vh',
        borderRadius: '0.5rem'
      }}
    >
      {/* Child components, such as markers, info windows, etc. go in here */}
      <Marker position={center} />
    </GoogleMap>
  );
}
